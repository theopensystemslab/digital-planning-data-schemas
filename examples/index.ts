import {Schema} from '../types/Schema';
import {validAgent, validApplicant} from './data/Applicant';
import {validApplication} from './data/Application';
import {validProperty} from './data/Property';
import {validProposal} from './data/Proposal';
import {validResponses} from './data/Responses';

const validMetadata: Schema['metadata'] = {
  service: {
    flowId: 'b3320abe-f5bc-4185-b61f-40e9e65f07ad',
    publishedFlowId: 22,
    name: 'Test',
    owner: 'Test',
    url: 'https://www.planx.uk/',
  },
  session: {
    source: 'PlanX',
    id: 'b3320abe-f5bc-4185-b61f-40e9e65f07ad',
    createdAt: '2018-11-13T20:20:39+00:00',
    submittedAt: '2018-11-13T20:20:39+00:00',
  },
  schema: {
    url: 'https://theopensystemslab.github.io/digital-planning-data-schemas/v0.0.1/schema.json',
  },
};

const validFiles: Schema['files'] = [
  {
    name: 'https://api.editor.planx.uk/file/private/folderId/file1.pdf',
    type: [
      {
        value: 'proposal.drawing.roofPlan',
        description: 'Roof plan - proposed',
      },
      {
        value: 'property.drawing.roofPlan',
        description: 'Roof plan - existing',
      },
    ],
  },
  {
    name: 'https://api.editor.planx.uk/file/private/folderId/file2.pdf',
    description: 'Evidence of my project start date',
    type: [
      {
        value: 'proposal.document.construction.invoice',
        description: 'Construction invoice',
      },
    ],
  },
];

const validResult: Schema['result'] = [
  {
    value: 'Planning permission / Permitted development',
    description:
      'It looks like the proposed changes may fall within the rules for Permitted Development and therefore would not need planning permission.',
  },
  {
    value: 'Listed building consent / Not required',
    description: '',
  },
];

export const validExampleApplicant: Schema = {
  data: {
    user: {
      role: 'applicant',
    },
    applicant: validApplicant,
    application: validApplication,
    property: validProperty,
    proposal: validProposal,
  },
  result: validResult,
  metadata: validMetadata,
  responses: validResponses,
  files: validFiles,
};

export const validExampleAgent: Schema = {
  data: {
    user: {
      role: 'agent',
    },
    applicant: validAgent,
    application: validApplication,
    property: validProperty,
    proposal: validProposal,
  },
  result: validResult,
  metadata: validMetadata,
  responses: validResponses,
  files: validFiles,
};
