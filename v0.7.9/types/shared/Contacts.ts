import {Email} from './utils';

/**
 * @title Contact details
 * @description Contact details for a person associated with this application
 */
export type ContactDetails = {
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
};
