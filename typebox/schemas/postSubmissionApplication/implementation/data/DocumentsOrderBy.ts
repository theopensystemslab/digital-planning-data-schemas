import {Type, type Static} from '@sinclair/typebox';

const DocumentsOrderByBase = Type.Union([
  Type.Literal('asc'),
  Type.Literal('desc'),
]);

export const PostSubmissionDocumentsOrderBy = DocumentsOrderByBase;
export type PostSubmissionDocumentsOrderBy = Static<
  typeof PostSubmissionDocumentsOrderBy
>;

export const PostSubmissionPublishedDocumentsOrderBy = DocumentsOrderByBase;
export type PostSubmissionPublishedDocumentsOrderBy = Static<
  typeof PostSubmissionPublishedDocumentsOrderBy
>;
