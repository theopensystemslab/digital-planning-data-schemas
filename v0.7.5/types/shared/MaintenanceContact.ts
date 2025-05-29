import {Address} from './Addresses';
import {ContactDetails} from './Contacts';

/**
 * @title Maintenance contacts
 * @description Contact information for the person(s) responsible for maintenance while the works are carried out
 */
export type MaintenanceContacts = {
  maintenanceContact?: {
    when:
      | 'duringConstruction'
      | 'afterConstruction'
      | 'duringAndAfterConstruction';
    address: Address;
    contact: ContactDetails;
  }[];
};
