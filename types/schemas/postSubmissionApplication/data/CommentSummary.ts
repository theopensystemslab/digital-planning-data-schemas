/**
 * Shows the summary of comments on a submission
 */

import {
  CommentSentiment,
  SpecialistCommentSentiment,
} from '../enums/CommentSentiment';

interface CommentSummaryBase {
  /**
   * How many comments have there been
   */
  totalComments: number;
}

/**
 * @id #PublicCommentsSummary
 */
export interface PublicCommentSummary extends CommentSummaryBase {
  /**
   * Comment number broken down by sentiment count
   */
  sentiment: Record<CommentSentiment, number>;
}

/**
 * @id #SpecialistCommentsSummary
 */
export interface SpecialistCommentSummary extends CommentSummaryBase {
  /**
   * The total number of specialists consulted
   */
  totalConsulted: number;
  /**
   * Comment number broken down by sentiment count
   */
  sentiment: Record<SpecialistCommentSentiment, number>;
}
