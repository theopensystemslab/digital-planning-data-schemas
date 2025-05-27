import {PostSubmissionApplication} from '../../../../types/schemas/postSubmissionApplication';
import {planningPermissionFullHouseholderPrototype} from '../../../prototypeApplication/data/planningPermission/fullHouseholder';
import {generateRealisticDates} from '../../../../types/schemas/postSubmissionApplication/utils/realisticDates';

const version = process.env['VERSION'] || '@next';

const realisticDates = generateRealisticDates();

/**
 * This example is for full householder planning permission application that has been submitted
 */
export const planningPermissionFullHouseholderPostSubmission: PostSubmissionApplication =
  {
    applicationType: 'pp.full.householder',
    data: {
      application: {
        reference: 'ABC-123-XYZ',
        stage: 'submission',
        status: 'undetermined',
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
    submission: {
      ...planningPermissionFullHouseholderPrototype,
      metadata: {
        ...planningPermissionFullHouseholderPrototype.metadata,
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
