import {PrimaryApplicationType} from '../enums/ApplicationType';

/**
 * Base type for ApplicationData. Contains all shared properties across all application types
 */
export interface ApplicationDataBase {
  somethingShared: string;
}

/**
 * @description Specific ApplicationData required for "Lawful Development Certificate" applications
 */
export interface LDCApplicationData extends ApplicationDataBase {
  ldcSpecificProperty: number;
}

/**
 * @description Specific ApplicationData required for "Prior Approval" applications
 */
export interface PAApplicationData extends ApplicationDataBase {
  paSpecificProperty: number;
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
  ldc: LDCApplicationData;
  pa: PAApplicationData;
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
