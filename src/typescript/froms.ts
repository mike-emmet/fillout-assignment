export type QuestionType = 
  'DatePicker' | 
  'LongAnswer' | 
  'ShortAnswer' | 
  'EmailInput' | 
  'MultipleChoice' | 
  'NumberInput';

export interface Question {
  id: string;
  name: string;
  type: QuestionType;
  value: string | number;
}
