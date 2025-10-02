import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';
import {PublicCommentTopic} from '../enums/PublicCommentTopic';
import {PublicCommentSentiment} from '../enums/CommentSentiment';
import {CommentMetaData} from './CommentMetaData';
import {Address} from '../../../shared/Addresses';

export type TopicAndComments = Static<typeof TopicAndComments>;
export const TopicAndComments = Type.Object(
  {
    topic: PublicCommentTopic,
    question: Type.String(),
    comment: Type.String(),
  },
  {
    id: '#TopicAndComments',
    description: 'A comment on an application, divided by topic',
  },
);

type PublicCommentBase = Static<typeof PublicCommentBase>;
const PublicCommentBase = Type.Object(
  {
    id: Type.String(),
    sentiment: PublicCommentSentiment,
    metadata: CommentMetaData,
  },
  {internal: 'All the required fields for a public or private public comment'},
);

export type PublicCommentAuthor = Static<typeof PublicCommentAuthor>;
export const PublicCommentAuthor = Type.Object(
  {
    name: Type.Object({
      singleLine: Type.String(),
    }),
    address: Address,
  },
  {id: '#PublicCommentAuthor', description: 'The author of a public comment'},
);

export type PublicCommentAuthorRedacted = Static<
  typeof PublicCommentAuthorRedacted
>;
export const PublicCommentAuthorRedacted = Type.Object(
  {
    name: Type.Object({
      singleLine: Type.String(),
    }),
  },
  {
    id: '#PublicCommentAuthorRedacted',
    description: 'The author of a public comment',
  },
);

export type PublicComment = Static<typeof PublicComment>;
export const PublicComment = Type.Composite(
  [
    PublicCommentBase,
    Type.Object({
      author: PublicCommentAuthor,
      comment: Type.Union([Type.Array(TopicAndComments), Type.String()]),
      commentRedacted: Type.Optional(
        Type.Union([Type.Array(TopicAndComments), Type.String()]),
      ),
    }),
  ],
  {
    id: '#PublicComment',
    description:
      'A public comment and any associated metadata, including sensitive information',
  },
);

export type PublicCommentRedacted = Static<typeof PublicCommentRedacted>;
export const PublicCommentRedacted = Type.Composite(
  [
    PublicCommentBase,
    Type.Object({
      author: PublicCommentAuthorRedacted,
      commentRedacted: Type.Union([
        Type.Array(TopicAndComments),
        Type.String(),
      ]),
      metadata: Type.Required(CommentMetaData),
    }),
  ],
  {
    id: '#PublicCommentRedacted',
    description:
      'A public comment and any associated metadata, excluding sensitive information',
  },
);
