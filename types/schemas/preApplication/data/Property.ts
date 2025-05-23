import {PlanningDesignation} from '../../../shared/Constraints';
import {Site} from '../../../shared/Sites';
import {URL} from '../../../shared/utils';
import {PropertyType} from '../../application/enums/PropertyTypes';

export type Property = Site & {
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
  };
};
