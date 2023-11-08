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
   * @description UK Local Authority that this application is being submitted to
   */
  organisation: string; // @todo align to DLUHC Planning Application API curie
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
