import {PostSubmissionApplication} from '../../../../types/schemas/postSubmissionApplication';
import {lawfulDevelopmentCertificateProposedPrototype} from '../../../prototypeApplication/data/lawfulDevelopmentCertificate/proposed';
import {generateRealisticDates} from '../../../../types/schemas/postSubmissionApplication/lib/realisticDates';
import {
  publicComments,
  specialistComments,
} from '../../../../types/schemas/postSubmissionApplication/lib/exampleComments';
import {formatDateToYYYYMMDD} from '../../../../types/schemas/postSubmissionApplication/lib/formatDates';

const version = process.env['VERSION'] || '@next';

const realisticDates = generateRealisticDates();

/**
 * This example is for a lawful development certificate application for proposed works that is assessment in progress
 */
export const lawfulDevelopmentCertificateProposedPostSubmission: PostSubmissionApplication =
  {
    applicationType: 'ldc.proposed',
    data: {
      application: {
        reference: 'ABC-123-XYZ',
        stage: 'assessment',
        status: 'undetermined',
      },
      localPlanningAuthority: {
        commentsAcceptedUntilDecision: true,
      },
      submission: {
        submittedAt: realisticDates.submission.submittedAt.toISOString(),
      },
      validation: {
        receivedAt: realisticDates.validation.receivedAt.toISOString(),
        validatedAt: realisticDates.validation.validatedAt.toISOString(),
        isValid: true,
      },
      assessment: {
        expiryDate: formatDateToYYYYMMDD(
          realisticDates.assessment.expiryAt.toISOString(),
        ),
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
      ...lawfulDevelopmentCertificateProposedPrototype,
      metadata: {
        ...lawfulDevelopmentCertificateProposedPrototype.metadata,
        submittedAt: realisticDates.submission.submittedAt.toISOString(),
      },
    },
    metadata: {
      organisation: 'LBH',
      id: 'faae04cd-0ec2-479e-b7fb-14b3e7acae35',
      submittedAt: realisticDates.submission.submittedAt.toISOString(),
      publishedAt: realisticDates.publishedAt.toISOString(),
      schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/postSubmissionApplication.json`,
    },
  };
