import {PrototypeApplication} from '../prototypeApplication';
import {ApplicationType} from '../prototypeApplication/enums/ApplicationType';
import {PostSubmissionMetadata} from './Metadata';
import {Appeal} from './data/Appeal';
import {Application} from './data/Application';
import {Assessment} from './data/Assessment';
import {CaseOfficer} from './data/CaseOfficer';
import {PublicComments, SpecialistComments} from './data/Comment';
import {Consultation} from './data/Consultation';
import {LocalPlanningAuthority} from './data/LocalPlanningAuthority';
import {Submission} from './data/Submission';
import {Validation} from './data/Validation';

/**
 * @internal
 * The generic base type for all applications
 * Takes a primary and granular application type which allows child properties to differ based on these inputs
 *
 * @todo create redacted form of PrototypeApplication
 */
interface ApplicationSpecification<T extends ApplicationType> {
  applicationType: T;
  data: {
    application: Application<T>;
    localPlanningAuthority: LocalPlanningAuthority<T>;
    submission: Submission<T>;
    validation?: Validation<T>;
    consultation?: Consultation<T>;
    assessment?: Assessment<T>;
    appeal?: Appeal<T>;
    caseOfficer: CaseOfficer<T>;
  };
  comments?: {
    public?: PublicComments;
    specialist?: SpecialistComments;
  };
  submission: PrototypeApplication;
  metadata: PostSubmissionMetadata;
}

export type PostSubmissionAdvertConsent =
  ApplicationSpecification<'advertConsent'>;

export type PostSubmissionAmendmentMinorMaterial =
  ApplicationSpecification<'amendment.minorMaterial'>;
export type PostSubmissionAmendmentNonMaterial =
  ApplicationSpecification<'amendment.nonMaterial'>;

export type PostSubmissionApprovalConditions =
  ApplicationSpecification<'approval.conditions'>;
export type PostSubmissionApprovalReservedMatters =
  ApplicationSpecification<'approval.reservedMatters'>;

export type PostSubmissionComplianceConfirmation =
  ApplicationSpecification<'complianceConfirmation'>;

export type PostSubmissionEnvironmentalImpactScoping =
  ApplicationSpecification<'environmentalImpact.scoping'>;
export type PostSubmissionEnvironmentalImpactScreening =
  ApplicationSpecification<'environmentalImpact.screening'>;

export type PostSubmissionHazardousSubstanceConsent =
  ApplicationSpecification<'hazardousSubstanceConsent'>;

export type PostSubmissionHedgerowRemovalNotice =
  ApplicationSpecification<'hedgerowRemovalNotice'>;

export type PostSubmissionLandDrainageConsent =
  ApplicationSpecification<'landDrainageConsent'>;

// Apply for a lawful development certificate
export type PostSubmissionLawfulDevelopmentCertificateBreachOfCondition =
  ApplicationSpecification<'ldc.breachOfCondition'>;
export type PostSubmissionLawfulDevelopmentCertificateExisting =
  ApplicationSpecification<'ldc.existing'>;
export type PostSubmissionLawfulDevelopmentCertificateListedBuildingWorks =
  ApplicationSpecification<'ldc.listedBuildingWorks'>;
export type PostSubmissionLawfulDevelopmentCertificateProposed =
  ApplicationSpecification<'ldc.proposed'>;

export type PostSubmissionListedBuildingConsent =
  ApplicationSpecification<'listed'>;

export type PostSubmissionNotifyCompletion =
  ApplicationSpecification<'notifyCompletion'>;

export type PostSubmissionObligationDischarge =
  ApplicationSpecification<'obligation.discharge'>;
export type PostSubmissionObligationModify =
  ApplicationSpecification<'obligation.modify'>;

export type PostSubmissionOnshoreExtractionOilAndGasOther =
  ApplicationSpecification<'onshoreExtractionOilAndGas.other'>;
