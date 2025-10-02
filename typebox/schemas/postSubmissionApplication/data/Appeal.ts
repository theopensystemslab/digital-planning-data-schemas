import {Type, type Static, type TSchema} from '@sinclair/typebox';
import {AppealDecision} from '../enums/AppealDecision';
import '../../../shared/formats';
import {PostSubmissionFileRedacted} from './File';

export type AppealBase = Static<typeof AppealBase>;
export const AppealBase = Type.Object({
  reason: Type.String(),
  lodgedDate: Type.String({format: 'date'}),
  validatedDate: Type.Optional(Type.String({format: 'date'})),
  startedDate: Type.Optional(Type.String({format: 'date'})),
  decisionDate: Type.Optional(Type.String({format: 'date'})),
  decision: Type.Optional(AppealDecision),
  files: Type.Optional(Type.Array(PostSubmissionFileRedacted)),
});

type AppealVariants = Static<typeof AppealVariants>;
const AppealVariants = Type.Object({});

export type Appeal<T extends TSchema> = Static<
  ReturnType<typeof AppealSchema<T>>
>;
export const AppealSchema = <T extends TSchema>(T: T) =>
  Type.Extends(
    T,
    Type.KeyOf(AppealVariants),
    Type.Index(AppealVariants, T),
    AppealBase,
  );
