import {Type, type Static} from '@sinclair/typebox';

const SpecialistCommentsOrderByBase = Type.Union([
  Type.Literal('asc'),
  Type.Literal('desc'),
]);

export const PostSubmissionSpecialistCommentsOrderBy =
  SpecialistCommentsOrderByBase;
export type PostSubmissionSpecialistCommentsOrderBy = Static<
  typeof PostSubmissionSpecialistCommentsOrderBy
>;

export const PostSubmissionPublishedSpecialistCommentsOrderBy =
  SpecialistCommentsOrderByBase;
export type PostSubmissionPublishedSpecialistCommentsOrderBy = Static<
  typeof PostSubmissionPublishedSpecialistCommentsOrderBy
>;
