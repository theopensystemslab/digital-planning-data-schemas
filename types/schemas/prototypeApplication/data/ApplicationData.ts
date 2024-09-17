import {PrimaryApplicationType} from '../enums/ApplicationType';

/**
 * Base type for ApplicationData. Contains all shared properties across all application types
 */
export type ApplicationDataBase = UKApplicationData | LondonApplicationData;

export interface UKApplicationData {
  declaration: ApplicationDeclaration;
  preApp?: PreApplication;
  planningApp?: PlanningApplication;
}

/**
 * @description An indicator that an application fee does not apply to this application type or journey
 */
export interface ApplicationFeeNotApplicable {
  notApplicable: true;
}

/**
 * @description The costs associated with this application
 */
export interface ApplicationFee {
  /**
   * @description Total calculated fee in GBP
   */
  calculated: number;
  /**
   * @description Total payable fee after any exemptions or reductions in GBP
   */
  payable: number;
  /**
   * @description Breakdown of calculated fee in GBP by category of development, based on the scales defined in The Town and Country Planning Regulations https://www.legislation.gov.uk/uksi/2012/2920/schedule/1/part/2
   */
  category?: {
    /**
     * @description Category 1 - New homes
     */
    one?: number;
    /**
     * @description Category 2 - Other new buildings
     */
    two?: number;
    /**
     * @description Category 3 - Agricultural buildings
     */
    three?: number;
    /**
     * @description Category 4 - Glasshouses on agricultural land
     */
    four?: number;
    /**
     * @description Category 5 - Plant equipment or machinery
     */
    five?: number;
    /**
     * @description Category 6 and 7 - Home or curtilage of home
     */
    sixAndSeven?: number;
    /**
     * @description Category 8 - Car parks or access roads
     */
    eight?: number;
    /**
     * @description Category 9 - Exploratory drilling
     */
    nine?: number;
    /**
     * @description Category 10 - Winning and working of oil or natural gas
     */
    ten?: number;
    eleven?: {
      /**
       * @description Category 11(1) - Mining operations
       */
      one?: number;
      /**
       * @description Category 11(2) - Other operations
       */
      two?: number;
    };
    twelve?: {
      /**
       * @description Category 12(1) - Change of use from single home to homes
       */
      one?: number;
      /**
       * @description Category 12(2) - Change of use to home
       */
      two?: number;
    };
    /**
     * @description Category 13 - Waste disposal
     */
    thirteen?: number;
    /**
     * @description Category 14 - Other change of use
     */
    fourteen?: number;
  };
  exemption: {
    disability: boolean; // @todo add application.fee.exemption.disability.reason
    resubmission: boolean; // @todo add application.resubmission.original.applicationReference & application.resubmission.originalReference.appeal
  };
  reduction: {
    alternative: boolean;
    parishCouncil: boolean;
    sports: boolean;
  };
  reference?: {
    /**
     * @description GOV.UK Pay payment reference number
     */
    govPay: string; // @todo require when payable > 0
  };
}

/**
 * @description Declarations about the accuracy of this application and any personal connections to the receiving authority
 */
export interface ApplicationDeclaration {
  accurate: boolean;
  connection: {
    value:
      | 'employee'
      | 'relation.employee'
      | 'electedMember'
      | 'relation.electedMember'
      | 'none';
    description?: string;
  };
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

/**
 * @description Details about the Community Infrastructure Levy planning charge, if applicable
 */
export interface CommunityInfrastructureLevy {
  result:
    | 'exempt.annexe'
    | 'exempt.extension'
    | 'exempt.selfBuild'
    | 'liable'
    | 'relief.charity'
    | 'relief.socialHousing';
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
export interface LondonApplicationData extends UKApplicationData {
  vacantBuildingCredit?: boolean;
  leadDeveloper?: LeadDeveloper;
}

/**
 * @description ApplicationData required for fee carrying application types
 */
export type FeeCarryingApplicationData = ApplicationDataBase & {
  fee: ApplicationFee;
}

/**
 * @description ApplicationData required for application types that do not have a fee 
 */
export type NonFeeCarryingApplicationData = ApplicationDataBase & {
  fee: ApplicationFeeNotApplicable;
}

/**
 * @description Specific ApplicationData required for "Planning Permission" applications
 */
export type PPApplicationData = FeeCarryingApplicationData & {
  CIL?: CommunityInfrastructureLevy;
}

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
