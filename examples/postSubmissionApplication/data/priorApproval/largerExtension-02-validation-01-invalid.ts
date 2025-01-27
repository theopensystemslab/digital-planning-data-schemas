import {PostSubmissionApplication} from '../../../../types/schemas/postSubmissionApplication';
import {priorApprovalLargerExtensionPrototype} from '../../../prototypeApplication/data/priorApproval/largerExtension';
import {realisticDates} from '../lib';

const version = process.env['VERSION'] || '@next';

const metadata = {
  ...priorApprovalLargerExtensionPrototype.metadata,
  publishedAt: realisticDates.publishedAt,
  submittedAt: realisticDates.submission.submittedAt,
  schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/prototypeApplication.json`,
};

priorApprovalLargerExtensionPrototype.metadata = metadata;

/**
 * This example is for a prior approval larger home extension application that has failed validation
 * If it passes it will go straight to the next stage for that application type
 */
export const priorApprovalLargerExtensionPostSubmission: PostSubmissionApplication =
  {
    applicationType: 'pa.part1.classA',
    data: {
      application: {
        reference: 'ABC-123-XYZ',
        stage: 'validation',
        status: 'returned',
      },
      localPlanningAuthority: {
        commentsAcceptedUntilDecision: false,
      },
      submission: {
        submittedAt: realisticDates.submission.submittedAt,
      },
      validation: {
        receivedAt: realisticDates.validation.receivedAt,
        validatedAt: realisticDates.validation.validatedAt,
        isValid: false,
      },
      caseOfficer: {
        name: 'Casey Officer',
      },
    },
    submission: priorApprovalLargerExtensionPrototype,
    metadata: metadata,
  };
