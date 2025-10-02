import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';
import '../../shared/formats';

export type BaseMetadata = Static<typeof BaseMetadata>;
export const BaseMetadata = Type.Object(
  {
    organisation: Type.String({
      description:
        'The reference code for the organisation responsible for processing this planning application, sourced from planning.data.gov.uk/dataset/local',
      maxLength: 4,
    }),
    id: Type.String(),
    submittedAt: Type.String({format: 'date-time'}),
    schema: Type.Any(),
  },
  {
    id: '#BaseMetadata',
    description: 'Minimum metadata expected for any application',
  },
);

type PostSubmissionMetadataBase = Static<typeof PostSubmissionMetadataBase>;
const PostSubmissionMetadataBase = Type.Object({
  generatedAt: Type.String({format: 'date-time'}),
});

type PostSubmissionBaseMetadata = Static<typeof PostSubmissionBaseMetadata>;
const PostSubmissionBaseMetadata = Type.Intersect([
  BaseMetadata,
  PostSubmissionMetadataBase,
]);

// type PostSubmissionPrototypePlanXMetadata = Static<
//   typeof PostSubmissionPrototypePlanXMetadata
// >
// const PostSubmissionPrototypePlanXMetadata = Type.Intersect([
//   PrototypePlanXMetadata,
//   PostSubmissionMetadataBase
// ])

export type PostSubmissionMetadata = Static<typeof PostSubmissionMetadata>;
export const PostSubmissionMetadata = Type.Union([
  PostSubmissionBaseMetadata,
  // PostSubmissionPrototypePlanXMetadata
]);
