import {OSAddress, ProposedAddress} from '../../../shared/Addresses';
import {GeoBoundary} from './../../../shared/Boundaries';
import {Materials} from '../../../shared/Materials';
import {Region} from '../../../shared/Regions';
import {URL} from '../../../shared/utils';
import {PrimaryApplicationType} from '../enums/ApplicationType';
import {
  PlanningConstraint,
  PlanningDesignation,
} from '../enums/PlanningDesignation';
import {PropertyType} from '../enums/PropertyTypes';
import {ExistingLondonParking} from '../../../shared/Parking';

export type PropertyBase = EnglandProperty | LondonProperty;

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
  parking?: ExistingLondonParking;
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
