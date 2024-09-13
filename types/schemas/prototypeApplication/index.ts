import {Metadata} from '../../shared/Metadata';
import {Responses} from '../../shared/Responses';
import {Applicant} from './data/Applicant';
import {ApplicationData} from './data/ApplicationData';
import {PropertyBase} from './data/Property';
import {ProposalBase} from './data/Proposal';
import {UserBase} from './data/User';
import {
  ApplicationType,
  LDCApplicationType,
  PAApplicationType,
  PPApplicationType,
  PrimaryApplicationType,
} from './enums/ApplicationType';
import {File} from './File';
import {PreAssessment} from './PreAssessment';

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
  metadata: Metadata;
}

export type LDC = ApplicationSpecification<'ldc', LDCApplicationType>;
export type PA = ApplicationSpecification<'pa', PAApplicationType>;
export type PP = ApplicationSpecification<'pp', PPApplicationType>;
// TODO: All the rest!

/**
 * @title PrototypeApplication
 * @description The (prototype) root specification for a planning application in England generated by a digital planning service
 */
export type PrototypeApplication = LDC | PA | PP;
