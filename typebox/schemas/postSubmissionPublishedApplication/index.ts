import {Type} from '@sinclair/typebox';
import type {Static, TSchema} from '@sinclair/typebox';
import {
  PublicCommentsRedacted,
  SpecialistCommentsRedacted,
} from '../postSubmissionApplication/data/Comment';
import {PostSubmissionApplicationSpecificationGenerator} from '../postSubmissionApplication';
import {PostSubmissionFileRedacted} from '../postSubmissionApplication/data/File';

export const PostSubmissionPublishedApplicationSpecificationGenerator = <
  T extends TSchema,
>(
  T: T,
) =>
  Type.Composite([
    Type.Omit(PostSubmissionApplicationSpecificationGenerator(T), [
      'comments',
      'files',
    ]),
    Type.Object({
      comments: Type.Optional(
        Type.Object({
          public: Type.Optional(PublicCommentsRedacted),
          specialist: Type.Optional(SpecialistCommentsRedacted),
        }),
      ),
      files: Type.Optional(Type.Array(PostSubmissionFileRedacted)),
    }),
  ]);

// export type PostSubmissionPublishedPlanningPermissionFullHouseholder = Static<
//   typeof PostSubmissionPublishedPlanningPermissionFullHouseholder
// >
// export const PostSubmissionPublishedPlanningPermissionFullHouseholder =
//   PostSubmissionPublishedApplicationSpecificationGenerator(
//     Type.Literal('pp.full.householder')
//   )

// export type PostSubmissionPublishedApplication = Static<
//   typeof PostSubmissionPublishedApplication
// >
// export const PostSubmissionPublishedApplication =
//   PostSubmissionPublishedPlanningPermissionFullHouseholder

////

export type PostSubmissionPublishedAdvertConsent = Static<
  typeof PostSubmissionPublishedAdvertConsent
>;
export const PostSubmissionPublishedAdvertConsent =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('advertConsent'),
  );

export type PostSubmissionPublishedAmendmentMinorMaterial = Static<
  typeof PostSubmissionPublishedAmendmentMinorMaterial
>;
export const PostSubmissionPublishedAmendmentMinorMaterial =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('amendment.minorMaterial'),
  );

export type PostSubmissionPublishedAmendmentNonMaterial = Static<
  typeof PostSubmissionPublishedAmendmentNonMaterial
>;
export const PostSubmissionPublishedAmendmentNonMaterial =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('amendment.nonMaterial'),
  );

export type PostSubmissionPublishedApprovalConditions = Static<
  typeof PostSubmissionPublishedApprovalConditions
>;
export const PostSubmissionPublishedApprovalConditions =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('approval.conditions'),
  );

export type PostSubmissionPublishedApprovalReservedMatters = Static<
  typeof PostSubmissionPublishedApprovalReservedMatters
>;
export const PostSubmissionPublishedApprovalReservedMatters =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('approval.reservedMatters'),
  );

export type PostSubmissionPublishedComplianceConfirmation = Static<
  typeof PostSubmissionPublishedComplianceConfirmation
>;
export const PostSubmissionPublishedComplianceConfirmation =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('complianceConfirmation'),
  );

export type PostSubmissionPublishedEnvironmentalImpactScoping = Static<
  typeof PostSubmissionPublishedEnvironmentalImpactScoping
>;
export const PostSubmissionPublishedEnvironmentalImpactScoping =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('environmentalImpact.scoping'),
  );

export type PostSubmissionPublishedEnvironmentalImpactScreening = Static<
  typeof PostSubmissionPublishedEnvironmentalImpactScreening
>;
export const PostSubmissionPublishedEnvironmentalImpactScreening =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('environmentalImpact.screening'),
  );

export type PostSubmissionPublishedHazardousSubstanceConsent = Static<
  typeof PostSubmissionPublishedHazardousSubstanceConsent
>;
export const PostSubmissionPublishedHazardousSubstanceConsent =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('hazardousSubstanceConsent'),
  );

export type PostSubmissionPublishedHedgerowRemovalNotice = Static<
  typeof PostSubmissionPublishedHedgerowRemovalNotice
>;
export const PostSubmissionPublishedHedgerowRemovalNotice =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('hedgerowRemovalNotice'),
  );

export type PostSubmissionPublishedLandDrainageConsent = Static<
  typeof PostSubmissionPublishedLandDrainageConsent
