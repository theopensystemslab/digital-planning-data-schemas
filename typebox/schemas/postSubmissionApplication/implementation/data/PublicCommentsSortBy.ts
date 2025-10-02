import {Type, type Static} from '@sinclair/typebox';

const PublicCommentsSortByBase = Type.Union([Type.Literal('publishedAt')]);

export const PostSubmissionPublicCommentsSortBy = PublicCommentsSortByBase;
export type PostSubmissionPublicCommentsSortBy = Static<
  typeof PostSubmissionPublicCommentsSortBy
>;

export const PostSubmissionPublishedPublicCommentsSortBy =
  PublicCommentsSortByBase;
export type PostSubmissionPublishedPublicCommentsSortBy = Static<
  typeof PostSubmissionPublishedPublicCommentsSortBy
>;
