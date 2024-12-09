import {PrimaryApplicationType} from '../enums/ApplicationType';
import {Date} from '../../../shared/utils';
import {Declaration} from '../../../shared/Declarations';
import {Fee, FeeNotApplicable} from '../../../shared/Fees';
import {CommunityInfrastructureLevy} from '../../../shared/CommunityInfrastructureLevy';

/**
 * Base type for ApplicationData. Contains all shared properties across all application types
 */
export type ApplicationDataBase =
  | EnglandApplicationData
  | LondonApplicationData;

export interface EnglandApplicationData {
  declaration: Declaration;
  preApp?: PreApplication;
  planningApp?: PlanningApplication;
}

/**
 * @description Details of the pre-application preceeding this application, if applicable
 */
export interface PreApplication {
  reference: string;
  date: Date;
  officer: string;
  summary: string;
}

/**
 * @description Details of the planning application linked to this application, if applicable
 */
export interface PlanningApplication {
  reference: string;
  date: Date;
  localPlanningAuthority: string;
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
}

/**
 * @internal
 * Conditional type to return a specific or generic ApplicationData model, based on PrimaryApplicationType
 */
export type ApplicationData<TPrimary extends PrimaryApplicationType> =
  TPrimary extends keyof ApplicationDataVariants
    ? ApplicationDataVariants[TPrimary]
    : ApplicationDataBase;
