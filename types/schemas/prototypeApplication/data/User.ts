import {PrimaryApplicationType} from '../enums/ApplicationType';

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
 * TypeMap of PrimaryApplicationTypes to their specific User models
 */
interface UserVariants {
  wtt: WTTUser;
  pp: PPUser;
}

/**
 * @internal
 * Conditional type to return a specific or generic User model, based on PrimaryApplicationType
 */
export type User<TPrimary extends PrimaryApplicationType> =
  TPrimary extends keyof UserVariants ? UserVariants[TPrimary] : UserBase;
