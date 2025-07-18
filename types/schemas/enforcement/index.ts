import {GeoBoundary} from '../../shared/Boundaries';
import {PlanXMetadata} from '../../shared/Metadata';
import {Responses} from '../../shared/Responses';
import {Site} from '../../shared/Sites';
import {Date} from '../../shared/utils';
import {PropertyType} from '../application/enums/PropertyTypes';
import {File} from '../application/File';
import {Complainant} from './data/Complainant';
import {BreachType} from './enums/BreachTypes';

/**
 * @title Enforcement
 * @description The root specification for an enforcement report in England generated by a digital planning service
 */
export interface Enforcement {
  data: {
    application: {
      type: {
        value: 'breach';
        description: 'Report a planning breach';
      };
    };
    complainant: Complainant;
    /**
     * @description Details of the site
     */
    property: Site & {type: PropertyType};
    /**
     * @description Details of the enforcement report
     */
    report: {
      /**
       * @description Boundary of the enforcement breach
       */
      boundary: GeoBoundary;
      /**
       * @description Start and end date of the enforcement breach if applicable; ongoing breaches will not have an end date
       */
      date?: {
        start: Date;
        end?: Date;
      };
      /**
       * @description Description of the enforcement breach
       */
      description?: string;
      /**
       * @description Categorical type of enforcement breach
       */
      projectType?: (BreachType | {value: string; description?: string})[];
    };
  };
  responses: Responses;
  files?: File[];
  metadata: PlanXMetadata;
}
