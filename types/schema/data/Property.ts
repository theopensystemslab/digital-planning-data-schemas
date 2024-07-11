import {PlanningDesignation} from '../../enums/PlanningConstraints';
import {PropertyType} from '../../enums/PropertyTypes';
import {Date, URL} from '../../utils';
import {Entity, GeoBoundary, Materials, ResidentialUnits} from './shared';

/**
 * @id #Property
 * @description Information about the site where the works will happen
 */
export type Property = UKProperty | LondonProperty;

/**
 * @id #UKRegion
 * @description The UK region that contains this address sourced from planning.data.gov.uk/dataset/region, where London is a proxy for the Greater London Authority (GLA) area
 */
export type UKRegion =
  | 'North East'
  | 'North West'
  | 'Yorkshire and The Humber'
  | 'East Midlands'
  | 'West Midlands'
  | 'East of England'
  | 'London'
  | 'South East'
  | 'South West';

/**
 * @id #UKProperty
 * @description Property details for sites anywhere in the UK
 */
export interface UKProperty {
  address: ProposedAddress | OSAddress;
  region: UKRegion;
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
  region: Extract<UKRegion, 'London'>;
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

/**
 * @id #SiteAddress
 * @description Address information available for any site, whether existing or proposed
 */
export interface SiteAddress {
  title: string;
  /**
   * @description Easting coordinate in British National Grid (OSGB36)
   */
  x: number;
  /**
   * @description Northing coordinate in British National Grid (OSGB36)
   */
  y: number;
  /**
   * @description Latitude coordinate in EPSG:4326 (WGS84)
   */
  latitude: number;
  /**
   * @description Longitude coordinate in EPSG:4326 (WGS84)
   */
  longitude: number;
}

/**
 * @id #ProposedAddress
 * @description Address information for sites without a known Unique Property Reference Number (UPRN)
 */
export interface ProposedAddress extends SiteAddress {
  source: 'Proposed by applicant';
}

/**
 * @id #OSAddress
 * @description Address information for sites with a known address sourced from Ordnance Survey AddressBase Premium
 */
export interface OSAddress extends SiteAddress {
  /**
   * @title Unique Property Reference Number
   * @maxLength 12
   */
  uprn: string;
  /**
   * @title Unique Street Reference Number
   * @maxLength 8
   */
  usrn: string;
  pao: string;
  street: string;
  town: string;
  postcode: string;
  organisation?: string;
  singleLine: string;
  source: 'Ordnance Survey';
}

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