>;
export const PostSubmissionPublishedLandDrainageConsent =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('landDrainageConsent'),
  );

export type PostSubmissionPublishedLawfulDevelopmentCertificateBreachOfCondition =
  Static<
    typeof PostSubmissionPublishedLawfulDevelopmentCertificateBreachOfCondition
  >;
export const PostSubmissionPublishedLawfulDevelopmentCertificateBreachOfCondition =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('ldc.breachOfCondition'),
  );

export type PostSubmissionPublishedLawfulDevelopmentCertificateExisting =
  Static<typeof PostSubmissionPublishedLawfulDevelopmentCertificateExisting>;
export const PostSubmissionPublishedLawfulDevelopmentCertificateExisting =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('ldc.existing'),
  );

export type PostSubmissionPublishedLawfulDevelopmentCertificateListedBuildingWorks =
  Static<
    typeof PostSubmissionPublishedLawfulDevelopmentCertificateListedBuildingWorks
  >;
export const PostSubmissionPublishedLawfulDevelopmentCertificateListedBuildingWorks =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('ldc.listedBuildingWorks'),
  );

export type PostSubmissionPublishedLawfulDevelopmentCertificateProposed =
  Static<typeof PostSubmissionPublishedLawfulDevelopmentCertificateProposed>;
export const PostSubmissionPublishedLawfulDevelopmentCertificateProposed =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('ldc.proposed'),
  );

export type PostSubmissionPublishedListedBuildingConsent = Static<
  typeof PostSubmissionPublishedListedBuildingConsent
>;
export const PostSubmissionPublishedListedBuildingConsent =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('listed'),
  );

export type PostSubmissionPublishedNotifyCompletion = Static<
  typeof PostSubmissionPublishedNotifyCompletion
>;
export const PostSubmissionPublishedNotifyCompletion =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('notifyCompletion'),
  );

export type PostSubmissionPublishedObligationDischarge = Static<
  typeof PostSubmissionPublishedObligationDischarge
>;
export const PostSubmissionPublishedObligationDischarge =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('obligation.discharge'),
  );

export type PostSubmissionPublishedObligationModify = Static<
  typeof PostSubmissionPublishedObligationModify
>;
export const PostSubmissionPublishedObligationModify =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('obligation.modify'),
  );

export type PostSubmissionPublishedOnshoreExtractionOilAndGasOther = Static<
  typeof PostSubmissionPublishedOnshoreExtractionOilAndGasOther
>;
export const PostSubmissionPublishedOnshoreExtractionOilAndGasOther =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('onshoreExtractionOilAndGas.other'),
  );

export type PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionExtension =
  Static<
    typeof PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionExtension
  >;
export const PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionExtension =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('onshoreExtractionOilAndGas.pp.extension'),
  );

export type PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionWaste =
  Static<
    typeof PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionWaste
  >;
export const PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionWaste =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('onshoreExtractionOilAndGas.pp.waste'),
  );

export type PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionWorking =
  Static<
    typeof PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionWorking
  >;
export const PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionWorking =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('onshoreExtractionOilAndGas.pp.working'),
  );

export type PostSubmissionPublishedOnshoreExtractionOilAndGasReview = Static<
  typeof PostSubmissionPublishedOnshoreExtractionOilAndGasReview
>;
export const PostSubmissionPublishedOnshoreExtractionOilAndGasReview =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('onshoreExtractionOilAndGas.review'),
  );

export type PostSubmissionPublishedOnshoreExtractionOilAndGasVariation = Static<
  typeof PostSubmissionPublishedOnshoreExtractionOilAndGasVariation
>;
export const PostSubmissionPublishedOnshoreExtractionOilAndGasVariation =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('onshoreExtractionOilAndGas.variation'),
  );

export type PostSubmissionPublishedPriorApprovalPart1ClassA = Static<
  typeof PostSubmissionPublishedPriorApprovalPart1ClassA
>;
export const PostSubmissionPublishedPriorApprovalPart1ClassA =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part1.classA'),
  );

export type PostSubmissionPublishedPriorApprovalPart1ClassAA = Static<
  typeof PostSubmissionPublishedPriorApprovalPart1ClassAA
>;
export const PostSubmissionPublishedPriorApprovalPart1ClassAA =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part1.classAA'),
  );

