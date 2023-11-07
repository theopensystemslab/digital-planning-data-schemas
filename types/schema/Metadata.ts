import {DateTime, URL, UUID} from './../utils';

/**
 * @id #DigitalPlanningMetadata
 * @description Details of the digital planning service which sent the application
 */
export interface Metadata {
  service: {
    flowId: UUID;
    name: string;
    organisation: string;
    url: URL;
  };
  session: {
    /**
     * @default PlanX
     */
    source: 'PlanX';
    id: UUID;
    createdAt: DateTime;
    submittedAt?: DateTime;
  };
  schema: {
    url: URL;
  };
}
