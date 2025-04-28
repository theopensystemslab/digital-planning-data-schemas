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
export type PostSubmissionAmendment = ApplicationSpecification<'amendment'>;
export type PostSubmissionApproval = ApplicationSpecification<'approval'>;
export type PostSubmissionComplianceConfirmation =
  ApplicationSpecification<'complianceConfirmation'>;
export type PostSubmissionEnvironmentalImpact =
  ApplicationSpecification<'environmentalImpact'>;
export type PostSubmissionHazardousSubstanceConsent =
  ApplicationSpecification<'hazardousSubstanceConsent'>;
export type PostSubmissionHedgerowRemovalNotice =
  ApplicationSpecification<'hedgerowRemovalNotice'>;
export type PostSubmissionLandDrainageConsent =
  ApplicationSpecification<'landDrainageConsent'>;
export type PostSubmissionLDCExisting =
  ApplicationSpecification<'ldc.existing'>;
export type PostSubmissionLDCProposed =
  ApplicationSpecification<'ldc.proposed'>;
export type PostSubmissionListed = ApplicationSpecification<'listed'>;
export type PostSubmissionNotifyCompletion =
  ApplicationSpecification<'notifyCompletion'>;
export type PostSubmissionObligation = ApplicationSpecification<'obligation'>;
export type PostSubmissionOnshoreExtractionOilAndGas =
  ApplicationSpecification<'onshoreExtractionOilAndGas'>;
export type PostSubmissionPAPart1ClassA =
  ApplicationSpecification<'pa.part1.classA'>;
export type PostSubmissionPAPart3ClassMA =
  ApplicationSpecification<'pa.part3.classMA'>;
export type PostSubmissionPAPart7ClassM =
  ApplicationSpecification<'pa.part7.classM'>;
export type PostSubmissionPAPart14ClassJ =
  ApplicationSpecification<'pa.part14.classJ'>;
export type PostSubmissionPAPart20ClassAB =
  ApplicationSpecification<'pa.part20.classAB'>;
export type PostSubmissionPPHouseholder =
  ApplicationSpecification<'pp.full.householder'>;
export type PostSubmissionPPMajor = ApplicationSpecification<'pp.full.major'>;
export type PostSubmissionPPMinor = ApplicationSpecification<'pp.full.minor'>;
export type PostSubmissionRightsOfWayOrder =
  ApplicationSpecification<'rightsOfWayOrder'>;
export type PostSubmissionWTT = ApplicationSpecification<'wtt'>;

/**
 * @title PostSubmissionApplication
 * @description The root specification for a planning application in England after it has been through a digital planning service and into a back office system
 */
export type PostSubmissionApplication =
  | PostSubmissionAdvertConsent
  | PostSubmissionAmendment
  | PostSubmissionApproval
  | PostSubmissionComplianceConfirmation
  | PostSubmissionEnvironmentalImpact
  | PostSubmissionHazardousSubstanceConsent
  | PostSubmissionHedgerowRemovalNotice
  | PostSubmissionLandDrainageConsent
  | PostSubmissionLDCExisting
  | PostSubmissionLDCProposed
  | PostSubmissionListed
  | PostSubmissionNotifyCompletion
  | PostSubmissionObligation
  | PostSubmissionOnshoreExtractionOilAndGas
  | PostSubmissionPAPart1ClassA
  | PostSubmissionPAPart3ClassMA
  | PostSubmissionPAPart7ClassM
  | PostSubmissionPAPart14ClassJ
  | PostSubmissionPAPart20ClassAB
  | PostSubmissionPPHouseholder
  | PostSubmissionPPMajor
  | PostSubmissionPPMinor
  | PostSubmissionRightsOfWayOrder
  | PostSubmissionWTT;
