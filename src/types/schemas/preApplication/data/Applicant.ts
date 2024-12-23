import {UserAddress} from '../../../shared/Addresses';
import {ContactDetails} from '../../../shared/Contacts';
import {Agent, SiteContact} from '../../application/data/Applicant';

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
  siteContact: SiteContact;
};
