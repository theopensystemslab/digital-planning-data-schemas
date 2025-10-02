import {Type, type Static} from '@sinclair/typebox';

const DocumentsSortByBase = Type.Union([
  Type.Literal('publishedAt'),
  Type.Literal('name'),
]);

export const PostSubmissionDocumentsSortBy = DocumentsSortByBase;
export type PostSubmissionDocumentsSortBy = Static<
  typeof PostSubmissionDocumentsSortBy
>;

export const PostSubmissionPublishedDocumentsSortBy = DocumentsSortByBase;
export type PostSubmissionPublishedDocumentsSortBy = Static<
  typeof PostSubmissionPublishedDocumentsSortBy
>;
