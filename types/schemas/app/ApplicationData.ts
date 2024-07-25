import {PrimaryApplicationType} from '../digitalPlanningApplication/enums/ApplicationTypes';

/**
 * Base type for ApplicationData. Contains all shared properties across all application types
 */
export interface ApplicationDataBase {
  somethingShared: string;
}

/**
 * @description Specific ApplicationData required for "Works to trees" applications
 */
export interface WTTApplicationData extends ApplicationDataBase {
  wttSpecificProperty: number;
}

/**
 * @description Specific ApplicationData required for "Planning Permission" applications
 */
export interface PPApplicationData extends ApplicationDataBase {
  ppSpecificProperty: number;
}

/**
 * TypeMap of PrimaryApplicationTypes to their specific ApplicationData models
 */
export interface ApplicationDataVariants {
  wtt: WTTApplicationData;
  pp: PPApplicationData;
}

/**
 * @internal
 * Conditional type to return a specific or generic ApplicationData model, based on PrimaryApplicationType
 */
export type ApplicationData<TPrimary extends PrimaryApplicationType> =
  TPrimary extends keyof ApplicationDataVariants
    ? ApplicationDataVariants[TPrimary]
    : ApplicationDataBase;
