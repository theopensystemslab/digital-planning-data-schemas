import {PrimaryApplicationType} from '../enums/ApplicationType';
import {Declaration} from '../../../shared/Declarations';
import {Fee, FeeNotApplicable} from '../../../shared/Fees';
import {CommunityInfrastructureLevy} from '../../../shared/CommunityInfrastructureLevy';
import {
  PlanningApplication,
  PreApplication,
} from '../../../shared/LinkedApplications';

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
 * TypeMap of PrimaryApplicationTypes to their specific ApplicationData models
 */
export interface ApplicationDataVariants {
  ldc: FeeCarryingApplicationData;
  pa: FeeCarryingApplicationData;
  pp: PPApplicationData;
  listed: NonFeeCarryingApplicationData;
  landDrainageConsent: FeeCarryingApplicationData;
  wtt: NonFeeCarryingApplicationData;
  hedgerowRemovalNotice: NonFeeCarryingApplicationData;
  advertConsent: FeeCarryingApplicationData;
}

/**
 * @internal
 * Conditional type to return a specific or generic ApplicationData model, based on PrimaryApplicationType
 */
export type ApplicationData<TPrimary extends PrimaryApplicationType> =
  TPrimary extends keyof ApplicationDataVariants
    ? ApplicationDataVariants[TPrimary]
    : ApplicationDataBase;
