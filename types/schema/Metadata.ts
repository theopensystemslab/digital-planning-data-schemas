export interface Metadata {
  service: {
    $description: string;
    publishedFlowId: string; // uuid
    name: string; // find-out-if-...
    council: string; // enum? better name for this needed
  };
  session: {
    id: string; // uuid
    createdAt: Date;
    submittedAt: Date;
  };
}
