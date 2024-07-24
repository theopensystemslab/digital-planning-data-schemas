import {ApplicationTypeOf} from '.';
import {PrimaryApplicationTypes} from '../digitalPlanningApplication/enums/ApplicationTypes';

/**
 * @internal
 */
interface ApplicationDataBase<T extends PrimaryApplicationTypes> {
  applicationType: ApplicationTypeOf<T>;
}

export interface WTTApplicationData extends ApplicationDataBase<'wtt'> {
  wttSpecificProperty: number;
}

export interface PPApplicationData extends ApplicationDataBase<'pp'> {
  ppSpecificProperty: number;
}

export type PAApplicationData = ApplicationDataBase<'pa'>;

/**
 * @internal
 */
interface ApplicationDataVariants {
  wtt: WTTApplicationData;
  pp: PAApplicationData;
  pa: PPApplicationData;
}

/**
 * @internal
 */
export type ApplicationData<T extends PrimaryApplicationTypes> =
  T extends keyof ApplicationDataVariants
    ? ApplicationDataVariants[T]
    : // No fallback, all ApplicationData variants require a primary type
      never;
