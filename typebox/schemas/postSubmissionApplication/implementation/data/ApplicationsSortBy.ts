import {Type, type Static} from '@sinclair/typebox';

const ApplicationsSortByBase = Type.Union(
  [Type.Literal('publishedAt'), Type.Literal('receivedAt')],
  {
    default: 'publishedAt',
  },
);

export const PostSubmissionApplicationsSortBy = ApplicationsSortByBase;
export type PostSubmissionApplicationsSortBy = Static<
  typeof PostSubmissionApplicationsSortBy
>;

export const PostSubmissionPublishedApplicationsSortBy = ApplicationsSortByBase;
export type PostSubmissionPublishedApplicationsSortBy = Static<
  typeof PostSubmissionPublishedApplicationsSortBy
>;