export type PostSubmissionPublishedPriorApprovalPart3ClassG = Static<
  typeof PostSubmissionPublishedPriorApprovalPart3ClassG
>;
export const PostSubmissionPublishedPriorApprovalPart3ClassG =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classG'),
  );

export type PostSubmissionPublishedPriorApprovalPart3ClassM = Static<
  typeof PostSubmissionPublishedPriorApprovalPart3ClassM
>;
export const PostSubmissionPublishedPriorApprovalPart3ClassM =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classM'),
  );

export type PostSubmissionPublishedPriorApprovalPart3ClassMA = Static<
  typeof PostSubmissionPublishedPriorApprovalPart3ClassMA
>;
export const PostSubmissionPublishedPriorApprovalPart3ClassMA =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classMA'),
  );

export type PostSubmissionPublishedPriorApprovalPart3ClassN = Static<
  typeof PostSubmissionPublishedPriorApprovalPart3ClassN
>;
export const PostSubmissionPublishedPriorApprovalPart3ClassN =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classN'),
  );

export type PostSubmissionPublishedPriorApprovalPart3ClassQ = Static<
  typeof PostSubmissionPublishedPriorApprovalPart3ClassQ
>;
export const PostSubmissionPublishedPriorApprovalPart3ClassQ =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classQ'),
  );

export type PostSubmissionPublishedPriorApprovalPart3ClassR = Static<
  typeof PostSubmissionPublishedPriorApprovalPart3ClassR
>;
export const PostSubmissionPublishedPriorApprovalPart3ClassR =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classR'),
  );

export type PostSubmissionPublishedPriorApprovalPart3ClassS = Static<
  typeof PostSubmissionPublishedPriorApprovalPart3ClassS
>;
export const PostSubmissionPublishedPriorApprovalPart3ClassS =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classS'),
  );

export type PostSubmissionPublishedPriorApprovalPart3ClassT = Static<
  typeof PostSubmissionPublishedPriorApprovalPart3ClassT
>;
export const PostSubmissionPublishedPriorApprovalPart3ClassT =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classT'),
  );

export type PostSubmissionPublishedPriorApprovalPart3ClassV = Static<
  typeof PostSubmissionPublishedPriorApprovalPart3ClassV
>;
export const PostSubmissionPublishedPriorApprovalPart3ClassV =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part3.classV'),
  );

export type PostSubmissionPublishedPriorApprovalPart4ClassBB = Static<
  typeof PostSubmissionPublishedPriorApprovalPart4ClassBB
>;
export const PostSubmissionPublishedPriorApprovalPart4ClassBB =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part4.classBB'),
  );

export type PostSubmissionPublishedPriorApprovalPart4ClassBC = Static<
  typeof PostSubmissionPublishedPriorApprovalPart4ClassBC
>;
export const PostSubmissionPublishedPriorApprovalPart4ClassBC =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part4.classBC'),
  );

export type PostSubmissionPublishedPriorApprovalPart4ClassCA = Static<
  typeof PostSubmissionPublishedPriorApprovalPart4ClassCA
>;
export const PostSubmissionPublishedPriorApprovalPart4ClassCA =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part4.classCA'),
  );

export type PostSubmissionPublishedPriorApprovalPart4ClassE = Static<
  typeof PostSubmissionPublishedPriorApprovalPart4ClassE
>;
export const PostSubmissionPublishedPriorApprovalPart4ClassE =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part4.classE'),
  );

export type PostSubmissionPublishedPriorApprovalPart6 = Static<
  typeof PostSubmissionPublishedPriorApprovalPart6
>;
export const PostSubmissionPublishedPriorApprovalPart6 =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part6'),
  );

export type PostSubmissionPublishedPriorApprovalPart6ClassA = Static<
  typeof PostSubmissionPublishedPriorApprovalPart6ClassA
>;
export const PostSubmissionPublishedPriorApprovalPart6ClassA =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part6.classA'),
  );

export type PostSubmissionPublishedPriorApprovalPart6ClassB = Static<
  typeof PostSubmissionPublishedPriorApprovalPart6ClassB
>;
export const PostSubmissionPublishedPriorApprovalPart6ClassB =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part6.classB'),
  );

