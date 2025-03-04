import {PostSubmissionApplication} from '../../../../types/schemas/postSubmissionApplication';
import {planningPermissionFullHouseholderPrototype} from '../../../prototypeApplication/data/planningPermission/fullHouseholder';
import {generateRealisticDates} from '../../../../types/schemas/postSubmissionApplication/lib/realisticDates';
import {formatDateToYYYYMMDD} from '../../../../types/schemas/postSubmissionApplication/lib/formatDates';
import {
  publicComments,
  specialistComments,
} from '../../../../types/schemas/postSubmissionApplication/lib/exampleComments';

const version = process.env['VERSION'] || '@next';

const realisticDates = generateRealisticDates();

/**
 * This example is for full householder planning permission application that has a committee decision
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
        submittedAt: realisticDates.submission.submittedAt.toISOString(),
      },
      validation: {
        receivedAt: realisticDates.validation.receivedAt.toISOString(),
        validatedAt: realisticDates.validation.validatedAt.toISOString(),
        isValid: true,
      },
      consultation: {
        startDate: formatDateToYYYYMMDD(
          realisticDates.consultation.startAt.toISOString(),
        ),
        endDate: formatDateToYYYYMMDD(
          realisticDates.consultation.endAt.toISOString(),
        ),
        siteNotice: true,
      },
      assessment: {
        planningOfficerRecommendation: 'refused',
        committeeSentDate: formatDateToYYYYMMDD(
          realisticDates.assessment.committeeSentAt.toISOString(),
        ),
        committeeDecision: 'granted',
        committeeDecisionDate: formatDateToYYYYMMDD(
          realisticDates.assessment.committeeDecisionAt.toISOString(),
        ),
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
    submission: {
      ...planningPermissionFullHouseholderPrototype,
      metadata: {
        ...planningPermissionFullHouseholderPrototype.metadata,
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
