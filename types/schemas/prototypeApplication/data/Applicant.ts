import {Address, UserAddress} from '../../../shared/Addresses';
import {ContactDetails} from '../../../shared/Contacts';
import {MaintenanceContacts} from '../../../shared/MaintenanceContact';
import {
  OwnershipInterest,
  OwnersInterest,
  OwnersNoNoticeGiven,
  OwnersNoticeDate,
  OwnersNoticeGiven,
} from '../../../shared/Ownership';
import {SiteContact} from '../../../shared/SiteContact';
import {Date} from '../../../shared/utils';
import {ApplicationType} from '../enums/ApplicationType';

export type ApplicantBase = BaseApplicant | ApplicantWithAgent;

/**
 * @title Applicant
 * @description Details about the applicant
 */
export type BaseApplicant = ContactDetails & {
  /**
   * @description The type of applicant
   */
  type?: 'individual' | 'company' | 'charity' | 'public' | 'parishCouncil';
  /**
   * @description Address information for the applicant
   */
  address: UserAddress;
};

/**
 * @title Applicant with agent
 * @description Details about the applicant and the agent or proxy applying on their behalf
 */
export type ApplicantWithAgent = BaseApplicant & {
  /**
   * @description Contact information for the agent or proxy
   */
  agent: ContactDetails & {address: Address};
};

export type LDCApplicant = ApplicantBase &
  SiteContact & {
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

export type PPApplicant = ApplicantBase &
  SiteContact &
  MaintenanceContacts & {
    /**
     * @description Information about the ownership certificate and property owners, if different than the applicant
     */
    ownership: {
      interest: OwnersInterest;
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
  };

/**
 * TypeMap of granular application types to their specific Applicant models
 */
interface ApplicantVariants {
  advertConsent: ApplicantBase & SiteContact & OwnershipInterest;
  complianceConfirmation: ApplicantBase;
  hedgerowRemovalNotice: ApplicantBase & SiteContact & OwnershipInterest;
  landDrainageConsent: ApplicantBase & MaintenanceContacts & OwnershipInterest;
  'ldc.breachOfCondition': LDCApplicant;
  'ldc.existing': LDCApplicant;
  'ldc.proposed': LDCApplicant;
  'ldc.worksToListedBuilding': LDCApplicant;
  listed: PPApplicant;
  'pp.full.householder': PPApplicant;
  'pp.full.householder.retro': PPApplicant;
  'pp.full.major': PPApplicant;
  'pp.full.minor': PPApplicant;
  'wtt.consent': ApplicantBase;
  'wtt.notice': ApplicantBase;
}

/**
 * @internal Conditional type to return a specific or generic Applicant model
 */
export type Applicant<T extends ApplicationType> =
  T extends keyof ApplicantVariants ? ApplicantVariants[T] : ApplicantBase;
