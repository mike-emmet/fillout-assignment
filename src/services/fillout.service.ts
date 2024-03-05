import axios from 'axios';
import { FormResponsePage, FormResponseParams } from '../typescript/fillout';
import { FormResponse } from '../typescript/base';

export const getPaginatedFormResponse = async (formId: string, params: FormResponseParams) : Promise<FormResponsePage> => {
  const response = await axios.get(`${process.env.FILLOUT_API_BASE_URL}/v1/api/forms/${formId}/submissions`, {
    headers: {
        Authorization: `Bearer ${process.env.FILLOUT_API_KEY}`
    },
    params: { ... params }
  });
  return response.data;
}

export const getAllFormResponse = async (formId: string, params: FormResponseParams): Promise<FormResponse[]> => {
  let result: FormResponse[] = [];
  const { responses, totalResponses } = await getPaginatedFormResponse(formId, {...params, limit: 150, offset: 0});
  result = result.concat(responses);

  if ( responses.length < totalResponses ) {
    const { responses } = await getPaginatedFormResponse(formId, {...params, limit: totalResponses - 150, offset: 150});
    result = result.concat(responses);
  }
  return result;
}