export type PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionExtension =
  ApplicationSpecification<'onshoreExtractionOilAndGas.pp.extension'>;
export type PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionWaste =
  ApplicationSpecification<'onshoreExtractionOilAndGas.pp.waste'>;
export type PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionWorking =
  ApplicationSpecification<'onshoreExtractionOilAndGas.pp.working'>;
export type PostSubmissionOnshoreExtractionOilAndGasReview =
  ApplicationSpecification<'onshoreExtractionOilAndGas.review'>;
export type PostSubmissionOnshoreExtractionOilAndGasVariation =
  ApplicationSpecification<'onshoreExtractionOilAndGas.variation'>;

// Apply for prior approval
export type PostSubmissionPriorApprovalPart1ClassA =
  ApplicationSpecification<'pa.part1.classA'>;
export type PostSubmissionPriorApprovalPart1ClassAA =
  ApplicationSpecification<'pa.part1.classAA'>;
export type PostSubmissionPriorApprovalPart3ClassG =
  ApplicationSpecification<'pa.part3.classG'>;
export type PostSubmissionPriorApprovalPart3ClassM =
  ApplicationSpecification<'pa.part3.classM'>;
export type PostSubmissionPriorApprovalPart3ClassMA =
  ApplicationSpecification<'pa.part3.classMA'>;
export type PostSubmissionPriorApprovalPart3ClassN =
  ApplicationSpecification<'pa.part3.classN'>;
export type PostSubmissionPriorApprovalPart3ClassQ =
  ApplicationSpecification<'pa.part3.classQ'>;
export type PostSubmissionPriorApprovalPart3ClassR =
  ApplicationSpecification<'pa.part3.classR'>;
export type PostSubmissionPriorApprovalPart3ClassS =
  ApplicationSpecification<'pa.part3.classS'>;
export type PostSubmissionPriorApprovalPart3ClassT =
  ApplicationSpecification<'pa.part3.classT'>;
export type PostSubmissionPriorApprovalPart3ClassV =
  ApplicationSpecification<'pa.part3.classV'>;
export type PostSubmissionPriorApprovalPart4ClassBB =
  ApplicationSpecification<'pa.part4.classBB'>;
export type PostSubmissionPriorApprovalPart4ClassBC =
  ApplicationSpecification<'pa.part4.classBC'>;
export type PostSubmissionPriorApprovalPart4ClassCA =
  ApplicationSpecification<'pa.part4.classCA'>;
export type PostSubmissionPriorApprovalPart4ClassE =
  ApplicationSpecification<'pa.part4.classE'>;
export type PostSubmissionPriorApprovalPart6 =
  ApplicationSpecification<'pa.part6'>;
export type PostSubmissionPriorApprovalPart6ClassA =
  ApplicationSpecification<'pa.part6.classA'>;
export type PostSubmissionPriorApprovalPart6ClassB =
  ApplicationSpecification<'pa.part6.classB'>;
export type PostSubmissionPriorApprovalPart6ClassE =
  ApplicationSpecification<'pa.part6.classE'>;
export type PostSubmissionPriorApprovalPart7ClassC =
  ApplicationSpecification<'pa.part7.classC'>;
export type PostSubmissionPriorApprovalPart7ClassM =
  ApplicationSpecification<'pa.part7.classM'>;
export type PostSubmissionPriorApprovalPart9ClassD =
  ApplicationSpecification<'pa.part9.classD'>;
export type PostSubmissionPriorApprovalPart11ClassB =
  ApplicationSpecification<'pa.part11.classB'>;
export type PostSubmissionPriorApprovalPart14ClassA =
  ApplicationSpecification<'pa.part14.classA'>;
export type PostSubmissionPriorApprovalPart14ClassB =
  ApplicationSpecification<'pa.part14.classB'>;
export type PostSubmissionPriorApprovalPart14ClassJ =
  ApplicationSpecification<'pa.part14.classJ'>;
