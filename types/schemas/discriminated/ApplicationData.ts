import {
  ApplicationTypeKeys,
  PrimaryApplicationType,
} from '../digitalPlanningApplication/enums/ApplicationTypes';

/**
 * @internal
 * Base type for ApplicationData. Contains all shared properties across all application types
 */
export interface ApplicationDataBase<TGranular extends ApplicationTypeKeys> {
  applicationType: TGranular;
  somethingShared: string;
}

/**
 * @description Specific ApplicationData required for "Works to trees" applications
 */
export interface WTTApplicationData {
  wttSpecificProperty: number;
}

/**
 * @description Specific ApplicationData required for "Planning Permission" applications
 */
export interface PPApplicationData {
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
 * TPrimary and TGranular are both required as the granular variable is exposed, and must match the value in the Application root
 */
export type ApplicationData<
  TPrimary extends PrimaryApplicationType,
  TGranular extends ApplicationTypeKeys,
> = TPrimary extends keyof ApplicationDataVariants
  ? ApplicationDataVariants[TPrimary] & ApplicationDataBase<TGranular>
  : ApplicationDataBase<TGranular>;
