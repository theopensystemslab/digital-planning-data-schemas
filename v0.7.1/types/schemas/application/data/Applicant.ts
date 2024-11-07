import {Date, Email} from '../../../shared/utils';
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
  ownership?: Ownership;
  siteContact: SiteContact;
  maintenanceContact?: MaintenanceContact;
}

/**
 * @id #Ownership
 * @description Information about the ownership certificate and property owners, if different than the applicant
 */
export interface Ownership {
  interest?:
    | 'owner'
    | 'owner.sole'
    | 'owner.co'
    | 'lessee'
    | 'occupier'
    | 'other';
  certificate?: 'a' | 'b' | 'c' | 'd';
  /**
   * @description Does the land have any agricultural tenants?
   */
  agriculturalTenants?: boolean;
  /**
   * @description Has requisite notice been given to all the known owners and agricultural tenants?
   */
  noticeGiven?: boolean;
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
  owners?: Owners[];
  /**
   * @description Declaration of the accuracy of the ownership certificate, including reasonable steps taken to find all owners and publish notice
   */
  declaration?: {
    accurate: true;
  };
}

/**
 * @id #Owners
 * @description Names and addresses of all known owners and agricultural tenants, including confirmation or date of notice, or reason requisite notice has not been given if applicable
 */
export type Owners = OwnersNoticeGiven | OwnersNoNoticeGiven | OwnersNoticeDate;

export interface BaseOwners {
  name: string;
  address: Address | string;
  interest?: 'owner' | 'lessee' | 'occupier' | 'other';
}

// LDC requires `noticeGiven`, and `noNoticeReason` if false
export interface OwnersNoticeGiven extends BaseOwners {
  noticeGiven: true;
}

export interface OwnersNoNoticeGiven extends BaseOwners {
  noticeGiven: false;
  noNoticeReason: string;
}

// PP & LBC require `noticeDate`
export interface OwnersNoticeDate extends BaseOwners {
  noticeDate: Date;
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

/**
 * @id #MaintenanceContact
 * @description Contact information for the person(s) responsible for maintenance while the works are carried out
 */
export type MaintenanceContact = {
  when:
    | 'duringConstruction'
    | 'afterConstruction'
    | 'duringAndAfterConstruction';
  address: Address;
  contact: {
    name: {
      title?: string;
      first: string;
      last: string;
    };
    email: string;
    phone: string;
    company?: {
      name: string;
    };
  };
}[];
