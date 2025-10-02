import {Type} from '@sinclair/typebox';
import type {Static, TSchema} from '@sinclair/typebox';

export type CaseOfficerBase = Static<typeof CaseOfficerBase>;
export const CaseOfficerBase = Type.Object({
  name: Type.String(),
});

type CaseOfficerVariants = Static<typeof CaseOfficerVariants>;
const CaseOfficerVariants = Type.Object({});

export type CaseOfficer<T extends TSchema> = Static<
  ReturnType<typeof CaseOfficer<T>>
>;
export const CaseOfficer = <T extends TSchema>(T: T) =>
  Type.Extends(
    T,
    Type.KeyOf(CaseOfficerVariants),
    Type.Index(CaseOfficerVariants, T),
    CaseOfficerBase,
  );
