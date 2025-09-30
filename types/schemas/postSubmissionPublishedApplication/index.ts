import {ApplicationType} from '../prototypeApplication/enums/ApplicationType';
import {ApplicationSpecification as PostSubmissionApplicationSpecification} from '../postSubmissionApplication';
import {
  PublicCommentsRedacted,
  SpecialistCommentsRedacted,
} from '../postSubmissionApplication/data/Comment';
import {PostSubmissionFileRedacted} from '../postSubmissionApplication/data/File';
/**
 * @internal
 * Extension of the PostSubmissionApplicationSpecification type
 * Takes a primary and granular application type which allows child properties to differ based on these inputs
 *
 * @todo create redacted form of PostSubmissionApplicationSpecification & PrototypeApplication
 */
interface ApplicationSpecification<T extends ApplicationType>
  extends Omit<
    PostSubmissionApplicationSpecification<T>,
    'comments' | 'files'
  > {
  comments?: {
    public?: PublicCommentsRedacted;
    specialist?: SpecialistCommentsRedacted;
  };
  files?: PostSubmissionFileRedacted[];
}

export type PostSubmissionPublishedAdvertConsent =
  ApplicationSpecification<'advertConsent'>;

export type PostSubmissionPublishedAmendmentMinorMaterial =
  ApplicationSpecification<'amendment.minorMaterial'>;
export type PostSubmissionPublishedAmendmentNonMaterial =
  ApplicationSpecification<'amendment.nonMaterial'>;

export type PostSubmissionPublishedApprovalConditions =
  ApplicationSpecification<'approval.conditions'>;
export type PostSubmissionPublishedApprovalReservedMatters =
  ApplicationSpecification<'approval.reservedMatters'>;

export type PostSubmissionPublishedComplianceConfirmation =
  ApplicationSpecification<'complianceConfirmation'>;

export type PostSubmissionPublishedEnvironmentalImpactScoping =
  ApplicationSpecification<'environmentalImpact.scoping'>;
export type PostSubmissionPublishedEnvironmentalImpactScreening =
  ApplicationSpecification<'environmentalImpact.screening'>;

export type PostSubmissionPublishedHazardousSubstanceConsent =
  ApplicationSpecification<'hazardousSubstanceConsent'>;

export type PostSubmissionPublishedHedgerowRemovalNotice =
  ApplicationSpecification<'hedgerowRemovalNotice'>;

export type PostSubmissionPublishedLandDrainageConsent =
  ApplicationSpecification<'landDrainageConsent'>;

// Apply for a lawful development certificate
export type PostSubmissionPublishedLawfulDevelopmentCertificateBreachOfCondition =
  ApplicationSpecification<'ldc.breachOfCondition'>;
export type PostSubmissionPublishedLawfulDevelopmentCertificateExisting =
  ApplicationSpecification<'ldc.existing'>;
export type PostSubmissionPublishedLawfulDevelopmentCertificateListedBuildingWorks =
  ApplicationSpecification<'ldc.listedBuildingWorks'>;
export type PostSubmissionPublishedLawfulDevelopmentCertificateProposed =
  ApplicationSpecification<'ldc.proposed'>;

export type PostSubmissionPublishedListedBuildingConsent =
  ApplicationSpecification<'listed'>;

export type PostSubmissionPublishedNotifyCompletion =
  ApplicationSpecification<'notifyCompletion'>;

export type PostSubmissionPublishedObligationDischarge =
  ApplicationSpecification<'obligation.discharge'>;
export type PostSubmissionPublishedObligationModify =
  ApplicationSpecification<'obligation.modify'>;

export type PostSubmissionPublishedOnshoreExtractionOilAndGasOther =
  ApplicationSpecification<'onshoreExtractionOilAndGas.other'>;
export type PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionExtension =
  ApplicationSpecification<'onshoreExtractionOilAndGas.pp.extension'>;
export type PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionWaste =
  ApplicationSpecification<'onshoreExtractionOilAndGas.pp.waste'>;
export type PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionWorking =
  ApplicationSpecification<'onshoreExtractionOilAndGas.pp.working'>;
export type PostSubmissionPublishedOnshoreExtractionOilAndGasReview =
  ApplicationSpecification<'onshoreExtractionOilAndGas.review'>;
