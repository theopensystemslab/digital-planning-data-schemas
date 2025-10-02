import {Type} from '@sinclair/typebox';
import type {Static, TSchema} from '@sinclair/typebox';
import {PostSubmissionMetadata} from './Metadata';
import {CaseOfficer} from './data/CaseOfficer';
import {AppealSchema} from './data/Appeal';
import {PostSubmissionFile} from './data/File';
import {Application} from './data/Application';
import {LocalPlanningAuthority} from './data/LocalPlanningAuthority';
import {Submission} from './data/Submission';
import {Validation} from './data/Validation';
import {Consultation} from './data/Consultation';
import {Assessment} from './data/Assessment';
import {PublicComments, SpecialistComments} from './data/Comment';

export const PostSubmissionApplicationSpecificationGenerator = <
  T extends TSchema,
>(
  T: T,
) =>
  Type.Object({
    applicationType: T,
    data: Type.Object({
      application: Application(T),
      localPlanningAuthority: LocalPlanningAuthority(T),
      submission: Submission(T),
      validation: Type.Optional(Validation(T)),
      consultation: Type.Optional(Consultation(T)),
      assessment: Type.Optional(Assessment(T)),
      appeal: Type.Optional(AppealSchema(T)),
      caseOfficer: CaseOfficer(T),
    }),
    comments: Type.Optional(
      Type.Object({
        public: Type.Optional(PublicComments),
        specialist: Type.Optional(SpecialistComments),
      }),
    ),
    files: Type.Optional(Type.Array(PostSubmissionFile)),
    submission: Type.Any(),
    metadata: PostSubmissionMetadata,
  });

export type PostSubmissionAdvertConsent = Static<
  typeof PostSubmissionAdvertConsent
>;
export const PostSubmissionAdvertConsent =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('advertConsent'),
  );

export type PostSubmissionAmendmentMinorMaterial = Static<
  typeof PostSubmissionAmendmentMinorMaterial
>;
export const PostSubmissionAmendmentMinorMaterial =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('amendment.minorMaterial'),
  );

export type PostSubmissionAmendmentNonMaterial = Static<
  typeof PostSubmissionAmendmentNonMaterial
>;
export const PostSubmissionAmendmentNonMaterial =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('amendment.nonMaterial'),
  );

export type PostSubmissionApprovalConditions = Static<
  typeof PostSubmissionApprovalConditions
>;
export const PostSubmissionApprovalConditions =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('approval.conditions'),
  );

export type PostSubmissionApprovalReservedMatters = Static<
  typeof PostSubmissionApprovalReservedMatters
>;
export const PostSubmissionApprovalReservedMatters =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('approval.reservedMatters'),
  );

export type PostSubmissionComplianceConfirmation = Static<
  typeof PostSubmissionComplianceConfirmation
>;
export const PostSubmissionComplianceConfirmation =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('complianceConfirmation'),
  );

export type PostSubmissionEnvironmentalImpactScoping = Static<
  typeof PostSubmissionEnvironmentalImpactScoping
>;
export const PostSubmissionEnvironmentalImpactScoping =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('environmentalImpact.scoping'),
  );

export type PostSubmissionEnvironmentalImpactScreening = Static<
  typeof PostSubmissionEnvironmentalImpactScreening
>;
export const PostSubmissionEnvironmentalImpactScreening =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('environmentalImpact.screening'),
  );

export type PostSubmissionHazardousSubstanceConsent = Static<
  typeof PostSubmissionHazardousSubstanceConsent
>;
export const PostSubmissionHazardousSubstanceConsent =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('hazardousSubstanceConsent'),
  );

export type PostSubmissionHedgerowRemovalNotice = Static<
  typeof PostSubmissionHedgerowRemovalNotice
>;
export const PostSubmissionHedgerowRemovalNotice =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('hedgerowRemovalNotice'),
  );

