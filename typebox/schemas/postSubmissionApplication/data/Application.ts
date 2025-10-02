import {CloneType, Type} from '@sinclair/typebox';
import type {Static, TSchema} from '@sinclair/typebox';
import {ProcessStage} from '../enums/ProcessStage';
import {ApplicationStatus} from '../enums/ApplicationStatus';
import '../../../shared/formats';

type ApplicationBase = Static<typeof ApplicationBase>;
const ApplicationBase = Type.Object({
  reference: Type.String({
    todo: 'this needs to be added into other application schemas',
  }),
  stage: CloneType(ProcessStage, {
    todo: 'certain application types do not have a consultation phase',
  }),
  status: ApplicationStatus,
  withdrawnAt: Type.Optional(Type.String({format: 'date-time'})),
  withdrawnReason: Type.Optional(Type.String()),
  publishedAt: Type.Optional(Type.String({format: 'date-time'})),
});

type ApplicationVariants = Static<typeof ApplicationVariants>;
const ApplicationVariants = Type.Object({});

export type Application<T extends TSchema> = Static<
  ReturnType<typeof Application<T>>
>;
export const Application = <T extends TSchema>(T: T) =>
  Type.Extends(
    T,
    Type.KeyOf(ApplicationVariants),
    Type.Index(ApplicationVariants, T),
    ApplicationBase,
  );
