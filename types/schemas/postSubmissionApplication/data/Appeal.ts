import {Date, DateTime} from '../../../shared/utils';
import {PrimaryApplicationType} from '../../prototypeApplication/enums/ApplicationType';
import {AppealDecision} from '../enums/AppealDecision';
import {PostSubmissionFile} from './File';

type AppealBase = {
  /**
   * Reason for appeal
   */
  reason: string;
  /**
   * YYYY-MM-DD
   * Follows convention of if date in the name it is YYYY-MM-DD
   * The date an appeal was lodged with the planning inspectorate. At this stage the appeal still needs to be checked that it valid.
   */
  lodgedDate: Date;

  /**
   * YYYY-MM-DD
   * Follows convention of if date in the name it is YYYY-MM-DD
   * The date the appeal was confirmed to be valid. This appeal can now be examined in detail by the planning inspectorate.
   */
  validatedDate?: Date;

  /**
   * YYYY-MM-DD
   * Follows convention of if date in the name it is YYYY-MM-DD
   * The date the planning inspectorate began considering the appeal.
   */
  startedDate?: Date;

  /**
   * YYYY-MM-DD
   * Follows convention of if date in the name it is YYYY-MM-DD
   * The date the planning inspectorate published their decision about the appeal. This decision is final.
   */
  decisionDate?: Date;

  /**
   * The decision made by the planning inspectorate
   */
  decision?: AppealDecision;

  /**
   * Date the appeal was withdrawn
   */
  withdrawnAt?: DateTime;
  /**
   * The reason the appeal was withdrawn
   */
  withdrawnReason?: string;

  /**
   *
   * Any files returned from PINS as part of the appeal process
   * @todo Will documents always be returned?
   * @todo is there a max limit - should they live here or with all the other documents?
   */
  files?: PostSubmissionFile[];
};

/**
 * TypeMap of PrimaryApplicationTypes to their specific Appeal models
 */
type AppealVariants = {};

/**
 * @internal Conditional type to return a specific or generic Property model, based on PrimaryApplicationType
 */
export type Appeal<TPrimary extends PrimaryApplicationType> =
  TPrimary extends keyof AppealVariants ? AppealVariants[TPrimary] : AppealBase;
