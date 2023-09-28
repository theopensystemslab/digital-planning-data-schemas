import {Schema} from '../../types/Schema';

export const validApplicant: Schema['data']['applicant'] = {
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
};

export const validAgent: Schema['data']['applicant'] = {
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
};
