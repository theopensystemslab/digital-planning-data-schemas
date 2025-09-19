import {DateTime} from '../../../shared/utils';
import {ApplicationType} from '../../prototypeApplication/enums/ApplicationType';

type ValidationBase = {
  /**
   * ISO 8601
   * DateTime
   * This is the date that the application is received by the back office system. It may not be the date it was submitted, if there have been delays in the submission process.
   */
  receivedAt: DateTime;
  /**
   * ISO 8601
   * DateTime
   * This is the date that the application was validated. Usually this will be the same as the received date, but sometimes applications are submitted incorrectly, and need correcting to be valid.
   * Having a validatedAt date doesn't neccearily mean the application is valid, it just means it has been checked.
   * This could also be considered the return date, as it is the date the application is returned to the applicant if it is invalid.
   */
  validatedAt?: DateTime;
  /**
   * This determines whether or not an application was found to be valid
   */
  isValid?: boolean;
};

/**
 * TypeMap of granular application types to their specific Validation models
 */
type ValidationVariants = {};

/**
 * @internal Conditional type to return a specific or generic Property model
 */
export type Validation<T extends ApplicationType> =
  T extends keyof ValidationVariants ? ValidationVariants[T] : ValidationBase;
