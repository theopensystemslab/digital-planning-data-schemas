import {PostSubmissionApplication} from '../../../../types/schemas/postSubmissionApplication';
import {priorApprovalLargerExtensionPrototype} from '../../../prototypeApplication/data/priorApproval/largerExtension';
import {generateRealisticDates} from '../../../../types/schemas/postSubmissionApplication/lib/realisticDates';
import {paApplicationDocuments} from '../../../../types/schemas/postSubmissionApplication/lib/exampleDocuments';

const version = process.env['VERSION'] || '@next';

const realisticDates = generateRealisticDates();

/**
 * This example is for a prior approval larger home extension application that has been submitted
 */
export const priorApprovalLargerExtensionPostSubmission: PostSubmissionApplication =
  {
    applicationType: 'pa.part1.classA',
    data: {
      application: {
        reference: 'ABC-123-XYZ',
        stage: 'submission',
        status: 'undetermined',
        publishedAt: realisticDates.publishedAt.toISOString(),
      },
      localPlanningAuthority: {
        publicCommentsAcceptedUntilDecision: false,
      },
      submission: {
        submittedAt: realisticDates.submission.submittedAt.toISOString(),
      },
      caseOfficer: {
        name: 'Casey Officer',
      },
    },
    files: paApplicationDocuments(
      realisticDates.submission.submittedAt.toISOString(),
      realisticDates.validation.validatedAt.toISOString(),
      realisticDates.publishedAt.toISOString(),
    ),
    submission: {
      ...priorApprovalLargerExtensionPrototype,
      metadata: {
        ...priorApprovalLargerExtensionPrototype.metadata,
        submittedAt: realisticDates.submission.submittedAt.toISOString(),
      },
    },
    metadata: {
      organisation: 'LBH',
      id: 'faae04cd-0ec2-479e-b7fb-14b3e7acae35',
      submittedAt: realisticDates.submission.submittedAt.toISOString(),
      generatedAt: realisticDates.generatedAt.toISOString(),
      schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/postSubmissionApplication.json`,
    },
  };
