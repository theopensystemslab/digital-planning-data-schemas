import {Type} from '@sinclair/typebox';
import type {Static, TSchema} from '@sinclair/typebox';
import {AssessmentDecision} from '../enums/AssessmentDecision';
import '../../../shared/formats';
type AssessmentBase = Static<typeof AssessmentBase>;
const AssessmentBase = Type.Object(
  {
    expiryDate: Type.String({format: 'date'}),
    decisionNotice: Type.Optional(
      Type.Object({
        url: Type.String(),
      }),
    ),
  },
  {description: 'Base type for all assessments'},
);

type AssessmentDecisionSection = Static<typeof AssessmentDecisionSection>;
const AssessmentDecisionSection = Type.Object(
  {
    planningOfficerDecision: Type.Optional(AssessmentDecision),
    planningOfficerDecisionDate: Type.Optional(Type.String({format: 'date'})),
  },
  {description: 'AssessmentDecisionSection'},
);

type AssessmentCommitteeDecision = Static<typeof AssessmentCommitteeDecision>;
const AssessmentCommitteeDecision = Type.Object(
  {
    planningOfficerRecommendation: Type.Optional(AssessmentDecision),
    committeeSentDate: Type.Optional(Type.String({format: 'date'})),
    committeeDecision: Type.Optional(AssessmentDecision),
    committeeDecisionDate: Type.Optional(Type.String({format: 'date'})),
  },
  {description: 'AssessmentCommitteeDecision'},
);

export type PostSubmissionAssessment = Static<typeof PostSubmissionAssessment>;
export const PostSubmissionAssessment = Type.Intersect([
  AssessmentBase,
  AssessmentDecisionSection,
  AssessmentCommitteeDecision,
]);

export type PriorApprovalAssessment = Static<typeof PriorApprovalAssessment>;
export const PriorApprovalAssessment = Type.Intersect(
  [
    PostSubmissionAssessment,
    Type.Object({
      priorApprovalRequired: Type.Optional(Type.Boolean()),
    }),
  ],
  {
    description:
      'Assessment for a post submission application with type prior approval',
  },
);

type AssessmentVariants = Static<typeof AssessmentVariants>;
const AssessmentVariants = Type.Object({
  'pa.part1.classA': PriorApprovalAssessment,
  'pa.part1.classAA': PriorApprovalAssessment,
  'pa.part3.classG': PriorApprovalAssessment,
  'pa.part3.classM': PriorApprovalAssessment,
  'pa.part3.classMA': PriorApprovalAssessment,
  'pa.part3.classN': PriorApprovalAssessment,
  'pa.part3.classQ': PriorApprovalAssessment,
  'pa.part3.classR': PriorApprovalAssessment,
  'pa.part3.classS': PriorApprovalAssessment,
  'pa.part3.classT': PriorApprovalAssessment,
  'pa.part3.classV': PriorApprovalAssessment,
  'pa.part4.classBB': PriorApprovalAssessment,
  'pa.part4.classBC': PriorApprovalAssessment,
  'pa.part4.classCA': PriorApprovalAssessment,
  'pa.part4.classE': PriorApprovalAssessment,
  'pa.part6': PriorApprovalAssessment,
  'pa.part6.classA': PriorApprovalAssessment,
  'pa.part6.classB': PriorApprovalAssessment,
  'pa.part6.classE': PriorApprovalAssessment,
  'pa.part7.classC': PriorApprovalAssessment,
  'pa.part7.classM': PriorApprovalAssessment,
  'pa.part9.classD': PriorApprovalAssessment,
  'pa.part11.classB': PriorApprovalAssessment,
  'pa.part14.classA': PriorApprovalAssessment,
  'pa.part14.classB': PriorApprovalAssessment,
  'pa.part14.classJ': PriorApprovalAssessment,
  'pa.part14.classK': PriorApprovalAssessment,
  'pa.part14.classOA': PriorApprovalAssessment,
  'pa.part16.classA': PriorApprovalAssessment,
  'pa.part17': PriorApprovalAssessment,
  'pa.part17.classB': PriorApprovalAssessment,
  'pa.part17.classC': PriorApprovalAssessment,
  'pa.part17.classG': PriorApprovalAssessment,
  'pa.part18.classA': PriorApprovalAssessment,
  'pa.part19.classTA': PriorApprovalAssessment,
  'pa.part20.classA': PriorApprovalAssessment,
  'pa.part20.classAA': PriorApprovalAssessment,
  'pa.part20.classAB': PriorApprovalAssessment,
  'pa.part20.classAC': PriorApprovalAssessment,
  'pa.part20.classAD': PriorApprovalAssessment,
  'pa.part20.classZA': PriorApprovalAssessment,
});

export type Assessment<T extends TSchema> = Static<
  ReturnType<typeof Assessment<T>>
>;
export const Assessment = <T extends TSchema>(T: T) =>
  Type.Extends(
    T,
    Type.KeyOf(AssessmentVariants),
    Type.Index(AssessmentVariants, T),
    PostSubmissionAssessment,
  );
