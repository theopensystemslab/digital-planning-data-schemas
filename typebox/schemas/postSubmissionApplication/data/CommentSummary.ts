import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';
import {
  PublicCommentSentiment,
  SpecialistCommentSentiment,
} from '../enums/CommentSentiment';

type CommentSummaryBase = Static<typeof CommentSummaryBase>;
const CommentSummaryBase = Type.Object({
  totalComments: Type.Number(),
});

export type PublicCommentSummary = Static<typeof PublicCommentSummary>;
export const PublicCommentSummary = Type.Composite(
  [
    CommentSummaryBase,
    Type.Object({
      sentiment: Type.Record(PublicCommentSentiment, Type.Number()),
    }),
  ],
  {id: '#PublicCommentsSummary'},
);

export type SpecialistCommentSummary = Static<typeof SpecialistCommentSummary>;
export const SpecialistCommentSummary = Type.Composite(
  [
    CommentSummaryBase,
    Type.Object({
      totalConsulted: Type.Number(),
      sentiment: Type.Record(SpecialistCommentSentiment, Type.Number()),
    }),
  ],
  {id: '#SpecialistCommentsSummary'},
);