export type PostSubmissionLandDrainageConsent = Static<
  typeof PostSubmissionLandDrainageConsent
>;
export const PostSubmissionLandDrainageConsent =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('landDrainageConsent'),
  );

export type PostSubmissionLawfulDevelopmentCertificateBreachOfCondition =
  Static<typeof PostSubmissionLawfulDevelopmentCertificateBreachOfCondition>;
export const PostSubmissionLawfulDevelopmentCertificateBreachOfCondition =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('ldc.breachOfCondition'),
  );

export type PostSubmissionLawfulDevelopmentCertificateExisting = Static<
  typeof PostSubmissionLawfulDevelopmentCertificateExisting
>;
export const PostSubmissionLawfulDevelopmentCertificateExisting =
  PostSubmissionApplicationSpecificationGenerator(Type.Literal('ldc.existing'));

export type PostSubmissionLawfulDevelopmentCertificateListedBuildingWorks =
  Static<typeof PostSubmissionLawfulDevelopmentCertificateListedBuildingWorks>;
export const PostSubmissionLawfulDevelopmentCertificateListedBuildingWorks =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('ldc.listedBuildingWorks'),
  );

export type PostSubmissionLawfulDevelopmentCertificateProposed = Static<
  typeof PostSubmissionLawfulDevelopmentCertificateProposed
>;
export const PostSubmissionLawfulDevelopmentCertificateProposed =
  PostSubmissionApplicationSpecificationGenerator(Type.Literal('ldc.proposed'));

export type PostSubmissionListedBuildingConsent = Static<
  typeof PostSubmissionListedBuildingConsent
>;
export const PostSubmissionListedBuildingConsent =
  PostSubmissionApplicationSpecificationGenerator(Type.Literal('listed'));

export type PostSubmissionNotifyCompletion = Static<
  typeof PostSubmissionNotifyCompletion
>;
export const PostSubmissionNotifyCompletion =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('notifyCompletion'),
  );

export type PostSubmissionObligationDischarge = Static<
  typeof PostSubmissionObligationDischarge
>;
export const PostSubmissionObligationDischarge =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('obligation.discharge'),
  );

export type PostSubmissionObligationModify = Static<
  typeof PostSubmissionObligationModify
>;
export const PostSubmissionObligationModify =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('obligation.modify'),
  );

export type PostSubmissionOnshoreExtractionOilAndGasOther = Static<
  typeof PostSubmissionOnshoreExtractionOilAndGasOther
>;
export const PostSubmissionOnshoreExtractionOilAndGasOther =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('onshoreExtractionOilAndGas.other'),
  );

export type PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionExtension =
  Static<
    typeof PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionExtension
  >;
export const PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionExtension =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('onshoreExtractionOilAndGas.pp.extension'),
  );

export type PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionWaste =
  Static<
    typeof PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionWaste
  >;
export const PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionWaste =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('onshoreExtractionOilAndGas.pp.waste'),
  );

export type PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionWorking =
  Static<
    typeof PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionWorking
  >;
export const PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionWorking =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('onshoreExtractionOilAndGas.pp.working'),
  );

export type PostSubmissionOnshoreExtractionOilAndGasReview = Static<
  typeof PostSubmissionOnshoreExtractionOilAndGasReview
>;
export const PostSubmissionOnshoreExtractionOilAndGasReview =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('onshoreExtractionOilAndGas.review'),
  );

export type PostSubmissionOnshoreExtractionOilAndGasVariation = Static<
  typeof PostSubmissionOnshoreExtractionOilAndGasVariation
>;
export const PostSubmissionOnshoreExtractionOilAndGasVariation =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('onshoreExtractionOilAndGas.variation'),
  );

export type PostSubmissionPriorApprovalPart1ClassA = Static<
  typeof PostSubmissionPriorApprovalPart1ClassA
>;
export const PostSubmissionPriorApprovalPart1ClassA =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part1.classA'),
  );

