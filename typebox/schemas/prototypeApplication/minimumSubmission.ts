import {Type} from '@sinclair/typebox';
import type {Static, TSchema} from '@sinclair/typebox';
import {Applicant} from './data/Applicant';
import {Site} from '../../shared/Sites';
import '../../shared/formats';

type Application<T extends TSchema> = Static<ReturnType<typeof Application<T>>>;
export const Application = <T extends TSchema>(T: T) =>
  Type.Object(
    {
      applicationType: T,
      data: Type.Object(
        {
          applicant: Applicant(T),
          property: Site,
          proposal: Type.Object(
            {
              description: Type.String(),
              reason: Type.Optional(Type.String()),
            },
            {
              additionalProperties: true,
            },
          ),
        },
        {
          additionalProperties: true,
        },
      ),
      metadata: Type.Object(
        {
          submittedAt: Type.String({format: 'date-time'}),
        },
        {
          additionalProperties: true,
        },
      ),
    },
    {
      'internal\n': '* The generic base type for all applications',
      additionalProperties: true,
    },
  );

export type PlanXPreAssessment = Static<typeof PlanXPreAssessment>;
export const PlanXPreAssessment = Type.Object(
  {
    preAssessment: Type.Array(
      Type.Object({
        value: Type.String(),
        description: Type.String(),
      }),
    ),
  },
  {
    title: 'PlanX pre',
    description:
      'The result of the application based on information provided by the user, prior to assessment by a planning officer',
  },
);

export type AdvertConsent = Static<typeof AdvertConsent>;
export const AdvertConsent = Application(Type.Literal('advertConsent'));

export type AmendmentMinorMaterial = Static<typeof AmendmentMinorMaterial>;
export const AmendmentMinorMaterial = Application(
  Type.Literal('amendment.minorMaterial'),
);

export type AmendmentNonMaterial = Static<typeof AmendmentNonMaterial>;
export const AmendmentNonMaterial = Application(
  Type.Literal('amendment.nonMaterial'),
);

export type ApprovalConditions = Static<typeof ApprovalConditions>;
export const ApprovalConditions = Application(
  Type.Literal('approval.conditions'),
);

export type ApprovalReservedMatters = Static<typeof ApprovalReservedMatters>;
export const ApprovalReservedMatters = Application(
  Type.Literal('approval.reservedMatters'),
);

export type ComplianceConfirmation = Static<typeof ComplianceConfirmation>;
export const ComplianceConfirmation = Application(
  Type.Literal('complianceConfirmation'),
);

export type EnvironmentalImpactScoping = Static<
  typeof EnvironmentalImpactScoping
>;
export const EnvironmentalImpactScoping = Application(
  Type.Literal('environmentalImpact.scoping'),
);

export type EnvironmentalImpactScreening = Static<
  typeof EnvironmentalImpactScreening
>;
export const EnvironmentalImpactScreening = Application(
  Type.Literal('environmentalImpact.screening'),
);

export type HazardousSubstanceConsent = Static<
  typeof HazardousSubstanceConsent
>;
export const HazardousSubstanceConsent = Application(
  Type.Literal('hazardousSubstanceConsent'),
);

export type HedgerowRemovalNotice = Static<typeof HedgerowRemovalNotice>;
export const HedgerowRemovalNotice = Application(
  Type.Literal('hedgerowRemovalNotice'),
);

export type LandDrainageConsent = Static<typeof LandDrainageConsent>;
export const LandDrainageConsent = Application(
  Type.Literal('landDrainageConsent'),
);

export type LawfulDevelopmentCertificateBreachOfCondition = Static<
  typeof LawfulDevelopmentCertificateBreachOfCondition
>;
export const LawfulDevelopmentCertificateBreachOfCondition = Application(
  Type.Literal('ldc.breachOfCondition'),
);

export type LawfulDevelopmentCertificateExisting = Static<
  typeof LawfulDevelopmentCertificateExisting
>;
export const LawfulDevelopmentCertificateExisting = Type.Intersect([
  Application(Type.Literal('ldc.existing')),
  PlanXPreAssessment,
]);

export type LawfulDevelopmentCertificateListedBuildingWorks = Static<
  typeof LawfulDevelopmentCertificateListedBuildingWorks
>;
export const LawfulDevelopmentCertificateListedBuildingWorks = Application(
  Type.Literal('ldc.listedBuildingWorks'),
);

