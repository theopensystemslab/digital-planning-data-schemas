import {GeoJSON} from 'geojson';
import {ProjectTypes} from '../../enums/ProjectTypes';
import {Area, Date} from '../../utils';
import {Materials} from './shared';

/**
 * @id #Proposal
 * @description Information about the proposed works and any changes to the property
 */
export interface Proposal {
  projectType: ProjectType[];
  description: string;
  /**
   * @description Location plan boundary proposed by the user, commonly referred to as the red line boundary
   */
  boundary?: {
    site: GeoJSON;
    area: Area;
  };
  date?: ProposalDates;
  details?: ProposalDetails;
}

/**
 * @id #ProposalDates
 * @description When the proposed works will start and be completed by, not required for all application types
 */
export interface ProposalDates {
  start?: Date;
  completion?: Date;
}

/**
 * @id #ProposalDetails
 * @description Details about the changes being proposed
 */
export type ProposalDetails = BaseDetails | LondonDetails;

export interface BaseDetails {
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
  materials?: Materials;
}

/**
 * @id #LondonDetails
 * @description Proposal details for project sites within the Greater London Authority (GLA) area
 */
export interface LondonDetails extends BaseDetails {
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
}

type ProposedCount = {
  count: number;
  difference: number;
};

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