export type PostSubmissionPriorApprovalPart1ClassAA = Static<
  typeof PostSubmissionPriorApprovalPart1ClassAA
>;
export const PostSubmissionPriorApprovalPart1ClassAA =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part1.classAA'),
  );

export type PostSubmissionPriorApprovalPart3ClassG = Static<
  typeof PostSubmissionPriorApprovalPart3ClassG
>;
export const PostSubmissionPriorApprovalPart3ClassG =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classG'),
  );

export type PostSubmissionPriorApprovalPart3ClassM = Static<
  typeof PostSubmissionPriorApprovalPart3ClassM
>;
export const PostSubmissionPriorApprovalPart3ClassM =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classM'),
  );

export type PostSubmissionPriorApprovalPart3ClassMA = Static<
  typeof PostSubmissionPriorApprovalPart3ClassMA
>;
export const PostSubmissionPriorApprovalPart3ClassMA =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classMA'),
  );

export type PostSubmissionPriorApprovalPart3ClassN = Static<
  typeof PostSubmissionPriorApprovalPart3ClassN
>;
export const PostSubmissionPriorApprovalPart3ClassN =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classN'),
  );

export type PostSubmissionPriorApprovalPart3ClassQ = Static<
  typeof PostSubmissionPriorApprovalPart3ClassQ
>;
export const PostSubmissionPriorApprovalPart3ClassQ =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classQ'),
  );

export type PostSubmissionPriorApprovalPart3ClassR = Static<
  typeof PostSubmissionPriorApprovalPart3ClassR
>;
export const PostSubmissionPriorApprovalPart3ClassR =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classR'),
  );

export type PostSubmissionPriorApprovalPart3ClassS = Static<
  typeof PostSubmissionPriorApprovalPart3ClassS
>;
export const PostSubmissionPriorApprovalPart3ClassS =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classS'),
  );

export type PostSubmissionPriorApprovalPart3ClassT = Static<
  typeof PostSubmissionPriorApprovalPart3ClassT
>;
export const PostSubmissionPriorApprovalPart3ClassT =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classT'),
  );

export type PostSubmissionPriorApprovalPart3ClassV = Static<
  typeof PostSubmissionPriorApprovalPart3ClassV
>;
export const PostSubmissionPriorApprovalPart3ClassV =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classV'),
  );

export type PostSubmissionPriorApprovalPart4ClassBB = Static<
  typeof PostSubmissionPriorApprovalPart4ClassBB
>;
export const PostSubmissionPriorApprovalPart4ClassBB =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part4.classBB'),
  );

export type PostSubmissionPriorApprovalPart4ClassBC = Static<
  typeof PostSubmissionPriorApprovalPart4ClassBC
>;
export const PostSubmissionPriorApprovalPart4ClassBC =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part4.classBC'),
  );

export type PostSubmissionPriorApprovalPart4ClassCA = Static<
  typeof PostSubmissionPriorApprovalPart4ClassCA
>;
export const PostSubmissionPriorApprovalPart4ClassCA =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part4.classCA'),
  );

export type PostSubmissionPriorApprovalPart4ClassE = Static<
  typeof PostSubmissionPriorApprovalPart4ClassE
>;
export const PostSubmissionPriorApprovalPart4ClassE =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part4.classE'),
  );

export type PostSubmissionPriorApprovalPart6 = Static<
  typeof PostSubmissionPriorApprovalPart6
>;
export const PostSubmissionPriorApprovalPart6 =
  PostSubmissionApplicationSpecificationGenerator(Type.Literal('pa.part6'));

export type PostSubmissionPriorApprovalPart6ClassA = Static<
  typeof PostSubmissionPriorApprovalPart6ClassA
>;
export const PostSubmissionPriorApprovalPart6ClassA =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part6.classA'),
  );

export type PostSubmissionPriorApprovalPart6ClassB = Static<
  typeof PostSubmissionPriorApprovalPart6ClassB