export type LawfulDevelopmentCertificateProposed = Static<
  typeof LawfulDevelopmentCertificateProposed
>;
export const LawfulDevelopmentCertificateProposed = Type.Intersect([
  Application(Type.Literal('ldc.proposed')),
  PlanXPreAssessment,
]);

export type ListedBuildingConsent = Static<typeof ListedBuildingConsent>;
export const ListedBuildingConsent = Application(Type.Literal('listed'));

export type NotifyCompletion = Static<typeof NotifyCompletion>;
export const NotifyCompletion = Application(Type.Literal('notifyCompletion'));

export type ObligationDischarge = Static<typeof ObligationDischarge>;
export const ObligationDischarge = Application(
  Type.Literal('obligation.discharge'),
);

export type ObligationModify = Static<typeof ObligationModify>;
export const ObligationModify = Application(Type.Literal('obligation.modify'));

export type OnshoreExtractionOilAndGasOther = Static<
  typeof OnshoreExtractionOilAndGasOther
>;
export const OnshoreExtractionOilAndGasOther = Application(
  Type.Literal('onshoreExtractionOilAndGas.other'),
);

export type OnshoreExtractionOilAndGasPlanningPermissionExtension = Static<
  typeof OnshoreExtractionOilAndGasPlanningPermissionExtension
>;
export const OnshoreExtractionOilAndGasPlanningPermissionExtension =
  Application(Type.Literal('onshoreExtractionOilAndGas.pp.extension'));

export type OnshoreExtractionOilAndGasPlanningPermissionWaste = Static<
  typeof OnshoreExtractionOilAndGasPlanningPermissionWaste
>;
export const OnshoreExtractionOilAndGasPlanningPermissionWaste = Application(
  Type.Literal('onshoreExtractionOilAndGas.pp.waste'),
);

export type OnshoreExtractionOilAndGasPlanningPermissionWorking = Static<
  typeof OnshoreExtractionOilAndGasPlanningPermissionWorking
>;
export const OnshoreExtractionOilAndGasPlanningPermissionWorking = Application(
  Type.Literal('onshoreExtractionOilAndGas.pp.working'),
);

export type OnshoreExtractionOilAndGasReview = Static<
  typeof OnshoreExtractionOilAndGasReview
>;
export const OnshoreExtractionOilAndGasReview = Application(
  Type.Literal('onshoreExtractionOilAndGas.review'),
);

export type OnshoreExtractionOilAndGasVariation = Static<
  typeof OnshoreExtractionOilAndGasVariation
>;
export const OnshoreExtractionOilAndGasVariation = Application(
  Type.Literal('onshoreExtractionOilAndGas.variation'),
);