export type PostSubmissionPublishedPriorApprovalPart6ClassE = Static<
  typeof PostSubmissionPublishedPriorApprovalPart6ClassE
>;
export const PostSubmissionPublishedPriorApprovalPart6ClassE =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part6.classE'),
  );

export type PostSubmissionPublishedPriorApprovalPart7ClassC = Static<
  typeof PostSubmissionPublishedPriorApprovalPart7ClassC
>;
export const PostSubmissionPublishedPriorApprovalPart7ClassC =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part7.classC'),
  );

export type PostSubmissionPublishedPriorApprovalPart7ClassM = Static<
  typeof PostSubmissionPublishedPriorApprovalPart7ClassM
>;
export const PostSubmissionPublishedPriorApprovalPart7ClassM =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part7.classM'),
  );

export type PostSubmissionPublishedPriorApprovalPart9ClassD = Static<
  typeof PostSubmissionPublishedPriorApprovalPart9ClassD
>;
export const PostSubmissionPublishedPriorApprovalPart9ClassD =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part9.classD'),
  );

export type PostSubmissionPublishedPriorApprovalPart11ClassB = Static<
  typeof PostSubmissionPublishedPriorApprovalPart11ClassB
>;
export const PostSubmissionPublishedPriorApprovalPart11ClassB =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part11.classB'),
  );

export type PostSubmissionPublishedPriorApprovalPart14ClassA = Static<
  typeof PostSubmissionPublishedPriorApprovalPart14ClassA
>;
export const PostSubmissionPublishedPriorApprovalPart14ClassA =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part14.classA'),
  );

export type PostSubmissionPublishedPriorApprovalPart14ClassB = Static<
  typeof PostSubmissionPublishedPriorApprovalPart14ClassB
>;
export const PostSubmissionPublishedPriorApprovalPart14ClassB =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part14.classB'),
  );

export type PostSubmissionPublishedPriorApprovalPart14ClassJ = Static<
  typeof PostSubmissionPublishedPriorApprovalPart14ClassJ
>;
export const PostSubmissionPublishedPriorApprovalPart14ClassJ =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part14.classJ'),
  );

export type PostSubmissionPublishedPriorApprovalPart14ClassK = Static<
  typeof PostSubmissionPublishedPriorApprovalPart14ClassK
>;
export const PostSubmissionPublishedPriorApprovalPart14ClassK =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part14.classK'),
  );

export type PostSubmissionPublishedPriorApprovalPart14ClassOA = Static<
  typeof PostSubmissionPublishedPriorApprovalPart14ClassOA
>;
export const PostSubmissionPublishedPriorApprovalPart14ClassOA =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part14.classOA'),
  );

export type PostSubmissionPublishedPriorApprovalPart16ClassA = Static<
  typeof PostSubmissionPublishedPriorApprovalPart16ClassA
>;
export const PostSubmissionPublishedPriorApprovalPart16ClassA =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part16.classA'),
  );

export type PostSubmissionPublishedPriorApprovalPart17 = Static<
  typeof PostSubmissionPublishedPriorApprovalPart17
>;
export const PostSubmissionPublishedPriorApprovalPart17 =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part17'),
  );

export type PostSubmissionPublishedPriorApprovalPart17ClassB = Static<
  typeof PostSubmissionPublishedPriorApprovalPart17ClassB
>;
export const PostSubmissionPublishedPriorApprovalPart17ClassB =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part17.classB'),
  );

export type PostSubmissionPublishedPriorApprovalPart17ClassC = Static<
  typeof PostSubmissionPublishedPriorApprovalPart17ClassC
>;
export const PostSubmissionPublishedPriorApprovalPart17ClassC =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part17.classC'),
  );

export type PostSubmissionPublishedPriorApprovalPart17ClassG = Static<
  typeof PostSubmissionPublishedPriorApprovalPart17ClassG
>;
export const PostSubmissionPublishedPriorApprovalPart17ClassG =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part17.classG'),
  );

export type PostSubmissionPublishedPriorApprovalPart18ClassA = Static<
  typeof PostSubmissionPublishedPriorApprovalPart18ClassA
>;
export const PostSubmissionPublishedPriorApprovalPart18ClassA =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part18.classA'),
  );

export type PostSubmissionPublishedPriorApprovalPart19ClassTA = Static<
  typeof PostSubmissionPublishedPriorApprovalPart19ClassTA
