import {OSAddress, ProposedAddress} from '../../../shared/Addresses';
import {GeoBoundary} from './../../../shared/Boundaries';
import {Materials} from '../../../shared/Materials';
import {Region} from '../../../shared/Regions';
import {Date, URL} from '../../../shared/utils';
import {PlanningDesignation} from '../enums/PlanningConstraints';
import {PropertyType} from '../enums/PropertyTypes';
import {Entity, ResidentialUnits} from './shared';

/**
 * @id #Property
 * @description Information about the site where the works will happen
 */
export type Property = UKProperty | LondonProperty;

/**
 * @id #UKProperty
 * @description Property details for sites anywhere in the UK
 */
export interface UKProperty {
  address: ProposedAddress | OSAddress;
  region: Region;
  /**
   * @description Current and historic UK Local Authority Districts that contain this address sourced from planning.data.gov.uk/dataset/local-authority-district
   */
  localAuthorityDistrict: string[];
  type: PropertyType;
  /**
   * @description HM Land Registry Index polygon for this property, commonly referred to as the blue line boundary, sourced from planning.data.gov.uk/dataset/title-boundary
   */
  boundary?: GeoBoundary;
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
}

/**
 * @id #LondonProperty
 * @description Property details for sites within the Greater London Authority (GLA) area
 */
export interface LondonProperty extends UKProperty {
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
  parking?: {
    cars?: ExistingCount;
    vans?: ExistingCount;
    motorcycles?: ExistingCount;
    cycles?: ExistingCount;
    buses?: ExistingCount;
    disabled?: ExistingCount;
    carClub?: ExistingCount;
    offStreet?: {residential: ExistingCount};
    other?: ExistingCount;
  };
}

type ExistingCount = {count: number};

type BasePlanningConstraint = {
  value: string;
  description: string;
};

/**
 * @description A planning constraint that does not intersect with the proposed site, per the DE-9IM spatial relationship definition of intersects
 */
type NonIntersectingPlanningConstraint = {
  intersects: false;
} & BasePlanningConstraint;

/**
 * @description A planning constraint that does intersect with the proposed site, per the DE-9IM spatial relationship definition of intersects
 */
type IntersectingPlanningConstraint = {
  intersects: true;
  entities: Entity[];
} & BasePlanningConstraint;

/**
 * @id #PlanningConstraint
 * @description Planning constraints that intersect with the proposed site
 */
export type PlanningConstraint =
  | NonIntersectingPlanningConstraint
  | IntersectingPlanningConstraint;
