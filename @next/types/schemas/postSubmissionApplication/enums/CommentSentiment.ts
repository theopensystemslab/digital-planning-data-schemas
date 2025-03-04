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
 * @description Accepted, subject to conditions
 */
type AcceptedConditions = 'Accepted, subject to conditions';

/**
 * @description Accepted
 */
type Accepted = 'Accepted';

/**
 * @id #SpecialistCommentSentiment
 * @description Types of comments
 */
export type SpecialistCommentSentiment = Accepted | AcceptedConditions;
