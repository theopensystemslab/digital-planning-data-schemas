import {Responses} from '../../shared/Responses';
import {Applicant} from './data/Applicant';
import {ApplicationData} from './data/ApplicationData';
import {Property} from './data/Property';
import {Proposal} from './data/Proposal';
import {UserBase} from './data/User';
import {ApplicationType} from './enums/ApplicationType';
import {File} from './File';
import {PrototypePlanXMetadata} from './Metadata';
import {PreAssessment} from './PreAssessment';

/**
 * @internal
 * The generic base type for all applications
 * Child properties may differ based on a granular application type parameter
 */
interface Application<T extends ApplicationType> {
  applicationType: T;
  data: {
    user: UserBase;
    applicant: Applicant<T>;
    application: ApplicationData<T>;
    property: Property<T>;
    proposal: Proposal<T>;
  };
  responses: Responses;
  files: File[];
  metadata: PrototypePlanXMetadata;
}

/**
 * @internal
 * Some application types will have an extra property 'preAssessment' which contains the PlanX "result"
 * Ref https://docs.google.com/spreadsheets/d/1FgULPemnwuwysrYGEkReYFXz3n3T7W0nWziU00taZE4/edit?gid=0#gid=0
 */
interface PlanXPreAssessment {
  preAssessment: PreAssessment;
}

/**
 * @internal
 * Types below should only include "submittable" application types only, not PlanX service-level-only prefixes like 'ldc'
 * All types are exported and acronymns are spelled out in full as they'll become the top-level toggles here https://theopensystemslab.github.io/digital-planning-data-schemas-docs/
 */
export type AdvertConsent = Application<'advertConsent'>;

export type AmendmentMinorMaterial = Application<'amendment.minorMaterial'>;
export type AmendmentNonMaterial = Application<'amendment.nonMaterial'>;

export type ApprovalConditions = Application<'approval.conditions'>;
export type ApprovalReservedMatters = Application<'approval.reservedMatters'>;

export type ComplianceConfirmation = Application<'complianceConfirmation'>;

export type EnvironmentalImpactScoping =
  Application<'environmentalImpact.scoping'>;
export type EnvironmentalImpactScreening =
  Application<'environmentalImpact.screening'>;

export type HazardousSubstanceConsent =
  Application<'hazardousSubstanceConsent'>;

export type HedgerowRemovalNotice = Application<'hedgerowRemovalNotice'>;

export type LandDrainageConsent = Application<'landDrainageConsent'>;

// Apply for a lawful development certificate
export type LawfulDevelopmentCertificateBreachOfCondition =
  Application<'ldc.breachOfCondition'>;
export type LawfulDevelopmentCertificateExisting = Application<'ldc.existing'> &
  PlanXPreAssessment;
export type LawfulDevelopmentCertificateListedBuildingWorks =
  Application<'ldc.listedBuildingWorks'>;
export type LawfulDevelopmentCertificateProposed = Application<'ldc.proposed'> &
  PlanXPreAssessment;

export type ListedBuildingConsent = Application<'listed'>;

export type NotifyCompletion = Application<'notifyCompletion'>;

export type ObligationDischarge = Application<'obligation.discharge'>;
export type ObligationModify = Application<'obligation.modify'>;

export type OnshoreExtractionOilAndGasOther =
  Application<'onshoreExtractionOilAndGas.other'>;
export type OnshoreExtractionOilAndGasPlanningPermissionExtension =
  Application<'onshoreExtractionOilAndGas.pp.extension'>;
export type OnshoreExtractionOilAndGasPlanningPermissionWaste =
  Application<'onshoreExtractionOilAndGas.pp.waste'>;
export type OnshoreExtractionOilAndGasPlanningPermissionWorking =
  Application<'onshoreExtractionOilAndGas.pp.working'>;
export type OnshoreExtractionOilAndGasReview =
  Application<'onshoreExtractionOilAndGas.review'>;
export type OnshoreExtractionOilAndGasVariation =
  Application<'onshoreExtractionOilAndGas.variation'>;

