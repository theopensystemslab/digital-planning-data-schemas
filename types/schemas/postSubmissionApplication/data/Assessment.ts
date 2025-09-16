import {Date} from '../../../shared/utils';
import {ApplicationType} from '../../prototypeApplication/enums/ApplicationType';
import {AssessmentDecision} from '../enums/AssessmentDecision';

/**
 * Council decision is planningOfficerDecision || committeeDecision
 * Council decision date is planningOfficerDecisionDate || committeeDecisionDate
 */
/**
 * @description Assessment for a post submission application
 */
export type PostSubmissionAssessment = AssessmentBase &
  AssessmentDecisionSection &
  AssessmentCommitteeDecision;

/**
 * @description Base type for all assessments
 */
type AssessmentBase = {
  /**
   * The decision has to be made before this date if not an appeal can be made on the grounds of non-determination
   * @todo After this the determination can be shown as "Non-Determination: would have granted Non-Determination: would have refused" by some councils do we need to show this or will decisionDate being after expiryDate be enough?
   */
  expiryDate: Date;

  /**
   * The url to the decision notice
   * A decision notice is issued when an application is determined or withdrawn
   *
   */
  decisionNotice?: {
    url: string;
  };
};

/**
 * @description AssessmentDecisionSection
 * When a decision is made by a planning officer(s) in a LPA
 */
type AssessmentDecisionSection = {
  /**
   * This is the decision made by planning officer(s) in a LPA
   */
  planningOfficerDecision?: AssessmentDecision;
  /**
   * YYYY-MM-DD
   * This is the date the decision was made by planning officer(s) in a LPA
   */
  planningOfficerDecisionDate?: Date;
};

/**
 * @description AssessmentCommitteeDecision
 * When a decision is made by a committee in a LPA
 */
type AssessmentCommitteeDecision = {
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
};

/**
 * @description Assessment for a post submission application with type prior approval
 */
export type PriorApprovalAssessment = PostSubmissionAssessment & {
  /**
   * Only applies for prior approval applications so we can work out
   * 'Prior approval required and approved', 'Prior approval not required', 'Prior approval required and refused'
   */
  priorApprovalRequired?: boolean;
};

/**
 * TypeMap of granular application types to their specific Assessment models
 */
type AssessmentVariants = {
  'pa.part1.classA': PriorApprovalAssessment;
  'pa.part1.classAA': PriorApprovalAssessment;
  'pa.part3.classG': PriorApprovalAssessment;
  'pa.part3.classM': PriorApprovalAssessment;
  'pa.part3.classMA': PriorApprovalAssessment;
  'pa.part3.classN': PriorApprovalAssessment;
  'pa.part3.classQ': PriorApprovalAssessment;
  'pa.part3.classR': PriorApprovalAssessment;
  'pa.part3.classS': PriorApprovalAssessment;
  'pa.part3.classT': PriorApprovalAssessment;
  'pa.part3.classV': PriorApprovalAssessment;
  'pa.part4.classBB': PriorApprovalAssessment;
  'pa.part4.classBC': PriorApprovalAssessment;
  'pa.part4.classCA': PriorApprovalAssessment;
  'pa.part4.classE': PriorApprovalAssessment;
  'pa.part6': PriorApprovalAssessment;
  'pa.part6.classA': PriorApprovalAssessment;
  'pa.part6.classB': PriorApprovalAssessment;
  'pa.part6.classE': PriorApprovalAssessment;
  'pa.part7.classC': PriorApprovalAssessment;
  'pa.part7.classM': PriorApprovalAssessment;
  'pa.part9.classD': PriorApprovalAssessment;
  'pa.part11.classB': PriorApprovalAssessment;
  'pa.part14.classA': PriorApprovalAssessment;
  'pa.part14.classB': PriorApprovalAssessment;
  'pa.part14.classJ': PriorApprovalAssessment;
  'pa.part14.classK': PriorApprovalAssessment;
  'pa.part14.classOA': PriorApprovalAssessment;
  'pa.part16.classA': PriorApprovalAssessment;
  'pa.part17': PriorApprovalAssessment;
  'pa.part17.classB': PriorApprovalAssessment;
  'pa.part17.classC': PriorApprovalAssessment;
  'pa.part17.classG': PriorApprovalAssessment;
  'pa.part18.classA': PriorApprovalAssessment;
  'pa.part19.classTA': PriorApprovalAssessment;
  'pa.part20.classA': PriorApprovalAssessment;
  'pa.part20.classAA': PriorApprovalAssessment;
  'pa.part20.classAB': PriorApprovalAssessment;
  'pa.part20.classAC': PriorApprovalAssessment;
  'pa.part20.classAD': PriorApprovalAssessment;
  'pa.part20.classZA': PriorApprovalAssessment;
};

/**
 * @internal Conditional type to return a specific or generic Property model
 */
export type Assessment<T extends ApplicationType> =
  T extends keyof AssessmentVariants
    ? AssessmentVariants[T]
    : PostSubmissionAssessment;
