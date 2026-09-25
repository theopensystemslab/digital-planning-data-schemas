import {
  PlanningConstraint,
  PlanningDesignation,
} from '../../../shared/Constraints';
import {Materials} from '../../../shared/Materials';
import {
  ExistingLondonParking,
  ExistingNationalParking,
} from '../../../shared/Parking';
import {Region} from '../../../shared/Regions';
import {Site} from '../../../shared/Sites';
import {URL} from '../../../shared/utils';
import {ApplicationType} from '../enums/ApplicationType';
import {PropertyType} from '../enums/PropertyTypes';
import {ResidentialUnits} from './shared';

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
  parking?: ExistingNationalParking;
};

/**
 * @description Property details for sites within the Greater London Authority (GLA) area
 */
export type LondonProperty = Omit<EnglandProperty, 'parking'> & {
  region: Extract<Region, 'London'>;
  /**
   * @description Title Number
   */
  titleNumber?:
    | {
        known: 'Yes' | 'No';
        number?: string;
      }
    | string;
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
  /**
   * @description Use class
   */
  useClass?:
    | 'A1'
    | 'A2'
    | 'A3'
    | 'A4'
    | 'A5'
    | 'B1'
    | 'B1a'
    | 'B1b'
    | 'B1c'
    | 'B2'
    | 'B8'
    | 'C1'
    | 'C2'
    | 'C2a'
    | 'C3'
    | 'C4'
    | 'D1'
    | 'D2'
    | 'SG';
  useClassC3?: {
    GIA: {
      /** @description Use class C3 Gross Internal Area existing */
      existing: number;
      /** @description Use class C3 Gross Internal Area gained */
      gained: number;
      /** @description Use class C3 Gross Internal Area lost */
      lost: number;
    };
  };
  useClassC4?: {
    GIA: {
      /** @description Use class C4 Gross Internal Area existing */
      existing: number;
      /** @description Use class C4 Gross Internal Area gained */
      gained: number;
      /** @description Use class C4 Gross Internal Area lost */
      lost: number;
    };
  };
  socialLandlord?: {
    /** @description Lead Registered Social Landlord */
    description?: string;
  };
  ownership?: {
    /** @description Ownership status */
    status: 'Public' | 'Private' | 'Mixed';
  };
};

export type PPProperty = PropertyBase & {
  materials?: Materials;
  use?: {
    /** @description Describe the current use */
    description: string;
    /** @description Is the site currently vacant? */
    vacant?: boolean;
    /** @description Is the land known to be contaminated? */
    knownContamination?: boolean;
    /** @description Is the land suspected of being contaminated? */
    suspectedContamination?: boolean;
  };
  /**
   * @description Existing residential units on the site, if the project changes the number or type of residential units
   */
  units?: ResidentialUnits;
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