// Apply for prior approval
export type PriorApprovalPart1ClassA = Application<'pa.part1.classA'> &
  PlanXPreAssessment;
export type PriorApprovalPart1ClassAA = Application<'pa.part1.classAA'> &
  PlanXPreAssessment;
export type PriorApprovalPart3ClassG = Application<'pa.part3.classG'> &
  PlanXPreAssessment;
export type PriorApprovalPart3ClassM = Application<'pa.part3.classM'> &
  PlanXPreAssessment;
export type PriorApprovalPart3ClassMA = Application<'pa.part3.classMA'> &
  PlanXPreAssessment;
export type PriorApprovalPart3ClassN = Application<'pa.part3.classN'> &
  PlanXPreAssessment;
export type PriorApprovalPart3ClassQ = Application<'pa.part3.classQ'> &
  PlanXPreAssessment;
export type PriorApprovalPart3ClassR = Application<'pa.part3.classR'> &
  PlanXPreAssessment;
export type PriorApprovalPart3ClassS = Application<'pa.part3.classS'> &
  PlanXPreAssessment;
export type PriorApprovalPart3ClassT = Application<'pa.part3.classT'> &
  PlanXPreAssessment;
export type PriorApprovalPart3ClassV = Application<'pa.part3.classV'> &
  PlanXPreAssessment;
export type PriorApprovalPart4ClassBB = Application<'pa.part4.classBB'> &
  PlanXPreAssessment;
export type PriorApprovalPart4ClassBC = Application<'pa.part4.classBC'> &
  PlanXPreAssessment;
export type PriorApprovalPart4ClassCA = Application<'pa.part4.classCA'> &
  PlanXPreAssessment;
export type PriorApprovalPart4ClassE = Application<'pa.part4.classE'> &
  PlanXPreAssessment;
export type PriorApprovalPart6 = Application<'pa.part6'> & PlanXPreAssessment;
export type PriorApprovalPart6ClassA = Application<'pa.part6.classA'> &
  PlanXPreAssessment;
export type PriorApprovalPart6ClassB = Application<'pa.part6.classB'> &
  PlanXPreAssessment;
export type PriorApprovalPart6ClassE = Application<'pa.part6.classE'> &
  PlanXPreAssessment;
export type PriorApprovalPart7ClassC = Application<'pa.part7.classC'> &
  PlanXPreAssessment;
export type PriorApprovalPart7ClassM = Application<'pa.part7.classM'> &
  PlanXPreAssessment;
export type PriorApprovalPart9ClassD = Application<'pa.part9.classD'> &
  PlanXPreAssessment;
export type PriorApprovalPart11ClassB = Application<'pa.part11.classB'> &
  PlanXPreAssessment;
export type PriorApprovalPart14ClassA = Application<'pa.part14.classA'> &
  PlanXPreAssessment;
export type PriorApprovalPart14ClassB = Application<'pa.part14.classB'> &
  PlanXPreAssessment;
export type PriorApprovalPart14ClassJ = Application<'pa.part14.classJ'> &
  PlanXPreAssessment;
export type PriorApprovalPart14ClassK = Application<'pa.part14.classK'> &
  PlanXPreAssessment;
export type PriorApprovalPart14ClassOA = Application<'pa.part14.classOA'> &
  PlanXPreAssessment;
export type PriorApprovalPart16ClassA = Application<'pa.part16.classA'> &
  PlanXPreAssessment;
export type PriorApprovalPart17 = Application<'pa.part17'> & PlanXPreAssessment;
export type PriorApprovalPart17ClassB = Application<'pa.part17.classB'> &
  PlanXPreAssessment;
export type PriorApprovalPart17ClassC = Application<'pa.part17.classC'> &
  PlanXPreAssessment;
export type PriorApprovalPart17ClassG = Application<'pa.part17.classG'> &
  PlanXPreAssessment;
export type PriorApprovalPart18ClassA = Application<'pa.part18.classA'> &
  PlanXPreAssessment;
