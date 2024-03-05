import { Question } from "./froms";
import { parseDate, parseNumber, parseString } from '../utils/parsers';

export interface FilterClauseType {
  id: string;
  condition: 'equals' | 'does_not_equal' | 'greater_than' | 'less_than';
  value: number | string;
}

export type FiltersTypeParam = FilterClauseType[];

export interface FormResponse {
  questions: Question[];
  submissionId: string;
  submissionTime: string;
  [key: string]: any;
}

export type Parsers = typeof parseDate | typeof parseNumber | typeof parseString;