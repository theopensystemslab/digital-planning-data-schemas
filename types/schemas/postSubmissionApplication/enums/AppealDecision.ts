/**
 * @description allowed
 */
type allowed = 'allowed';

/**
 * @description dismissed
 */
type dismissed = 'dismissed';

/**
 * @description splitDecision
 */
type splitDecision = 'splitDecision';

/**
 * @description withdrawn
 */
type withdrawn = 'withdrawn';

/**
 * @id #AppealDecision
 * @description Types of comments
 */
export type AppealDecision = allowed | dismissed | splitDecision | withdrawn;
