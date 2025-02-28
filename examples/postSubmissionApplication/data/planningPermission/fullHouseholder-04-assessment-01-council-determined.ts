import {PostSubmissionApplication} from '../../../../types/schemas/postSubmissionApplication';
import {planningPermissionFullHouseholderPrototype} from '../../../prototypeApplication/data/planningPermission/fullHouseholder';
import {
  formatDateToYYYYMMDD,
  publicComments,
  realisticDates,
  specialistComments,
} from '../lib';

const version = process.env['VERSION'] || '@next';

const metadata = {
  ...planningPermissionFullHouseholderPrototype.metadata,
  publishedAt: realisticDates.publishedAt,
  submittedAt: realisticDates.submission.submittedAt,
  schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/prototypeApplication.json`,
};

planningPermissionFullHouseholderPrototype.metadata = metadata;
/**
 * This example is for full householder planning permission application that has a council decision and is determined
 */
export const planningPermissionFullHouseholderPostSubmission: PostSubmissionApplication =
  {
    applicationType: 'pp.full.householder',
    data: {
      application: {
        reference: 'ABC-123-XYZ',
        stage: 'assessment',
        status: 'determined',
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
        isValid: true,
      },
      consultation: {
        startDate: formatDateToYYYYMMDD(realisticDates.consultation.startAt),
        endDate: formatDateToYYYYMMDD(realisticDates.consultation.endAt),
        siteNotice: true,
      },
      assessment: {
        councilDecision: 'granted',
        councilDecisionDate: '2024-03-21',
        decisionNotice: {
          url: 'https://planningregister.org',
        },
      },
      caseOfficer: {
        name: 'Casey Officer',
      },
    },
    comments: {
      public: publicComments,
      specialist: specialistComments,
    },
    submission: planningPermissionFullHouseholderPrototype,
    metadata: metadata,
  };
