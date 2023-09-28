import {ProjectTypes} from '../../enums/ProjectTypes';
import {DateTime} from '../../utils';

/**
 * @id #Proposal
 * @description Information about the project
 */
export interface Proposal {
  projectType: ProjectType[];
  description: string;
  boundary?: {
    site: string; // @todo use GeoJSON from utils here, but ajv tests failing
    area: {
      squareMetres: number;
      hectares: number;
    };
  };
  date?: {
    start: DateTime;
    completion?: DateTime;
  };
  retro?: {
    date: {
      start: DateTime;
      completion: DateTime;
    };
  };
  details?: {
    extend?: {
      area: {
        squareMetres: number;
      };
    };
    new?: {
      area: {
        squareMetres: number;
      };
    };
  };
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
