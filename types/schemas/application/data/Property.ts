import {
  PlanningConstraint,
  PlanningDesignation,
} from '../../../shared/Constraints';
import {Materials} from '../../../shared/Materials';
import {ExistingLondonParking} from '../../../shared/Parking';
import {Region} from '../../../shared/Regions';
import {Site} from '../../../shared/Sites';
import {Date, URL} from '../../../shared/utils';
import {PropertyType} from '../enums/PropertyTypes';
import {ResidentialUnits} from './shared';

/**
 * @id #Property
 * @description Information about the site where the works will happen
 */
export type Property = UKProperty | LondonProperty;

/**
 * @id #UKProperty
 * @description Property details for sites anywhere in the UK
 */
export type UKProperty = Site & {
  type: PropertyType;
  /**
   * @description Planning constraints and policies that intersect with this site and may impact or restrict development
   */
  planning?: {
    /**
     * @description A list of open data requests or websites that explain how these constraints were sourced
     */
    sources: URL[];
    designations?: PlanningDesignation[];
    conditions?: PlanningConstraint[];
    guidance?: PlanningConstraint[];
    plans?: {
      local: PlanningConstraint[];
      neighbourhood: PlanningConstraint[];
    };
  };
  /**
   * @description Existing materials, if applicable to proposal.projectType
   */
  materials?: Materials;
  /**
   * @description Existing land use, if applicable to application.type
   */
  use?: {
    description: string;
    vacant?: {
      lastUseEndDate: Date;
    };
  };
  /**
   * @description Existing flood risk, if applicable to application.type
   */
  flood?: {
    '20mFromWatercourse'?: boolean;
    increasedRiskElsewhere?: boolean;
  };
  /**
   * @description Existing trees on or near the site
   */
  trees?: {
    present: boolean;
    adjacent: boolean;
  };
  units?: ResidentialUnits;
};

/**
 * @id #LondonProperty
 * @description Property details for sites within the Greater London Authority (GLA) area
 */
export type LondonProperty = UKProperty & {
  region: Extract<Region, 'London'>;
  titleNumber?: {
    known: 'Yes' | 'No';
    number?: string;
  };
  /**
   * @title Energy Performance Certificate
   */
  EPC?: {
    known:
      | 'Yes'
      | 'Yes, but only some of the properties have one'
      | 'The property does not have one'
      | 'No';
    number?: string;
  };
  /**
   * @title Lead Registered Social Landlord
   */
  socialLandlord?: {status: true; description: string} | {status: false};
  /**
   * @description Current ownership status of the land
   */
  ownership?: {
    status: 'public' | 'private' | 'mixed';
  };
  /**
   * @description Current occupation status of the property
   */
  occupation?: {
    status: 'occupied' | 'partVacant' | 'vacant';
  };
  parking?: ExistingLondonParking;
};