>;
export const PostSubmissionPublishedPriorApprovalPart19ClassTA =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part19.classTA'),
  );

export type PostSubmissionPublishedPriorApprovalPart20ClassA = Static<
  typeof PostSubmissionPublishedPriorApprovalPart20ClassA
>;
export const PostSubmissionPublishedPriorApprovalPart20ClassA =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part20.classA'),
  );

export type PostSubmissionPublishedPriorApprovalPart20ClassAA = Static<
  typeof PostSubmissionPublishedPriorApprovalPart20ClassAA
>;
export const PostSubmissionPublishedPriorApprovalPart20ClassAA =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part20.classAA'),
  );

export type PostSubmissionPublishedPriorApprovalPart20ClassAB = Static<
  typeof PostSubmissionPublishedPriorApprovalPart20ClassAB
>;
export const PostSubmissionPublishedPriorApprovalPart20ClassAB =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part20.classAB'),
  );

export type PostSubmissionPublishedPriorApprovalPart20ClassAC = Static<
  typeof PostSubmissionPublishedPriorApprovalPart20ClassAC
>;
export const PostSubmissionPublishedPriorApprovalPart20ClassAC =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part20.classAC'),
  );

export type PostSubmissionPublishedPriorApprovalPart20ClassAD = Static<
  typeof PostSubmissionPublishedPriorApprovalPart20ClassAD
>;
export const PostSubmissionPublishedPriorApprovalPart20ClassAD =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part20.classAD'),
  );

export type PostSubmissionPublishedPriorApprovalPart20ClassZA = Static<
  typeof PostSubmissionPublishedPriorApprovalPart20ClassZA
>;
export const PostSubmissionPublishedPriorApprovalPart20ClassZA =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pa.part20.classZA'),
  );

export type PostSubmissionPublishedPlanningPermissionFullAdvertConsent = Static<
  typeof PostSubmissionPublishedPlanningPermissionFullAdvertConsent
>;
export const PostSubmissionPublishedPlanningPermissionFullAdvertConsent =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.full.advertConsent'),
  );

export type PostSubmissionPublishedPlanningPermissionFullDemolition = Static<
  typeof PostSubmissionPublishedPlanningPermissionFullDemolition
>;
export const PostSubmissionPublishedPlanningPermissionFullDemolition =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.full.demolition'),
  );

export type PostSubmissionPublishedPlanningPermissionFullFastTrackAffordable =
  Static<
    typeof PostSubmissionPublishedPlanningPermissionFullFastTrackAffordable
  >;
export const PostSubmissionPublishedPlanningPermissionFullFastTrackAffordable =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.full.fastTrack.affordable'),
  );

export type PostSubmissionPublishedPlanningPermissionFullHouseholder = Static<
  typeof PostSubmissionPublishedPlanningPermissionFullHouseholder
>;
export const PostSubmissionPublishedPlanningPermissionFullHouseholder =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.full.householder'),
  );

export type PostSubmissionPublishedPlanningPermissionFullHouseholderListed =
  Static<typeof PostSubmissionPublishedPlanningPermissionFullHouseholderListed>;
export const PostSubmissionPublishedPlanningPermissionFullHouseholderListed =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.full.householder.listed'),
  );

export type PostSubmissionPublishedPlanningPermissionFullHouseholderRetrospective =
  Static<
    typeof PostSubmissionPublishedPlanningPermissionFullHouseholderRetrospective
  >;
export const PostSubmissionPublishedPlanningPermissionFullHouseholderRetrospective =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.full.householder.retro'),
  );

export type PostSubmissionPublishedPlanningPermissionFullMinor = Static<
  typeof PostSubmissionPublishedPlanningPermissionFullMinor
>;
export const PostSubmissionPublishedPlanningPermissionFullMinor =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.full.minor'),
  );

export type PostSubmissionPublishedPlanningPermissionFullMinorListed = Static<
  typeof PostSubmissionPublishedPlanningPermissionFullMinorListed
>;
export const PostSubmissionPublishedPlanningPermissionFullMinorListed =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.full.minor.listed'),
  );

export type PostSubmissionPublishedPlanningPermissionFullMinorTechnicalDetails =
  Static<
    typeof PostSubmissionPublishedPlanningPermissionFullMinorTechnicalDetails
  >;
