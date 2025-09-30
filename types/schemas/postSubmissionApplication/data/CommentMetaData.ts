import {DateTime} from '../../../shared/utils';

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
  validatedAt?: DateTime;
  /**
   * When comment was made public
   */
  publishedAt?: DateTime;
}
