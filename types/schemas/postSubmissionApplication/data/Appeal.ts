import {Date} from '../../../shared/utils';
import {ApplicationType} from '../../prototypeApplication/enums/ApplicationType';
import {AppealDecision} from '../enums/AppealDecision';
import {PostSubmissionFile} from './File';

/**
 * This schema represents the appeal process for a planning application currently based on the implentation in BOPS and DPR
 * @todo We need to confirm if withdrawn is a decision or a status
 * Status: Appeal lapsed https://acp.planninginspectorate.gov.uk/ViewCase.aspx?CaseID=3174076&CoID=0
 * Status: Appeal withdrawn https://acp.planninginspectorate.gov.uk/ViewCase.aspx?CaseID=3174654&CoID=0
 * Status: Complete: Notice Withdrawn https://acp.planninginspectorate.gov.uk/ViewCase.aspx?CaseID=3062094&CoID=0
 */
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
   * @todo removed until we have more information on if withdrawn is a status or not for now use decision
   */
  // withdrawnAt?: DateTime;

  /**
   *
   * Any files returned from PINS as part of the appeal process
   * @todo Will documents always be returned?
   * @todo is there a max limit - should they live here or with all the other documents?
   */
  files?: PostSubmissionFile[];
};

/**
 * TypeMap of granular application types to their specific Appeal models
 */
type AppealVariants = {};

/**
 * @internal Conditional type to return a specific or generic Property model
 */
export type Appeal<T extends ApplicationType> = T extends keyof AppealVariants
  ? AppealVariants[T]
  : AppealBase;
