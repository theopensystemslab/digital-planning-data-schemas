import {Type} from '@sinclair/typebox';
import type {Static, TSchema} from '@sinclair/typebox';

type ConsultationBase = Static<typeof ConsultationBase>;
const ConsultationBase = Type.Object({
  startDate: Type.String({format: 'date'}),
  endDate: Type.String({format: 'date'}),
  siteNotice: Type.Boolean({todo: 'expiry and extensions?'}),
});

type ConsultationVariants = Static<typeof ConsultationVariants>;
const ConsultationVariants = Type.Object({});

export type Consultation<T extends TSchema> = Static<
  ReturnType<typeof Consultation<T>>
>;
export const Consultation = <T extends TSchema>(T: T) =>
  Type.Extends(
    T,
    Type.KeyOf(ConsultationVariants),
    Type.Index(ConsultationVariants, T),
    ConsultationBase,
  );
