import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';
import './formats';

export type ContactDetails = Static<typeof ContactDetails>;
export const ContactDetails = Type.Object(
  {
    name: Type.Object({
      title: Type.Optional(Type.String()),
      first: Type.String(),
      last: Type.String(),
    }),
    email: Type.String({format: 'email'}),
    phone: Type.Object({
      primary: Type.String(),
    }),
    company: Type.Optional(
      Type.Object({
        name: Type.String(),
      }),
    ),
  },
  {
    title: 'Contact details',
    description:
      'Contact details for a person associated with this application',
  },
);
