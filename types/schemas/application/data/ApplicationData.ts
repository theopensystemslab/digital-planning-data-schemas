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
  /**
   * @description Affordable Housing Fast Track
   */
  housingFastTrack?: boolean;
  linked?: {
    superseding?: {
      /** @description Description of the superseded components */
      description?: string;
      /** @description Reference number of the original application */
      applicationNumber?: string;
      /** @description Is the original permission only partially superseded? */
      partial?: boolean;
      /** @description Units that are being superseded */
      unitReference?: string;
    };
  };
  mobileNetworkOperators?: {
    /** @description Mobile network operators consulted */
    consulted: boolean;
  };
}

export interface LeadDeveloper {
  type: 'ukCompany' | 'overseasCompany' | 'none';
  company?: {
    name: string;
    registrationNumber: string;
  };
}
