/**
 * @description allowed
 */
type allowed = 'allowed';

/**
 * @description dismissed
 */
type dismissed = 'dismissed';

/**
 * @description split_decision
 */
type split_decision = 'split_decision';

/**
 * @description withdrawn
 */
type withdrawn = 'withdrawn';

/**
 * @id #AppealDecision
 * @description Types of comments
 */
export type AppealDecision = allowed | dismissed | split_decision | withdrawn;
