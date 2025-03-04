import {PostSubmissionApplication} from '../../../../types/schemas/postSubmissionApplication';
import {lawfulDevelopmentCertificateProposedPrototype} from '../../../prototypeApplication/data/lawfulDevelopmentCertificate/proposed';
import {generateRealisticDates} from '../../../../types/schemas/postSubmissionApplication/lib/realisticDates';
import {formatDateToYYYYMMDD} from '../../../../types/schemas/postSubmissionApplication/lib/formatDates';
import {
  publicComments,
  specialistComments,
} from '../../../../types/schemas/postSubmissionApplication/lib/exampleComments';

const version = process.env['VERSION'] || '@next';

const realisticDates = generateRealisticDates();

/**
 * This example is for a lawful development certificate application for proposed works that has appeal started
 */
export const lawfulDevelopmentCertificateProposedPostSubmission: PostSubmissionApplication =
  {
    applicationType: 'ldc.proposed',
    data: {
      application: {
        reference: 'ABC-123-XYZ',
        stage: 'appeal',
        status: 'determined',
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
        planningOfficerDecision: 'granted',
        planningOfficerDecisionDate: formatDateToYYYYMMDD(
          realisticDates.assessment.planningOfficerDecisionAt.toISOString(),
        ),
        decisionNotice: {
          url: 'https://planningregister.org',
        },
      },
      appeal: {
        lodgedDate: formatDateToYYYYMMDD(
          realisticDates.appeal.lodgedAt.toISOString(),
        ),
        reason:
          "We don't believe the council took into consideration the environmental impact alleviation approach during their assessment.",
        validatedDate: formatDateToYYYYMMDD(
          realisticDates.appeal.validatedAt.toISOString(),
        ),
        startedDate: formatDateToYYYYMMDD(
          realisticDates.appeal.startedAt.toISOString(),
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
      id: 'ABC-123-XYZ',
      submittedAt: realisticDates.submission.submittedAt.toISOString(),
      publishedAt: realisticDates.publishedAt.toISOString(),
      schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/postSubmissionApplication.json`,
    },
  };
