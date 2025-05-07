/**
 * Shows the summary of comments on a submission
 */

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
  sentiment: {
    supportive: number;
    objection: number;
    neutral: number;
  };
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
  sentiment: {
    approved: number;
    amendmentsNeeded: number;
    objected: number;
  };
}