export type PostSubmissionPublishedOnshoreExtractionOilAndGasVariation =
  ApplicationSpecification<'onshoreExtractionOilAndGas.variation'>;

// Apply for prior approval
export type PostSubmissionPublishedPriorApprovalPart1ClassA =
  ApplicationSpecification<'pa.part1.classA'>;
export type PostSubmissionPublishedPriorApprovalPart1ClassAA =
  ApplicationSpecification<'pa.part1.classAA'>;
export type PostSubmissionPublishedPriorApprovalPart3ClassG =
  ApplicationSpecification<'pa.part3.classG'>;
export type PostSubmissionPublishedPriorApprovalPart3ClassM =
  ApplicationSpecification<'pa.part3.classM'>;
export type PostSubmissionPublishedPriorApprovalPart3ClassMA =
  ApplicationSpecification<'pa.part3.classMA'>;
export type PostSubmissionPublishedPriorApprovalPart3ClassN =
  ApplicationSpecification<'pa.part3.classN'>;
export type PostSubmissionPublishedPriorApprovalPart3ClassQ =
  ApplicationSpecification<'pa.part3.classQ'>;
export type PostSubmissionPublishedPriorApprovalPart3ClassR =
  ApplicationSpecification<'pa.part3.classR'>;
export type PostSubmissionPublishedPriorApprovalPart3ClassS =
  ApplicationSpecification<'pa.part3.classS'>;
export type PostSubmissionPublishedPriorApprovalPart3ClassT =
  ApplicationSpecification<'pa.part3.classT'>;
export type PostSubmissionPublishedPriorApprovalPart3ClassV =
  ApplicationSpecification<'pa.part3.classV'>;
export type PostSubmissionPublishedPriorApprovalPart4ClassBB =
  ApplicationSpecification<'pa.part4.classBB'>;
export type PostSubmissionPublishedPriorApprovalPart4ClassBC =
  ApplicationSpecification<'pa.part4.classBC'>;
export type PostSubmissionPublishedPriorApprovalPart4ClassCA =
  ApplicationSpecification<'pa.part4.classCA'>;
export type PostSubmissionPublishedPriorApprovalPart4ClassE =
  ApplicationSpecification<'pa.part4.classE'>;
export type PostSubmissionPublishedPriorApprovalPart6 =
  ApplicationSpecification<'pa.part6'>;
export type PostSubmissionPublishedPriorApprovalPart6ClassA =
  ApplicationSpecification<'pa.part6.classA'>;
export type PostSubmissionPublishedPriorApprovalPart6ClassB =
  ApplicationSpecification<'pa.part6.classB'>;
export type PostSubmissionPublishedPriorApprovalPart6ClassE =
  ApplicationSpecification<'pa.part6.classE'>;
export type PostSubmissionPublishedPriorApprovalPart7ClassC =
  ApplicationSpecification<'pa.part7.classC'>;
export type PostSubmissionPublishedPriorApprovalPart7ClassM =
  ApplicationSpecification<'pa.part7.classM'>;
export type PostSubmissionPublishedPriorApprovalPart9ClassD =
  ApplicationSpecification<'pa.part9.classD'>;
export type PostSubmissionPublishedPriorApprovalPart11ClassB =
  ApplicationSpecification<'pa.part11.classB'>;
export type PostSubmissionPublishedPriorApprovalPart14ClassA =
  ApplicationSpecification<'pa.part14.classA'>;
export type PostSubmissionPublishedPriorApprovalPart14ClassB =
  ApplicationSpecification<'pa.part14.classB'>;
export type PostSubmissionPublishedPriorApprovalPart14ClassJ =
  ApplicationSpecification<'pa.part14.classJ'>;
export type PostSubmissionPublishedPriorApprovalPart14ClassK =
  ApplicationSpecification<'pa.part14.classK'>;
export type PostSubmissionPublishedPriorApprovalPart14ClassOA =
  ApplicationSpecification<'pa.part14.classOA'>;
export type PostSubmissionPublishedPriorApprovalPart16ClassA =
  ApplicationSpecification<'pa.part16.classA'>;
export type PostSubmissionPublishedPriorApprovalPart17 =
  ApplicationSpecification<'pa.part17'>;
