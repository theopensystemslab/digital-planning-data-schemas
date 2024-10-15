import {Date, Email} from '../../../shared/utils';
import {PrimaryApplicationType} from '../enums/ApplicationType';
import {UserRoles} from './User';

export type ApplicantBase = BaseApplicant | Agent;

export type BaseApplicant = ContactDetails & {
  /**
   * @description The type of applicant
   */
  type: 'individual' | 'company' | 'charity' | 'public' | 'parishCouncil';
  /**
   * @description Address information for the applicant
   */
  address: ApplicantAddress;
  /**
   * @description Contact information for the site visit
   */
  siteContact: SiteContact;
};

export interface Agent extends BaseApplicant {
  /**
   * @description Contact information for the agent or proxy
   */
  agent: ContactDetails & {address: UserAddress};
}

export type SiteContact = {role: UserRoles} | SiteContactOther;

export interface SiteContactOther {
  role: 'other';
  name: string;
  email: string;
  phone: string;
}

export type ContactDetails = {
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
};

export type UserAddress = {
  line1: string;
  line2?: string;
  town: string;
  county?: string;
  postcode: string;
  country?: string;
};

export type ApplicantAddress =
  | {sameAsSiteAddress: true}
  | ApplicantAddressNotSameSite;

export interface ApplicantAddressNotSameSite extends UserAddress {
  sameAsSiteAddress: false;
}

export type OwnershipInterest = 'owner' | 'lessee' | 'occupier' | 'other';

export interface BaseOwners {
  name: string;
  address: UserAddress | string;
  interest?: OwnershipInterest;
}

export interface OwnersNoticeGiven extends BaseOwners {
  noticeGiven: true;
}

export interface OwnersNoNoticeGiven extends BaseOwners {
  noticeGiven: false;
  noNoticeReason: string;
}

export interface OwnersNoticeDate extends BaseOwners {
  noticeDate: Date;
}

export type MaintenanceContacts = {
  when:
    | 'duringConstruction'
    | 'afterConstruction'
    | 'duringAndAfterConstruction';
  address: UserAddress;
  contact: ContactDetails;
}[];

export type LDCApplicant = ApplicantBase & {
  /**
   * @description Information about the property owners, if different than the applicant
   */
  ownership:
    | {interest: Extract<OwnershipInterest, 'owner'>}
    | {
        interest: OwnershipInterest; // `Exclude<OwnershipInterest, "owner">` ? But I think you can be co owner & report other owners?
        owners: (OwnersNoticeGiven | OwnersNoNoticeGiven)[];
      };
};

export type PPApplicant = ApplicantBase & {
  /**
   * @description Information about the ownership certificate and property owners, if different than the applicant
   */
  ownership: {
    interest: OwnershipInterest | 'owner.sole' | 'owner.co';
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
    owners?: OwnersNoticeDate[];
    certificate: 'a' | 'b' | 'c' | 'd';
    /**
     * @description Declaration of the accuracy of the ownership certificate, including reasonable steps taken to find all owners and publish notice
     */
    declaration: {
      accurate: true;
    };
  };
  /**
   * @description Contact information for the person(s) responsible for maintenace while the works are carried out
   */
  maintenanceContact?: MaintenanceContacts;
};

export type LandDrainageConsentApplicant = ApplicantBase & {
  ownership: {
    interest: OwnershipInterest | 'owner.sole' | 'owner.co';
  };
  /** @description Contact information for the person(s) responsible for maintenace while the works are carried out */
  maintenanceContact?: MaintenanceContacts;
};

/**
 * TypeMap of PrimaryApplicationTypes to their specific Applicant models
 */
interface ApplicantVariants {
  ldc: LDCApplicant;
  pp: PPApplicant;
  landDrainageConsent: LandDrainageConsentApplicant;
  listed: PPApplicant;
}

/**
 * @internal Conditional type to return a specific or generic Applicant model, based on PrimaryApplicationType
 */
export type Applicant<TPrimary extends PrimaryApplicationType> =
  TPrimary extends keyof ApplicantVariants
    ? ApplicantVariants[TPrimary]
    : ApplicantBase;
