import {PostSubmissionApplication} from '../../../../types/schemas/postSubmissionApplication';
import {priorApprovalLargerExtensionPrototype} from '../../../prototypeApplication/data/priorApproval/largerExtension';
import {generateRealisticDates} from '../../../../types/schemas/postSubmissionApplication/lib/realisticDates';
import {formatDateToYYYYMMDD} from '../../../../types/schemas/postSubmissionApplication/lib/formatDates';
import {
  publicComments,
  specialistComments,
} from '../../../../types/schemas/postSubmissionApplication/lib/exampleComments';

const version = process.env['VERSION'] || '@next';

const realisticDates = generateRealisticDates();

/**
 * This example is for a prior approval larger home extension application that is assessment in progress
 */
export const priorApprovalLargerExtensionPostSubmission: PostSubmissionApplication =
  {
    applicationType: 'pa.part1.classA',
    data: {
      application: {
        reference: 'ABC-123-XYZ',
        stage: 'assessment',
        status: 'undetermined',
      },
      localPlanningAuthority: {
        commentsAcceptedUntilDecision: false,
      },
      submission: {
        submittedAt: realisticDates.submission.submittedAt.toISOString(),
      },
      validation: {
        receivedAt: realisticDates.validation.receivedAt.toISOString(),
        validatedAt: realisticDates.validation.validatedAt.toISOString(),
        isValid: true,
      },
      consultation: {
        startDate: formatDateToYYYYMMDD(
          realisticDates.consultation.startAt.toISOString(),
        ),
        endDate: formatDateToYYYYMMDD(
          realisticDates.consultation.endAt.toISOString(),
        ),
        siteNotice: true,
      },
      caseOfficer: {
        name: 'Casey Officer',
      },
    },
    comments: {
      public: publicComments,
      specialist: specialistComments,
    },
    submission: {
      ...priorApprovalLargerExtensionPrototype,
      metadata: {
        ...priorApprovalLargerExtensionPrototype.metadata,
        submittedAt: realisticDates.submission.submittedAt.toISOString(),
      },
    },
    metadata: {
      organisation: 'LBH',
      id: 'ABC-123-XYZ',
      submittedAt: realisticDates.submission.submittedAt.toISOString(),
      publishedAt: realisticDates.publishedAt.toISOString(),
      schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/postSubmissionApplication.json`,
    },
  };
