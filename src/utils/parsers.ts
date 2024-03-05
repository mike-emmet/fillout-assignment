import { Parsers } from "./../typescript/base";
import { QuestionType } from "./../typescript/froms";

export const parseNumber = (str: string): Number => parseInt(str);
export const parseString = (str: string): string => str;
export const parseDate = (str: string): Date => new Date(str);


export const questionDataParser: { [key in QuestionType] : Parsers} = {
  DatePicker: parseDate,
  NumberInput: parseNumber,
  ShortAnswer: parseString,
  LongAnswer: parseString,
  EmailInput: parseString,
  MultipleChoice: parseString,
}