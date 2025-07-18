import {PostSubmissionApplication} from '../../../../types/schemas/postSubmissionApplication';
import {lawfulDevelopmentCertificateProposedPrototype} from '../../../prototypeApplication/data/lawfulDevelopmentCertificate/proposed';
import {generateRealisticDates} from '../../../../types/schemas/postSubmissionApplication/lib/realisticDates';
import {formatDateToYYYYMMDD} from '../../../../types/schemas/postSubmissionApplication/lib/formatDates';
import {
  publicComments,
  specialistComments,
} from '../../../../types/schemas/postSubmissionApplication/lib/exampleComments';
import {ldcApplicationDocuments} from '../../../../types/schemas/postSubmissionApplication/lib/exampleDocuments';

const version = process.env['VERSION'] || '@next';

const realisticDates = generateRealisticDates();

/**
 * This example is for a lawful development certificate application for proposed works that has a validated appeal
 */
export const lawfulDevelopmentCertificateProposedPostSubmission: PostSubmissionApplication =
  {
    applicationType: 'ldc.proposed',
    data: {
      application: {
        reference: 'ABC-123-XYZ',
        stage: 'appeal',
        status: 'determined',
        publishedAt: realisticDates.publishedAt.toISOString(),
      },
      localPlanningAuthority: {
        publicCommentsAcceptedUntilDecision: true,
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
      },
      caseOfficer: {
        name: 'Casey Officer',
      },
    },
    comments: {
      public: publicComments,
      specialist: specialistComments,
    },
    files: ldcApplicationDocuments(
      realisticDates.submission.submittedAt.toISOString(),
      realisticDates.validation.validatedAt.toISOString(),
      realisticDates.publishedAt.toISOString(),
    ),
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
      generatedAt: realisticDates.generatedAt.toISOString(),
      schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/postSubmissionApplication.json`,
    },
  };
