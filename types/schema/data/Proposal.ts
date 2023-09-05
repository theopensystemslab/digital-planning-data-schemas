import {ProjectTypes} from '../../enums/ProjectTypes';
import {DateTime} from '../../utils';

/**
 * @id #Proposal
 * @description Information about the project
 */
export interface Proposal {
  projectType: ProjectType[];
  description: string;
  date?: {
    start: DateTime;
    finish: DateTime;
  };
  time?: 'future' | 'past';
  completion?: '10plus' | '4plus' | 'lessThan4' | 'lessThan10';
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
