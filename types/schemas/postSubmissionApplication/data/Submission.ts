import {DateTime} from '../../../shared/utils';
import {ApplicationType} from '../../prototypeApplication/enums/ApplicationType';

type SubmissionBase = {
  /**
   * ISO 8601
   * DateTime
   * This is the date which the application was submitted, either through PlanX or for example the date written on the envelope if it was posted.
   */
  submittedAt: DateTime;
};

/**
 * TypeMap of granular application types to their specific Submission models
 */
type SubmissionVariants = {};

/**
 * @internal Conditional type to return a specific or generic Property model
 */
export type Submission<T extends ApplicationType> =
  T extends keyof SubmissionVariants ? SubmissionVariants[T] : SubmissionBase;
