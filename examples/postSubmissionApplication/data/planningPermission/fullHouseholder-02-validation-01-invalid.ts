import {PostSubmissionApplication} from '../../../../types/schemas/postSubmissionApplication';
import {planningPermissionFullHouseholderPrototype} from '../../../prototypeApplication/data/planningPermission/fullHouseholder';
import {realisticDates} from '../lib';

const version = process.env['VERSION'] || '@next';

const metadata = {
  ...planningPermissionFullHouseholderPrototype.metadata,
  publishedAt: realisticDates.publishedAt,
  submittedAt: realisticDates.submission.submittedAt,
  schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/prototypeApplication.json`,
};

planningPermissionFullHouseholderPrototype.metadata = metadata;
/**
 * This example is for full householder planning permission application that has failed validation
 * If it passes it will go straight to the next stage for that application type
 */
export const planningPermissionFullHouseholderPostSubmission: PostSubmissionApplication =
  {
    applicationType: 'pp.full.householder',
    data: {
      application: {
        reference: 'ABC-123-XYZ',
        stage: 'validation',
        status: 'returned',
      },
      localPlanningAuthority: {
        commentsAcceptedUntilDecision: false,
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
    submission: planningPermissionFullHouseholderPrototype,
    metadata: metadata,
  };
