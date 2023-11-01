import {GeoJSON} from 'geojson';
import {PlanningConstraints} from '../../enums/PlanningConstraints';
import {PropertyTypes} from '../../enums/PropertyTypes';
import {Area, URL} from '../../utils';

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
  boundary?: {
    site: GeoJSON;
    area: Area;
  };
  constraints: {
    planning: PlanningConstraint[];
  };
}

/**
 * @id #LondonProperty
 * @description Property details for sites within the Greater London Authority (GLA) area
 */
export interface LondonProperty extends UKProperty {
  region: Extract<UKRegion, 'London'>;
  titleNumber: {
    known: 'Yes' | 'No';
    number?: string;
  };
  /**
   * @title Energy Performance Certificate
   */
  EPC: {
    known:
      | 'Yes'
      | 'Yes, but only some of the properties have one'
      | 'The property does not have one'
      | 'No';
    number?: string;
  };
}

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

type PropertyTypeKeys = keyof typeof PropertyTypes;

type GenericPropertyType<TKey extends PropertyTypeKeys> = {
  value: TKey;
  description: (typeof PropertyTypes)[TKey];
};

type PropertyTypeMap = {
  [K in PropertyTypeKeys]: GenericPropertyType<K>;
};

/**
 * @id #PropertyType
 * @description Property types derived from Basic Land and Property Unit (BLPU) classification codes
 */
export type PropertyType = PropertyTypeMap[keyof PropertyTypeMap];

type PlanningConstraintKeys = keyof typeof PlanningConstraints;

type GenericPlanningConstraint<TKey extends PlanningConstraintKeys> = {
  value: TKey;
  description: (typeof PlanningConstraints)[TKey];
  category?:
    | 'Ecology'
    | 'Flooding'
    | 'General policy'
    | 'Heritage and conservation'
    | 'Trees';
};

type PlanningConstraintMap = {
  [K in PlanningConstraintKeys]: GenericPlanningConstraint<K>;
};

type BasePlanningConstraint =
  PlanningConstraintMap[keyof PlanningConstraintMap];

/**
 * @description A planning constraint that does not intersect with the proposed site, per the DE-9IM spatial relationship definition of intersects or manually answered by the user
 */
type NonIntersectingPlanningConstraint = {
  intersects: false;
} & BasePlanningConstraint;

/**
 * @description A planning constraint that does intersect with the proposed site, per the DE-9IM spatial relationship definition of intersects or manually answered by the user
 */
type IntersectingPlanningConstraint = {
  intersects: true;
  entities:
    | {
        name: string;
        description?: string;
        source?: URL;
      }[]
    | [];
} & BasePlanningConstraint;

/**
 * @id #PlanningConstraint
 * @description Planning constraints that intersect with the proposed site determined by spatial queries against Planning Data (planning.data.gov.uk) and Ordnance Survey
 */
export type PlanningConstraint =
  | NonIntersectingPlanningConstraint
  | IntersectingPlanningConstraint;
