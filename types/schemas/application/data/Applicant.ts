import {Address, UserAddress} from '../../../shared/Addresses';
import {ContactDetails} from '../../../shared/Contacts';
import {Ownership} from '../../../shared/Ownership';
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
export type BaseApplicant = ContactDetails & {
  type: 'individual' | 'company' | 'charity' | 'public' | 'parishCouncil';
  address: UserAddress;
  ownership?: Ownership;
  siteContact: SiteContact;
  maintenanceContact?: MaintenanceContact;
};

/**
 * @id #Agent
 * @description Information about the agent or proxy who completed the application on behalf of someone else
 */
export interface Agent extends BaseApplicant {
  agent: ContactDetails & {address: Address};
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
  contact: ContactDetails;
}[];
