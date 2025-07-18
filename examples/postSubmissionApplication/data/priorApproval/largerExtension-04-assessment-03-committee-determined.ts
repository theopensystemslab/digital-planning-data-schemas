import {PostSubmissionApplication} from '../../../../types/schemas/postSubmissionApplication';
import {priorApprovalLargerExtensionPrototype} from '../../../prototypeApplication/data/priorApproval/largerExtension';
import {generateRealisticDates} from '../../../../types/schemas/postSubmissionApplication/lib/realisticDates';
import {formatDateToYYYYMMDD} from '../../../../types/schemas/postSubmissionApplication/lib/formatDates';
import {
  publicComments,
  specialistComments,
} from '../../../../types/schemas/postSubmissionApplication/lib/exampleComments';
import {paApplicationDocuments} from '../../../../types/schemas/postSubmissionApplication/lib/exampleDocuments';

const version = process.env['VERSION'] || '@next';

const realisticDates = generateRealisticDates();

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
        publishedAt: realisticDates.publishedAt.toISOString(),
      },
      localPlanningAuthority: {
        publicCommentsAcceptedUntilDecision: false,
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
        expiryDate: formatDateToYYYYMMDD(
          realisticDates.assessment.expiryAt.toISOString(),
        ),
        priorApprovalRequired: true,
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
    files: paApplicationDocuments(
      realisticDates.submission.submittedAt.toISOString(),
      realisticDates.validation.validatedAt.toISOString(),
      realisticDates.publishedAt.toISOString(),
    ),
    submission: {
      ...priorApprovalLargerExtensionPrototype,
      metadata: {
        ...priorApprovalLargerExtensionPrototype.metadata,
        submittedAt: realisticDates.submission.submittedAt.toISOString(),
      },
    },
    metadata: {
      organisation: 'LBH',
      id: 'faae04cd-0ec2-479e-b7fb-14b3e7acae35',
      submittedAt: realisticDates.submission.submittedAt.toISOString(),
      generatedAt: realisticDates.generatedAt.toISOString(),
      schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/postSubmissionApplication.json`,
    },
  };
