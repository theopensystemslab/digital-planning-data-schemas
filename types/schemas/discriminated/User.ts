import {PrimaryApplicationTypes} from '../digitalPlanningApplication/enums/ApplicationTypes';

export interface UserBase {
  role: 'applicant' | 'agent' | 'proxy';
}

export interface WTTUser extends UserBase {
  wttSpecificProperty: boolean;
}

export interface PPUser extends UserBase {
  ppSpecificProperty: boolean;
}

/**
 * @internal
 */
interface UserVariants {
  wtt: WTTUser;
  pp: PPUser;
}

/**
 * @internal
 */
export type User<T extends PrimaryApplicationTypes> =
  T extends keyof UserVariants
    ? UserVariants[T]
    : // Default value for non-specific application types
      UserBase;
