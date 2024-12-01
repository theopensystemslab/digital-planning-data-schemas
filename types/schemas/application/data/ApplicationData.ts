import {Declaration} from '../../../shared/Declarations';
import {Date} from '../../../shared/utils';
import {ApplicationType} from '../enums/ApplicationTypes';
import {Fee, FeeNotApplicable} from '../../../shared/Fees';

/**
 * @id #ApplicationData
 * @description Information about this planning application
 */
export type ApplicationData = BaseApplicationData | LondonApplicationData;

export interface BaseApplicationData {
  type: ApplicationType;
  fee: Fee | FeeNotApplicable;
  declaration: Declaration;
  preApp?: PreApplication;
  planningApp?: PlanningApplication;
  CIL?: CommunityInfrastructureLevy;
}

/**
 * @id #LondonApplicationData
 * @description Application details for project sites within the Greater London Authority (GLA) area
 */
export interface LondonApplicationData extends BaseApplicationData {
  vacantBuildingCredit?: boolean;
  leadDeveloper?: LeadDeveloper;
}

/**
 * @id #PreApplication
 * @description Details of the pre-application preceeding this application, if applicable
 */
export interface PreApplication {
  reference: string;
  date: Date;
  officer: string;
  summary: string;
}

/**
 * @id #PlanningApplication
 * @description Details of the planning application linked to this application, if applicable
 */
export interface PlanningApplication {
  reference: string;
  date: Date;
  localPlanningAuthority: string;
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
  company?: {
    name: string;
    registrationNumber: string;
  };
}
