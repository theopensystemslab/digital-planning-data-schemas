import {URL} from '../../shared/utils';

/**
 * @id #Responses
 * @description The ordered list of questions, answers, and their metadata for the application
 */
export type Responses = QuestionAndResponses[];

export interface QuestionMetaData {
  autoAnswered?: boolean;
  policyRefs?: Array<{
    text: string;
    url?: URL;
  }>;
  sectionName?: string;
}

export interface ResponseMetaData {
  flags?: Array<string>; // @todo connect to result/flags enum, is this actually a list?
  options?: Array<string> | Array<Response>;
}

export interface Response {
  value: string;
  metadata?: ResponseMetaData;
}

export interface QuestionAndResponses {
  question: string;
  responses: Array<Response> | string;
  metadata?: QuestionMetaData;
}
