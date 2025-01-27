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
 * This example is for a prior approval larger home extension application that has a validated appeal
 */
export const priorApprovalLargerExtensionPostSubmission: PostSubmissionApplication =
  {
    applicationType: 'pa.part1.classA',
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
        priorApprovalRequired: true,
        decisionNotice: {
          url: 'https://planningregister.org',
        },
      },
      appeal: {
        lodgedDate: formatDateToYYYYMMDD(realisticDates.appeal.lodgedAt),
        reason:
          "We don't believe the council took into consideration the environmental impact alleviation approach during their assessment.",
        validatedDate: formatDateToYYYYMMDD(realisticDates.appeal.validatedAt),
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
