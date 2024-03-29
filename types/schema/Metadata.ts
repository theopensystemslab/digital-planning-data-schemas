import {DateTime, URL, UUID} from './../utils';
import {FileType} from './File';
import {QuestionMetaData} from './Responses';

/**
 * @id #DigitalPlanningMetadata
 * @description Details of the digital planning service which sent this application
 */
export type Metadata = AnyProviderMetadata | PlanXMetadata;

/**
 * @id #BaseMetadata
 * @description Minimum metadata expected for any application
 */
export interface BaseMetadata {
  /**
   * @description The reference code for the organisation responsible for processing this planning application, sourced from planning.data.gov.uk/dataset/local-authority
   * @maxLength 4
   */
  organisation: string;
  /**
   * @description Unique identifier for this application
   */
  id: UUID; // @todo align to DLUHC Planning Application API reference
  submittedAt: DateTime;
  schema: URL;
}

/**
 * @id #AnyProviderMetadata
 * @description Base metadata associated with applications submitted via any provider
 */
export interface AnyProviderMetadata extends BaseMetadata {
  source: 'Any';
}

/**
 * @id #RequestedFiles
 * @description File types requested by this service. Schema["files"] will be a subset of this list based on the user's journey through the service
 */
export interface RequestedFiles {
  required: FileType[];
  recommended: FileType[];
  optional: FileType[];
}

/**
 * @id #CalculateMetadata
 * @description Metadata associated with PlanX Calculate components used to determine fees throughout a service
 */
export interface CalculateMetadata {
  description?: string;
  policyRefs?: QuestionMetaData['policyRefs'];
}

/**
 * @id #FeeExplanation
 * @description An explanation, including policy references, of the calculated and payable fees associated with this application
 */
export interface FeeExplanation {
  calculated: CalculateMetadata[];
  payable: CalculateMetadata[];
}

/**
 * @id #PlanXMetadata
 * @description Additional metadata associated with applications submitted via PlanX
 */
export interface PlanXMetadata extends BaseMetadata {
  source: 'PlanX';
  service: {
    flowId: UUID;
    url: URL;
    files: RequestedFiles;
    fee: FeeExplanation;
  };
}
