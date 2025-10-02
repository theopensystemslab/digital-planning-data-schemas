import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';
import '../../../shared/formats';

export type CommentMetaData = Static<typeof CommentMetaData>;
export const CommentMetaData = Type.Object(
  {
    submittedAt: Type.String({format: 'date-time'}),
    validatedAt: Type.Optional(Type.String({format: 'date-time'})),
    publishedAt: Type.Optional(Type.String({format: 'date-time'})),
  },
  {id: '#CommentMetaData', description: 'Metadata about a comment'},
);
