/**
 * @description returned
 * An application is only returned if it is invalid
 */
type returned = 'returned';

/**
 * @description withdrawn
 * An application can be withdrawn after submitssion and until a decision is made
 */
type withdrawn = 'withdrawn';

/**
 * @description determined
 * An application is determined if it has a decision, even if appeal is pending
 */
type determined = 'determined';

/**
 * @description undetermined
 * An application is undetermined if it has no decision yet, it can be in consultation or validation and be undetermined
 */
type undetermined = 'undetermined';

/**
 * @id #ApplicationStatus
 * @description Stages of the planning application process
 */
export type ApplicationStatus =
  | returned
  | withdrawn
  | determined
  | undetermined;

/**
 * Export a record of application statuses
 * @example
 * {
 *   returned: 'Returned',
 *   withdrawn: 'Withdrawn',
 *   determined: 'Determined',
 *   undetermined: 'Undetermined',
 * }
 */
export const applicationStatus: Record<ApplicationStatus, string> = {
  returned: 'Returned',
  withdrawn: 'Withdrawn',
  determined: 'Determined',
  undetermined: 'Undetermined',
};
