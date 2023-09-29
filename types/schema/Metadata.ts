import {DateTime, URL, UUID} from './../utils';

export interface Metadata {
  /**
   * @description Details of the digital planning service which generated this payload
   */
  service: {
    flowId: UUID | string; // @todo temp fix for failing UUID validation, sort out and tighten
    publishedFlowId: number;
    name: string;
    owner: string;
    url: URL;
  };
  session: {
    /**
     * @default PlanX
     */
    source: 'PlanX';
    id: UUID | string;
    createdAt: DateTime;
    submittedAt: DateTime;
  };
  schema: {
    url: URL;
  };
}
