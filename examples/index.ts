import {Schema} from '../types/Schema';
import {validAgent, validApplicant} from './data/Applicant';
import {validApplication} from './data/Application';
import {validProperty} from './data/Property';
import {validProposal} from './data/Proposal';

const validMetadata: Schema['metadata'] = {
  service: {
    publishedFlowId: 'b3320abe-f5bc-4185-b61f-40e9e65f07ad',
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
};

const validFiles: Schema['files'] = [
  {
    size: '1mb',
    foo: 'bar',
  },
  {
    size: '2mb',
    foo: 'baz',
  },
  {
    size: '3mb',
    foo: 'boo',
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
  result: {
    name: 'Test',
  },
  metadata: validMetadata,
  responses: {
    name: 'Test',
  },
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
  result: {
    name: 'Test',
  },
  metadata: validMetadata,
  responses: {
    name: 'Test',
  },
  files: validFiles,
};