>;
export const PostSubmissionPriorApprovalPart6ClassB =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part6.classB'),
  );

export type PostSubmissionPriorApprovalPart6ClassE = Static<
  typeof PostSubmissionPriorApprovalPart6ClassE
>;
export const PostSubmissionPriorApprovalPart6ClassE =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part6.classE'),
  );

export type PostSubmissionPriorApprovalPart7ClassC = Static<
  typeof PostSubmissionPriorApprovalPart7ClassC
>;
export const PostSubmissionPriorApprovalPart7ClassC =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part7.classC'),
  );

export type PostSubmissionPriorApprovalPart7ClassM = Static<
  typeof PostSubmissionPriorApprovalPart7ClassM
>;
export const PostSubmissionPriorApprovalPart7ClassM =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part7.classM'),
  );

export type PostSubmissionPriorApprovalPart9ClassD = Static<
  typeof PostSubmissionPriorApprovalPart9ClassD
>;
export const PostSubmissionPriorApprovalPart9ClassD =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part9.classD'),
  );

export type PostSubmissionPriorApprovalPart11ClassB = Static<
  typeof PostSubmissionPriorApprovalPart11ClassB
>;
export const PostSubmissionPriorApprovalPart11ClassB =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part11.classB'),
  );

export type PostSubmissionPriorApprovalPart14ClassA = Static<
  typeof PostSubmissionPriorApprovalPart14ClassA
>;
export const PostSubmissionPriorApprovalPart14ClassA =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part14.classA'),
  );

export type PostSubmissionPriorApprovalPart14ClassB = Static<
  typeof PostSubmissionPriorApprovalPart14ClassB
>;
export const PostSubmissionPriorApprovalPart14ClassB =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part14.classB'),
  );

export type PostSubmissionPriorApprovalPart14ClassJ = Static<
  typeof PostSubmissionPriorApprovalPart14ClassJ
>;
export const PostSubmissionPriorApprovalPart14ClassJ =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part14.classJ'),
  );

export type PostSubmissionPriorApprovalPart14ClassK = Static<
  typeof PostSubmissionPriorApprovalPart14ClassK
>;
export const PostSubmissionPriorApprovalPart14ClassK =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part14.classK'),
  );

export type PostSubmissionPriorApprovalPart14ClassOA = Static<
  typeof PostSubmissionPriorApprovalPart14ClassOA
>;
export const PostSubmissionPriorApprovalPart14ClassOA =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part14.classOA'),
  );

export type PostSubmissionPriorApprovalPart16ClassA = Static<
  typeof PostSubmissionPriorApprovalPart16ClassA
>;
export const PostSubmissionPriorApprovalPart16ClassA =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part16.classA'),
  );

export type PostSubmissionPriorApprovalPart17 = Static<
  typeof PostSubmissionPriorApprovalPart17
>;
export const PostSubmissionPriorApprovalPart17 =
  PostSubmissionApplicationSpecificationGenerator(Type.Literal('pa.part17'));

export type PostSubmissionPriorApprovalPart17ClassB = Static<
  typeof PostSubmissionPriorApprovalPart17ClassB
>;
export const PostSubmissionPriorApprovalPart17ClassB =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part17.classB'),
  );

export type PostSubmissionPriorApprovalPart17ClassC = Static<
  typeof PostSubmissionPriorApprovalPart17ClassC
>;
export const PostSubmissionPriorApprovalPart17ClassC =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part17.classC'),
  );

export type PostSubmissionPriorApprovalPart17ClassG = Static<
  typeof PostSubmissionPriorApprovalPart17ClassG
>;
export const PostSubmissionPriorApprovalPart17ClassG =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part17.classG'),
  );

export type PostSubmissionPriorApprovalPart18ClassA = Static<
  typeof PostSubmissionPriorApprovalPart18ClassA
>;
export const PostSubmissionPriorApprovalPart18ClassA =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part18.classA'),
  );

