import {URL} from '../../../shared/utils';
import {GeoBoundary} from '../../application/data/shared';
import {PrimaryApplicationType} from '../enums/ApplicationType';
import {
  PlanningConstraint,
  PlanningDesignation,
} from '../enums/PlanningDesignation';
import {PropertyType} from '../enums/PropertyTypes';
import {Materials} from './shared';

export type PropertyBase = EnglandProperty | LondonProperty;

/**
 * @description The region in England that contains this address sourced from planning.data.gov.uk/dataset/region, where London is a proxy for the Greater London Authority (GLA) area
 */
export type Region =
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
 * @description Property details for sites anywhere in England
 */
export interface EnglandProperty {
  address: ProposedAddress | OSAddress;
  region: Region;
  /**
   * @description Current and historic England Local Authority Districts that contain this address sourced from planning.data.gov.uk/dataset/local-authority-district
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
 * @description Property details for sites within the Greater London Authority (GLA) area
 */
export interface LondonProperty extends EnglandProperty {
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
  /**
   * @title Primary Addressable Object start range and/or building description
   * @description Combined `PAO_START_NUMBER`, `PAO_START_SUFFIX`, `PAO_TEXT` OS LPI properties
   */
  pao: string;
  /**
   * @title Primary Addressable Object (PAO) end range
   * @description Combined `PAO_END_NUMBER`, `PAO_END_SUFFIX` OS LPI properties
   */
  paoEnd?: string;
  /**
   * @title Secondary Addressable Object (SAO) start range and/or building description
   * @description Combined `SAO_START_NUMBER`, `SAO_START_SUFFIX`, `SAO_TEXT` OS LPI properties
   */
  sao?: string;
  /**
   * @title Secondary Addressable Object (SAO) end range
   * @description Combined `SAO_END_NUMBER`, `SAO_END_SUFFIX` OS LPI properties
   */
  saoEnd?: string;
  street: string;
  town: string;
  postcode: string;
  organisation?: string;
  singleLine: string;
  source: 'Ordnance Survey';
}

export type PPProperty = PropertyBase & {
  materials?: Materials;
  use?: {
    description: string;
  };
};

/**
 * TypeMap of PrimaryApplicationTypes to their specific Property models
 */
interface PropertyVariants {
  pp: PPProperty;
}

/**
 * @internal Conditional type to return a specific or generic Property model, based on PrimaryApplicationType
 */
export type Property<TPrimary extends PrimaryApplicationType> =
  TPrimary extends keyof PropertyVariants
    ? PropertyVariants[TPrimary]
    : PropertyBase;
