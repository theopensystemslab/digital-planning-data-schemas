import {GeoJSON} from 'geojson';
import {
  OpenSpaceTypes,
  OpenSpaceDesignations,
  ProtectedSpaceDesignations,
} from '../../enums/Nature';
import {ProjectTypes} from '../../enums/ProjectTypes';
import {Area, Date} from '../../utils';
import {Materials} from './shared';

/**
 * @id #Proposal
 * @description Information about the proposed works and any changes to the property
 */
export type Proposal = BaseProposal | LondonProposal;

export interface BaseProposal {
  projectType: ProjectType[];
  description: string;
  date?: ProposalDates;
  /**
   * @description Location plan boundary proposed by the user, commonly referred to as the red line boundary
   */
  boundary?: {
    site: GeoJSON;
    area: Area;
  };
  /**
   * @description Proposed materials, if applicable to projectType
   */
  materials?: Materials;
  /**
   * @desription Proposed pedestrian & vehicle access, roads and rights of way, if applicable to application.type
   */
  access?: {
    affected?:
      | 'vehicle'
      | 'pedestrian'
      | 'newRoad'
      | 'rightsOfWay.newPublic'
      | 'rightsOfWay.changes';
  };
  /**
   * @description Proposed utilities, if applicable to application.type
   */
  utilities?: {
    foulSewageDisposal?: 'sewer' | 'tank' | 'plant' | 'pit' | 'other';
  };
  /**
   * @description Assessment of flood risk, if applicable to application.type
   */
  flood?: {
    '20mFromWatercourse'?: boolean;
    increasedRiskElsewhere?: boolean;
    surfaceWaterDisposal?:
      | 'drainageSystem'
      | 'soakaway'
      | 'sewer'
      | 'watercourse'
      | 'pondOrLake'
      | 'other';
  };
  /**
   * @description Details of biodiversity and geological conservation, if applicable to application.type
   */
  ecology?: {
    speciesAffected?: 'site' | 'adjacent' | 'none';
    featuresAffected?: 'site' | 'adjacent' | 'none';
    conservationAffected?: 'site' | 'adjacent' | 'none';
  };
  /**
   * @description Proposed land use, including storage of hazardous materials, if applicable to application.type
   */
  use?: {
    description?: string;
    contamination?: 'known' | 'suspected' | 'vulnerable';
    storage?: string[];
  };
  extend?: {
    area: Area;
  };
  new?: {
    area: Area;
    count?: {
      bathrooms?: number;
      bedrooms?: number;
      dwellings?: number;
    };
  };
}

/**
 * @id #LondonProposal
 * @description Proposal details for project sites within the Greater London Authority (GLA) area
 */
export interface LondonProposal extends BaseProposal {
  schemeName?: string;
  /**
   * @description Proposed parking spaces
   */
  parking?: {
    cars?: ProposedCount;
    vans?: ProposedCount;
    motorcycles?: ProposedCount;
    cycles?: ProposedCount;
    buses?: ProposedCount;
    disabled?: ProposedCount;
    carClub?: ProposedCount;
    offStreet?: {residential: ProposedCount};
    other?: ProposedCount;
  };
  /**
   * @description Creating new buildings
   */
  newBuildings?: NewBuildingsOrStoreys;
  /**
   * @description Increasing the height of existing buildings
   */
  newStoreys?: NewBuildingsOrStoreys;
  /**
   * @description Project cost
   */
  cost?: {
    projected: '2m' | '2mTo100m' | '100m';
  };
  /**
   * @description Electric vehicle charing points
   */
  charging?: {
    active: {count: number};
    passive: {count: number};
  };
  /**
   * @description Changes that result in the loss, gain, or change of use of natural spaces
   */
  nature?: {
    openSpaces?: {
      impact: 'loss' | 'gain' | 'change';
      description: string;
      type: OpenSpaceType;
      designation: OpenSpaceDesignation;
      access: 'restricted' | 'unrestricted';
      area: {hectares: number};
      /**
       * @description Whether the open space change involves a land swap
       */
      swap: boolean;
    }[];
    protectedSpaces?: {
      impact: 'loss' | 'gain' | 'change';
      description: string;
      designation: ProtectedSpaceDesignation;
      access: 'restricted' | 'unrestricted';
      area: {hectares: number};
    }[];
  };
  /**
   * @description Water management
   */
  water?: {
    /**
     * @description Internal residential water usage
     */
    usage: {litresPerPersonPerDay: number};
    /**
     * @description Whether the proposal includes rain water harvesting
     */
    rain: boolean;
    /**
     * @description Whether the proposal includes grey water re-use
     */
    grey: boolean;
  };
}

type ProposedCount = {
  count: number;
  difference: number;
};

/**
 * @id #NewBuildingsOrStoreys
 * @description Details about creating new buildings or increasing the height of existing buildings
 */
export interface NewBuildingsOrStoreys {
  count: number;
  buildings?: {
    height: {metres: number};
    storeys: number;
  }[];
}

/**
 * @id #ProposalDates
 * @description When the proposed works will start and be completed by, not required for all application types
 */
export interface ProposalDates {
  start?: Date;
  completion?: Date;
}

type ProjectTypeKeys = keyof typeof ProjectTypes;

type GenericProjectType<TKey extends ProjectTypeKeys> = {
  value: TKey;
  description: (typeof ProjectTypes)[TKey];
};

type ProjectTypeMap = {
  [K in ProjectTypeKeys]: GenericProjectType<K>;
};

/**
 * @id #ProjectType
 * @description Planning project types
 */
export type ProjectType = ProjectTypeMap[keyof ProjectTypeMap];

type OpenSpaceTypeKeys = keyof typeof OpenSpaceTypes;

type GenericOpenSpaceType<TKey extends OpenSpaceTypeKeys> = {
  value: TKey;
  description: (typeof OpenSpaceTypes)[TKey];
};

type OpenSpaceTypeMap = {
  [K in OpenSpaceTypeKeys]: GenericOpenSpaceType<K>;
};

/**
 * @id #OpenSpaceType
 * @description Types of natural open spaces
 */
export type OpenSpaceType = OpenSpaceTypeMap[keyof OpenSpaceTypeMap];

type OpenSpaceDesignationKeys = keyof typeof OpenSpaceDesignations;

type GenericOpenSpaceDesignation<TKey extends OpenSpaceDesignationKeys> = {
  value: TKey;
  description: (typeof OpenSpaceDesignations)[TKey];
};

type OpenSpaceDesignationMap = {
  [K in OpenSpaceDesignationKeys]: GenericOpenSpaceDesignation<K>;
};

/**
 * @id #OpenSpaceDesignation
 * @description Designations of natural open spaces
 */
export type OpenSpaceDesignation =
  OpenSpaceDesignationMap[keyof OpenSpaceDesignationMap];

type ProtectedSpaceDesignationKeys = keyof typeof ProtectedSpaceDesignations;

type GenericProtectedSpaceDesignation<
  TKey extends ProtectedSpaceDesignationKeys,
> = {
  value: TKey;
  description: (typeof ProtectedSpaceDesignations)[TKey];
};

type ProtectedSpaceDesignationMap = {
  [K in ProtectedSpaceDesignationKeys]: GenericProtectedSpaceDesignation<K>;
};

/**
 * @id #ProtectedSpaceDesignation
 * @description Designations of natural protected spaces
 */
export type ProtectedSpaceDesignation =
  ProtectedSpaceDesignationMap[keyof ProtectedSpaceDesignationMap];
