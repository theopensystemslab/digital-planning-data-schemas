import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';
import {User} from './User';

export type SiteContactOther = Static<typeof SiteContactOther>;
export const SiteContactOther = Type.Object(
  {
    role: Type.Literal('other'),
    name: Type.String(),
    email: Type.String(),
    phone: Type.String(),
  },
  {
    title: 'Site contact other',
    description:
      "Contact information for the site visit when the SiteContact's role is 'other'",
  },
);

export type SiteContact = Static<typeof SiteContact>;
export const SiteContact = Type.Object(
  {
    siteContact: Type.Union([
      Type.Object({
        role: Type.Index(User, Type.Literal('role')),
      }),
      SiteContactOther,
    ]),
  },
  {
    title: 'Site contact',
    description: 'Contact information for the site visit',
  },
);
