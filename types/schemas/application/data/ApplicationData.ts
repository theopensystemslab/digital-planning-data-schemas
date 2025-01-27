import {CommunityInfrastructureLevy} from '../../../shared/CommunityInfrastructureLevy';
import {Declaration} from '../../../shared/Declarations';
import {Fee, FeeNotApplicable} from '../../../shared/Fees';
import {
  PlanningApplication,
  PreApplication,
} from '../../../shared/LinkedApplications';
import {ApplicationType} from '../enums/ApplicationTypes';

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

export interface LeadDeveloper {
  type: 'ukCompany' | 'overseasCompany' | 'none';
  company?: {
    name: string;
    registrationNumber: string;
  };
}
