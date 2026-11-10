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
import {Date, URL} from '../../../shared/utils';
import {PropertyType} from '../enums/PropertyTypes';
import {ResidentialUnits} from './shared';

/**
 * @id #Property
 * @description Information about the site where the works will happen
 */
export type Property = UKProperty | LondonProperty;

/**
 * @id #UKProperty
 * @description Property details for sites anywhere in the UK
 */
export type UKProperty = Site & {
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
    /** @description Is the land known to be contaminated? */
    knownContamination?: boolean;
    /** @description Is the land suspected of being contaminated? */
    suspectedContamination?: boolean;
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
  parking?: ExistingNationalParking;
};

/**
 * @id #LondonProperty
 * @description Property details for sites within the Greater London Authority (GLA) area
 */
export type LondonProperty = Omit<UKProperty, 'parking'> & {
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
};
