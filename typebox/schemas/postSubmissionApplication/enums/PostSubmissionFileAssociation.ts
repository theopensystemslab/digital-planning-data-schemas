import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';

type application = Static<typeof application>;
const application = Type.Literal('application');

type appeal = Static<typeof appeal>;
const appeal = Type.Literal('appeal');

type specialistComment = Static<typeof specialistComment>;
const specialistComment = Type.Literal('specialistComment');

type publicComment = Static<typeof publicComment>;
const publicComment = Type.Literal('publicComment');

export type PostSubmissionFileAssociation = Static<
  typeof PostSubmissionFileAssociation
>;
export const PostSubmissionFileAssociation = Type.Union(
  [application, appeal, specialistComment, publicComment],
  {
    id: '#PostSubmissionFileAssociation',
    description: 'Type of file association for a post',
  },
);
