import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';
import {PostSubmissionFileAssociation} from '../enums/PostSubmissionFileAssociation';
import {FileType} from '../enums/FileType';
import '../../../shared/formats';

type PostSubmissionFileMetadata = Static<typeof PostSubmissionFileMetadata>;
const PostSubmissionFileMetadata = Type.Object(
  {
    size: Type.Object({
      bytes: Type.Number(),
    }),
    mimeType: Type.String(),
    createdAt: Type.String({format: 'date-time'}),
    submittedAt: Type.String({format: 'date-time'}),
    validatedAt: Type.Optional(Type.String({format: 'date-time'})),
    publishedAt: Type.Optional(Type.String({format: 'date-time'})),
  },
  {description: 'Metadata about the file'},
);

export type PostSubmissionFileBase = Static<typeof PostSubmissionFileBase>;
export const PostSubmissionFileBase = Type.Object(
  {
    id: Type.Number(),
    name: Type.String(),
    association: PostSubmissionFileAssociation,
    version: Type.Optional(Type.Number()),
    type: Type.Array(FileType),
    thumbnailUrl: Type.Optional(Type.String()),
    referencesInDocument: Type.Optional(Type.Array(Type.String())),
    description: Type.Optional(Type.String()),
    metadata: PostSubmissionFileMetadata,
  },
  {
    id: '#PostSubmissionFileBase',
    description:
      'File uploaded and labeled by the user to support the application',
  },
);

export type PostSubmissionFile = Static<typeof PostSubmissionFile>;
export const PostSubmissionFile = Type.Composite(
  [
    PostSubmissionFileBase,
    Type.Object({
      url: Type.String(),
      redactedUrl: Type.Optional(Type.String()),
    }),
  ],
  {
    id: '#PostSubmissionFile',
    description:
      'File uploaded and labeled by the user to support the application',
  },
);

export type PostSubmissionFileRedacted = Static<
  typeof PostSubmissionFileRedacted
>;
export const PostSubmissionFileRedacted = Type.Composite(
  [
    PostSubmissionFileBase,
    Type.Object({
      redactedUrl: Type.String(),
    }),
  ],
  {
    id: '#PostSubmissionFile',
    description:
      'File uploaded and labeled by the user to support the application',
  },
);
