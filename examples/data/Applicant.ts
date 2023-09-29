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
  // interest: 'owner.co',
  // ownership: {
  //   certificate: 'a',
  //   owners: [
  //     {
  //       name: 'Owner 1',
  //       address: {
  //         line1: '123 Main Street',
  //         town: 'Anywhere',
  //         postcode: 'SE5 0HU'
  //       },
  //       noticeGiven: true,
  //       noticeDate: '2023-10-01',
  //     },
  //     {
  //       name: 'Owner 2',
  //       address: 'Same as Owner 1',
  //       noticeGiven: false,
  //     },
  //   ],
  // },
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
