import { Request, Response } from 'express';
import { getAllFormResponse } from '../services/fillout.service';
import { FiltersTypeParam, FormResponse } from '../typescript/base';
import { DEFAULT_LIMIT } from '../constant';
import { questionDataParser } from '../utils/parsers';
export const getFormResponse =  async (req: Request, res: Response) => {
  try {

    const responses = await getAllFormResponse(req.params.formId, req.query);

    const filters: FiltersTypeParam = JSON.parse(req.query.filters as string || '[]');
    const filteredResponses = filterResponses(responses, filters);

    const limit = req.query.limit ? parseInt(req.query.limit as string) : DEFAULT_LIMIT;
    const offset = req.query.offset ? parseInt(req.query.offset as string) : 0;
    const paginatedResponses = filteredResponses.slice(offset, offset + limit);

    res.json({
        responses: paginatedResponses,
        totalResponses: filteredResponses.length,
        pageCount: Math.ceil(filteredResponses.length / limit)
    });

  } catch (error: any) {
    const message = error?.response?.data || error.message;
    console.error('Error fetching responses:', message);
    res.status(error.response?.status || 500).send(message);
  }
}

const filterResponses = (responses: FormResponse[], filters: FiltersTypeParam) : FormResponse[] => {
  return responses.filter((responseData: FormResponse) => {
    for (const filter of filters) {
      const question = responseData.questions.find(question => question.id === filter.id);
      if (!question) {
        return false;
      }
      const questionValue = questionDataParser[question.type](question.value as string);
      const filterValue = questionDataParser[question.type](filter.value as string);
      switch (filter.condition) {
        case 'equals':
          if ( questionValue !== filterValue) {
              return false;
          }
          break;
        case 'does_not_equal':
          if ( questionValue === filterValue) {
              return false;
          }
          break;
        case 'greater_than':
          if (questionValue <= filterValue) {
              return false;
          }
          break;
        case 'less_than':
          if (questionValue >= filterValue) {
              return false;
          }
          break;
        default:
          return false;
      }
    }
    return true;
  });
}