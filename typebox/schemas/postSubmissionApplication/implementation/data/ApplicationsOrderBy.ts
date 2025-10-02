import {Type, type Static} from '@sinclair/typebox';

const ApplicationsOrderByBase = Type.Union(
  [Type.Literal('asc'), Type.Literal('desc')],
  {
    default: 'desc',
  },
);

export const PostSubmissionApplicationsOrderBy = ApplicationsOrderByBase;
export type PostSubmissionApplicationsOrderBy = Static<
  typeof PostSubmissionApplicationsOrderBy
>;

export const PostSubmissionPublishedApplicationsOrderBy =
  ApplicationsOrderByBase;
export type PostSubmissionPublishedApplicationsOrderBy = Static<
  typeof PostSubmissionPublishedApplicationsOrderBy
>;
