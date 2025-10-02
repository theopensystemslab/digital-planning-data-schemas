import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';

type granted = Static<typeof granted>;
const granted = Type.Literal('granted', {description: 'Granted'});

type refused = Static<typeof refused>;
const refused = Type.Literal('refused', {description: 'Refused'});

export type AssessmentDecision = Static<typeof AssessmentDecision>;
export const AssessmentDecision = Type.Union([granted, refused], {
  id: '#AssessmentDecision',
  description: 'Types of comments',
});
