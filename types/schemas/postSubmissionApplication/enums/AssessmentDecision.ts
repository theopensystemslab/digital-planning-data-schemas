/**
 * @description Granted
 */
type granted = 'granted';

/**
 * @description Refused
 */
type refused = 'refused';

/**
 * @id #AssessmentDecision
 * @description Types of comments
 */
export type AssessmentDecision = granted | refused;

/**
 * Export a record of assessment decisions
 * @example
 * {
 *   granted: 'Granted',
 *   refused: 'Refused',
 * }
 */
export const assessmentDecision: Record<AssessmentDecision, string> = {
  granted: 'Granted',
  refused: 'Refused',
};