export type PostSubmissionPriorApprovalPart14ClassK =
  ApplicationSpecification<'pa.part14.classK'>;
export type PostSubmissionPriorApprovalPart14ClassOA =
  ApplicationSpecification<'pa.part14.classOA'>;
export type PostSubmissionPriorApprovalPart16ClassA =
  ApplicationSpecification<'pa.part16.classA'>;
export type PostSubmissionPriorApprovalPart17 =
  ApplicationSpecification<'pa.part17'>;
export type PostSubmissionPriorApprovalPart17ClassB =
  ApplicationSpecification<'pa.part17.classB'>;
export type PostSubmissionPriorApprovalPart17ClassC =
  ApplicationSpecification<'pa.part17.classC'>;
export type PostSubmissionPriorApprovalPart17ClassG =
  ApplicationSpecification<'pa.part17.classG'>;
export type PostSubmissionPriorApprovalPart18ClassA =
  ApplicationSpecification<'pa.part18.classA'>;
export type PostSubmissionPriorApprovalPart19ClassTA =
  ApplicationSpecification<'pa.part19.classTA'>;
export type PostSubmissionPriorApprovalPart20ClassA =
  ApplicationSpecification<'pa.part20.classA'>;
export type PostSubmissionPriorApprovalPart20ClassAA =
  ApplicationSpecification<'pa.part20.classAA'>;
export type PostSubmissionPriorApprovalPart20ClassAB =
  ApplicationSpecification<'pa.part20.classAB'>;
export type PostSubmissionPriorApprovalPart20ClassAC =
  ApplicationSpecification<'pa.part20.classAC'>;
export type PostSubmissionPriorApprovalPart20ClassAD =
  ApplicationSpecification<'pa.part20.classAD'>;
export type PostSubmissionPriorApprovalPart20ClassZA =
  ApplicationSpecification<'pa.part20.classZA'>;

// Apply for planning permission
export type PostSubmissionPlanningPermissionFullAdvertConsent =
  ApplicationSpecification<'pp.full.advertConsent'>;
export type PostSubmissionPlanningPermissionFullDemolition =
  ApplicationSpecification<'pp.full.demolition'>;
export type PostSubmissionPlanningPermissionFullFastTrackAffordable =
  ApplicationSpecification<'pp.full.fastTrack.affordable'>;
export type PostSubmissionPlanningPermissionFullHouseholder =
  ApplicationSpecification<'pp.full.householder'>;
export type PostSubmissionPlanningPermissionFullHouseholderListed =
  ApplicationSpecification<'pp.full.householder.listed'>;
export type PostSubmissionPlanningPermissionFullHouseholderRetrospective =
  ApplicationSpecification<'pp.full.householder.retro'>;
export type PostSubmissionPlanningPermissionFullMinor =
  ApplicationSpecification<'pp.full.minor'>;
export type PostSubmissionPlanningPermissionFullMinorListed =
  ApplicationSpecification<'pp.full.minor.listed'>;
export type PostSubmissionPlanningPermissionFullMinorTechnicalDetails =
  ApplicationSpecification<'pp.full.minor.technicalDetails'>;
export type PostSubmissionPlanningPermissionFullMajor =
  ApplicationSpecification<'pp.full.major'>;
export type PostSubmissionPlanningPermissionFullMajorTechnicalDetails =
  ApplicationSpecification<'pp.full.major.technicalDetails'>;
export type PostSubmissionPlanningPermissionFullMajorTechnicalDetailsWaste =
  ApplicationSpecification<'pp.full.major.technicalDetails.waste'>;
export type PostSubmissionPlanningPermissionFullMajorWaste =
  ApplicationSpecification<'pp.full.major.waste'>;
export type PostSubmissionPlanningPermissionMineralExtraction =
  ApplicationSpecification<'pp.mineralExtraction'>;
export type PostSubmissionPlanningPermissionOutline =
  ApplicationSpecification<'pp.outline'>;
