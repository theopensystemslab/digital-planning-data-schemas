import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';

export type Region = Static<typeof Region>;
export const Region = Type.Union(
  [
    Type.Literal('North East'),
    Type.Literal('North West'),
    Type.Literal('Yorkshire and The Humber'),
    Type.Literal('East Midlands'),
    Type.Literal('West Midlands'),
    Type.Literal('East of England'),
    Type.Literal('London'),
    Type.Literal('South East'),
    Type.Literal('South West'),
  ],
  {
    title: 'Region',
    description:
      "The region in England that contains this address sourced from planning.data.gov.uk/dataset/region, where 'London' is a proxy for the Greater London Authority (GLA) area",
  },
);