export const PostSubmissionPublishedPlanningPermissionFullMinorTechnicalDetails =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.full.minor.technicalDetails'),
  );

export type PostSubmissionPublishedPlanningPermissionFullMajor = Static<
  typeof PostSubmissionPublishedPlanningPermissionFullMajor
>;
export const PostSubmissionPublishedPlanningPermissionFullMajor =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.full.major'),
  );

export type PostSubmissionPublishedPlanningPermissionFullMajorTechnicalDetails =
  Static<
    typeof PostSubmissionPublishedPlanningPermissionFullMajorTechnicalDetails
  >;
export const PostSubmissionPublishedPlanningPermissionFullMajorTechnicalDetails =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.full.major.technicalDetails'),
  );

export type PostSubmissionPublishedPlanningPermissionFullMajorTechnicalDetailsWaste =
  Static<
    typeof PostSubmissionPublishedPlanningPermissionFullMajorTechnicalDetailsWaste
  >;
export const PostSubmissionPublishedPlanningPermissionFullMajorTechnicalDetailsWaste =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.full.major.technicalDetails.waste'),
  );

export type PostSubmissionPublishedPlanningPermissionFullMajorWaste = Static<
  typeof PostSubmissionPublishedPlanningPermissionFullMajorWaste
>;
export const PostSubmissionPublishedPlanningPermissionFullMajorWaste =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.full.major.waste'),
  );

export type PostSubmissionPublishedPlanningPermissionMineralExtraction = Static<
  typeof PostSubmissionPublishedPlanningPermissionMineralExtraction
>;
export const PostSubmissionPublishedPlanningPermissionMineralExtraction =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.mineralExtraction'),
  );

export type PostSubmissionPublishedPlanningPermissionOutline = Static<
  typeof PostSubmissionPublishedPlanningPermissionOutline
>;
export const PostSubmissionPublishedPlanningPermissionOutline =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.outline'),
  );

export type PostSubmissionPublishedPlanningPermissionOutlineAll = Static<
  typeof PostSubmissionPublishedPlanningPermissionOutlineAll
>;
export const PostSubmissionPublishedPlanningPermissionOutlineAll =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.outline.all'),
  );

export type PostSubmissionPublishedPlanningPermissionOutlineSome = Static<
  typeof PostSubmissionPublishedPlanningPermissionOutlineSome
>;
export const PostSubmissionPublishedPlanningPermissionOutlineSome =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.outline.some'),
  );

export type PostSubmissionPublishedPlanningPermissionOutlineMinor = Static<
  typeof PostSubmissionPublishedPlanningPermissionOutlineMinor
>;
export const PostSubmissionPublishedPlanningPermissionOutlineMinor =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.outline.minor'),
  );

export type PostSubmissionPublishedPlanningPermissionOutlineMinorAll = Static<
  typeof PostSubmissionPublishedPlanningPermissionOutlineMinorAll
>;
export const PostSubmissionPublishedPlanningPermissionOutlineMinorAll =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.outline.minor.all'),
  );

export type PostSubmissionPublishedPlanningPermissionOutlineMinorSome = Static<
  typeof PostSubmissionPublishedPlanningPermissionOutlineMinorSome
>;
export const PostSubmissionPublishedPlanningPermissionOutlineMinorSome =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.outline.minor.some'),
  );

export type PostSubmissionPublishedPlanningPermissionOutlineMajor = Static<
  typeof PostSubmissionPublishedPlanningPermissionOutlineMajor
>;
export const PostSubmissionPublishedPlanningPermissionOutlineMajor =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.outline.major'),
  );

export type PostSubmissionPublishedPlanningPermissionOutlineMajorAll = Static<
  typeof PostSubmissionPublishedPlanningPermissionOutlineMajorAll
>;
export const PostSubmissionPublishedPlanningPermissionOutlineMajorAll =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.outline.major.all'),
  );

export type PostSubmissionPublishedPlanningPermissionOutlineMajorAllWaste =
  Static<typeof PostSubmissionPublishedPlanningPermissionOutlineMajorAllWaste>;
export const PostSubmissionPublishedPlanningPermissionOutlineMajorAllWaste =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.outline.major.all.waste'),
  );

export type PostSubmissionPublishedPlanningPermissionOutlineMajorSome = Static<
  typeof PostSubmissionPublishedPlanningPermissionOutlineMajorSome