export type PostSubmissionPriorApprovalPart19ClassTA = Static<
  typeof PostSubmissionPriorApprovalPart19ClassTA
>;
export const PostSubmissionPriorApprovalPart19ClassTA =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part19.classTA'),
  );

export type PostSubmissionPriorApprovalPart20ClassA = Static<
  typeof PostSubmissionPriorApprovalPart20ClassA
>;
export const PostSubmissionPriorApprovalPart20ClassA =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part20.classA'),
  );

export type PostSubmissionPriorApprovalPart20ClassAA = Static<
  typeof PostSubmissionPriorApprovalPart20ClassAA
>;
export const PostSubmissionPriorApprovalPart20ClassAA =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part20.classAA'),
  );

export type PostSubmissionPriorApprovalPart20ClassAB = Static<
  typeof PostSubmissionPriorApprovalPart20ClassAB
>;
export const PostSubmissionPriorApprovalPart20ClassAB =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part20.classAB'),
  );

export type PostSubmissionPriorApprovalPart20ClassAC = Static<
  typeof PostSubmissionPriorApprovalPart20ClassAC
>;
export const PostSubmissionPriorApprovalPart20ClassAC =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part20.classAC'),
  );

export type PostSubmissionPriorApprovalPart20ClassAD = Static<
  typeof PostSubmissionPriorApprovalPart20ClassAD
>;
export const PostSubmissionPriorApprovalPart20ClassAD =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part20.classAD'),
  );

export type PostSubmissionPriorApprovalPart20ClassZA = Static<
  typeof PostSubmissionPriorApprovalPart20ClassZA
>;
export const PostSubmissionPriorApprovalPart20ClassZA =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pa.part20.classZA'),
  );

export type PostSubmissionPlanningPermissionFullAdvertConsent = Static<
  typeof PostSubmissionPlanningPermissionFullAdvertConsent
>;
export const PostSubmissionPlanningPermissionFullAdvertConsent =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.full.advertConsent'),
  );

export type PostSubmissionPlanningPermissionFullDemolition = Static<
  typeof PostSubmissionPlanningPermissionFullDemolition
>;
export const PostSubmissionPlanningPermissionFullDemolition =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.full.demolition'),
  );

export type PostSubmissionPlanningPermissionFullFastTrackAffordable = Static<
  typeof PostSubmissionPlanningPermissionFullFastTrackAffordable
>;
export const PostSubmissionPlanningPermissionFullFastTrackAffordable =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.full.fastTrack.affordable'),
  );

export type PostSubmissionPlanningPermissionFullHouseholder = Static<
  typeof PostSubmissionPlanningPermissionFullHouseholder
>;
export const PostSubmissionPlanningPermissionFullHouseholder =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.full.householder'),
  );

export type PostSubmissionPlanningPermissionFullHouseholderListed = Static<
  typeof PostSubmissionPlanningPermissionFullHouseholderListed
>;
export const PostSubmissionPlanningPermissionFullHouseholderListed =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.full.householder.listed'),
  );

export type PostSubmissionPlanningPermissionFullHouseholderRetrospective =
  Static<typeof PostSubmissionPlanningPermissionFullHouseholderRetrospective>;
export const PostSubmissionPlanningPermissionFullHouseholderRetrospective =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.full.householder.retro'),
  );

export type PostSubmissionPlanningPermissionFullMinor = Static<
  typeof PostSubmissionPlanningPermissionFullMinor
>;
export const PostSubmissionPlanningPermissionFullMinor =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.full.minor'),
  );

export type PostSubmissionPlanningPermissionFullMinorListed = Static<
  typeof PostSubmissionPlanningPermissionFullMinorListed
>;
export const PostSubmissionPlanningPermissionFullMinorListed =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.full.minor.listed'),
  );

export type PostSubmissionPlanningPermissionFullMinorTechnicalDetails = Static<
  typeof PostSubmissionPlanningPermissionFullMinorTechnicalDetails
