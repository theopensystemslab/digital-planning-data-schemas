import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';
import {Address} from './Addresses';

export type BaseOwners = Static<typeof BaseOwners>;
export const BaseOwners = Type.Object({
  name: Type.String(),
  address: Address,
});

export type OwnersNoticeDate = Static<typeof OwnersNoticeDate>;
export const OwnersNoticeDate = Type.Composite([
  BaseOwners,
  Type.Object({
    noticeDate: Type.Date(),
  }),
]);

export type OwnersInterestedInLand = Static<typeof OwnersInterestedInLand>;
export const OwnersInterestedInLand = Type.Composite([
  BaseOwners,
  Type.Object({
    interest: Type.String(),
  }),
]);

export type OwnersNoticeGiven = Static<typeof OwnersNoticeGiven>;
export const OwnersNoticeGiven = Type.Composite([
  OwnersInterestedInLand,
  Type.Object({
    noticeGiven: Type.Literal(true),
  }),
]);

export type OwnersNoNoticeGiven = Static<typeof OwnersNoNoticeGiven>;
export const OwnersNoNoticeGiven = Type.Composite([
  OwnersInterestedInLand,
  Type.Object({
    noticeGiven: Type.Literal(false),
    noNoticeReason: Type.String(),
  }),
]);

export type OwnersInterest = Static<typeof OwnersInterest>;
export const OwnersInterest = Type.Union([
  Type.Literal('owner'),
  Type.Literal('owner.sole'),
  Type.Literal('owner.co'),
  Type.Literal('lessee'),
  Type.Literal('occupier'),
  Type.Literal('other'),
]);

export type OwnershipInterest = Static<typeof OwnershipInterest>;
export const OwnershipInterest = Type.Object(
  {
    ownership: Type.Object({
      interest: OwnersInterest,
    }),
  },
  {
    title: 'Ownership interest',
    description:
      "Information about the applicant's relationship to the property owners",
  },
);

export type Owners = Static<typeof Owners>;
export const Owners = Type.Union(
  [OwnersNoticeGiven, OwnersNoNoticeGiven, OwnersNoticeDate],
  {
    title: '#Owners',
    description:
      'Names and addresses of all known owners and agricultural tenants who are not the applicant, including confirmation or date of notice, or reason requisite notice has not been given if applicable',
  },
);

export type Ownership = Static<typeof Ownership>;
export const Ownership = Type.Object(
  {
    interest: Type.Optional(OwnersInterest),
    interestDescription: Type.Optional(Type.String()),
    certificate: Type.Optional(
      Type.Union([
        Type.Literal('a'),
        Type.Literal('b'),
        Type.Literal('c'),
        Type.Literal('d'),
      ]),
    ),
    agriculturalTenants: Type.Optional(
      Type.Boolean({
        description: 'Does the land have any agricultural tenants?',
      }),
    ),
    noticeGiven: Type.Optional(
      Type.Boolean({
        description:
          'Has requisite notice been given to all the known owners and agricultural tenants?',
      }),
    ),
    noticePublished: Type.Optional(
      Type.Object(
        {
          status: Type.Boolean(),
          date: Type.Optional(Type.Date()),
          newspaperName: Type.Optional(Type.String()),
        },
        {
          description:
            'Has a notice of the application been published in a newspaper circulating in the area where the land is situated?',
        },
      ),
    ),
    ownersKnown: Type.Optional(
      Type.Union(
        [Type.Literal('all'), Type.Literal('some'), Type.Literal('none')],
        {
          description:
            'Do you know the names and addresses of all owners and agricultural tenants?',
        },
      ),
    ),
    owners: Type.Optional(Type.Array(Owners)),
    declaration: Type.Optional(
      Type.Object(
        {
          accurate: Type.Literal(true),
        },
        {
          description:
            'Declaration of the accuracy of the ownership certificate, including reasonable steps taken to find all owners and publish notice',
        },
      ),
    ),
  },
  {
    title: '#Ownership',
    description:
      'Information about the ownership certificate and property owners, if different than the applicant',
  },
);
