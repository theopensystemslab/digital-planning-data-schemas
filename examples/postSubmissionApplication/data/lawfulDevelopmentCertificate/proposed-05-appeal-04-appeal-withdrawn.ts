import {PostSubmissionApplication} from '../../../../types/schemas/postSubmissionApplication';
import {lawfulDevelopmentCertificateProposedPrototype} from '../../../prototypeApplication/data/lawfulDevelopmentCertificate/proposed';
import {
  formatDateToYYYYMMDD,
  publicComments,
  realisticDates,
  specialistComments,
} from '../lib';

const version = process.env['VERSION'] || '@next';

const metadata = {
  ...lawfulDevelopmentCertificateProposedPrototype.metadata,
  publishedAt: realisticDates.publishedAt,
  submittedAt: realisticDates.submission.submittedAt,
  schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/prototypeApplication.json`,
};

lawfulDevelopmentCertificateProposedPrototype.metadata = metadata;

/**
 * This example is for a lawful development certificate application for proposed works that has an appeal withdrawn
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
        submittedAt: realisticDates.submission.submittedAt,
      },
      validation: {
        receivedAt: realisticDates.validation.receivedAt,
        validatedAt: realisticDates.validation.validatedAt,
        isValid: true,
      },
      assessment: {
        councilDecision: 'granted',
        councilDecisionDate: formatDateToYYYYMMDD(
          realisticDates.assessment.councilDecisionAt,
        ),
        decisionNotice: {
          url: 'https://planningregister.org',
        },
      },
      appeal: {
        lodgedDate: formatDateToYYYYMMDD(realisticDates.appeal.lodgedAt),
        reason:
          "We don't believe the council took into consideration the environmental impact alleviation approach during their assessment.",
        withdrawnAt: realisticDates.appeal.withdrawnAt,
        withdrawnReason: 'Applicant has decided to withdraw the application.',
      },
      caseOfficer: {
        name: 'Casey Officer',
      },
    },
    comments: {
      public: publicComments,
      specialist: specialistComments,
    },
    submission: lawfulDevelopmentCertificateProposedPrototype,
    metadata: metadata,
  };
