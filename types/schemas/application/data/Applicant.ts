import {Address, UserAddress} from '../../../shared/Addresses';
import {ContactDetails} from '../../../shared/Contacts';
import {MaintenanceContacts} from '../../../shared/MaintenanceContact';
import {Ownership} from '../../../shared/Ownership';
import {SiteContact} from '../../../shared/SiteContact';

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
  maintenanceContact?: MaintenanceContacts;
};

/**
 * @id #Agent
 * @description Information about the agent or proxy who completed the application on behalf of someone else
 */
export interface Agent extends BaseApplicant {
  agent: ContactDetails & {address: Address};
}
