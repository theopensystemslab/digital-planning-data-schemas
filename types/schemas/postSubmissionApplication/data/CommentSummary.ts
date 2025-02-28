/**
 * Shows the summary of comments on a submission
 */

interface CommentSummaryBase {
  /**
   * How many comments have there been
   */
  totalComments: number;
  /**
   * Comment numbet broken down by sentiment count
   */
  sentiment: {
    supportive: number;
    objection: number;
    neutral: number;
  };
}

/**
 * @id #PublicCommentsSummary
 */
export type PublicCommentSummary = CommentSummaryBase;

/**
 * @id #SpecialistCommentsSummary
 */
export interface SpecialistCommentSummary extends CommentSummaryBase {
  /**
   * The total number of specialists consulted
   */
  totalConsulted: number;
}
