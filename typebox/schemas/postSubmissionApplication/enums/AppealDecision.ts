import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';

type allowed = Static<typeof allowed>;
const allowed = Type.Literal('allowed', {description: 'allowed'});

type dismissed = Static<typeof dismissed>;
const dismissed = Type.Literal('dismissed', {description: 'dismissed'});

type splitDecision = Static<typeof splitDecision>;
const splitDecision = Type.Literal('splitDecision', {
  description: 'splitDecision',
});

type withdrawn = Static<typeof withdrawn>;
const withdrawn = Type.Literal('withdrawn', {description: 'withdrawn'});

export type AppealDecision = Static<typeof AppealDecision>;
export const AppealDecision = Type.Union(
  [allowed, dismissed, splitDecision, withdrawn],
  {id: '#AppealDecision', description: 'Types of comments'},
);
