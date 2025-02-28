import {DateTime} from '../../../shared/utils';
import {PrimaryApplicationType} from '../../prototypeApplication/enums/ApplicationType';

type SubmissionBase = {
  /**
   * ISO 8601
   * DateTime
   * This is the date which the application was submitted, either through PlanX or for example the date written on the envelope if it was posted.
   */
  submittedAt: DateTime;
};

/**
 * TypeMap of PrimaryApplicationTypes to their specific Submission models
 */
type SubmissionVariants = {};

/**
 * @internal Conditional type to return a specific or generic Property model, based on PrimaryApplicationType
 */
export type Submission<TPrimary extends PrimaryApplicationType> =
  TPrimary extends keyof SubmissionVariants
    ? SubmissionVariants[TPrimary]
    : SubmissionBase;
