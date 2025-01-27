import {PostSubmissionApplication} from '../../../../types/schemas/postSubmissionApplication';
import {lawfulDevelopmentCertificateProposedPrototype} from '../../../prototypeApplication/data/lawfulDevelopmentCertificate/proposed';
import {realisticDates} from '../lib';

const version = process.env['VERSION'] || '@next';

const metadata = {
  ...lawfulDevelopmentCertificateProposedPrototype.metadata,
  publishedAt: realisticDates.publishedAt,
  submittedAt: realisticDates.submission.submittedAt,
  schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/prototypeApplication.json`,
};

lawfulDevelopmentCertificateProposedPrototype.metadata = metadata;

/**
 * This example is for a lawful development certificate application for proposed works that has failed validation
 * If it passes it will go straight to the next stage for that application type
 */
export const lawfulDevelopmentCertificateProposedPostSubmission: PostSubmissionApplication =
  {
    applicationType: 'ldc.proposed',
    data: {
      application: {
        reference: 'ABC-123-XYZ',
        stage: 'validation',
        status: 'returned',
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
        isValid: false,
      },
      caseOfficer: {
        name: 'Casey Officer',
      },
    },
    submission: lawfulDevelopmentCertificateProposedPrototype,
    metadata: metadata,
  };
