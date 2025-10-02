import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';
import {CommentMetaData} from './CommentMetaData';
import {PostSubmissionFile, PostSubmissionFileRedacted} from './File';
import {SpecialistCommentSentiment} from '../enums/CommentSentiment';
import {Address} from '../../../shared/Addresses';
import '../../../shared/formats';

export type SpecialistCommentAuthor = Static<typeof SpecialistCommentAuthor>;
export const SpecialistCommentAuthor = Type.Object(
  {
    name: Type.Object({
      singleLine: Type.String(),
    }),
    address: Address,
  },
  {
    id: '#SpecialistCommentAuthor',
    description: 'The author of a public comment',
  },
);

export type SpecialistCommentAuthorRedacted = Static<
  typeof SpecialistCommentAuthorRedacted
>;
export const SpecialistCommentAuthorRedacted = Type.Object(
  {
    name: Type.Object({
      singleLine: Type.String(),
    }),
  },
  {
    id: '#SpecialistCommentAuthorRedacted',
    description: 'The author of a public comment',
  },
);

type SpecialistCommentBase = Static<typeof SpecialistCommentBase>;
const SpecialistCommentBase = Type.Object(
  {
    id: Type.String(),
    sentiment: SpecialistCommentSentiment,
    metadata: CommentMetaData,
  },
  {
    internal:
      'All the required fields for a public or private specialist comment',
  },
);

export type SpecialistComment = Static<typeof SpecialistComment>;
export const SpecialistComment = Type.Composite(
  [
    SpecialistCommentBase,
    Type.Object({
      files: Type.Optional(Type.Array(PostSubmissionFile)),
      comment: Type.String(),
      commentRedacted: Type.Optional(Type.String()),
    }),
  ],
  {
    id: '#SpecialistComment',
    description: 'A specialist comment and any associated metadata',
  },
);

export type SpecialistCommentRedacted = Static<
  typeof SpecialistCommentRedacted
>;
export const SpecialistCommentRedacted = Type.Composite(
  [
    SpecialistCommentBase,
    Type.Object({
      files: Type.Optional(Type.Array(PostSubmissionFileRedacted)),
      commentRedacted: Type.String(),
      metadata: Type.Required(CommentMetaData),
    }),
  ],
  {
    id: '#SpecialistCommentRedacted',
    description:
      'A public comment and any associated metadata, excluding sensitive information',
  },
);

type SpecialistBase = Static<typeof SpecialistBase>;
const SpecialistBase = Type.Object(
  {
    id: Type.String(),
    organisationSpecialism: Type.Optional(Type.String()),
    jobTitle: Type.Optional(Type.String()),
    reason: Type.Optional(
      Type.Union([Type.Literal('constraint'), Type.String()]),
    ),
    constraints: Type.Optional(Type.Array(Type.Any())), // @TODO PlanningConstraints
    firstConsultedAt: Type.Optional(Type.String({format: 'date-time'})),
  },
  {internal: 'All the required fields for a public or private specialist'},
);

export type Specialist = Static<typeof Specialist>;
export const Specialist = Type.Composite(
  [
    SpecialistBase,
    SpecialistCommentAuthor,
    Type.Object({
      comments: Type.Optional(Type.Array(SpecialistComment)),
    }),
  ],
  {
    id: '#Specialist',
    description: 'Details of a specialist and their comments on an application',
  },
);

export type SpecialistRedacted = Static<typeof SpecialistRedacted>;
export const SpecialistRedacted = Type.Composite(
  [
    SpecialistBase,
    SpecialistCommentAuthorRedacted,
    Type.Object({
      comments: Type.Array(SpecialistCommentRedacted),
    }),
  ],
  {
    id: '#SpecialistRedacted',
    description: 'Details of a specialist and their comments on an application',
  },
);
