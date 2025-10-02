import {CloneType, Type} from '@sinclair/typebox';
import type {Static, TSchema} from '@sinclair/typebox';
import {
  OwnershipInterest,
  OwnersInterest,
  OwnersNoNoticeGiven,
  OwnersNoticeDate,
  OwnersNoticeGiven,
} from '../../../shared/Ownership';
import {SiteContact} from '../../../shared/SiteContact';
import {ContactDetails} from '../../../shared/Contacts';
import {Address, UserAddress} from '../../../shared/Addresses';
import {MaintenanceContacts} from '../../../shared/MaintenanceContact';

export type BaseApplicant = Static<typeof BaseApplicant>;
export const BaseApplicant = Type.Intersect(
  [
    ContactDetails,
    Type.Object({
      type: Type.Optional(
        Type.Union(
          [
            Type.Literal('individual'),
            Type.Literal('company'),
            Type.Literal('charity'),
            Type.Literal('public'),
            Type.Literal('parishCouncil'),
          ],
          {description: 'The type of applicant'},
        ),
      ),
      address: CloneType(UserAddress, {
        description: 'Address information for the applicant',
      }),
    }),
  ],
  {title: 'Applicant', description: 'Details about the applicant'},
);

export type ApplicantWithAgent = Static<typeof ApplicantWithAgent>;
export const ApplicantWithAgent = Type.Intersect(
  [
    BaseApplicant,
    Type.Object({
      agent: Type.Intersect(
        [
          ContactDetails,
          Type.Object({
            address: Address,
          }),
        ],
        {description: 'Contact information for the agent or proxy'},
      ),
    }),
  ],
  {
    title: 'Applicant with agent',
    description:
      'Details about the applicant and the agent or proxy applying on their behalf',
  },
);

export type ApplicantBase = Static<typeof ApplicantBase>;
export const ApplicantBase = Type.Union([BaseApplicant, ApplicantWithAgent]);

export type LDCApplicant = Static<typeof LDCApplicant>;
export const LDCApplicant = Type.Intersect([
  ApplicantBase,
  SiteContact,
  Type.Object({
    ownership: Type.Union(
      [
        Type.Object({
          interest: Type.Extract(OwnersInterest, Type.Literal('owner')),
        }),
        Type.Object({
          interest: Type.Extract(OwnersInterest, Type.Literal('other')),
          interestDescription: Type.String(),
          owners: Type.Array(
            Type.Union([OwnersNoticeGiven, OwnersNoNoticeGiven]),
          ),
        }),
        Type.Object({
          interest: OwnersInterest,
          owners: Type.Array(
            Type.Union([OwnersNoticeGiven, OwnersNoNoticeGiven]),
          ),
        }),
      ],
      {
        description:
          'Information about the property owners, if different than the applicant',
      },
    ),
  }),
]);

export type PPApplicant = Static<typeof PPApplicant>;
export const PPApplicant = Type.Intersect([
  ApplicantBase,
  SiteContact,
  MaintenanceContacts,
  Type.Object({
    ownership: Type.Object(
      {
        interest: OwnersInterest,
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
        owners: Type.Optional(Type.Array(OwnersNoticeDate)),
        certificate: Type.Union([
          Type.Literal('a'),
          Type.Literal('b'),
          Type.Literal('c'),
          Type.Literal('d'),
        ]),
        declaration: Type.Object(
          {
            accurate: Type.Literal(true),
          },
          {
            description:
              'Declaration of the accuracy of the ownership certificate, including reasonable steps taken to find all owners and publish notice',
          },
        ),
      },
      {
        description:
          'Information about the ownership certificate and property owners, if different than the applicant',
      },
    ),
  }),
]);

type ApplicantVariants = Static<typeof ApplicantVariants>;
const ApplicantVariants = Type.Object({
  advertConsent: Type.Intersect([
    ApplicantBase,
    SiteContact,
    OwnershipInterest,
  ]),
  complianceConfirmation: Type.Intersect([ApplicantBase, OwnershipInterest]),
  hedgerowRemovalNotice: Type.Intersect([
    ApplicantBase,
    SiteContact,
    OwnershipInterest,
  ]),
  landDrainageConsent: Type.Intersect([
    ApplicantBase,
    MaintenanceContacts,
    OwnershipInterest,
  ]),
  'ldc.breachOfCondition': LDCApplicant,
  'ldc.existing': LDCApplicant,
  'ldc.proposed': LDCApplicant,
  'ldc.worksToListedBuilding': LDCApplicant,
  listed: PPApplicant,
  'pp.full.householder': PPApplicant,
  'pp.full.householder.retro': PPApplicant,
  'pp.full.major': PPApplicant,
  'pp.full.minor': PPApplicant,
  'wtt.consent': ApplicantBase,
  'wtt.notice': ApplicantBase,
});

export type Applicant<T extends TSchema> = Static<
  ReturnType<typeof Applicant<T>>
>;
export const Applicant = <T extends TSchema>(T: T) =>
  Type.Extends(
    T,
    Type.KeyOf(ApplicantVariants),
    Type.Index(ApplicantVariants, T),
    ApplicantBase,
  );
