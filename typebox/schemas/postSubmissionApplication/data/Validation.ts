import {Type} from '@sinclair/typebox';
import type {Static, TSchema} from '@sinclair/typebox';
import '../../../shared/formats';

type ValidationBase = Static<typeof ValidationBase>;
const ValidationBase = Type.Object({
  receivedAt: Type.String({format: 'date-time'}),
  validatedAt: Type.Optional(Type.String({format: 'date-time'})),
  isValid: Type.Optional(Type.Boolean()),
});

type ValidationVariants = Static<typeof ValidationVariants>;
const ValidationVariants = Type.Object({});

export type Validation<T extends TSchema> = Static<
  ReturnType<typeof Validation<T>>
>;
export const Validation = <T extends TSchema>(T: T) =>
  Type.Extends(
    T,
    Type.KeyOf(ValidationVariants),
    Type.Index(ValidationVariants, T),
    ValidationBase,
  );