export type PriorApprovalPart1ClassA = Static<typeof PriorApprovalPart1ClassA>;
export const PriorApprovalPart1ClassA = Type.Intersect([
  Application(Type.Literal('pa.part1.classA')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart1ClassAA = Static<
  typeof PriorApprovalPart1ClassAA
>;
export const PriorApprovalPart1ClassAA = Type.Intersect([
  Application(Type.Literal('pa.part1.classAA')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart3ClassG = Static<typeof PriorApprovalPart3ClassG>;
export const PriorApprovalPart3ClassG = Type.Intersect([
  Application(Type.Literal('pa.part3.classG')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart3ClassM = Static<typeof PriorApprovalPart3ClassM>;
export const PriorApprovalPart3ClassM = Type.Intersect([
  Application(Type.Literal('pa.part3.classM')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart3ClassMA = Static<
  typeof PriorApprovalPart3ClassMA
>;
export const PriorApprovalPart3ClassMA = Type.Intersect([
  Application(Type.Literal('pa.part3.classMA')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart3ClassN = Static<typeof PriorApprovalPart3ClassN>;
export const PriorApprovalPart3ClassN = Type.Intersect([
  Application(Type.Literal('pa.part3.classN')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart3ClassQ = Static<typeof PriorApprovalPart3ClassQ>;
export const PriorApprovalPart3ClassQ = Type.Intersect([
  Application(Type.Literal('pa.part3.classQ')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart3ClassR = Static<typeof PriorApprovalPart3ClassR>;
export const PriorApprovalPart3ClassR = Type.Intersect([
  Application(Type.Literal('pa.part3.classR')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart3ClassS = Static<typeof PriorApprovalPart3ClassS>;
export const PriorApprovalPart3ClassS = Type.Intersect([
  Application(Type.Literal('pa.part3.classS')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart3ClassT = Static<typeof PriorApprovalPart3ClassT>;
export const PriorApprovalPart3ClassT = Type.Intersect([
  Application(Type.Literal('pa.part3.classT')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart3ClassV = Static<typeof PriorApprovalPart3ClassV>;
export const PriorApprovalPart3ClassV = Type.Intersect([
  Application(Type.Literal('pa.part3.classV')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart4ClassBB = Static<
  typeof PriorApprovalPart4ClassBB
>;
export const PriorApprovalPart4ClassBB = Type.Intersect([
  Application(Type.Literal('pa.part4.classBB')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart4ClassBC = Static<
  typeof PriorApprovalPart4ClassBC
>;
export const PriorApprovalPart4ClassBC = Type.Intersect([
  Application(Type.Literal('pa.part4.classBC')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart4ClassCA = Static<
  typeof PriorApprovalPart4ClassCA
>;
export const PriorApprovalPart4ClassCA = Type.Intersect([
  Application(Type.Literal('pa.part4.classCA')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart4ClassE = Static<typeof PriorApprovalPart4ClassE>;
export const PriorApprovalPart4ClassE = Type.Intersect([
  Application(Type.Literal('pa.part4.classE')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart6 = Static<typeof PriorApprovalPart6>;
export const PriorApprovalPart6 = Type.Intersect([
  Application(Type.Literal('pa.part6')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart6ClassA = Static<typeof PriorApprovalPart6ClassA>;
export const PriorApprovalPart6ClassA = Type.Intersect([
  Application(Type.Literal('pa.part6.classA')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart6ClassB = Static<typeof PriorApprovalPart6ClassB>;
export const PriorApprovalPart6ClassB = Type.Intersect([
  Application(Type.Literal('pa.part6.classB')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart6ClassE = Static<typeof PriorApprovalPart6ClassE>;
export const PriorApprovalPart6ClassE = Type.Intersect([
  Application(Type.Literal('pa.part6.classE')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart7ClassC = Static<typeof PriorApprovalPart7ClassC>;
export const PriorApprovalPart7ClassC = Type.Intersect([
  Application(Type.Literal('pa.part7.classC')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart7ClassM = Static<typeof PriorApprovalPart7ClassM>;
export const PriorApprovalPart7ClassM = Type.Intersect([
  Application(Type.Literal('pa.part7.classM')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart9ClassD = Static<typeof PriorApprovalPart9ClassD>;
export const PriorApprovalPart9ClassD = Type.Intersect([
  Application(Type.Literal('pa.part9.classD')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart11ClassB = Static<
  typeof PriorApprovalPart11ClassB
>;
export const PriorApprovalPart11ClassB = Type.Intersect([
  Application(Type.Literal('pa.part11.classB')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart14ClassA = Static<
  typeof PriorApprovalPart14ClassA
>;
export const PriorApprovalPart14ClassA = Type.Intersect([
  Application(Type.Literal('pa.part14.classA')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart14ClassB = Static<
  typeof PriorApprovalPart14ClassB
>;
export const PriorApprovalPart14ClassB = Type.Intersect([
  Application(Type.Literal('pa.part14.classB')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart14ClassJ = Static<
  typeof PriorApprovalPart14ClassJ
>;
export const PriorApprovalPart14ClassJ = Type.Intersect([
  Application(Type.Literal('pa.part14.classJ')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart14ClassK = Static<
  typeof PriorApprovalPart14ClassK
>;
export const PriorApprovalPart14ClassK = Type.Intersect([
  Application(Type.Literal('pa.part14.classK')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart14ClassOA = Static<
  typeof PriorApprovalPart14ClassOA
>;
export const PriorApprovalPart14ClassOA = Type.Intersect([
  Application(Type.Literal('pa.part14.classOA')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart16ClassA = Static<
  typeof PriorApprovalPart16ClassA
>;
export const PriorApprovalPart16ClassA = Type.Intersect([
  Application(Type.Literal('pa.part16.classA')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart17 = Static<typeof PriorApprovalPart17>;
export const PriorApprovalPart17 = Type.Intersect([
  Application(Type.Literal('pa.part17')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart17ClassB = Static<
  typeof PriorApprovalPart17ClassB
>;
export const PriorApprovalPart17ClassB = Type.Intersect([
  Application(Type.Literal('pa.part17.classB')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart17ClassC = Static<
  typeof PriorApprovalPart17ClassC
>;
export const PriorApprovalPart17ClassC = Type.Intersect([
  Application(Type.Literal('pa.part17.classC')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart17ClassG = Static<
  typeof PriorApprovalPart17ClassG
>;
export const PriorApprovalPart17ClassG = Type.Intersect([
  Application(Type.Literal('pa.part17.classG')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart18ClassA = Static<
  typeof PriorApprovalPart18ClassA
>;
export const PriorApprovalPart18ClassA = Type.Intersect([
  Application(Type.Literal('pa.part18.classA')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart19ClassTA = Static<
  typeof PriorApprovalPart19ClassTA
>;
export const PriorApprovalPart19ClassTA = Type.Intersect([
  Application(Type.Literal('pa.part19.classTA')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart20ClassA = Static<
  typeof PriorApprovalPart20ClassA
>;
export const PriorApprovalPart20ClassA = Type.Intersect([
  Application(Type.Literal('pa.part20.classA')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart20ClassAA = Static<
  typeof PriorApprovalPart20ClassAA
>;
export const PriorApprovalPart20ClassAA = Type.Intersect([
  Application(Type.Literal('pa.part20.classAA')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart20ClassAB = Static<
  typeof PriorApprovalPart20ClassAB
>;
export const PriorApprovalPart20ClassAB = Type.Intersect([
  Application(Type.Literal('pa.part20.classAB')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart20ClassAC = Static<
  typeof PriorApprovalPart20ClassAC
>;
export const PriorApprovalPart20ClassAC = Type.Intersect([
  Application(Type.Literal('pa.part20.classAC')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart20ClassAD = Static<
  typeof PriorApprovalPart20ClassAD
>;
export const PriorApprovalPart20ClassAD = Type.Intersect([
  Application(Type.Literal('pa.part20.classAD')),
  PlanXPreAssessment,
]);

export type PriorApprovalPart20ClassZA = Static<
  typeof PriorApprovalPart20ClassZA
>;
export const PriorApprovalPart20ClassZA = Type.Intersect([
  Application(Type.Literal('pa.part20.classZA')),
  PlanXPreAssessment,
]);

export type PlanningPermissionFullAdvertConsent = Static<
  typeof PlanningPermissionFullAdvertConsent
>;
export const PlanningPermissionFullAdvertConsent = Application(
  Type.Literal('pp.full.advertConsent'),
);

export type PlanningPermissionFullDemolition = Static<
  typeof PlanningPermissionFullDemolition
>;
export const PlanningPermissionFullDemolition = Application(
  Type.Literal('pp.full.demolition'),
);

export type PlanningPermissionFullFastTrackAffordable = Static<
  typeof PlanningPermissionFullFastTrackAffordable
>;
export const PlanningPermissionFullFastTrackAffordable = Application(
  Type.Literal('pp.full.fastTrack.affordable'),
);

export type PlanningPermissionFullHouseholder = Static<
  typeof PlanningPermissionFullHouseholder
>;
export const PlanningPermissionFullHouseholder = Application(
  Type.Literal('pp.full.householder'),
);

export type PlanningPermissionFullHouseholderListed = Static<
  typeof PlanningPermissionFullHouseholderListed
>;
export const PlanningPermissionFullHouseholderListed = Application(
  Type.Literal('pp.full.householder.listed'),
);

export type PlanningPermissionFullHouseholderRetrospective = Static<
  typeof PlanningPermissionFullHouseholderRetrospective
>;
export const PlanningPermissionFullHouseholderRetrospective = Application(
  Type.Literal('pp.full.householder.retro'),
);

export type PlanningPermissionFullMinor = Static<
  typeof PlanningPermissionFullMinor
>;
export const PlanningPermissionFullMinor = Application(
  Type.Literal('pp.full.minor'),
);

export type PlanningPermissionFullMinorListed = Static<
  typeof PlanningPermissionFullMinorListed
>;
export const PlanningPermissionFullMinorListed = Application(
  Type.Literal('pp.full.minor.listed'),
);

export type PlanningPermissionFullMinorTechnicalDetails = Static<
  typeof PlanningPermissionFullMinorTechnicalDetails
>;
export const PlanningPermissionFullMinorTechnicalDetails = Application(
  Type.Literal('pp.full.minor.technicalDetails'),
);

export type PlanningPermissionFullMajor = Static<
  typeof PlanningPermissionFullMajor
>;
export const PlanningPermissionFullMajor = Application(
  Type.Literal('pp.full.major'),
);

export type PlanningPermissionFullMajorTechnicalDetails = Static<
  typeof PlanningPermissionFullMajorTechnicalDetails
>;
export const PlanningPermissionFullMajorTechnicalDetails = Application(
  Type.Literal('pp.full.major.technicalDetails'),
);

export type PlanningPermissionFullMajorTechnicalDetailsWaste = Static<
  typeof PlanningPermissionFullMajorTechnicalDetailsWaste
>;
export const PlanningPermissionFullMajorTechnicalDetailsWaste = Application(
  Type.Literal('pp.full.major.technicalDetails.waste'),
);

export type PlanningPermissionFullMajorWaste = Static<
  typeof PlanningPermissionFullMajorWaste
>;
export const PlanningPermissionFullMajorWaste = Application(
  Type.Literal('pp.full.major.waste'),
);

export type PlanningPermissionMineralExtraction = Static<
  typeof PlanningPermissionMineralExtraction
>;
export const PlanningPermissionMineralExtraction = Application(
  Type.Literal('pp.mineralExtraction'),
);

export type PlanningPermissionOutline = Static<
  typeof PlanningPermissionOutline
>;
export const PlanningPermissionOutline = Application(
  Type.Literal('pp.outline'),
);

export type PlanningPermissionOutlineAll = Static<
  typeof PlanningPermissionOutlineAll
>;
export const PlanningPermissionOutlineAll = Application(
  Type.Literal('pp.outline.all'),
);

export type PlanningPermissionOutlineSome = Static<
  typeof PlanningPermissionOutlineSome
>;
export const PlanningPermissionOutlineSome = Application(
  Type.Literal('pp.outline.some'),
);

export type PlanningPermissionOutlineMinor = Static<
  typeof PlanningPermissionOutlineMinor
>;
export const PlanningPermissionOutlineMinor = Application(
  Type.Literal('pp.outline.minor'),
);

export type PlanningPermissionOutlineMinorAll = Static<
  typeof PlanningPermissionOutlineMinorAll
>;
export const PlanningPermissionOutlineMinorAll = Application(
  Type.Literal('pp.outline.minor.all'),
);

export type PlanningPermissionOutlineMinorSome = Static<
  typeof PlanningPermissionOutlineMinorSome
>;
export const PlanningPermissionOutlineMinorSome = Application(
  Type.Literal('pp.outline.minor.some'),
);

export type PlanningPermissionOutlineMajor = Static<
  typeof PlanningPermissionOutlineMajor
>;
export const PlanningPermissionOutlineMajor = Application(
  Type.Literal('pp.outline.major'),
);

export type PlanningPermissionOutlineMajorAll = Static<
  typeof PlanningPermissionOutlineMajorAll
>;
export const PlanningPermissionOutlineMajorAll = Application(
  Type.Literal('pp.outline.major.all'),
);

export type PlanningPermissionOutlineMajorAllWaste = Static<
  typeof PlanningPermissionOutlineMajorAllWaste
>;
export const PlanningPermissionOutlineMajorAllWaste = Application(
  Type.Literal('pp.outline.major.all.waste'),
);

export type PlanningPermissionOutlineMajorSome = Static<
  typeof PlanningPermissionOutlineMajorSome
>;
export const PlanningPermissionOutlineMajorSome = Application(
  Type.Literal('pp.outline.major.some'),
);

export type PlanningPermissionOutlineMajorSomeWaste = Static<
  typeof PlanningPermissionOutlineMajorSomeWaste
>;
export const PlanningPermissionOutlineMajorSomeWaste = Application(
  Type.Literal('pp.outline.major.some.waste'),
);

export type PlanningPermissionPermissionInPrinciple = Static<
  typeof PlanningPermissionPermissionInPrinciple
>;
export const PlanningPermissionPermissionInPrinciple = Application(
  Type.Literal('pp.pip'),
);

export type RightsOfWayOrder = Static<typeof RightsOfWayOrder>;
export const RightsOfWayOrder = Application(Type.Literal('rightsOfWayOrder'));

export type WorksToTreesConsent = Static<typeof WorksToTreesConsent>;
export const WorksToTreesConsent = Application(Type.Literal('wtt.consent'));

export type WorksToTreesNotice = Static<typeof WorksToTreesNotice>;
export const WorksToTreesNotice = Application(Type.Literal('wtt.notice'));

export type PrototypeApplication = Static<typeof PrototypeApplication>;
export const PrototypeApplication = Type.Union(
  [
    AdvertConsent,
    AmendmentMinorMaterial,
    AmendmentNonMaterial,
    ApprovalConditions,
    ApprovalReservedMatters,
    ComplianceConfirmation,
    EnvironmentalImpactScoping,
    EnvironmentalImpactScreening,
    HazardousSubstanceConsent,
    HedgerowRemovalNotice,
    LandDrainageConsent,
    LawfulDevelopmentCertificateBreachOfCondition,
    LawfulDevelopmentCertificateExisting,
    LawfulDevelopmentCertificateListedBuildingWorks,
    LawfulDevelopmentCertificateProposed,
    ListedBuildingConsent,
    NotifyCompletion,
    ObligationDischarge,
    ObligationModify,
    OnshoreExtractionOilAndGasOther,
    OnshoreExtractionOilAndGasPlanningPermissionExtension,
    OnshoreExtractionOilAndGasPlanningPermissionWaste,
    OnshoreExtractionOilAndGasPlanningPermissionWorking,
    OnshoreExtractionOilAndGasReview,
    OnshoreExtractionOilAndGasVariation,
    PriorApprovalPart1ClassA,
    PriorApprovalPart1ClassAA,
    PriorApprovalPart3ClassG,
    PriorApprovalPart3ClassM,
    PriorApprovalPart3ClassMA,
    PriorApprovalPart3ClassN,
    PriorApprovalPart3ClassQ,
    PriorApprovalPart3ClassR,
    PriorApprovalPart3ClassS,
    PriorApprovalPart3ClassT,
    PriorApprovalPart3ClassV,
    PriorApprovalPart4ClassBB,
    PriorApprovalPart4ClassBC,
    PriorApprovalPart4ClassCA,
    PriorApprovalPart4ClassE,
    PriorApprovalPart6,
    PriorApprovalPart6ClassA,
    PriorApprovalPart6ClassB,
    PriorApprovalPart6ClassE,
    PriorApprovalPart7ClassC,
    PriorApprovalPart7ClassM,
    PriorApprovalPart9ClassD,
    PriorApprovalPart11ClassB,
    PriorApprovalPart14ClassA,
    PriorApprovalPart14ClassB,
    PriorApprovalPart14ClassJ,
    PriorApprovalPart14ClassK,
    PriorApprovalPart14ClassOA,
    PriorApprovalPart16ClassA,
    PriorApprovalPart17,
    PriorApprovalPart17ClassB,
    PriorApprovalPart17ClassC,
    PriorApprovalPart17ClassG,
    PriorApprovalPart18ClassA,
    PriorApprovalPart19ClassTA,
    PriorApprovalPart20ClassA,
    PriorApprovalPart20ClassAA,
    PriorApprovalPart20ClassAB,
    PriorApprovalPart20ClassAC,
    PriorApprovalPart20ClassAD,
    PriorApprovalPart20ClassZA,
    PlanningPermissionFullAdvertConsent,
    PlanningPermissionFullDemolition,
    PlanningPermissionFullFastTrackAffordable,
    PlanningPermissionFullHouseholder,
    PlanningPermissionFullHouseholderListed,
    PlanningPermissionFullHouseholderRetrospective,
    PlanningPermissionFullMinor,
    PlanningPermissionFullMinorListed,
    PlanningPermissionFullMinorTechnicalDetails,
    PlanningPermissionFullMajor,
    PlanningPermissionFullMajorTechnicalDetails,
    PlanningPermissionFullMajorTechnicalDetailsWaste,
    PlanningPermissionFullMajorWaste,
    PlanningPermissionMineralExtraction,
    PlanningPermissionOutline,
    PlanningPermissionOutlineAll,
    PlanningPermissionOutlineSome,
    PlanningPermissionOutlineMinor,
    PlanningPermissionOutlineMinorAll,
    PlanningPermissionOutlineMinorSome,
    PlanningPermissionOutlineMajor,
    PlanningPermissionOutlineMajorAll,
    PlanningPermissionOutlineMajorAllWaste,
    PlanningPermissionOutlineMajorSome,
    PlanningPermissionOutlineMajorSomeWaste,
    PlanningPermissionPermissionInPrinciple,
    RightsOfWayOrder,
    WorksToTreesConsent,
    WorksToTreesNotice,
  ],
  {
    title: 'PrototypeApplication',
    description:
      'The (prototype) root specification for a planning application in England generated by a digital planning service',
  },
);
