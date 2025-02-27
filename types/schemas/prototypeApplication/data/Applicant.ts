import {Address, UserAddress} from '../../../shared/Addresses';
import {ContactDetails} from '../../../shared/Contacts';
import {MaintenanceContacts} from '../../../shared/MaintenanceContact';
import {
  OwnersInterest,
  OwnersNoNoticeGiven,
  OwnersNoticeDate,
  OwnersNoticeGiven,
} from '../../../shared/Ownership';
import {SiteContact} from '../../../shared/SiteContact';
import {Date} from '../../../shared/utils';
import {PrimaryApplicationType} from '../enums/ApplicationType';

export type ApplicantBase = BaseApplicant | Agent;

export type BaseApplicant = ContactDetails & {
  /**
   * @description The type of applicant
   */
  type?: 'individual' | 'company' | 'charity' | 'public' | 'parishCouncil';
  /**
   * @description Address information for the applicant
   */
  address: UserAddress;
  /**
   * @description Contact information for the site visit
   */
  siteContact: SiteContact;
};

export interface Agent extends BaseApplicant {
  /**
   * @description Contact information for the agent or proxy
   */
  agent: ContactDetails & {address: Address};
}

export type LDCApplicant = ApplicantBase & {
  /**
   * @description Information about the property owners, if different than the applicant
   */
  ownership:
    | {interest: Extract<OwnersInterest, 'owner'>} // sole owner does not report `owners`
    | {
        interest: Extract<OwnersInterest, 'other'>;
        interestDescription: string; // "other" interest uniquely requires a free text description
        owners: (OwnersNoticeGiven | OwnersNoNoticeGiven)[];
      }
    | {
        interest: OwnersInterest; // `Exclude<OwnershipInterest, "owner">` ? But I think you can be co-owner & report other owners?
        owners: (OwnersNoticeGiven | OwnersNoNoticeGiven)[];
      };
};

export type PPApplicant = ApplicantBase & {
  /**
   * @description Information about the ownership certificate and property owners, if different than the applicant
   */
  ownership: {
    interest: OwnersInterest | 'owner.sole' | 'owner.co';
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
    interest: OwnersInterest | 'owner.sole' | 'owner.co';
  };
  /** @description Contact information for the person(s) responsible for maintenace while the works are carried out */
  maintenanceContact?: MaintenanceContacts;
};

export type WTTApplicant = Omit<ApplicantBase, 'siteContact'>;

export type HedgerowRemovalNoticeApplicant = ApplicantBase & {
  ownership: {
    interest: OwnersInterest | 'owner.sole' | 'owner.co';
  };
};

/**
 * TypeMap of PrimaryApplicationTypes to their specific Applicant models
 */
interface ApplicantVariants {
  ldc: LDCApplicant;
  pp: PPApplicant;
  landDrainageConsent: LandDrainageConsentApplicant;
  listed: PPApplicant;
  wtt: WTTApplicant;
  hedgerowRemovalNotice: HedgerowRemovalNoticeApplicant;
}

/**
 * @internal Conditional type to return a specific or generic Applicant model, based on PrimaryApplicationType
 */
export type Applicant<TPrimary extends PrimaryApplicationType> =
  TPrimary extends keyof ApplicantVariants
    ? ApplicantVariants[TPrimary]
    : ApplicantBase;
