import {Type, type Static} from '@sinclair/typebox';

const SpecialistCommentsSortByBase = Type.Union([Type.Literal('publishedAt')]);

export const PostSubmissionSpecialistCommentsSortBy =
  SpecialistCommentsSortByBase;
export type PostSubmissionSpecialistCommentsSortBy = Static<
  typeof PostSubmissionSpecialistCommentsSortBy
>;

export const PostSubmissionPublishedSpecialistCommentsSortBy =
  SpecialistCommentsSortByBase;
export type PostSubmissionPublishedSpecialistCommentsSortBy = Static<
  typeof PostSubmissionPublishedSpecialistCommentsSortBy
>;
