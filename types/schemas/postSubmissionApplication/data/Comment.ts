import {PublicCommentSummary, SpecialistCommentSummary} from './CommentSummary';
import {PublicComment, PublicCommentRedacted} from './PublicComment';
import {Specialist, SpecialistRedacted} from './SpecialistComment';

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
 * @id #PublicCommentsRedacted
 * @description The ordered list of public comments any associated metadata
 */
export type PublicCommentsRedacted = {
  /**
   * Summarises the public comments
   */
  summary: PublicCommentSummary;
  /**
   * The ordered list of public comments
   */
  comments: PublicCommentRedacted[];
};

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
 * @id #SpecialistCommentsRedacted
 * @description The ordered list of specialist comments any associated metadata
 */
export type SpecialistCommentsRedacted = {
  /**
   * Summarises the specialist comments
   */
  summary: SpecialistCommentSummary;
  /**
   * The list of specialists and their comments
   */
  comments: SpecialistRedacted[];
};