export type PostSubmissionPlanningPermissionOutlineAll =
  ApplicationSpecification<'pp.outline.all'>;
export type PostSubmissionPlanningPermissionOutlineSome =
  ApplicationSpecification<'pp.outline.some'>;
export type PostSubmissionPlanningPermissionOutlineMinor =
  ApplicationSpecification<'pp.outline.minor'>;
export type PostSubmissionPlanningPermissionOutlineMinorAll =
  ApplicationSpecification<'pp.outline.minor.all'>;
export type PostSubmissionPlanningPermissionOutlineMinorSome =
  ApplicationSpecification<'pp.outline.minor.some'>;
export type PostSubmissionPlanningPermissionOutlineMajor =
  ApplicationSpecification<'pp.outline.major'>;
export type PostSubmissionPlanningPermissionOutlineMajorAll =
  ApplicationSpecification<'pp.outline.major.all'>;
export type PostSubmissionPlanningPermissionOutlineMajorAllWaste =
  ApplicationSpecification<'pp.outline.major.all.waste'>;
export type PostSubmissionPlanningPermissionOutlineMajorSome =
  ApplicationSpecification<'pp.outline.major.some'>;
export type PostSubmissionPlanningPermissionOutlineMajorSomeWaste =
  ApplicationSpecification<'pp.outline.major.some.waste'>;
export type PostSubmissionPlanningPermissionPermissionInPrinciple =
  ApplicationSpecification<'pp.pip'>;

export type PostSubmissionRightsOfWayOrder =
  ApplicationSpecification<'rightsOfWayOrder'>;

// Works to trees
export type PostSubmissionWorksToTreesConsent =
  ApplicationSpecification<'wtt.consent'>;
export type PostSubmissionWorksToTreesNotice =
  ApplicationSpecification<'wtt.notice'>;

/**
 * @title PostSubmissionApplication
 * @description The root specification for a planning application in England after it has been through a digital planning service and into a back office system
 */