>;
export const PostSubmissionPlanningPermissionFullMinorTechnicalDetails =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.full.minor.technicalDetails'),
  );

export type PostSubmissionPlanningPermissionFullMajor = Static<
  typeof PostSubmissionPlanningPermissionFullMajor
>;
export const PostSubmissionPlanningPermissionFullMajor =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.full.major'),
  );

export type PostSubmissionPlanningPermissionFullMajorTechnicalDetails = Static<
  typeof PostSubmissionPlanningPermissionFullMajorTechnicalDetails
>;
export const PostSubmissionPlanningPermissionFullMajorTechnicalDetails =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.full.major.technicalDetails'),
  );

export type PostSubmissionPlanningPermissionFullMajorTechnicalDetailsWaste =
  Static<typeof PostSubmissionPlanningPermissionFullMajorTechnicalDetailsWaste>;
export const PostSubmissionPlanningPermissionFullMajorTechnicalDetailsWaste =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.full.major.technicalDetails.waste'),
  );

export type PostSubmissionPlanningPermissionFullMajorWaste = Static<
  typeof PostSubmissionPlanningPermissionFullMajorWaste
>;
export const PostSubmissionPlanningPermissionFullMajorWaste =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.full.major.waste'),
  );

export type PostSubmissionPlanningPermissionMineralExtraction = Static<
  typeof PostSubmissionPlanningPermissionMineralExtraction
>;
export const PostSubmissionPlanningPermissionMineralExtraction =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.mineralExtraction'),
  );

export type PostSubmissionPlanningPermissionOutline = Static<
  typeof PostSubmissionPlanningPermissionOutline
>;
export const PostSubmissionPlanningPermissionOutline =
  PostSubmissionApplicationSpecificationGenerator(Type.Literal('pp.outline'));

export type PostSubmissionPlanningPermissionOutlineAll = Static<
  typeof PostSubmissionPlanningPermissionOutlineAll
>;
export const PostSubmissionPlanningPermissionOutlineAll =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.outline.all'),
  );

export type PostSubmissionPlanningPermissionOutlineSome = Static<
  typeof PostSubmissionPlanningPermissionOutlineSome
>;
export const PostSubmissionPlanningPermissionOutlineSome =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.outline.some'),
  );

export type PostSubmissionPlanningPermissionOutlineMinor = Static<
  typeof PostSubmissionPlanningPermissionOutlineMinor
>;
export const PostSubmissionPlanningPermissionOutlineMinor =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.outline.minor'),
  );

export type PostSubmissionPlanningPermissionOutlineMinorAll = Static<
  typeof PostSubmissionPlanningPermissionOutlineMinorAll
>;
export const PostSubmissionPlanningPermissionOutlineMinorAll =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.outline.minor.all'),
  );

export type PostSubmissionPlanningPermissionOutlineMinorSome = Static<
  typeof PostSubmissionPlanningPermissionOutlineMinorSome
>;
export const PostSubmissionPlanningPermissionOutlineMinorSome =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.outline.minor.some'),
  );

export type PostSubmissionPlanningPermissionOutlineMajor = Static<
  typeof PostSubmissionPlanningPermissionOutlineMajor
>;
export const PostSubmissionPlanningPermissionOutlineMajor =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.outline.major'),
  );

export type PostSubmissionPlanningPermissionOutlineMajorAll = Static<
  typeof PostSubmissionPlanningPermissionOutlineMajorAll
>;
export const PostSubmissionPlanningPermissionOutlineMajorAll =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.outline.major.all'),
  );

export type PostSubmissionPlanningPermissionOutlineMajorAllWaste = Static<
  typeof PostSubmissionPlanningPermissionOutlineMajorAllWaste
>;
export const PostSubmissionPlanningPermissionOutlineMajorAllWaste =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.outline.major.all.waste'),
  );

