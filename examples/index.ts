import {Schema} from '../types/Schema';

export const validExampleApplicant: Schema = {
  data: {
    applicant: {
      type: 'individual',
      contact: {
        name: {
          first: 'Test',
          last: 'Test',
        },
        email: 'test@test.com',
        phone: {
          primary: '123',
        },
      },
      address: {
        sameAsSiteAddress: true,
      },
      siteContact: {
        role: 'applicant',
      },
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
      role: 'applicant',
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

export const validExampleAgent: Schema = {
  data: {
    applicant: {
      type: 'charity',
      contact: {
        name: {
          first: 'Test',
          last: 'Test',
        },
        email: 'test@test.com',
        phone: {
          primary: '123',
        },
        company: {
          name: 'Test Charity Ltd',
        },
      },
      address: {
        sameAsSiteAddress: false,
        line1: '123 Test',
        town: 'Test',
        postcode: 'TES T12',
      },
      agent: {
        contact: {
          name: {
            first: 'Agent',
            last: 'Agent',
          },
          email: 'agent@test.com',
          phone: {
            primary: '123',
          },
        },
        address: {
          sameAsSiteAddress: false,
          line1: '456 Test',
          town: 'Test',
          postcode: 'TES T34',
        },
      },
      siteContact: {
        role: 'other',
        name: 'Neighbor',
        email: 'neighbor@test.com',
        phone: '567',
      },
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
      role: 'agent',
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
