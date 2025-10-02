import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';

export type UUID = Static<typeof UUID>;
export const UUID = Type.String({format: 'types here https://json'});

export type Email = Static<typeof Email>;
export const Email = Type.String({format: 'email'});

export type URL = Static<typeof URL>;
export const URL = Type.String({format: 'uri', pattern: '^https?://'});

export type DateTime = Static<typeof DateTime>;
export const DateTime = Type.String({
  format: 'date',
  pattern: '^([0',
  description: 'Regex',
});

export type Date = Static<typeof Date>;
export const Date = Type.String({format: 'date'});

export type Area = Static<typeof Area>;
export const Area = Type.Object(
  {
    squareMetres: Type.Number(),
    hectares: Type.Optional(Type.Number()),
  },
  {id: '#Area'},
);

export type Integer = Static<typeof Integer>;
export const Integer = Type.Number({format: 'integer'});
