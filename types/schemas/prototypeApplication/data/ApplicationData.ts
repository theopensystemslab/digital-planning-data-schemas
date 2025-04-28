import {Declaration} from '../../../shared/Declarations';
import {Fee, FeeNotApplicable} from '../../../shared/Fees';
import {CommunityInfrastructureLevy} from '../../../shared/CommunityInfrastructureLevy';
import {
  PlanningApplication,
  PreApplication,
} from '../../../shared/LinkedApplications';
import {ApplicationType} from '../enums/ApplicationType';

export type ApplicationDataBase =
  | EnglandApplicationData
  | LondonApplicationData;

/**
 * @description Application details for project sites anywhere in England
 */
export interface EnglandApplicationData {
  declaration: Declaration;
  preApp?: PreApplication;
  planningApp?: PlanningApplication;
}

export interface LeadDeveloper {
  type: 'ukCompany' | 'overseasCompany' | 'none';
  company?: {
    name: string;
    registrationNumber: string;
  };
}

/**
 * @description Application details for project sites within the Greater London Authority (GLA) area
 */
export interface LondonApplicationData extends EnglandApplicationData {
  vacantBuildingCredit?: boolean;
  leadDeveloper?: LeadDeveloper;
}

/**
 * @description ApplicationData required for fee carrying application types
 */
export type FeeCarryingApplicationData = ApplicationDataBase & {
  fee: Fee;
};

/**
 * @description ApplicationData required for application types that do not have a fee
 */
export type NonFeeCarryingApplicationData = ApplicationDataBase & {
  fee: FeeNotApplicable;
};

/**
 * @description Specific ApplicationData required for "Planning Permission" applications
 */
export type PPApplicationData = FeeCarryingApplicationData & {
  CIL?: CommunityInfrastructureLevy;
};

/**
 * TypeMap of granular application types to their specific ApplicationData models
 */
export interface ApplicationDataVariants {
  'ldc.breachOfCondition': FeeCarryingApplicationData;
  'ldc.existing': FeeCarryingApplicationData;
  'ldc.listedBuildingWorks': NonFeeCarryingApplicationData;
  'ldc.proposed': FeeCarryingApplicationData;
  'pp.full.householder.retro': PPApplicationData;
  'pp.full.householder': PPApplicationData;
  'pp.full.major': PPApplicationData;
  'pp.full.minor': PPApplicationData;
  'wtt.consent': NonFeeCarryingApplicationData;
  'wtt.notice': NonFeeCarryingApplicationData;
  advertConsent: FeeCarryingApplicationData;
  complianceConfirmation: FeeCarryingApplicationData;
  hedgerowRemovalNotice: NonFeeCarryingApplicationData;
  landDrainageConsent: FeeCarryingApplicationData;
  listed: NonFeeCarryingApplicationData;
  'pa.part1.classA': FeeCarryingApplicationData;
  'pa.part3.classMA': FeeCarryingApplicationData;
  'pa.part7.classM': FeeCarryingApplicationData;
  'pa.part14.classJ': FeeCarryingApplicationData;
  'pa.part20.classAB': FeeCarryingApplicationData;
}

/**
 * @internal
 * Conditional type to return a specific or generic ApplicationData model
 */
export type ApplicationData<T extends ApplicationType> =
  T extends keyof ApplicationDataVariants
    ? ApplicationDataVariants[T]
    : ApplicationDataBase;
