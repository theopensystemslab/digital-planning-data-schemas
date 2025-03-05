import {Date} from '../../../shared/utils';
import {PrimaryApplicationType} from '../../prototypeApplication/enums/ApplicationType';
import {AssessmentDecision} from '../enums/AssessmentDecision';

/**
 * Council decision is planningOfficerDecision || committeeDecision
 * Council decision date is planningOfficerDecisionDate || committeeDecisionDate
 */
export type AssessmentBase = {
  /**
   * The decision has to be made before this date if not an appeal can be made on the grounds of non-determination
   * @todo After this the determination can be shown as "Non-Determination: would have granted Non-Determination: would have refused" by some councils do we need to show this or will decisionDate being after expiryDate be enough?
   */
  expiryDate: Date;
};

export type PostSubmissionAssessment = AssessmentBase & {
  /**
   * This is the decision made by planning officer(s) in a LPA
   */
  planningOfficerDecision?: AssessmentDecision;
  /**
   * YYYY-MM-DD
   * This is the date the decision was made by planning officer(s) in a LPA
   */
  planningOfficerDecisionDate?: Date;

  /**
   * This is the recommendation made by planning officer(s) to the committee
   * This is an alternative to a decision - either planningOfficerDecision or planningOfficerRecommendation can be set not both
   */
  planningOfficerRecommendation?: AssessmentDecision;
  /**
   * YYYY-MM-DD
   * Follows convention of if date in the name it is YYYY-MM-DD
   * the date that the application went to committee it is also the date that planningOfficerRecommendation was set
   */
  committeeSentDate?: Date;
  /**
   * If an application went to committee what was their decision
   *
   */
  committeeDecision?: AssessmentDecision;
  /**
   * YYYY-MM-DD
   * The date the committee made their decision
   */
  committeeDecisionDate?: Date;
  /**
   * The url to the decision notice
   * A decision notice is issued when an application is determined or withdrawn
   *
   */
  decisionNotice?: {
    url: string;
  };
};

export type PriorApprovalAssessmentBase = PostSubmissionAssessment & {
  /**
   * Only applies for prior approval applications so we can work out
   * 'Prior approval required and approved', 'Prior approval not required', 'Prior approval required and refused'
   */
  priorApprovalRequired: boolean;
};

export type PriorApprovalAssessment =
  | AssessmentBase
  | PriorApprovalAssessmentBase;

/**
 * TypeMap of PrimaryApplicationTypes to their specific Assessment models
 */
type AssessmentVariants = {
  pa: PriorApprovalAssessment;
};

/**
 * @internal Conditional type to return a specific or generic Property model, based on PrimaryApplicationType
 */
export type Assessment<TPrimary extends PrimaryApplicationType> =
  TPrimary extends keyof AssessmentVariants
    ? AssessmentVariants[TPrimary]
    : PostSubmissionAssessment;