export type PostSubmissionPlanningPermissionOutlineMajorSome = Static<
  typeof PostSubmissionPlanningPermissionOutlineMajorSome
>;
export const PostSubmissionPlanningPermissionOutlineMajorSome =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.outline.major.some'),
  );

export type PostSubmissionPlanningPermissionOutlineMajorSomeWaste = Static<
  typeof PostSubmissionPlanningPermissionOutlineMajorSomeWaste
>;
export const PostSubmissionPlanningPermissionOutlineMajorSomeWaste =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('pp.outline.major.some.waste'),
  );

export type PostSubmissionPlanningPermissionPermissionInPrinciple = Static<
  typeof PostSubmissionPlanningPermissionPermissionInPrinciple
>;
export const PostSubmissionPlanningPermissionPermissionInPrinciple =
  PostSubmissionApplicationSpecificationGenerator(Type.Literal('pp.pip'));

export type PostSubmissionRightsOfWayOrder = Static<
  typeof PostSubmissionRightsOfWayOrder
>;
export const PostSubmissionRightsOfWayOrder =
  PostSubmissionApplicationSpecificationGenerator(
    Type.Literal('rightsOfWayOrder'),
  );

export type PostSubmissionWorksToTreesConsent = Static<
  typeof PostSubmissionWorksToTreesConsent
>;
export const PostSubmissionWorksToTreesConsent =
  PostSubmissionApplicationSpecificationGenerator(Type.Literal('wtt.consent'));

export type PostSubmissionWorksToTreesNotice = Static<
  typeof PostSubmissionWorksToTreesNotice
>;
export const PostSubmissionWorksToTreesNotice =
  PostSubmissionApplicationSpecificationGenerator(Type.Literal('wtt.notice'));

export type PostSubmissionApplication = Static<
  typeof PostSubmissionApplication
