import {PrototypeApplication} from '../../../../types/schemas/prototypeApplication';

// const version = process.env['VERSION'] || '@next';

export const lawfulDevelopmentCertificateExistingPrototype: PrototypeApplication =
  {
    applicationType: 'ldc.existing',
    data: {
      application: {
        somethingShared: 'test',
        ldcSpecificProperty: 1,
      },
      user: {
        role: 'agent',
      },
      applicant: {
        type: 'individual',
        name: {
          first: 'Roald',
          last: 'Dahl',
        },
        email: 'f.fox@boggischickenshed.com',
        phone: {
          primary: 'Not provided by agent',
        },
        address: {
          sameAsSiteAddress: true,
        },
        siteContact: {
          role: 'applicant',
        },
        ownership: {
          interest: 'occupier',
          owners: [
            {
              interest: 'owner',
              name: 'Matilda Wormwood',
              address: {
                town: 'Reading',
                line1: '9, Library Way',
                line2: '',
                county: '',
                country: 'UK',
                postcode: 'L1T3R8Y',
              },
              noticeGiven: true,
            },
          ],
        },
        agent: {
          name: {
            first: 'F',
            last: 'Fox',
          },
          email: 'f.fox@boggischickenshed.com',
          phone: {
            primary: '0234 567 8910',
          },
          address: {
            line1: 'The Tree',
            line2: 'One Tree Hill',
            town: 'Great Tunnelling',
            county: '',
            postcode: 'F0XH0L3',
            country: '',
          },
        },
      },
      property: {
        test: 'todo',
      },
      proposal: {
        test: 'todo',
      },
    },
  };
