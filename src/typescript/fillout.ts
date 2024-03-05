import { FormResponse } from "./base";

export interface FormResponseParams {
  limit?: number;
  afterDate?: string;
  beforeDate?: string;
  offset?: number;
  status?: "in_progress" | "finished";
  includeEditLink?: boolean;
  sort?: "asc" | "desc";
}

export interface FormResponsePage {
  responses: FormResponse[];
  pageCount: number;
  totalResponses: number;
}