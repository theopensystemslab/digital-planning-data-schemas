/**
 *
 */

import {PlanningConstraint} from '../../../shared/Constraints';
import {DateTime} from '../../../shared/utils';
import {
  CommentSentiment,
  SpecialistCommentSentiment,
} from '../enums/CommentSentiment';
import {CommentTopic} from '../enums/CommentTopic';
import {PublicCommentSummary, SpecialistCommentSummary} from './CommentSummary';
import {PostSubmissionFile} from './File';

/**
 * @id #PublicComments
 * @description The ordered list of public comments any associated metadata
 */
export type PublicComments = {
  /**
   * Summarises the public comments
   */
  summary: PublicCommentSummary;
  /**
   * The ordered list of public comments
   */
  comments: PublicComment[];
};

/**
 * @id #PublicComment
 * @description A public comment and any associated metadata
 */
export interface PublicComment {
  /**
   * Unique identifier for the comment
   */
  id: number;
  /**
   * What is the sentiment of the comment?
   */
  sentiment: CommentSentiment;
  /**
   * The comment itself, either a single comment or a list of comments divided by topic
   */
  comment: TopicAndComments[] | string;
  /**
   * The author of the comment
   */
  author: PublicCommentAuthor;
  /**
   * Further information about the comment
   */
  metadata?: CommentMetaData;
}

/**
 * @id #PublicCommentAuthor
 * @description The author of a public comment
 */
export interface PublicCommentAuthor {
  /**
   * The author of the comment
   */
  name: {
    /**
     * The name of the author of the comment in the format 'First Last'
     */
    singleLine: string;
  };
}

/**
 * @id #TopicAndComments
 * @description A comment on an application, divided by topic
 */
export interface TopicAndComments {
  /**
   * The topic of the comment
   */
  topic: CommentTopic;
  /**
   * What question was asked
   * Follows convention of Responses
   */
  question: string;
  /**
   * The comment about the topic
   */
  comment: string;
}

/**
 * @id #CommentMetaData
 * @description Metadata about a comment
 */
export interface CommentMetaData {
  /**
   * When comment was submitted
   */
  submittedAt: DateTime;
  /**
   * When comment was validated
   */
  validAt: DateTime;
  /**
   * When comment was made public
   */
  publishedAt: DateTime;
}

/**
 * @id #SpecialistComments
 * @description The ordered list of specialist comments any associated metadata
 */
export type SpecialistComments = {
  /**
   * Summarises the specialist comments
   */
  summary: SpecialistCommentSummary;
  /**
   * The list of specialists and their comments
   */
  comments: Specialist[];
};

/**
 * @id #Specialist
 * @description Details of a specialist and their comments on an application
 */
export interface Specialist {
  /**
   * unique identifier for the specialist
   */
  id: number;
  /**
   * What is the specialists organisation or specialism?
   */
  organisationSpecialism: string;
  /**
   * What is their job title?
   */
  jobTitle?: string;
  /**
   * What is the reason for asking this specialist to comment?
   */
  reason?: 'constraint' | string;
  /**
   * if reason is constraint, what are the constraints?
   */
  constraints?: PlanningConstraint[];
  /**
   * the first date the specialist was consulted?
   */
  firstConsultedAt: DateTime;
  /**
   * List of comments made by the specialist in order of latest first
   */
  comments: SpecialistComment[];
}

/**
 * @id #SpecialistComment
 * @description A specialist comment and any associated metadata
 */
export interface SpecialistComment {
  /**
   * Unique identifier for the comment
   */
  id: number;
  /**
   * What is the sentiment of the comment?
   */
  sentiment: SpecialistCommentSentiment;
  /**
   * The comment itself
   */
  comment: string;
  /**
   * Did the author include any files with the comment?
   */
  files?: PostSubmissionFile[];
  /**
   * Further information about the comment
   */
  metadata?: CommentMetaData;
}
