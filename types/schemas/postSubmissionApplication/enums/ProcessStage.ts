/**
 * @description Submission
 */
type submission = 'submission';

/**
 * @description Validation
 */
type validation = 'validation';

/**
 * @description Consultation
 */
type consultation = 'consultation';

/**
 * @description Assessment
 * An application is in the assessment stage regardless of a decision being made
 */
type assessment = 'assessment';

/**
 * @description Appeal
 */
type appeal = 'appeal';

/**
 * @description High court appeal
 */
type highCourtAppeal = 'highCourtAppeal';

/**
 * @id #ProcessStage
 * @description Stages of the planning application process
 */
export type ProcessStage =
  | submission
  | validation
  | consultation
  | assessment
  | appeal
  | highCourtAppeal;

/**
 * Export a record of process stages
 * @example
 * {
 *   submission: 'Submission',
 *   validation: 'Validation',
 *   consultation: 'Consultation',
 *   assessment: 'Assessment',
 *   appeal: 'Appeal',
 *   highCourtAppeal: 'High court appeal',
 * }
 */
export const processStage: Record<ProcessStage, string> = {
  submission: 'Submission',
  validation: 'Validation',
  consultation: 'Consultation',
  assessment: 'Assessment',
  appeal: 'Appeal',
  highCourtAppeal: 'High court appeal',
};
