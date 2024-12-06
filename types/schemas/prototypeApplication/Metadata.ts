import {
  BaseMetadata,
  FeeExplanation,
  FeeExplanationNotApplicable,
} from '../../shared/Metadata';
import {URL, UUID} from '../../shared/utils';
import {Entity} from '../../shared/Entity';
import {PrototypeFileType} from './enums/FileType';
import {BasePlanningDesignation} from './enums/PlanningDesignation';

/**
 * @description File types requested by this service. Schema["files"] will be a subset of this list based on the user's journey through the service
 */
export interface PrototypeRequestedFiles {
  required: PrototypeFileType[];
  recommended: PrototypeFileType[];
  optional: PrototypeFileType[];
}

/**
 * @description Administrative data suggested by PlanX which the user overrode or changed
 */
export interface UserOverrides {
  property?: {
    type?: {
      sourceType: string;
      userType: string;
    };
    planning?: {
      designations: {
        value: BasePlanningDesignation;
        sourceIntersects: true;
        userIntersects: false;
        entities: Array<Entity & {userReason: string}>;
      }[];
    };
  };
}

export interface PrototypePlanXMetadata extends BaseMetadata {
  source: 'PlanX';
  service: {
    flowId: UUID;
    url: URL;
    files: PrototypeRequestedFiles;
    fee: FeeExplanation | FeeExplanationNotApplicable;
    overrides?: UserOverrides;
  };
}
