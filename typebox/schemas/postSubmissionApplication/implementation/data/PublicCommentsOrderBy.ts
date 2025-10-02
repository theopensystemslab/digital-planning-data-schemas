import {Type, type Static} from '@sinclair/typebox';

const PublicCommentsOrderByBase = Type.Union([
  Type.Literal('asc'),
  Type.Literal('desc'),
]);

export const PostSubmissionPublicCommentsOrderBy = PublicCommentsOrderByBase;
export type PostSubmissionPublicCommentsOrderBy = Static<
  typeof PostSubmissionPublicCommentsOrderBy
>;

export const PostSubmissionPublishedPublicCommentsOrderBy =
  PublicCommentsOrderByBase;
export type PostSubmissionPublishedPublicCommentsOrderBy = Static<
  typeof PostSubmissionPublishedPublicCommentsOrderBy
>;
