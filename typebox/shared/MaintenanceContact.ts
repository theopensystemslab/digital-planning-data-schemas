import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';
import {Address} from './Addresses';
import {ContactDetails} from './Contacts';

export type MaintenanceContacts = Static<typeof MaintenanceContacts>;
export const MaintenanceContacts = Type.Object(
  {
    maintenanceContact: Type.Optional(
      Type.Array(
        Type.Object({
          when: Type.Union([
            Type.Literal('duringConstruction'),
            Type.Literal('afterConstruction'),
            Type.Literal('duringAndAfterConstruction'),
          ]),
          address: Address,
          contact: ContactDetails,
        }),
      ),
    ),
  },
  {
    title: 'Maintenance contacts',
    description:
      'Contact information for the person(s) responsible for maintenance while the works are carried out',
  },
);
