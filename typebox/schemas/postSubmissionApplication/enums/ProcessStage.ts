import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';

type submission = Static<typeof submission>;
const submission = Type.Literal('submission', {description: 'Submission'});

type validation = Static<typeof validation>;
const validation = Type.Literal('validation', {description: 'Validation'});

type consultation = Static<typeof consultation>;
const consultation = Type.Literal('consultation', {
  description: 'Consultation',
});

type assessment = Static<typeof assessment>;
const assessment = Type.Literal('assessment', {description: 'Assessment'});

type appeal = Static<typeof appeal>;
const appeal = Type.Literal('appeal', {description: 'Appeal'});

type highCourtAppeal = Static<typeof highCourtAppeal>;
const highCourtAppeal = Type.Literal('highCourtAppeal', {
  description: 'High court appeal',
});

export type ProcessStage = Static<typeof ProcessStage>;
export const ProcessStage = Type.Union(
  [submission, validation, consultation, assessment, appeal, highCourtAppeal],
  {
    id: '#ProcessStage',
    description: 'Stages of the planning application process',
  },
);
