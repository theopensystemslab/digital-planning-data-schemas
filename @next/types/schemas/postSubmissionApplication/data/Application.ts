import {DateTime} from '../../../shared/utils';
import {PrimaryApplicationType} from '../../prototypeApplication/enums/ApplicationType';
import {ApplicationStatus} from '../enums/ApplicationStatus';
import {ProcessStage} from '../enums/ProcessStage';

type ApplicationBase = {
  /**
   * Unique reference for the application from start to finish
   * @todo this needs to be added into other application schemas
   */
  reference: string;
  /**
   * The current stage the application is at
   * Additional contextual information can be found in the rest of the application
   * @todo certain application types do not have a consultation phase
   */
  stage: ProcessStage;
  /**
   * What is the status of the application
   * Additional contextual information can be found in the rest of the application
   */
  status: ApplicationStatus;
  /**
   * Applications can be withdrawn by the applicant at any time before a decision is made. This is the date the appeal was withdrawn.
   */
  withdrawnAt?: DateTime;
  /**
   * The reason the application was withdrawn
   */
  withdrawnReason?: string;
};

/**
 * TypeMap of PrimaryApplicationTypes to their specific Application models
 */
type ApplicationVariants = {};

/**
 * @internal Conditional type to return a specific or generic Property model, based on PrimaryApplicationType
 */
export type Application<TPrimary extends PrimaryApplicationType> =
  TPrimary extends keyof ApplicationVariants
    ? ApplicationVariants[TPrimary]
    : ApplicationBase;
