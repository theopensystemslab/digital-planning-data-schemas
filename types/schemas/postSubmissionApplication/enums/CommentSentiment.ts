/**
 * @description Objection comment
 */
type Objection = 'objection';

/**
 * @description Neutral comment
 */
type Neutral = 'neutral';

/**
 * @description Supportive comment
 */
type Supportive = 'supportive';

/**
 * @id #CommentSentiment
 * @description Types of comments
 */
export type CommentSentiment = Objection | Neutral | Supportive;

/**
 * Export a record of comment sentiments
 * @example
 * {
 *   objection: 'Objection',
 *   neutral: 'Neutral',
 *   supportive: 'Supportive',
 * }
 */
export const commentSentiment: Record<CommentSentiment, string> = {
  objection: 'Objection',
  neutral: 'Neutral',
  supportive: 'Supportive',
};

/**
 * @description Approved
 */
type Approved = 'approved';

/**
 * @description Amendments needed
 */
type AmendmentsNeeded = 'amendmentsNeeded';

/**
 * @description Objected
 */
type Objected = 'objected';

/**
 * @id #SpecialistCommentSentiment
 * @description Types of comments
 *
 * @TODO this will move to something like these in the future "Amendments needed before recommendation can be made", "Accepted", "Accepted, subject to conditions", "Objected", "No comment"
 */
export type SpecialistCommentSentiment = Approved | AmendmentsNeeded | Objected;

/**
 * Export a record of specialist comment sentiments
 * @example
 * {
 *   approved: 'Approved',
 *   amendmentsNeeded: 'Amendments needed',
 *   objected: 'Objected',
 * }
 */
export const specialistCommentSentiment: Record<
  SpecialistCommentSentiment,
  string
> = {
  approved: 'Approved',
  amendmentsNeeded: 'Amendments needed',
  objected: 'Objected',
};
