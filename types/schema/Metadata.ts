import {DateTime, URL, UUID} from './../utils';

/**
 * @id #DigitalPlanningMetadata
 * @description Details of the digital planning service which sent this application
 */
export type Metadata = BaseMetadata | PlanxMetadata;

/**
 * @id #BaseMetadata
 * @description Minimum metadata expected for any application
 */
export interface BaseMetadata {
  /**
   * @default PlanX
   */
  source: 'PlanX';
  organisation: string; // @todo align to DLUHC Planning Application API curie
  /**
   * @description Unique identifier for this application
   */
  id: UUID; // @todo align to DLUHC Planning Application API reference
  createdAt: DateTime;
  schema: URL;
}

/**
 * @id #PlanxMetadata
 * @description Additional metadata associated with applications submitted via PlanX
 */
export interface PlanxMetadata extends BaseMetadata {
  service: {
    flowId: UUID;
    url: URL;
  };
  submittedAt?: DateTime;
}
