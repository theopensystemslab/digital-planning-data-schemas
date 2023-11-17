import {DateTime, URL, UUID} from './../utils';

/**
 * @id #DigitalPlanningMetadata
 * @description Details of the digital planning service which sent this application
 */
export type Metadata = BaseMetadata | PlanXMetadata;

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
 * @id #PlanXMetadata
 * @description Additional metadata associated with applications submitted via PlanX
 */
export interface PlanXMetadata extends BaseMetadata {
  source: 'PlanX';
  service: {
    flowId: UUID;
    url: URL;
  };
}
