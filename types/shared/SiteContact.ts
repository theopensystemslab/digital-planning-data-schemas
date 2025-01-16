import {User} from './User';

/**
 * @title #SiteContact
 * @description Contact information for the site visit
 */
export type SiteContact = {role: User['role']} | SiteContactOther;

/**
 * @title #SiteContactOther
 * @description Contact information for the site visit when the SiteContact's role is 'other'
 */
export interface SiteContactOther {
  role: 'other';
  name: string;
  email: string;
  phone: string;
}
