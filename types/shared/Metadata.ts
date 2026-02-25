import {FileType} from '../schemas/application/enums/FileTypes';
import {QuestionMetaData} from './Responses';
import {DateTime, URL, UUID} from './utils';

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
 * @id #FeeExplanationNotApplicable
 * @description An indicator that an application fee does not apply to this application type or journey, therefore there is not an explanation of how it was calculated
 */
export interface FeeExplanationNotApplicable {
  notApplicable: true;
}

/**
 * @id #FeeExplanation
 * @description An explanation, including policy references, of the fees associated with this application
 */
export interface FeeExplanation {
  calculated: CalculateMetadata[];
  payable: CalculateMetadata[];
  /**
   * @description Breakdown of calculated fee by category of development, based on the scales defined in The Town and Country Planning Regulations https://www.legislation.gov.uk/uksi/2012/2920/schedule/1/part/2
   */
  category?: {
    one?: CalculateMetadata[];
    two?: CalculateMetadata[];
    three?: CalculateMetadata[];
    four?: CalculateMetadata[];
    five?: CalculateMetadata[];
    sixAndSeven?: CalculateMetadata[];
    eight?: CalculateMetadata[];
    nine?: CalculateMetadata[];
    ten?: CalculateMetadata[];
    eleven?: {
      one: CalculateMetadata[];
    };
    twelve?: {
      one?: CalculateMetadata[];
      two?: CalculateMetadata[];
    };
    thirteen?: CalculateMetadata[];
    fourteen?: CalculateMetadata[];
  };
}

/**
 * @id #Enhancements
 * @description Metadata associated with any AI-enhanced components used throughout this service
 */
export interface Enhancements {
  dataProperty: string;
  original: string;
  enhanced: string;
  userAction: string;
  model: string;
}
[];

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
    fee: FeeExplanation | FeeExplanationNotApplicable;
    enhancements?: Enhancements;
  };
}
