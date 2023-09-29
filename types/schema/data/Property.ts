import {PropertyTypes} from '../../enums/PropertyTypes';

/**
 * @id #Property
 * @description The site where the works will happen
 */
export type Property = UKProperty | LondonProperty;

/**
 * @id #UKProperty
 * @description Property details for sites anywhere in the UK
 */
export interface UKProperty {
  address: ProposedAddress | OSAddress;
  region: string;
  localAuthorityDistrict: string[];
  type: PropertyType;
  boundary?: {
    site: string; // @todo use GeoJSON from utils here, but ajv tests failing
    area: {
      squareMetres: number;
      hectares: number;
    };
  };
  constraints?: {
    planning: PlanningConstraint[];
  };
}

/**
 * @id #LondonProperty
 * @description Property details for sites within London
 */
export interface LondonProperty extends UKProperty {
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

/** @todo in future value & description should check against PlanningConstraints enum, but also allow custom per-council variables ?? */
interface BasePlanningConstraint {
  value: string;
  description: string;
}

interface NonOverlappingPlanningConstraint extends BasePlanningConstraint {
  overlaps: false;
}

interface OverlappingPlanningConstraint extends BasePlanningConstraint {
  overlaps: true;
  entities: string[];
}

/**
 * @id #PlanningConstraint
 * @description Planning constraints that overlap with the proposed site boundary determined by spatial queries against Planning Data (planning.data.gov.uk) and Ordnance Survey
 */
type PlanningConstraint =
  | NonOverlappingPlanningConstraint
  | OverlappingPlanningConstraint;
