import {Address} from './Addresses';
import {Date} from './utils';

export type OwnersInterest = 'owner' | 'lessee' | 'occupier' | 'other';

/**
 * @title #Ownership
 * @description Information about the ownership certificate and property owners, if different than the applicant
 */
export interface Ownership {
  interest?: OwnersInterest | 'owner.sole' | 'owner.co';
  interestDescription?: string;
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
 * @title #Owners
 * @description Names and addresses of all known owners and agricultural tenants who are not the applicant, including confirmation or date of notice, or reason requisite notice has not been given if applicable
 */
export type Owners = OwnersNoticeGiven | OwnersNoNoticeGiven | OwnersNoticeDate;

export interface BaseOwners {
  name: string;
  address: Address;
}

// PP & LBC require `noticeDate` (PlanX List schema "Ownership Certificate Owners")
export interface OwnersNoticeDate extends BaseOwners {
  noticeDate: Date;
}

// LDC requires `noticeGiven`, and `noNoticeReason` if false (PlanX List schema "Interest in Land LDC")
export interface OwnersInterestedInLand extends BaseOwners {
  interest: string;
}

export interface OwnersNoticeGiven extends OwnersInterestedInLand {
  noticeGiven: true;
}

export interface OwnersNoNoticeGiven extends OwnersInterestedInLand {
  noticeGiven: false;
  noNoticeReason: string;
}
