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
 * This example is for a lawful development certificate application for proposed works that has been submitted
 * NB there is no consultation period for LDC applications so there will be no consultation section however in this example
 * the LPA has decided to accept comments until the decision is made
 */
export const lawfulDevelopmentCertificateProposedPostSubmission: PostSubmissionApplication =
  {
    applicationType: 'ldc.proposed',
    data: {
      application: {
        reference: 'ABC-123-XYZ',
        stage: 'submission',
        status: 'undetermined',
      },
      localPlanningAuthority: {
        commentsAcceptedUntilDecision: true,
      },
      submission: {
        submittedAt: realisticDates.submission.submittedAt,
      },
      caseOfficer: {
        name: 'Casey Officer',
      },
    },
    submission: lawfulDevelopmentCertificateProposedPrototype,
    metadata: metadata,
  };
