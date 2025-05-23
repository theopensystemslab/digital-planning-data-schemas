import {OSAddress, ProposedAddress} from '../../../shared/Addresses';
import {GeoBoundary} from './../../../shared/Boundaries';
import {Materials} from '../../../shared/Materials';
import {Site} from '../../../shared/Sites';
import {Region} from '../../../shared/Regions';
import {URL} from '../../../shared/utils';
import {
  PlanningConstraint,
  PlanningDesignation,
} from '../../../shared/Constraints';
import {PropertyType} from '../enums/PropertyTypes';
import {ExistingLondonParking} from '../../../shared/Parking';
import {ApplicationType} from '../enums/ApplicationType';

export type PropertyBase = EnglandProperty | LondonProperty;

/**
 * @description Property details for sites anywhere in England
 */
export type EnglandProperty = Site & {
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
};

/**
 * @description Property details for sites within the Greater London Authority (GLA) area
 */
export type LondonProperty = EnglandProperty & {
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
};

export type PPProperty = PropertyBase & {
  materials?: Materials;
  use?: {
    description: string;
  };
};

/**
 * TypeMap of granular application types to their specific Property models
 */
interface PropertyVariants {
  'pp.full.householder': PPProperty;
  'pp.full.householder.retro': PPProperty;
  'pp.full.major': PPProperty;
  'pp.full.minor': PPProperty;
  'wtt.consent': EnglandProperty;
  'wtt.notice': EnglandProperty;
  hedgerowRemovalNotice: EnglandProperty;
  advertConsent: EnglandProperty;
  complianceConfirmation: EnglandProperty;
}

/**
 * @internal Conditional type to return a specific or generic Property model
 */
export type Property<T extends ApplicationType> =
  T extends keyof PropertyVariants ? PropertyVariants[T] : PropertyBase;
