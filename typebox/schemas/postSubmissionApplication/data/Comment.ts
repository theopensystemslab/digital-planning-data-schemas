import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';
import {PublicCommentSummary, SpecialistCommentSummary} from './CommentSummary';
import {PublicComment, PublicCommentRedacted} from './PublicComment';
import {Specialist, SpecialistRedacted} from './SpecialistComment';

export type PublicComments = Static<typeof PublicComments>;
export const PublicComments = Type.Object(
  {
    summary: PublicCommentSummary,
    comments: Type.Array(PublicComment),
  },
  {
    id: '#PublicComments',
    description: 'The ordered list of public comments any associated metadata',
  },
);

export type PublicCommentsRedacted = Static<typeof PublicCommentsRedacted>;
export const PublicCommentsRedacted = Type.Object(
  {
    summary: PublicCommentSummary,
    comments: Type.Array(PublicCommentRedacted),
  },
  {
    id: '#PublicCommentsRedacted',
    description: 'The ordered list of public comments any associated metadata',
  },
);

export type SpecialistComments = Static<typeof SpecialistComments>;
export const SpecialistComments = Type.Object(
  {
    summary: SpecialistCommentSummary,
    comments: Type.Array(Specialist),
  },
  {
    id: '#SpecialistComments',
    description:
      'The ordered list of specialist comments any associated metadata',
  },
);

export type SpecialistCommentsRedacted = Static<
  typeof SpecialistCommentsRedacted
>;
export const SpecialistCommentsRedacted = Type.Object(
  {
    summary: SpecialistCommentSummary,
    comments: Type.Array(SpecialistRedacted),
  },
  {
    id: '#SpecialistCommentsRedacted',
    description:
      'The ordered list of specialist comments any associated metadata',
  },
);