export type PostSubmissionPublishedPriorApprovalPart17ClassB =
  ApplicationSpecification<'pa.part17.classB'>;
export type PostSubmissionPublishedPriorApprovalPart17ClassC =
  ApplicationSpecification<'pa.part17.classC'>;
export type PostSubmissionPublishedPriorApprovalPart17ClassG =
  ApplicationSpecification<'pa.part17.classG'>;
export type PostSubmissionPublishedPriorApprovalPart18ClassA =
  ApplicationSpecification<'pa.part18.classA'>;
export type PostSubmissionPublishedPriorApprovalPart19ClassTA =
  ApplicationSpecification<'pa.part19.classTA'>;
export type PostSubmissionPublishedPriorApprovalPart20ClassA =
  ApplicationSpecification<'pa.part20.classA'>;
export type PostSubmissionPublishedPriorApprovalPart20ClassAA =
  ApplicationSpecification<'pa.part20.classAA'>;
export type PostSubmissionPublishedPriorApprovalPart20ClassAB =
  ApplicationSpecification<'pa.part20.classAB'>;
export type PostSubmissionPublishedPriorApprovalPart20ClassAC =
  ApplicationSpecification<'pa.part20.classAC'>;
export type PostSubmissionPublishedPriorApprovalPart20ClassAD =
  ApplicationSpecification<'pa.part20.classAD'>;
export type PostSubmissionPublishedPriorApprovalPart20ClassZA =
  ApplicationSpecification<'pa.part20.classZA'>;

// Apply for planning permission
export type PostSubmissionPublishedPlanningPermissionFullAdvertConsent =
  ApplicationSpecification<'pp.full.advertConsent'>;
export type PostSubmissionPublishedPlanningPermissionFullDemolition =
  ApplicationSpecification<'pp.full.demolition'>;
export type PostSubmissionPublishedPlanningPermissionFullFastTrackAffordable =
  ApplicationSpecification<'pp.full.fastTrack.affordable'>;
export type PostSubmissionPublishedPlanningPermissionFullHouseholder =
  ApplicationSpecification<'pp.full.householder'>;
export type PostSubmissionPublishedPlanningPermissionFullHouseholderListed =
  ApplicationSpecification<'pp.full.householder.listed'>;
export type PostSubmissionPublishedPlanningPermissionFullHouseholderRetrospective =
  ApplicationSpecification<'pp.full.householder.retro'>;
export type PostSubmissionPublishedPlanningPermissionFullMinor =
  ApplicationSpecification<'pp.full.minor'>;
export type PostSubmissionPublishedPlanningPermissionFullMinorListed =
  ApplicationSpecification<'pp.full.minor.listed'>;
export type PostSubmissionPublishedPlanningPermissionFullMinorTechnicalDetails =
  ApplicationSpecification<'pp.full.minor.technicalDetails'>;
export type PostSubmissionPublishedPlanningPermissionFullMajor =
  ApplicationSpecification<'pp.full.major'>;
export type PostSubmissionPublishedPlanningPermissionFullMajorTechnicalDetails =
  ApplicationSpecification<'pp.full.major.technicalDetails'>;
export type PostSubmissionPublishedPlanningPermissionFullMajorTechnicalDetailsWaste =
  ApplicationSpecification<'pp.full.major.technicalDetails.waste'>;
export type PostSubmissionPublishedPlanningPermissionFullMajorWaste =
  ApplicationSpecification<'pp.full.major.waste'>;
export type PostSubmissionPublishedPlanningPermissionMineralExtraction =
  ApplicationSpecification<'pp.mineralExtraction'>;
export type PostSubmissionPublishedPlanningPermissionOutline =
  ApplicationSpecification<'pp.outline'>;
export type PostSubmissionPublishedPlanningPermissionOutlineAll =
  ApplicationSpecification<'pp.outline.all'>;
export type PostSubmissionPublishedPlanningPermissionOutlineSome =
  ApplicationSpecification<'pp.outline.some'>;
export type PostSubmissionPublishedPlanningPermissionOutlineMinor =
  ApplicationSpecification<'pp.outline.minor'>;