export type PriorApprovalPart19ClassTA = Application<'pa.part19.classTA'> &
  PlanXPreAssessment;
export type PriorApprovalPart20ClassA = Application<'pa.part20.classA'> &
  PlanXPreAssessment;
export type PriorApprovalPart20ClassAA = Application<'pa.part20.classAA'> &
  PlanXPreAssessment;
export type PriorApprovalPart20ClassAB = Application<'pa.part20.classAB'> &
  PlanXPreAssessment;
export type PriorApprovalPart20ClassAC = Application<'pa.part20.classAC'> &
  PlanXPreAssessment;
export type PriorApprovalPart20ClassAD = Application<'pa.part20.classAD'> &
  PlanXPreAssessment;
export type PriorApprovalPart20ClassZA = Application<'pa.part20.classZA'> &
  PlanXPreAssessment;

// Apply for planning permission
export type PlanningPermissionFullAdvertConsent =
  Application<'pp.full.advertConsent'>;
export type PlanningPermissionFullDemolition =
  Application<'pp.full.demolition'>;
export type PlanningPermissionFullFastTrackAffordable =
  Application<'pp.full.fastTrack.affordable'>;
export type PlanningPermissionFullHouseholder =
  Application<'pp.full.householder'>;
export type PlanningPermissionFullHouseholderListed =
  Application<'pp.full.householder.listed'>;
export type PlanningPermissionFullHouseholderRetrospective =
  Application<'pp.full.householder.retro'>;
export type PlanningPermissionFullMinor = Application<'pp.full.minor'>;
export type PlanningPermissionFullMinorListed =
  Application<'pp.full.minor.listed'>;
export type PlanningPermissionFullMinorTechnicalDetails =
  Application<'pp.full.minor.technicalDetails'>;
export type PlanningPermissionFullMajor = Application<'pp.full.major'>;
export type PlanningPermissionFullMajorTechnicalDetails =
  Application<'pp.full.major.technicalDetails'>;
export type PlanningPermissionFullMajorTechnicalDetailsWaste =
  Application<'pp.full.major.technicalDetails.waste'>;
export type PlanningPermissionFullMajorWaste =
  Application<'pp.full.major.waste'>;
export type PlanningPermissionMineralExtraction =
  Application<'pp.mineralExtraction'>;
export type PlanningPermissionOutline = Application<'pp.outline'>;
export type PlanningPermissionOutlineAll = Application<'pp.outline.all'>;
export type PlanningPermissionOutlineSome = Application<'pp.outline.some'>;
export type PlanningPermissionOutlineMinor = Application<'pp.outline.minor'>;
export type PlanningPermissionOutlineMinorAll =
  Application<'pp.outline.minor.all'>;
export type PlanningPermissionOutlineMinorSome =
  Application<'pp.outline.minor.some'>;
export type PlanningPermissionOutlineMajor = Application<'pp.outline.major'>;
export type PlanningPermissionOutlineMajorAll =
  Application<'pp.outline.major.all'>;
export type PlanningPermissionOutlineMajorAllWaste =
  Application<'pp.outline.major.all.waste'>;
export type PlanningPermissionOutlineMajorSome =
  Application<'pp.outline.major.some'>;
export type PlanningPermissionOutlineMajorSomeWaste =
  Application<'pp.outline.major.some.waste'>;
export type PlanningPermissionPermissionInPrinciple = Application<'pp.pip'>;

export type RightsOfWayOrder = Application<'rightsOfWayOrder'>;

// Works to trees
export type WorksToTreesConsent = Application<'wtt.consent'>;
export type WorksToTreesNotice = Application<'wtt.notice'>;

/**
 * @title PrototypeApplication
 * @description The (prototype) root specification for a planning application in England generated by a digital planning service
 */
