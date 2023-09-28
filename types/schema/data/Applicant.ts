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
  interest?: 'owner.sole' | 'owner.co' | 'tenant' | 'occupier';
  contact: UserContact;
  address: UserAddress;
  siteContact: SiteContact;
}

/**
 * @id #Agent
 * @description Information about the user who completed the application on behalf of someone else
 */
export interface Agent extends BaseApplicant {
  agent: {
    contact: UserContact;
    address: AddressInput;
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
 * @id #AddressInput
 * @description Address information for an applicant contact rather than site
 */
export interface AddressInput {
  line1: string;
  line2?: string;
  town: string;
  county?: string;
  postcode: string;
  country?: string;
}

/**
 * @id #UserAddress
 * @description Address information for the applicant
 */
export type UserAddress = {sameAsSiteAddress: true} | UserAddressNotSameSite;

/**
 * @id #UserAddressNotSameSite
 * @description Address information for any user who's contact information differs from the site address
 */
export interface UserAddressNotSameSite extends AddressInput {
  sameAsSiteAddress: false;
}

/**
 * @id #SiteContact
 * @description Contact information for the site visit
 */
export type SiteContact = {role: User['role']} | SiteContactOther;

/**
 * @id #SiteContactOther
 * @description Contact information for the site visit when the SiteContact's role is 'other'
 */
export interface SiteContactOther {
  role: 'other';
  name: string;
  email: string;
  phone: string;
}