>;
export const PostSubmissionPublishedPlanningPermissionOutlineMajorSome =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.outline.major.some'),
  );

export type PostSubmissionPublishedPlanningPermissionOutlineMajorSomeWaste =
  Static<typeof PostSubmissionPublishedPlanningPermissionOutlineMajorSomeWaste>;
export const PostSubmissionPublishedPlanningPermissionOutlineMajorSomeWaste =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.outline.major.some.waste'),
  );

export type PostSubmissionPublishedPlanningPermissionPermissionInPrinciple =
  Static<typeof PostSubmissionPublishedPlanningPermissionPermissionInPrinciple>;
export const PostSubmissionPublishedPlanningPermissionPermissionInPrinciple =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('pp.pip'),
  );

export type PostSubmissionPublishedRightsOfWayOrder = Static<
  typeof PostSubmissionPublishedRightsOfWayOrder
>;
export const PostSubmissionPublishedRightsOfWayOrder =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('rightsOfWayOrder'),
  );

export type PostSubmissionPublishedWorksToTreesConsent = Static<
  typeof PostSubmissionPublishedWorksToTreesConsent
>;
export const PostSubmissionPublishedWorksToTreesConsent =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('wtt.consent'),
  );

export type PostSubmissionPublishedWorksToTreesNotice = Static<
  typeof PostSubmissionPublishedWorksToTreesNotice
>;
export const PostSubmissionPublishedWorksToTreesNotice =
  PostSubmissionPublishedApplicationSpecificationGenerator(
    Type.Literal('wtt.notice'),
  );

export type PostSubmissionPublishedApplication = Static<
  typeof PostSubmissionPublishedApplication
