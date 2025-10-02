import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';

type Objection = Static<typeof Objection>;
const Objection = Type.Literal('objection', {
  description: 'Objection comment',
});

type Neutral = Static<typeof Neutral>;
const Neutral = Type.Literal('neutral', {description: 'Neutral comment'});

type Supportive = Static<typeof Supportive>;
const Supportive = Type.Literal('supportive', {
  description: 'Supportive comment',
});

export type PublicCommentSentiment = Static<typeof PublicCommentSentiment>;
export const PublicCommentSentiment = Type.Union(
  [Objection, Neutral, Supportive],
  {
    id: '#PublicCommentSentiment',
    description: 'Types of comments',
  },
);

type Approved = Static<typeof Approved>;
const Approved = Type.Literal('approved', {description: 'Approved'});

type AmendmentsNeeded = Static<typeof AmendmentsNeeded>;
const AmendmentsNeeded = Type.Literal('amendmentsNeeded', {
  description: 'Amendments needed',
});

type Objected = Static<typeof Objected>;
const Objected = Type.Literal('objected', {description: 'Objected'});

export type SpecialistCommentSentiment = Static<
  typeof SpecialistCommentSentiment
>;
export const SpecialistCommentSentiment = Type.Union(
  [Approved, AmendmentsNeeded, Objected],
  {
    id: '#SpecialistCommentSentiment',
    description: 'Types of comments',
  },
);
