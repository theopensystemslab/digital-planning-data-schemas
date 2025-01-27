import {PostSubmissionApplication} from '../../../../types/schemas/postSubmissionApplication';
import {priorApprovalLargerExtensionPrototype} from '../../../prototypeApplication/data/priorApproval/largerExtension';
import {
  formatDateToYYYYMMDD,
  publicComments,
  realisticDates,
  specialistComments,
} from '../lib';

const version = process.env['VERSION'] || '@next';

const metadata = {
  ...priorApprovalLargerExtensionPrototype.metadata,
  publishedAt: realisticDates.publishedAt,
  submittedAt: realisticDates.submission.submittedAt,
  schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/prototypeApplication.json`,
};

priorApprovalLargerExtensionPrototype.metadata = metadata;

/**
 * This example is for a prior approval larger home extension application that has a committee decision
 * Prior approval applications also have priorApprovalRequired flag which help determine the 'Prior approval required and approved', 'Prior approval not required', 'Prior approval required and refused' status
 */
export const priorApprovalLargerExtensionPostSubmission: PostSubmissionApplication =
  {
    applicationType: 'pa.part1.classA',
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
        priorApprovalRequired: true,
        councilRecommendation: 'refused',
        committeeSentDate: formatDateToYYYYMMDD(
          realisticDates.assessment.committeeSentAt,
        ),
        committeeDecision: 'granted',
        committeeDecisionDate: formatDateToYYYYMMDD(
          realisticDates.assessment.committeeDecisionAt,
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
    submission: priorApprovalLargerExtensionPrototype,
    metadata: metadata,
  };
