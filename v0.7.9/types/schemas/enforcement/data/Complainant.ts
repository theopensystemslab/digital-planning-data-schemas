import {Address} from '../../../shared/Addresses';
import {ContactDetails} from '../../../shared/Contacts';

/**
 * @title Complainant
 * @description Contact details for the complainant filing the enforcement report
 */
export type Complainant = ContactDetails & {address: Address};
