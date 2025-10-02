import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';

type Design = Static<typeof Design>;
const Design = Type.Literal('design', {
  description:
    'Comment on the design, size or height of new buildings or extensions',
});

type Use = Static<typeof Use>;
const Use = Type.Literal('use', {
  description: 'Comment on the use and function of the proposed development',
});

type Light = Static<typeof Light>;
const Light = Type.Literal('light', {
  description: 'Comment on impacts on natural light',
});

type Privacy = Static<typeof Privacy>;
const Privacy = Type.Literal('privacy', {
  description: 'Comment on impacts to the privacy of neighbours',
});

type Access = Static<typeof Access>;
const Access = Type.Literal('access', {
  description: "Comment on impacts on disabled persons' access",
});

type Noise = Static<typeof Noise>;
const Noise = Type.Literal('noise', {
  description: 'Comment on any noise from new uses',
});

type Traffic = Static<typeof Traffic>;
const Traffic = Type.Literal('traffic', {
  description: 'Comment on impacts to traffic, parking or road safety',
});

type Other = Static<typeof Other>;
const Other = Type.Literal('other', {description: 'Comment on other things'});

export type PublicCommentTopic = Static<typeof PublicCommentTopic>;
export const PublicCommentTopic = Type.Union(
  [Design, Use, Light, Privacy, Access, Noise, Traffic, Other],
  {id: '#PublicCommentTopic', description: 'Types of comments'},
);
