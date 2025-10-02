import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';

export type SiteAddress = Static<typeof SiteAddress>;
export const SiteAddress = Type.Object(
  {
    title: Type.String({description: 'Single line address description'}),
    x: Type.Number({
      description: 'Easting coordinate in British National Grid (OSGB36)',
    }),
    y: Type.Number({
      description: 'Northing coordinate in British National Grid (OSGB36)',
    }),
    latitude: Type.Number({
      description: 'Latitude coordinate in EPSG:4326 (WGS84)',
    }),
    longitude: Type.Number({
      description: 'Longitude coordinate in EPSG:4326 (WGS84)',
    }),
  },
  {
    description:
      'Address information available for any site, whether existing or proposed',
  },
);

export type ProposedAddress = Static<typeof ProposedAddress>;
export const ProposedAddress = Type.Composite(
  [
    SiteAddress,
    Type.Object({
      source: Type.Literal('Proposed by applicant'),
    }),
  ],
  {
    title: 'Proposed site address',
    description:
      'Address information for sites without a known Unique Property Reference Number (UPRN)',
  },
);

export type OSAddress = Static<typeof OSAddress>;
export const OSAddress = Type.Composite(
  [
    SiteAddress,
    Type.Object({
      uprn: Type.String({
        title: 'Unique Property Reference Number',
        maxLength: 12,
      }),
      usrn: Type.String({
        title: 'Unique Street Reference Number',
        maxLength: 8,
      }),
      pao: Type.String({
        title:
          'Primary Addressable Object (PAO) start range and/or building description',
        description:
          'Combined `PAO_START_NUMBER`, `PAO_START_SUFFIX`, `PAO_TEXT` OS LPI properties',
      }),
      paoEnd: Type.Optional(
        Type.String({
          title: 'Primary Addressable Object (PAO) end range',
          description:
            'Combined `PAO_END_NUMBER`, `PAO_END_SUFFIX` OS LPI properties',
        }),
      ),
      sao: Type.Optional(
        Type.String({
          title:
            'Secondary Addressable Object (SAO) start range and/or building description',
          description:
            'Combined `SAO_START_NUMBER`, `SAO_START_SUFFIX`, `SAO_TEXT` OS LPI properties',
        }),
      ),
      saoEnd: Type.Optional(
        Type.String({
          title: 'Secondary Addressable Object (SAO) end range',
          description:
            'Combined `SAO_END_NUMBER`, `SAO_END_SUFFIX` OS LPI properties',
        }),
      ),
      street: Type.String(),
      town: Type.String(),
      postcode: Type.String(),
      organisation: Type.Optional(Type.String()),
      singleLine: Type.String(),
      source: Type.Literal('Ordnance Survey'),
    }),
  ],
  {
    title: 'OS site address',
    description:
      'Address information for sites with a known address sourced from Ordnance Survey AddressBase Premium LPI source',
  },
);

export type Address = Static<typeof Address>;
export const Address = Type.Object(
  {
    line1: Type.String(),
    line2: Type.Optional(Type.String()),
    town: Type.String(),
    county: Type.Optional(Type.String()),
    postcode: Type.String(),
    country: Type.Optional(Type.String()),
  },
  {
    title: 'Contact address',
    description:
      'Address information for a person associated with this application not at the site address',
  },
);

export type UserAddressNotSameSite = Static<typeof UserAddressNotSameSite>;
export const UserAddressNotSameSite = Type.Composite(
  [
    Address,
    Type.Object({
      sameAsSiteAddress: Type.Literal(false),
    }),
  ],
  {
    description:
      'Address information for an applicant with contact information that differs from the site address',
  },
);

export type UserAddress = Static<typeof UserAddress>;
export const UserAddress = Type.Union(
  [
    Type.Object({
      sameAsSiteAddress: Type.Literal(true),
    }),
    UserAddressNotSameSite,
  ],
  {
    title: 'User address',
    description: 'Address information for the applicant',
  },
);