export type PostSubmissionApplication =
  | PostSubmissionAdvertConsent
  | PostSubmissionAmendmentMinorMaterial
  | PostSubmissionAmendmentNonMaterial
  | PostSubmissionApprovalConditions
  | PostSubmissionApprovalReservedMatters
  | PostSubmissionComplianceConfirmation
  | PostSubmissionEnvironmentalImpactScoping
  | PostSubmissionEnvironmentalImpactScreening
  | PostSubmissionHazardousSubstanceConsent
  | PostSubmissionHedgerowRemovalNotice
  | PostSubmissionLandDrainageConsent
  | PostSubmissionLawfulDevelopmentCertificateBreachOfCondition
  | PostSubmissionLawfulDevelopmentCertificateExisting
  | PostSubmissionLawfulDevelopmentCertificateListedBuildingWorks
  | PostSubmissionLawfulDevelopmentCertificateProposed
  | PostSubmissionListedBuildingConsent
  | PostSubmissionNotifyCompletion
  | PostSubmissionObligationDischarge
  | PostSubmissionObligationModify
  | PostSubmissionOnshoreExtractionOilAndGasOther
  | PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionExtension
  | PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionWaste
  | PostSubmissionOnshoreExtractionOilAndGasPlanningPermissionWorking
  | PostSubmissionOnshoreExtractionOilAndGasReview
  | PostSubmissionOnshoreExtractionOilAndGasVariation
  | PostSubmissionPriorApprovalPart1ClassA
  | PostSubmissionPriorApprovalPart1ClassAA
  | PostSubmissionPriorApprovalPart3ClassG
  | PostSubmissionPriorApprovalPart3ClassM
  | PostSubmissionPriorApprovalPart3ClassMA
  | PostSubmissionPriorApprovalPart3ClassN
  | PostSubmissionPriorApprovalPart3ClassQ
  | PostSubmissionPriorApprovalPart3ClassR
  | PostSubmissionPriorApprovalPart3ClassS
  | PostSubmissionPriorApprovalPart3ClassT
  | PostSubmissionPriorApprovalPart3ClassV
  | PostSubmissionPriorApprovalPart4ClassBB
  | PostSubmissionPriorApprovalPart4ClassBC
  | PostSubmissionPriorApprovalPart4ClassCA
  | PostSubmissionPriorApprovalPart4ClassE
  | PostSubmissionPriorApprovalPart6
  | PostSubmissionPriorApprovalPart6ClassA
  | PostSubmissionPriorApprovalPart6ClassB
  | PostSubmissionPriorApprovalPart6ClassE
  | PostSubmissionPriorApprovalPart7ClassC
  | PostSubmissionPriorApprovalPart7ClassM
  | PostSubmissionPriorApprovalPart9ClassD
  | PostSubmissionPriorApprovalPart11ClassB
  | PostSubmissionPriorApprovalPart14ClassA
  | PostSubmissionPriorApprovalPart14ClassB
  | PostSubmissionPriorApprovalPart14ClassJ
  | PostSubmissionPriorApprovalPart14ClassK
  | PostSubmissionPriorApprovalPart14ClassOA
  | PostSubmissionPriorApprovalPart16ClassA
  | PostSubmissionPriorApprovalPart17
  | PostSubmissionPriorApprovalPart17ClassB
  | PostSubmissionPriorApprovalPart17ClassC
  | PostSubmissionPriorApprovalPart17ClassG
  | PostSubmissionPriorApprovalPart18ClassA
  | PostSubmissionPriorApprovalPart19ClassTA
  | PostSubmissionPriorApprovalPart20ClassA
  | PostSubmissionPriorApprovalPart20ClassAA
  | PostSubmissionPriorApprovalPart20ClassAB
  | PostSubmissionPriorApprovalPart20ClassAC
  | PostSubmissionPriorApprovalPart20ClassAD
  | PostSubmissionPriorApprovalPart20ClassZA
  | PostSubmissionPlanningPermissionFullAdvertConsent
  | PostSubmissionPlanningPermissionFullDemolition
  | PostSubmissionPlanningPermissionFullFastTrackAffordable
  | PostSubmissionPlanningPermissionFullHouseholder
  | PostSubmissionPlanningPermissionFullHouseholderListed
  | PostSubmissionPlanningPermissionFullHouseholderRetrospective
  | PostSubmissionPlanningPermissionFullMinor
  | PostSubmissionPlanningPermissionFullMinorListed
  | PostSubmissionPlanningPermissionFullMinorTechnicalDetails
  | PostSubmissionPlanningPermissionFullMajor
  | PostSubmissionPlanningPermissionFullMajorTechnicalDetails
  | PostSubmissionPlanningPermissionFullMajorTechnicalDetailsWaste
  | PostSubmissionPlanningPermissionFullMajorWaste
  | PostSubmissionPlanningPermissionMineralExtraction
  | PostSubmissionPlanningPermissionOutline
  | PostSubmissionPlanningPermissionOutlineAll
  | PostSubmissionPlanningPermissionOutlineSome
  | PostSubmissionPlanningPermissionOutlineMinor
  | PostSubmissionPlanningPermissionOutlineMinorAll
  | PostSubmissionPlanningPermissionOutlineMinorSome
  | PostSubmissionPlanningPermissionOutlineMajor
  | PostSubmissionPlanningPermissionOutlineMajorAll
  | PostSubmissionPlanningPermissionOutlineMajorAllWaste
  | PostSubmissionPlanningPermissionOutlineMajorSome
  | PostSubmissionPlanningPermissionOutlineMajorSomeWaste
  | PostSubmissionPlanningPermissionPermissionInPrinciple
  | PostSubmissionRightsOfWayOrder
  | PostSubmissionWorksToTreesConsent
  | PostSubmissionWorksToTreesNotice;