export type PrototypeApplication =
  | AdvertConsent
  | AmendmentMinorMaterial
  | AmendmentNonMaterial
  | ApprovalConditions
  | ApprovalReservedMatters
  | ComplianceConfirmation
  | EnvironmentalImpactScoping
  | EnvironmentalImpactScreening
  | HazardousSubstanceConsent
  | HedgerowRemovalNotice
  | LandDrainageConsent
  | LawfulDevelopmentCertificateBreachOfCondition
  | LawfulDevelopmentCertificateExisting
  | LawfulDevelopmentCertificateListedBuildingWorks
  | LawfulDevelopmentCertificateProposed
  | ListedBuildingConsent
  | NotifyCompletion
  | ObligationDischarge
  | ObligationModify
  | OnshoreExtractionOilAndGasOther
  | OnshoreExtractionOilAndGasPlanningPermissionExtension
  | OnshoreExtractionOilAndGasPlanningPermissionWaste
  | OnshoreExtractionOilAndGasPlanningPermissionWorking
  | OnshoreExtractionOilAndGasReview
  | OnshoreExtractionOilAndGasVariation
  | PriorApprovalPart1ClassA
  | PriorApprovalPart1ClassAA
  | PriorApprovalPart3ClassG
  | PriorApprovalPart3ClassM
  | PriorApprovalPart3ClassMA
  | PriorApprovalPart3ClassN
  | PriorApprovalPart3ClassQ
  | PriorApprovalPart3ClassR
  | PriorApprovalPart3ClassS
  | PriorApprovalPart3ClassT
  | PriorApprovalPart3ClassV
  | PriorApprovalPart4ClassBB
  | PriorApprovalPart4ClassBC
  | PriorApprovalPart4ClassCA
  | PriorApprovalPart4ClassE
  | PriorApprovalPart6
  | PriorApprovalPart6ClassA
  | PriorApprovalPart6ClassB
  | PriorApprovalPart6ClassE
  | PriorApprovalPart7ClassC
  | PriorApprovalPart7ClassM
  | PriorApprovalPart9ClassD
  | PriorApprovalPart11ClassB
  | PriorApprovalPart14ClassA
  | PriorApprovalPart14ClassB
  | PriorApprovalPart14ClassJ
  | PriorApprovalPart14ClassK
  | PriorApprovalPart14ClassOA
  | PriorApprovalPart16ClassA
  | PriorApprovalPart17
  | PriorApprovalPart17ClassB
  | PriorApprovalPart17ClassC
  | PriorApprovalPart17ClassG
  | PriorApprovalPart18ClassA
  | PriorApprovalPart19ClassTA
  | PriorApprovalPart20ClassA
  | PriorApprovalPart20ClassAA
  | PriorApprovalPart20ClassAB
  | PriorApprovalPart20ClassAC
  | PriorApprovalPart20ClassAD
  | PriorApprovalPart20ClassZA
  | PlanningPermissionFullAdvertConsent
  | PlanningPermissionFullDemolition
  | PlanningPermissionFullFastTrackAffordable
  | PlanningPermissionFullHouseholder
  | PlanningPermissionFullHouseholderListed
  | PlanningPermissionFullHouseholderRetrospective
  | PlanningPermissionFullMinor
  | PlanningPermissionFullMinorListed
  | PlanningPermissionFullMinorTechnicalDetails
  | PlanningPermissionFullMajor
  | PlanningPermissionFullMajorTechnicalDetails
  | PlanningPermissionFullMajorTechnicalDetailsWaste
  | PlanningPermissionFullMajorWaste
  | PlanningPermissionMineralExtraction
  | PlanningPermissionOutline
  | PlanningPermissionOutlineAll
  | PlanningPermissionOutlineSome
  | PlanningPermissionOutlineMinor
  | PlanningPermissionOutlineMinorAll
  | PlanningPermissionOutlineMinorSome
  | PlanningPermissionOutlineMajor
  | PlanningPermissionOutlineMajorAll
  | PlanningPermissionOutlineMajorAllWaste
  | PlanningPermissionOutlineMajorSome
  | PlanningPermissionOutlineMajorSomeWaste
  | PlanningPermissionPermissionInPrinciple
  | RightsOfWayOrder
  | WorksToTreesConsent
  | WorksToTreesNotice;
