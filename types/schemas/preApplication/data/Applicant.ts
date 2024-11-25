import {Email} from '../../../shared/utils';
import {
  Agent,
  SiteContact,
  UserAddress,
} from '../../application/data/Applicant';

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
  siteContact: SiteContact;
}
