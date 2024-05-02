import {Date, Email} from '../../utils';
import {User} from './User';

/**
 * @id #Applicant
 * @description The user who completed the application either for themself or on behalf of someone else
 */
export type Applicant = BaseApplicant | Agent;

/**
 * @id #BaseApplicant
 * @description Information about the user who completed the application for themself, or information about the person who the user applied on behalf of
 */
export interface BaseApplicant {
  type: 'individual' | 'company' | 'charity' | 'public' | 'parishCouncil';
  name: {
    title?: string;
    first: string;
    last: string;
  };
  email: Email;
  phone: {
    primary: string;
  };
  company?: {
    name: string;
  };
  address: UserAddress;
  interest?:
    | 'owner'
    | 'owner.sole'
    | 'owner.co'
    | 'tenant'
    | 'occupier'
    | 'other';
  ownership?: Ownership;
  siteContact: SiteContact;
}

/**
 * @id #Ownership
 * @description Information about the ownership certificate and property owners, if different than the applicant
 */
export interface Ownership {
  certificate: 'a' | 'b' | 'c' | 'd';
  /**
   * @description Does the land have any agricultural tenants?
   */
  agriculturalTenants?: boolean;
  /**
   * @description Has requisite notice been given to all the known owners and agricultural tenants?
   */
  noticeGiven?: boolean;
  /**
   * @descrpition Reason requisite notice has not been given, if applicable
   */
  noticeReason?: string;
  /**
   * @description Has a notice of the application been published in a newspaper circulating in the area where the land is situated?
   */
  noticePublished?: {
    status: boolean;
    date?: Date;
    newspaperName?: string;
  };
  /**
   * @description Do you know the names and addresses of all owners and agricultural tenants?
   */
  ownersKnown?: 'all' | 'some' | 'none';
  /**
   * @description Names and addresses of all known owners and agricultural tenants
   */
  owners?: {
    name: string;
    address: Address | string;
    noticeDate?: Date;
  }[];
  /**
   * @description Declaration of the accuracy of the ownership certificate, including reasonable steps taken to find all owners and publish notice
   */
  declaration?: {
    accurate: boolean;
  };
}

/**
 * @id #Agent
 * @description Information about the agent or proxy who completed the application on behalf of someone else
 */
export interface Agent extends BaseApplicant {
  agent: {
    name: {
      title?: string;
      first: string;
      last: string;
    };
    email: Email;
    phone: {
      primary: string;
    };
    company?: {
      name: string;
    };
    address: Address;
  };
}

/**
 * @id #Address
 * @description Address information for a person associated with this application not at the property address
 */
export interface Address {
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
 * @description Address information for an applicant with contact information that differs from the property address
 */
export interface UserAddressNotSameSite extends Address {
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