export type PostSubmissionPublishedPlanningPermissionOutlineMinorAll =
  ApplicationSpecification<'pp.outline.minor.all'>;
export type PostSubmissionPublishedPlanningPermissionOutlineMinorSome =
  ApplicationSpecification<'pp.outline.minor.some'>;
export type PostSubmissionPublishedPlanningPermissionOutlineMajor =
  ApplicationSpecification<'pp.outline.major'>;
export type PostSubmissionPublishedPlanningPermissionOutlineMajorAll =
  ApplicationSpecification<'pp.outline.major.all'>;
export type PostSubmissionPublishedPlanningPermissionOutlineMajorAllWaste =
  ApplicationSpecification<'pp.outline.major.all.waste'>;
export type PostSubmissionPublishedPlanningPermissionOutlineMajorSome =
  ApplicationSpecification<'pp.outline.major.some'>;
export type PostSubmissionPublishedPlanningPermissionOutlineMajorSomeWaste =
  ApplicationSpecification<'pp.outline.major.some.waste'>;
export type PostSubmissionPublishedPlanningPermissionPermissionInPrinciple =
  ApplicationSpecification<'pp.pip'>;

export type PostSubmissionPublishedRightsOfWayOrder =
  ApplicationSpecification<'rightsOfWayOrder'>;

// Works to trees
export type PostSubmissionPublishedWorksToTreesConsent =
  ApplicationSpecification<'wtt.consent'>;
export type PostSubmissionPublishedWorksToTreesNotice =
  ApplicationSpecification<'wtt.notice'>;

/**
 * @title PostSubmissionPublishedApplication
 * @description The root specification for a planning application in England after it has been through a digital planning service and into a back office system
 */
