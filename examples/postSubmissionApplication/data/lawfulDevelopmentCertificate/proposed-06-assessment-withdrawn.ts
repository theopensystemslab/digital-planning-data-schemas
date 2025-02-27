import {PostSubmissionApplication} from '../../../../types/schemas/postSubmissionApplication';
import {lawfulDevelopmentCertificateProposedPrototype} from '../../../prototypeApplication/data/lawfulDevelopmentCertificate/proposed';
import {publicComments, realisticDates, specialistComments} from '../lib';

const version = process.env['VERSION'] || '@next';

const metadata = {
  ...lawfulDevelopmentCertificateProposedPrototype.metadata,
  publishedAt: realisticDates.publishedAt,
  submittedAt: realisticDates.submission.submittedAt,
  schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/prototypeApplication.json`,
};

lawfulDevelopmentCertificateProposedPrototype.metadata = metadata;

/**
 * This example is for a lawful development certificate application for proposed works that has been withdrawn
 */
export const lawfulDevelopmentCertificateProposedPostSubmission: PostSubmissionApplication =
  {
    applicationType: 'ldc.proposed',
    data: {
      application: {
        reference: 'ABC-123-XYZ',
        stage: 'assessment',
        status: 'undetermined',
        withdrawnAt: realisticDates.application.withdrawnAt,
        withdrawnReason:
          'The applicant has decided not to proceed with the application',
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
