import {Schema} from '../types/Schema';

export const validExample: Schema = {
  data: {
    applicant: {
      name: 'Test',
    },
    property: {
      name: 'Test',
    },
    application: {
      name: 'Test',
    },
    proposal: {
      name: 'Test',
    },
    user: {
      name: 'daf',
      role: 'applicant',
      applicantAddress: [],
    },
  },
  result: {
    name: 'Test',
  },
  metadata: {
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
  },
  responses: {
    name: 'Test',
  },
  files: [
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
  ],
};
