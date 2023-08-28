import {Email} from '../../utils';
import {User} from './User';

/**
 * @id #Applicant
 * @description The user who completed the application either for themself or on behalf of someone else
 */
export type Applicant = BaseApplicant | Agent;

/**
 * @id #BaseApplicant
 * @description Information about the user who completed the application for themself, or information about the resident who the user applied on behalf of
 */
export interface BaseApplicant {
  type: 'individual' | 'company' | 'charity' | 'public' | 'parishCouncil';
  contact: UserContact;
  address: UserAddress | UserAddressNotSameSite;
  siteContact: SiteContact | SiteContactOther;
}

/**
 * @id #Agent
 * @description Information about the user who completed the application on behalf of someone else
 */
export interface Agent extends BaseApplicant {
  agent: {
    contact: UserContact;
    address: UserAddress | UserAddressNotSameSite;
  };
}

/**
 * @id #UserContact
 * @description Contact information for any user
 */
export interface UserContact {
  name: {
    title?: string;
    first: string;
    last: string;
  };
  email: Email; // @todo only require for BaseApplicant OR Agent, not both
  phone: {
    primary: string; // @todo only require for BaseApplicant OR Agent, not both
  };
  company?: {
    name?: string;
  };
}

/**
 * @id #UserAddress
 * @description Address information for any user
 */
export interface UserAddress {
  sameAsSiteAddress: boolean;
}

/**
 * @id #UserAddressNotSameSite
 * @description Address information for any user when sameAsSiteAddress is false
 */
export interface UserAddressNotSameSite extends UserAddress {
  line1: string;
  line2?: string;
  town: string;
  county?: string;
  postcode: string;
  country?: string;
}

/**
 * @id #SiteContact
 * @description Contact information for the site visit
 */
export interface SiteContact {
  role: User['role'] | 'other'; // todo improve conditions based on true/false
}

/**
 * @id #SiteContactOther
 * @description Contact information for the site visit when the SiteContact's role is 'other'
 */
export interface SiteContactOther extends SiteContact {
  name: string;
  email: string;
  phone: string;
}
