import {PlanningConstraint} from '../../../shared/Constraints';
import {DateTime} from '../../../shared/utils';
import {SpecialistCommentSentiment} from '../enums/CommentSentiment';
import {CommentMetaData} from './Comment';
import {PostSubmissionFile} from './File';

/**
 * @internal All the required fields for a public or private specialist
 */
interface SpecialistBase {
  /**
   * unique identifier for the specialist
   */
  id: string;
  /**
   * What is the specialists organisation or specialism?
   */
  organisationSpecialism?: string;
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
   * the first date the specialist was consulted, this may be
   * undefined if the specialist has not yet been consulted
   * but has been setup in the system
   */
  firstConsultedAt?: DateTime;
}

/**
 * @id #Specialist
 * @description Details of a specialist and their comments on an application
 */
export interface Specialist extends SpecialistBase {
  /**
   * List of comments made by the specialist in order of latest first
   */
  comments?: SpecialistComment[];
}

/**
 * @id #SpecialistRedacted
 * @description Details of a specialist and their comments on an application
 */
export interface SpecialistRedacted extends SpecialistBase {
  /**
   * List of comments made by the specialist in order of latest first
   */
  comments: SpecialistCommentRedacted[];
}

/**
 * @internal All the required fields for a public or private specialist comment
 */
interface SpecialistCommentBase {
  /**
   * Unique identifier for the comment
   */
  id: string;
  /**
   * What is the sentiment of the comment?
   */
  sentiment: SpecialistCommentSentiment;
  /**
   * Did the author include any files with the comment?
   */
  files?: PostSubmissionFile[];
  /**
   * Further information about the comment
   */
  metadata: CommentMetaData;
}

/**
 * @id #SpecialistComment
 * @description A specialist comment and any associated metadata
 */
export interface SpecialistComment extends SpecialistCommentBase {
  /**
   * The comment itself
   */
  comment: string;
  /**
   * The redacted version of the comment
   */
  commentRedacted?: string;
}

/**
 * @id #SpecialistCommentRedacted
 * @description A public comment and any associated metadata, excluding sensitive information
 */
export interface SpecialistCommentRedacted extends SpecialistCommentBase {
  /**
   * The redacted version of the comment
   */
  commentRedacted: string;
  /**
   * All metadata fields are required in the redacted version
   */
  metadata: Required<CommentMetaData>;
}