>;
export const PostSubmissionPublishedApplication = Type.Union(
  [
    PostSubmissionPublishedAdvertConsent,
    PostSubmissionPublishedAmendmentMinorMaterial,
    PostSubmissionPublishedAmendmentNonMaterial,
    PostSubmissionPublishedApprovalConditions,
    PostSubmissionPublishedApprovalReservedMatters,
    PostSubmissionPublishedComplianceConfirmation,
    PostSubmissionPublishedEnvironmentalImpactScoping,
    PostSubmissionPublishedEnvironmentalImpactScreening,
    PostSubmissionPublishedHazardousSubstanceConsent,
    PostSubmissionPublishedHedgerowRemovalNotice,
    PostSubmissionPublishedLandDrainageConsent,
    PostSubmissionPublishedLawfulDevelopmentCertificateBreachOfCondition,
    PostSubmissionPublishedLawfulDevelopmentCertificateExisting,
    PostSubmissionPublishedLawfulDevelopmentCertificateListedBuildingWorks,
    PostSubmissionPublishedLawfulDevelopmentCertificateProposed,
    PostSubmissionPublishedListedBuildingConsent,
    PostSubmissionPublishedNotifyCompletion,
    PostSubmissionPublishedObligationDischarge,
    PostSubmissionPublishedObligationModify,
    PostSubmissionPublishedOnshoreExtractionOilAndGasOther,
    PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionExtension,
    PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionWaste,
    PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionWorking,
    PostSubmissionPublishedOnshoreExtractionOilAndGasReview,
    PostSubmissionPublishedOnshoreExtractionOilAndGasVariation,
    PostSubmissionPublishedPriorApprovalPart1ClassA,
    PostSubmissionPublishedPriorApprovalPart1ClassAA,
    PostSubmissionPublishedPriorApprovalPart3ClassG,
    PostSubmissionPublishedPriorApprovalPart3ClassM,
    PostSubmissionPublishedPriorApprovalPart3ClassMA,
    PostSubmissionPublishedPriorApprovalPart3ClassN,
    PostSubmissionPublishedPriorApprovalPart3ClassQ,
    PostSubmissionPublishedPriorApprovalPart3ClassR,
    PostSubmissionPublishedPriorApprovalPart3ClassS,
    PostSubmissionPublishedPriorApprovalPart3ClassT,
    PostSubmissionPublishedPriorApprovalPart3ClassV,
    PostSubmissionPublishedPriorApprovalPart4ClassBB,
    PostSubmissionPublishedPriorApprovalPart4ClassBC,
    PostSubmissionPublishedPriorApprovalPart4ClassCA,
    PostSubmissionPublishedPriorApprovalPart4ClassE,
    PostSubmissionPublishedPriorApprovalPart6,
    PostSubmissionPublishedPriorApprovalPart6ClassA,
    PostSubmissionPublishedPriorApprovalPart6ClassB,
    PostSubmissionPublishedPriorApprovalPart6ClassE,
    PostSubmissionPublishedPriorApprovalPart7ClassC,
    PostSubmissionPublishedPriorApprovalPart7ClassM,
    PostSubmissionPublishedPriorApprovalPart9ClassD,
    PostSubmissionPublishedPriorApprovalPart11ClassB,
    PostSubmissionPublishedPriorApprovalPart14ClassA,
    PostSubmissionPublishedPriorApprovalPart14ClassB,
    PostSubmissionPublishedPriorApprovalPart14ClassJ,
    PostSubmissionPublishedPriorApprovalPart14ClassK,
    PostSubmissionPublishedPriorApprovalPart14ClassOA,
    PostSubmissionPublishedPriorApprovalPart16ClassA,
    PostSubmissionPublishedPriorApprovalPart17,
    PostSubmissionPublishedPriorApprovalPart17ClassB,
    PostSubmissionPublishedPriorApprovalPart17ClassC,
    PostSubmissionPublishedPriorApprovalPart17ClassG,
    PostSubmissionPublishedPriorApprovalPart18ClassA,
    PostSubmissionPublishedPriorApprovalPart19ClassTA,
    PostSubmissionPublishedPriorApprovalPart20ClassA,
    PostSubmissionPublishedPriorApprovalPart20ClassAA,
    PostSubmissionPublishedPriorApprovalPart20ClassAB,
    PostSubmissionPublishedPriorApprovalPart20ClassAC,
    PostSubmissionPublishedPriorApprovalPart20ClassAD,
    PostSubmissionPublishedPriorApprovalPart20ClassZA,
    PostSubmissionPublishedPlanningPermissionFullAdvertConsent,
    PostSubmissionPublishedPlanningPermissionFullDemolition,
    PostSubmissionPublishedPlanningPermissionFullFastTrackAffordable,
    PostSubmissionPublishedPlanningPermissionFullHouseholder,
    PostSubmissionPublishedPlanningPermissionFullHouseholderListed,
    PostSubmissionPublishedPlanningPermissionFullHouseholderRetrospective,
    PostSubmissionPublishedPlanningPermissionFullMinor,
    PostSubmissionPublishedPlanningPermissionFullMinorListed,
    PostSubmissionPublishedPlanningPermissionFullMinorTechnicalDetails,
    PostSubmissionPublishedPlanningPermissionFullMajor,
    PostSubmissionPublishedPlanningPermissionFullMajorTechnicalDetails,
    PostSubmissionPublishedPlanningPermissionFullMajorTechnicalDetailsWaste,
    PostSubmissionPublishedPlanningPermissionFullMajorWaste,
    PostSubmissionPublishedPlanningPermissionMineralExtraction,
    PostSubmissionPublishedPlanningPermissionOutline,
    PostSubmissionPublishedPlanningPermissionOutlineAll,
    PostSubmissionPublishedPlanningPermissionOutlineSome,
    PostSubmissionPublishedPlanningPermissionOutlineMinor,
    PostSubmissionPublishedPlanningPermissionOutlineMinorAll,
    PostSubmissionPublishedPlanningPermissionOutlineMinorSome,
    PostSubmissionPublishedPlanningPermissionOutlineMajor,
    PostSubmissionPublishedPlanningPermissionOutlineMajorAll,
    PostSubmissionPublishedPlanningPermissionOutlineMajorAllWaste,
    PostSubmissionPublishedPlanningPermissionOutlineMajorSome,
    PostSubmissionPublishedPlanningPermissionOutlineMajorSomeWaste,
    PostSubmissionPublishedPlanningPermissionPermissionInPrinciple,
    PostSubmissionPublishedRightsOfWayOrder,
    PostSubmissionPublishedWorksToTreesConsent,
    PostSubmissionPublishedWorksToTreesNotice,
  ],
  {
    title: 'PostSubmissionPublishedApplication',
    description:
      'The root specification for a planning application in England after it has been through a digital planning service and into a back office system',
  },
);
