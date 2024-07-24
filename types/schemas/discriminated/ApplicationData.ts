import {
  ApplicationTypeKeys,
  PrimaryApplicationTypes,
} from '../digitalPlanningApplication/enums/ApplicationTypes';

/**
 * @internal
 */
export interface ApplicationDataBase<TGranular extends ApplicationTypeKeys> {
  applicationType: TGranular;
  somethingShared: string;
}

export interface WTTApplicationData {
  wttSpecificProperty: number;
}

export interface PPApplicationData {
  ppSpecificProperty: number;
}

/**
 * @internal
 */
export interface ApplicationDataVariants {
  wtt: WTTApplicationData;
  pp: PPApplicationData;
}

/**
 * @internal
 */
export type ApplicationData<
  TPrimary extends PrimaryApplicationTypes,
  TGranular extends ApplicationTypeKeys,
> = TPrimary extends keyof ApplicationDataVariants
  ? ApplicationDataVariants[TPrimary] & ApplicationDataBase<TGranular>
  : // Fallback to shared values only
    ApplicationDataBase<TGranular>;
