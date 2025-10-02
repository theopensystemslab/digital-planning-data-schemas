import {Type} from '@sinclair/typebox';
import type {Static, TSchema} from '@sinclair/typebox';
import '../../../shared/formats';

type SubmissionBase = Static<typeof SubmissionBase>;
const SubmissionBase = Type.Object({
  submittedAt: Type.String({format: 'date-time'}),
});

type SubmissionVariants = Static<typeof SubmissionVariants>;
const SubmissionVariants = Type.Object({});

export type Submission<T extends TSchema> = Static<
  ReturnType<typeof Submission<T>>
>;
export const Submission = <T extends TSchema>(T: T) =>
  Type.Extends(
    T,
    Type.KeyOf(SubmissionVariants),
    Type.Index(SubmissionVariants, T),
    SubmissionBase,
  );
