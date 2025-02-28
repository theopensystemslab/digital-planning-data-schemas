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
 * This example is for full householder planning permission application that has an appeal withdrawn
 */
export const planningPermissionFullHouseholderPostSubmission: PostSubmissionApplication =
  {
    applicationType: 'pp.full.householder',
    data: {
      application: {
        reference: 'ABC-123-XYZ',
        stage: 'appeal',
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
    submission: planningPermissionFullHouseholderPrototype,
    metadata: metadata,
  };
