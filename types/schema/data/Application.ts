import {ApplicationTypes} from '../../enums/ApplicationTypes';
import {Date} from '../../utils';

/**
 * @id #Application
 * @description Information about this planning application
 */
export type Application = BaseApplication | LondonApplication;

export interface BaseApplication {
  type: ApplicationType;
  fee: ApplicationFee;
  declaration: ApplicationDeclaration;
  preApp?: PreApplication;
  CIL?: CommunityInfrastructureLevy;
}

/**
 * @id #LondonApplication
 * @description Application details for project sites within the Greater London Authority (GLA) area
 */
export interface LondonApplication extends BaseApplication {
  vacantBuildingCredit?: boolean;
  leadDeveloper?: LeadDeveloper;
}

/**
 * @id #ApplicationFee
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
   * @descrtion Breakdown of calculated fee by UK Planning Fee category (** TODO add docs **)
   */
  category?: {
    one?: number;
    oneToFour?: number;
    oneToThirteen?: number;
    two?: number;
    twoToFour?: number;
    three?: number;
    four?: number;
    five?: number;
    fiveToThirteen?: number;
    sixAndSeven?: number;
    eight?: number;
    nine?: number;
    ten?: number;
    eleven?: {
      one: number;
    };
    twelve?: {
      one?: number;
      two?: number;
    };
    thirteen?: number;
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
 * @id #ApplicationDeclaration
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
 * @id #PreApplication
 * @description Details of the pre-application, if applicable
 */
export interface PreApplication {
  reference: string;
  date: Date;
  officer: string;
  summary: string;
}

/**
 * @id #CommunityInfrastructureLevy
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
  companyRegistrationNumber?: string;
}

type ApplicationTypeKeys = keyof typeof ApplicationTypes;

type GenericApplicationType<TKey extends ApplicationTypeKeys> = {
  value: TKey;
  description: (typeof ApplicationTypes)[TKey];
};

type ApplicationTypeMap = {
  [K in ApplicationTypeKeys]: GenericApplicationType<K>;
};

/**
 * @id #ApplicationType
 * @description Planning application types
 */
export type ApplicationType = ApplicationTypeMap[keyof ApplicationTypeMap];
