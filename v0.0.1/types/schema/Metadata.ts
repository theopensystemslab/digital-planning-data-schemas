import {DateTime, URL, UUID} from './../utils';

export interface Metadata {
  /**
   * @description Details of the digital planning service which generated this payload
   */
  service: {
    publishedFlowId: UUID;
    name: string;
    owner: string;
    url: URL;
  };
  session: {
    /**
     * @default PlanX
     */
    source: 'PlanX';
    id: UUID;
    createdAt: DateTime;
    submittedAt: DateTime;
  };
}