>;
export const PostSubmissionApplication = Type.Union(
  [
    PostSubmissionAdvertConsent,
    PostSubmissionAmendmentMinorMaterial,
    PostSubmissionAmendmentNonMaterial,
    PostSubmissionApprovalConditions,
    PostSubmissionApprovalReservedMatters,
    PostSubmissionComplianceConfirmation,
    PostSubmissionEnvironmentalImpactScoping,
    PostSubmissionEnvironmentalImpactScreening,
    PostSubmissionHazardousSubstanceConsent,
    PostSubmissionHedgerowRemovalNotice,
    PostSubmissionLandDrainageConsent,
    PostSubmissionLawfulDevelopmentCertificateBreachOfCondition,
    PostSubmissionLawfulDevelopmentCertificateExisting,
    PostSubmissionLawfulDevelopmentCertificateListedBuildingWorks,
    PostSubmissionLawfulDevelopmentCertificateProposed,
    PostSubmissionListedBuildingConsent,
    PostSubmissionNotifyCompletion,
    PostSubmissionObligationDischarge,
    PostSubmissionObligationModify,
    PostSubmissionOnshoreExtractionOilAndGasOther,
    PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionExtension,
    PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionWaste,
    PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionWorking,
    PostSubmissionOnshoreExtractionOilAndGasReview,
    PostSubmissionOnshoreExtractionOilAndGasVariation,
    PostSubmissionPriorApprovalPart1ClassA,
    PostSubmissionPriorApprovalPart1ClassAA,
    PostSubmissionPriorApprovalPart3ClassG,
    PostSubmissionPriorApprovalPart3ClassM,
    PostSubmissionPriorApprovalPart3ClassMA,
    PostSubmissionPriorApprovalPart3ClassN,
    PostSubmissionPriorApprovalPart3ClassQ,
    PostSubmissionPriorApprovalPart3ClassR,
    PostSubmissionPriorApprovalPart3ClassS,
    PostSubmissionPriorApprovalPart3ClassT,
    PostSubmissionPriorApprovalPart3ClassV,
    PostSubmissionPriorApprovalPart4ClassBB,
    PostSubmissionPriorApprovalPart4ClassBC,
    PostSubmissionPriorApprovalPart4ClassCA,
    PostSubmissionPriorApprovalPart4ClassE,
    PostSubmissionPriorApprovalPart6,
    PostSubmissionPriorApprovalPart6ClassA,
    PostSubmissionPriorApprovalPart6ClassB,
    PostSubmissionPriorApprovalPart6ClassE,
    PostSubmissionPriorApprovalPart7ClassC,
    PostSubmissionPriorApprovalPart7ClassM,
    PostSubmissionPriorApprovalPart9ClassD,
    PostSubmissionPriorApprovalPart11ClassB,
    PostSubmissionPriorApprovalPart14ClassA,
    PostSubmissionPriorApprovalPart14ClassB,
    PostSubmissionPriorApprovalPart14ClassJ,
    PostSubmissionPriorApprovalPart14ClassK,
    PostSubmissionPriorApprovalPart14ClassOA,
    PostSubmissionPriorApprovalPart16ClassA,
    PostSubmissionPriorApprovalPart17,
    PostSubmissionPriorApprovalPart17ClassB,
    PostSubmissionPriorApprovalPart17ClassC,
    PostSubmissionPriorApprovalPart17ClassG,
    PostSubmissionPriorApprovalPart18ClassA,
    PostSubmissionPriorApprovalPart19ClassTA,
    PostSubmissionPriorApprovalPart20ClassA,
    PostSubmissionPriorApprovalPart20ClassAA,
    PostSubmissionPriorApprovalPart20ClassAB,
    PostSubmissionPriorApprovalPart20ClassAC,
    PostSubmissionPriorApprovalPart20ClassAD,
    PostSubmissionPriorApprovalPart20ClassZA,
    PostSubmissionPlanningPermissionFullAdvertConsent,
    PostSubmissionPlanningPermissionFullDemolition,
    PostSubmissionPlanningPermissionFullFastTrackAffordable,
    PostSubmissionPlanningPermissionFullHouseholder,
    PostSubmissionPlanningPermissionFullHouseholderListed,
    PostSubmissionPlanningPermissionFullHouseholderRetrospective,
    PostSubmissionPlanningPermissionFullMinor,
    PostSubmissionPlanningPermissionFullMinorListed,
    PostSubmissionPlanningPermissionFullMinorTechnicalDetails,
    PostSubmissionPlanningPermissionFullMajor,
    PostSubmissionPlanningPermissionFullMajorTechnicalDetails,
    PostSubmissionPlanningPermissionFullMajorTechnicalDetailsWaste,
    PostSubmissionPlanningPermissionFullMajorWaste,
    PostSubmissionPlanningPermissionMineralExtraction,
    PostSubmissionPlanningPermissionOutline,
    PostSubmissionPlanningPermissionOutlineAll,
    PostSubmissionPlanningPermissionOutlineSome,
    PostSubmissionPlanningPermissionOutlineMinor,
    PostSubmissionPlanningPermissionOutlineMinorAll,
    PostSubmissionPlanningPermissionOutlineMinorSome,
    PostSubmissionPlanningPermissionOutlineMajor,
    PostSubmissionPlanningPermissionOutlineMajorAll,
    PostSubmissionPlanningPermissionOutlineMajorAllWaste,
    PostSubmissionPlanningPermissionOutlineMajorSome,
    PostSubmissionPlanningPermissionOutlineMajorSomeWaste,
    PostSubmissionPlanningPermissionPermissionInPrinciple,
    PostSubmissionRightsOfWayOrder,
    PostSubmissionWorksToTreesConsent,
    PostSubmissionWorksToTreesNotice,
  ],
  {
    title: 'PostSubmissionApplication',
    description:
      'The root specification for a planning application in England after it has been through a digital planning service and into a back office system',
  },
);
