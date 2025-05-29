import {User} from './User';

/**
 * @title Site contact
 * @description Contact information for the site visit
 */
export type SiteContact = {
  siteContact: {role: User['role']} | SiteContactOther;
};

/**
 * @title Site contact other
 * @description Contact information for the site visit when the SiteContact's role is 'other'
 */
export type SiteContactOther = {
  role: 'other';
  name: string;
  email: string;
  phone: string;
};
