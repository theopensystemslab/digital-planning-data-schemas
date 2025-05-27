/**
 * @description Allowed
 */
type allowed = 'allowed';

/**
 * @description Dismissed
 */
type dismissed = 'dismissed';

/**
 * @description Split decision
 */
type splitDecision = 'splitDecision';

/**
 * @description Withdrawn
 */
type withdrawn = 'withdrawn';

/**
 * @id #AppealDecision
 * @description Types of comments
 */
export type AppealDecision = allowed | dismissed | splitDecision | withdrawn;

/**
 * Export a record of appeal decisions
 * @example
 * {
 *   allowed: 'Allowed',
 *   dismissed: 'Dismissed',
 *   splitDecision: 'Split decision',
 *   withdrawn: 'Withdrawn',
 * }
 */
export const appealDecision: Record<AppealDecision, string> = {
  allowed: 'Allowed',
  dismissed: 'Dismissed',
  splitDecision: 'Split decision',
  withdrawn: 'Withdrawn',
};
