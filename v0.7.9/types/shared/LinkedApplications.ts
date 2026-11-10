import {Date} from './utils';

/**
 * @title Pre-application
 * @description Details of the pre-application preceeding this application, if applicable
 */
export interface PreApplication {
  reference: string;
  date?: Date;
  officer?: string;
  summary?: string;
}

/**
 * @title Planning application
 * @description Details of the planning application linked to this application, if applicable
 */
export interface PlanningApplication {
  reference: string;
  date: Date;
  localPlanningAuthority: string;
}
