import {URL} from './utils';

/**
 * @id #Responses
 * @description The ordered list of questions, answers, and their metadata for the application
 */
export type Responses = QuestionAndResponses[];

export type QuestionTags = 'Sensitive data';

export interface QuestionMetaData {
  autoAnswered?: boolean;
  policyRefs?: Array<{
    text: string;
    url?: URL;
  }>;
  sectionName?: string;
  id?: string; // data field 'fn' or nodeId
  tags?: Array<QuestionTags>;
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
