import {
  AdvertConsentApplicationType,
  AmendmentApplicationType,
  ApplicationType,
  ApprovalApplicationType,
  ComplianceConfirmationApplicationType,
  EnvironmentalImpactApplicationType,
  HazardousSubstanceConsentApplicationType,
  HedgerowRemovalNoticeApplicationType,
  LandDrainageConsentApplicationType,
  LDCApplicationType,
  ListedApplicationType,
  NotifyCompletionApplicationType,
  ObligationApplicationType,
  OnshoreExtractionOilAndGasApplicationType,
  PAApplicationType,
  PPApplicationType,
  PrimaryApplicationType,
  RightsOfWayOrderApplicationType,
  WTTApplicationType,
} from '../prototypeApplication/enums/ApplicationType';
import {PrototypeApplication} from '../prototypeApplication';
import {PostSubmissionMetadata} from './Metadata';
import {CaseOfficer} from './data/CaseOfficer';
import {PublicComments, SpecialistComments} from './data/Comment';
import {Submission} from './data/Submission';
import {Validation} from './data/Validation';
import {Consultation} from './data/Consultation';
import {Assessment} from './data/Assessment';
import {Appeal} from './data/Appeal';
import {Application} from './data/Application';
import {LocalPlanningAuthority} from './data/LocalPlanningAuthority';
/**
 * @internal
 * The generic base type for all applications
 * Takes a primary and granular application type which allows child properties to differ based on these inputs
 * Deriving `TPrimary` from `TGranular` is possible in TS, but not in a way which is currently compatible with ts-json-schema-generator
 *
 * @todo create redacted form of PrototypeApplication
 */
interface ApplicationSpecification<
  TPrimary extends PrimaryApplicationType,
  TGranular extends ApplicationType,
> {
  applicationType: TGranular;
  data: {
    application: Application<TPrimary>;
    localPlanningAuthority: LocalPlanningAuthority<TPrimary>;
    submission: Submission<TPrimary>;
    validation?: Validation<TPrimary>;
    consultation?: Consultation<TPrimary>;
    assessment?: Assessment<TPrimary>;
    appeal?: Appeal<TPrimary>;
    caseOfficer: CaseOfficer<TPrimary>;
  };
  comments?: {
    public?: PublicComments;
    specialist?: SpecialistComments;
  };
  submission: PrototypeApplication;
  metadata: PostSubmissionMetadata;
}

export type PostSubmissionAdvertConsent = ApplicationSpecification<
  'advertConsent',
  AdvertConsentApplicationType
>;
export type PostSubmissionAmendment = ApplicationSpecification<
  'amendment',
  AmendmentApplicationType
>;
export type PostSubmissionApproval = ApplicationSpecification<
  'approval',
  ApprovalApplicationType
>;
export type PostSubmissionComplianceConfirmation = ApplicationSpecification<
  'complianceConfirmation',
  ComplianceConfirmationApplicationType
>;
export type PostSubmissionEnvironmentalImpact = ApplicationSpecification<
  'environmentalImpact',
  EnvironmentalImpactApplicationType
>;
export type PostSubmissionHazardousSubstanceConsent = ApplicationSpecification<
  'hazardousSubstanceConsent',
  HazardousSubstanceConsentApplicationType
>;
export type PostSubmissionHedgerowRemovalNotice = ApplicationSpecification<
  'hedgerowRemovalNotice',
  HedgerowRemovalNoticeApplicationType
>;
export type PostSubmissionLandDrainageConsent = ApplicationSpecification<
  'landDrainageConsent',
  LandDrainageConsentApplicationType
>;
export type PostSubmissionLDC = ApplicationSpecification<
  'ldc',
  LDCApplicationType
>;
export type PostSubmissionListed = ApplicationSpecification<
  'listed',
  ListedApplicationType
>;
export type PostSubmissionNotifyCompletion = ApplicationSpecification<
  'notifyCompletion',
  NotifyCompletionApplicationType
>;
export type PostSubmissionObligation = ApplicationSpecification<
  'obligation',
  ObligationApplicationType
>;
export type PostSubmissionOnshoreExtractionOilAndGas = ApplicationSpecification<
  'onshoreExtractionOilAndGas',
  OnshoreExtractionOilAndGasApplicationType
>;
export type PostSubmissionPA = ApplicationSpecification<
  'pa',
  PAApplicationType
>;
export type PostSubmissionPP = ApplicationSpecification<
  'pp',
  PPApplicationType
>;
export type PostSubmissionRightsOfWayOrder = ApplicationSpecification<
  'rightsOfWayOrder',
  RightsOfWayOrderApplicationType
>;
export type PostSubmissionWTT = ApplicationSpecification<
  'wtt',
  WTTApplicationType
>;

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
  | PostSubmissionLDC
  | PostSubmissionListed
  | PostSubmissionNotifyCompletion
  | PostSubmissionObligation
  | PostSubmissionOnshoreExtractionOilAndGas
  | PostSubmissionPA
  | PostSubmissionPP
  | PostSubmissionRightsOfWayOrder
  | PostSubmissionWTT;
