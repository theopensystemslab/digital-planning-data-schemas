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
 * @description UK regions sourced from planning.data.gov.uk/dataset/region, where London is a proxy for the Greater London Authority (GLA) area
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
  localAuthorityDistrict: string[];
  type: PropertyType;
  boundary?: {
    site: GeoJSON;
    area: Area;
  };
  constraints?: {
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
  x: number;
  y: number;
  latitude: number;
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
  uprn: string;
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

type NonOverlappingPlanningConstraint = {
  overlaps: false;
} & BasePlanningConstraint;

type OverlappingPlanningConstraint = {
  overlaps: true;
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
 * @description Planning constraints that overlap with the property site boundary determined by spatial queries against Planning Data (planning.data.gov.uk) and Ordnance Survey
 */
export type PlanningConstraint =
  | NonOverlappingPlanningConstraint
  | OverlappingPlanningConstraint;
