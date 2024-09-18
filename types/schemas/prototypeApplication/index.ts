import {
  BaseMetadata,
  FeeExplanation,
  FeeExplanationNotApplicable,
} from '../../shared/Metadata';
import {Responses} from '../../shared/Responses';
import {UUID, URL} from '../../shared/utils';
import {Applicant} from './data/Applicant';
import {ApplicationData} from './data/ApplicationData';
import {PropertyBase} from './data/Property';
import {ProposalBase} from './data/Proposal';
import {UserBase} from './data/User';
import {
  ApplicationType,
  LandDrainageConsentApplicationType,
  LDCApplicationType,
  ListedApplicationType,
  PAApplicationType,
  PPApplicationType,
  PrimaryApplicationType,
} from './enums/ApplicationType';
import {PrototypeFileType} from './enums/FileType';
import {File} from './File';
import {PreAssessment} from './PreAssessment';

/**
 * @description File types requested by this service. Schema["files"] will be a subset of this list based on the user's journey through the service
 */
export interface PrototypeRequestedFiles {
  required: PrototypeFileType[];
  recommended: PrototypeFileType[];
  optional: PrototypeFileType[];
}

export interface PrototypePlanXMetadata extends BaseMetadata {
  source: 'PlanX';
  service: {
    flowId: UUID;
    url: URL;
    files: PrototypeRequestedFiles;
    fee: FeeExplanation | FeeExplanationNotApplicable;
  };
}

/**
 * @internal
 * The generic base type for all applications
 * Takes a primary and granular application type which allows child properties to differ based on these inputs
 * Deriving `TPrimary` from `TGranular` is possible in TS, but not in a way which is currently compatible with ts-json-schema-generator
 */
interface ApplicationSpecification<
  TPrimary extends PrimaryApplicationType,
  TGranular extends ApplicationType,
> {
  applicationType: TGranular;
  data: {
    user: UserBase;
    applicant: Applicant<TPrimary>;
    application: ApplicationData<TPrimary>;
    property: PropertyBase;
    proposal: ProposalBase;
  };
  preAssessment?: PreAssessment;
  responses: Responses;
  files: File[];
  metadata: PrototypePlanXMetadata;
}

export type LDC = ApplicationSpecification<'ldc', LDCApplicationType>;
export type PA = ApplicationSpecification<'pa', PAApplicationType>;
export type PP = ApplicationSpecification<'pp', PPApplicationType>;
export type Listed = ApplicationSpecification<'listed', ListedApplicationType>;
export type LandDrainageConsent = ApplicationSpecification<
  'landDrainageConsent',
  LandDrainageConsentApplicationType
>;
// TODO: All the rest!

/**
 * @title PrototypeApplication
 * @description The (prototype) root specification for a planning application in England generated by a digital planning service
 */
export type PrototypeApplication = LDC | PA | PP | Listed | LandDrainageConsent;
