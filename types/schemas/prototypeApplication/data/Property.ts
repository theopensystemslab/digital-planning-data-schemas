import {URL} from '../../../shared/utils';
import {GeoBoundary} from '../../application/data/shared';
import {
  PlanningConstraint,
  PlanningDesignation,
} from '../enums/PlanningDesignation';
import {PropertyType} from '../enums/PropertyTypes';

export type PropertyBase = UKProperty | LondonProperty;

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
   * @description HM Land Registry Index polygon for this property, commonly referred to as the blue-line or title boundary, sourced from planning.data.gov.uk/dataset/title-boundary
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
 * @description Address information for sites without a known Unique Property Reference Number (UPRN)
 */
export interface ProposedAddress extends SiteAddress {
  source: 'Proposed by applicant';
}

/**
 * @description Address information for sites with a known address sourced from Ordnance Survey AddressBase Premium (LPI)
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