export type PostSubmissionPublishedApplication =
  | PostSubmissionPublishedAdvertConsent
  | PostSubmissionPublishedAmendmentMinorMaterial
  | PostSubmissionPublishedAmendmentNonMaterial
  | PostSubmissionPublishedApprovalConditions
  | PostSubmissionPublishedApprovalReservedMatters
  | PostSubmissionPublishedComplianceConfirmation
  | PostSubmissionPublishedEnvironmentalImpactScoping
  | PostSubmissionPublishedEnvironmentalImpactScreening
  | PostSubmissionPublishedHazardousSubstanceConsent
  | PostSubmissionPublishedHedgerowRemovalNotice
  | PostSubmissionPublishedLandDrainageConsent
  | PostSubmissionPublishedLawfulDevelopmentCertificateBreachOfCondition
  | PostSubmissionPublishedLawfulDevelopmentCertificateExisting
  | PostSubmissionPublishedLawfulDevelopmentCertificateListedBuildingWorks
  | PostSubmissionPublishedLawfulDevelopmentCertificateProposed
  | PostSubmissionPublishedListedBuildingConsent
  | PostSubmissionPublishedNotifyCompletion
  | PostSubmissionPublishedObligationDischarge
  | PostSubmissionPublishedObligationModify
  | PostSubmissionPublishedOnshoreExtractionOilAndGasOther
  | PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionExtension
  | PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionWaste
  | PostSubmissionPublishedOnshoreExtractionOilAndGasPlanningPermissionWorking
  | PostSubmissionPublishedOnshoreExtractionOilAndGasReview
  | PostSubmissionPublishedOnshoreExtractionOilAndGasVariation
  | PostSubmissionPublishedPriorApprovalPart1ClassA
  | PostSubmissionPublishedPriorApprovalPart1ClassAA
  | PostSubmissionPublishedPriorApprovalPart3ClassG
  | PostSubmissionPublishedPriorApprovalPart3ClassM
  | PostSubmissionPublishedPriorApprovalPart3ClassMA
  | PostSubmissionPublishedPriorApprovalPart3ClassN
  | PostSubmissionPublishedPriorApprovalPart3ClassQ
  | PostSubmissionPublishedPriorApprovalPart3ClassR
  | PostSubmissionPublishedPriorApprovalPart3ClassS
  | PostSubmissionPublishedPriorApprovalPart3ClassT
  | PostSubmissionPublishedPriorApprovalPart3ClassV
  | PostSubmissionPublishedPriorApprovalPart4ClassBB
  | PostSubmissionPublishedPriorApprovalPart4ClassBC
  | PostSubmissionPublishedPriorApprovalPart4ClassCA
  | PostSubmissionPublishedPriorApprovalPart4ClassE
  | PostSubmissionPublishedPriorApprovalPart6
  | PostSubmissionPublishedPriorApprovalPart6ClassA
  | PostSubmissionPublishedPriorApprovalPart6ClassB
  | PostSubmissionPublishedPriorApprovalPart6ClassE
  | PostSubmissionPublishedPriorApprovalPart7ClassC
  | PostSubmissionPublishedPriorApprovalPart7ClassM
  | PostSubmissionPublishedPriorApprovalPart9ClassD
  | PostSubmissionPublishedPriorApprovalPart11ClassB
  | PostSubmissionPublishedPriorApprovalPart14ClassA
  | PostSubmissionPublishedPriorApprovalPart14ClassB
  | PostSubmissionPublishedPriorApprovalPart14ClassJ
  | PostSubmissionPublishedPriorApprovalPart14ClassK
  | PostSubmissionPublishedPriorApprovalPart14ClassOA
  | PostSubmissionPublishedPriorApprovalPart16ClassA
  | PostSubmissionPublishedPriorApprovalPart17
  | PostSubmissionPublishedPriorApprovalPart17ClassB
  | PostSubmissionPublishedPriorApprovalPart17ClassC
  | PostSubmissionPublishedPriorApprovalPart17ClassG
  | PostSubmissionPublishedPriorApprovalPart18ClassA
  | PostSubmissionPublishedPriorApprovalPart19ClassTA
  | PostSubmissionPublishedPriorApprovalPart20ClassA
  | PostSubmissionPublishedPriorApprovalPart20ClassAA
  | PostSubmissionPublishedPriorApprovalPart20ClassAB
  | PostSubmissionPublishedPriorApprovalPart20ClassAC
  | PostSubmissionPublishedPriorApprovalPart20ClassAD
  | PostSubmissionPublishedPriorApprovalPart20ClassZA
  | PostSubmissionPublishedPlanningPermissionFullAdvertConsent
  | PostSubmissionPublishedPlanningPermissionFullDemolition
  | PostSubmissionPublishedPlanningPermissionFullFastTrackAffordable
  | PostSubmissionPublishedPlanningPermissionFullHouseholder
  | PostSubmissionPublishedPlanningPermissionFullHouseholderListed
  | PostSubmissionPublishedPlanningPermissionFullHouseholderRetrospective
  | PostSubmissionPublishedPlanningPermissionFullMinor
  | PostSubmissionPublishedPlanningPermissionFullMinorListed
  | PostSubmissionPublishedPlanningPermissionFullMinorTechnicalDetails
  | PostSubmissionPublishedPlanningPermissionFullMajor
  | PostSubmissionPublishedPlanningPermissionFullMajorTechnicalDetails
  | PostSubmissionPublishedPlanningPermissionFullMajorTechnicalDetailsWaste
  | PostSubmissionPublishedPlanningPermissionFullMajorWaste
  | PostSubmissionPublishedPlanningPermissionMineralExtraction
  | PostSubmissionPublishedPlanningPermissionOutline
  | PostSubmissionPublishedPlanningPermissionOutlineAll
  | PostSubmissionPublishedPlanningPermissionOutlineSome
  | PostSubmissionPublishedPlanningPermissionOutlineMinor
  | PostSubmissionPublishedPlanningPermissionOutlineMinorAll
  | PostSubmissionPublishedPlanningPermissionOutlineMinorSome
  | PostSubmissionPublishedPlanningPermissionOutlineMajor
  | PostSubmissionPublishedPlanningPermissionOutlineMajorAll
  | PostSubmissionPublishedPlanningPermissionOutlineMajorAllWaste
  | PostSubmissionPublishedPlanningPermissionOutlineMajorSome
  | PostSubmissionPublishedPlanningPermissionOutlineMajorSomeWaste
  | PostSubmissionPublishedPlanningPermissionPermissionInPrinciple
  | PostSubmissionPublishedRightsOfWayOrder
  | PostSubmissionPublishedWorksToTreesConsent
  | PostSubmissionPublishedWorksToTreesNotice;
