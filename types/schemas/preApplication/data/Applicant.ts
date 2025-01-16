import {UserAddress} from '../../../shared/Addresses';
import {ContactDetails} from '../../../shared/Contacts';
import {SiteContact} from '../../../shared/SiteContact';
import {Agent} from '../../application/data/Applicant';

/**
 * @id #PreApplicant
 * @description The user who completed the pre-application either for themself or on behalf of someone else
 */
export type PreApplicant = BasePreApplicant | Agent;

/**
 * @id #BasePreApplicant
 * @description Information about the user who completed the pre-application for themself, or information about the person who the user applied on behalf of
 */
export type BasePreApplicant = ContactDetails & {
  type: 'individual' | 'company' | 'charity' | 'public' | 'parishCouncil';
  address: UserAddress;
  siteContact: SiteContact;
};
