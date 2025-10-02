import {PostSubmissionFile, PostSubmissionFileRedacted} from '../data/File';

export const ldcApplicationDocuments = (
  submittedAt: string,
  validatedAt: string = submittedAt,
  publishedAt: string = submittedAt,
): PostSubmissionFile[] => [
  {
    id: 1,
    name: 'myPlans.pdf',
    association: 'application',
    url: 'https://api.editor.planx.dev/file/private/tbp4kiba/myPlans.pdf',
    redactedUrl:
      'https://api.editor.planx.dev/file/private/tbp4kiba/myPlans.pdf',
    type: [
      'roofPlan.existing',
      'roofPlan.proposed',
      'sitePlan.existing',
      'sitePlan.proposed',
      'elevations.existing',
      'elevations.proposed',
    ],
    metadata: {
      size: {bytes: 123456},
      mimeType: 'application/pdf',
      createdAt: submittedAt,
      submittedAt,
      validatedAt,
      publishedAt,
    },
  },
  {
    id: 2,
    name: 'floor_plans.pdf',
    association: 'application',
    url: 'https://api.editor.planx.dev/file/private/311w2id6/floor_plans.pdf',
    type: ['floorPlan.existing', 'floorPlan.proposed'],
    metadata: {
      size: {bytes: 123456},
      mimeType: 'application/pdf',
      createdAt: submittedAt,
      submittedAt,
      validatedAt,
      publishedAt,
    },
  },
];

export const ldcApplicationDocumentsRedacted = (
  submittedAt: string,
  validatedAt: string = submittedAt,
  publishedAt: string = submittedAt,
): PostSubmissionFileRedacted[] =>
  ldcApplicationDocuments(submittedAt, validatedAt, publishedAt).map(
    ({url, ...file}) => ({
      ...file,
      redactedUrl: file.redactedUrl || url,
    }),
  );

export const ppApplicationDocuments = (
  submittedAt: string,
  validatedAt: string = submittedAt,
  publishedAt: string = submittedAt,
): PostSubmissionFile[] => [
  {
    id: 1,
    name: 'myPlans.pdf',
    association: 'application',
    url: 'https://api.editor.planx.dev/file/private/tbp4kiba/myPlans.pdf',
    redactedUrl:
      'https://api.editor.planx.dev/file/private/tbp4kiba/myPlans.pdf',
    type: ['roofPlan.existing', 'roofPlan.proposed'],
    metadata: {
      size: {bytes: 123456},
      mimeType: 'application/pdf',
      createdAt: submittedAt,
      submittedAt,
      validatedAt,
      publishedAt,
    },
  },
  {
    id: 2,
    name: 'other.pdf',
    association: 'application',
    url: 'https://api.editor.planx.dev/file/private/5w5v8s8z/other.pdf',
    type: ['sitePlan.existing', 'sitePlan.proposed'],
    metadata: {
      size: {bytes: 123456},
      mimeType: 'application/pdf',
      createdAt: submittedAt,
      submittedAt,
      validatedAt,
      publishedAt,
    },
  },
  {
    id: 3,
    name: 'elevations.pdf',
    association: 'application',
    url: 'https://api.editor.planx.dev/file/private/7nrefxnn/elevations.pdf',
    type: ['elevations.existing', 'elevations.proposed'],
    metadata: {
      size: {bytes: 123456},
      mimeType: 'application/pdf',
      createdAt: submittedAt,
      submittedAt,
      validatedAt,
      publishedAt,
    },
  },
  {
    id: 4,
    name: 'floor_plans.pdf',
    association: 'application',
    url: 'https://api.editor.planx.dev/file/private/311w2id6/floor_plans.pdf',
    type: ['floorPlan.existing', 'floorPlan.proposed'],
    metadata: {
      size: {bytes: 123456},
      mimeType: 'application/pdf',
      createdAt: submittedAt,
      submittedAt,
      validatedAt,
      publishedAt,
    },
  },
];

export const ppApplicationDocumentsRedacted = (
  submittedAt: string,
  validatedAt: string = submittedAt,
  publishedAt: string = submittedAt,
): PostSubmissionFileRedacted[] =>
  ppApplicationDocuments(submittedAt, validatedAt, publishedAt).map(
    ({url, ...file}) => ({
      ...file,
      redactedUrl: file.redactedUrl || url,
    }),
  );

export const paApplicationDocuments = (
  submittedAt: string,
  validatedAt: string = submittedAt,
  publishedAt: string = submittedAt,
): PostSubmissionFile[] => [
  {
    id: 1,
    name: 'location%20plan_proposed_01.jpg',
    association: 'application',
    url: 'https://api.editor.planx.dev/file/private/dfaz9qu5/location%20plan_proposed_01.jpg',
    redactedUrl:
      'https://api.editor.planx.dev/file/private/dfaz9qu5/location%20plan_proposed_01.jpg',
    type: ['sitePlan.proposed'],
    metadata: {
      size: {bytes: 123456},
      mimeType: 'application/pdf',
      createdAt: submittedAt,
      submittedAt,
      validatedAt,
      publishedAt,
    },
  },
  {
    id: 2,
    name: 'elevations_existing_01.jpg',
    association: 'application',
    url: 'https://api.editor.planx.dev/file/private/avilhq1j/elevations_existing_01.jpg',
    type: ['elevations.existing'],
    metadata: {
      size: {bytes: 123456},
      mimeType: 'application/pdf',
      createdAt: submittedAt,
      submittedAt,
      validatedAt,
      publishedAt,
    },
  },
  {
    id: 3,
    name: 'elevations_proposed_01.jpg',
    association: 'application',
    url: 'https://api.editor.planx.dev/file/private/tis6f8hh/elevations_proposed_01.jpg',
    type: ['elevations.proposed'],
    metadata: {
      size: {bytes: 123456},
      mimeType: 'application/pdf',
      createdAt: submittedAt,
      submittedAt,
      validatedAt,
      publishedAt,
    },
  },
];

export const paApplicationDocumentsRedacted = (
  submittedAt: string,
  validatedAt: string = submittedAt,
  publishedAt: string = submittedAt,
): PostSubmissionFileRedacted[] =>
  paApplicationDocuments(submittedAt, validatedAt, publishedAt).map(
    ({url, ...file}) => ({
      ...file,
      redactedUrl: file.redactedUrl || url,
    }),
  );
