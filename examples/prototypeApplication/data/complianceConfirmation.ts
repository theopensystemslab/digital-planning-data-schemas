import {PrototypeApplication} from '../../../types/schemas/prototypeApplication';

const version = process.env['VERSION'] || '@next';

export const complianceConfirmationPrototype: PrototypeApplication = {
  applicationType: 'complianceConfirmation',
  data: {
    user: {
      role: 'applicant',
    },
    applicant: {
      name: {
        first: 'John Francis',
        last: 'Bentley',
      },
      email: 'johnfrancis@bentley.com',
      phone: {
        primary: '7946 0000 ',
      },
      company: {
        name: 'English Heritage',
      },
      address: {
        sameAsSiteAddress: true,
      },
      siteContact: {
        role: 'applicant',
      },
      ownership: {
        interest: 'owner',
      },
    },
    property: {
      address: {
        latitude: 51.4641295,
        longitude: -0.1408871,
        x: 529241,
        y: 175545,
        title: '43, OLD TOWN, LONDON',
        source: 'Ordnance Survey',
        uprn: '100021877603',
        usrn: '21901052',
        pao: '43',
        street: 'OLD TOWN',
        town: 'LONDON',
        postcode: 'SW4 0JL',
        singleLine: '43, OLD TOWN, LONDON, LAMBETH, SW4 0JL',
      },
      localAuthorityDistrict: ['Lambeth'],
      region: 'London',
      type: 'residential.dwelling.house.terrace',
      boundary: {
        site: {
          type: 'Feature',
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                [
                  [-0.141065, 51.464146],
                  [-0.141051, 51.464063],
                  [-0.140644, 51.464108],
                  [-0.140666, 51.464184],
                  [-0.141065, 51.464146],
                ],
              ],
            ],
          },
          properties: {
            name: '',
            entity: 12000552584,
            prefix: 'title-boundary',
            dataset: 'title-boundary',
            'end-date': '',
            typology: 'geography',
            reference: '48373217',
            'entry-date': '2024-05-06',
            'start-date': '2010-11-08',
            'organisation-entity': '13',
          },
        },
        area: {
          hectares: 0.025255,
          squareMetres: 252.55,
        },
      },
    },
    application: {
      fee: {
        calculated: 43,
        payable: 43,
        exemption: {
          disability: false,
          resubmission: false,
        },
        reduction: {
          sports: false,
          parishCouncil: false,
          alternative: false,
        },
      },
      declaration: {
        accurate: true,
        connection: {
          value: 'none',
        },
      },
    },
    proposal: {
      description: 'Not provided',
      boundary: {
        site: {
          type: 'Feature',
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                [
                  [-0.141065, 51.464146],
                  [-0.141051, 51.464063],
                  [-0.140644, 51.464108],
                  [-0.140666, 51.464184],
                  [-0.141065, 51.464146],
                ],
              ],
            ],
          },
          properties: {
            name: '',
            entity: 12000552584,
            prefix: 'title-boundary',
            dataset: 'title-boundary',
            'end-date': '',
            typology: 'geography',
            reference: '48373217',
            'entry-date': '2024-05-06',
            'start-date': '2010-11-08',
            'organisation-entity': '13',
            planx_user_action: 'Accepted the title boundary',
          },
        },
        area: {
          squareMetres: 252.55,
        },
      },
    },
  },
  responses: [
    {
      question: 'Is the property in Lambeth?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The property',
      },
    },
    {
      question: 'Which of these best describes the use of the property?',
      responses: [
        {
          value: 'Residential',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The property',
      },
    },
    {
      question: 'What type of residential property is it?',
      responses: [
        {
          value: 'House',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The property',
      },
    },
    {
      question: 'What type of house is it?',
      responses: [
        {
          value: 'Terrace',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The property',
      },
    },
    {
      question: 'What type of application were the conditions attached to?',
      responses: [
        {
          value: 'A householder application',
        },
      ],
      metadata: {
        sectionName: 'Your application',
      },
    },
    {
      question: 'What is the reference number of the planning application?',
      responses: [
        {
          value: '555-5555',
        },
      ],
      metadata: {
        sectionName: 'Your application',
      },
    },
    {
      question: 'When was the planning permission granted?',
      responses: [
        {
          value: '2025-03-01',
        },
      ],
      metadata: {
        sectionName: 'Your application',
      },
    },
    {
      question:
        'Provide details of the conditions that have previously been complied with',
      responses: [
        {
          value: '4 conditions',
        },
      ],
      metadata: {
        sectionName: 'Your application',
      },
    },
    {
      question: 'Are you applying on behalf of someone else?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'About you',
      },
    },
    {
      question: 'Your contact details',
      responses: [
        {
          value:
            'John Francis Bentley English Heritage 7946 0000  johnfrancis@bentley.com',
        },
      ],
      metadata: {
        sectionName: 'About you',
      },
    },
    {
      question: 'Is your contact address the same as the property address?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        sectionName: 'About you',
      },
    },
    {
      question: 'Which Local Planning authority is it?',
      responses: [
        {
          value: 'Lambeth',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Review and confirm',
      },
    },
    {
      question: 'Connections with London Borough of Lambeth',
      responses: [
        {
          value: 'None of the above apply to me',
        },
      ],
      metadata: {
        sectionName: 'Review and confirm',
      },
    },
    {
      question: 'I confirm that:',
      responses: [
        {
          value:
            'The information contained in this application is truthful, accurate and complete, to the best of my knowledge',
        },
      ],
      metadata: {
        sectionName: 'Review and confirm',
      },
    },
  ],
  files: [
    {
      name: 'https://api.editor.planx.dev/file/private/jsbahjs2/Screenshot%202025-01-30%20at%2013.48.33.png',
      type: ['relevantInformation'],
    },
  ],
  metadata: {
    id: '0ccc6a01-af7d-418d-aec2-d7d3dc459cb0',
    organisation: 'BBD',
    submittedAt: '2025-03-19T12:21:53.274Z',
    source: 'PlanX',
    service: {
      flowId: '03d800dc-a318-4814-9c37-4cd5771cb8a2',
      url: 'https://editor.planx.dev/templates/request-written-confirmation-of-compliance-with-a-planning-condition-template/published',
      files: {
        required: [],
        recommended: ['relevantInformation'],
        optional: [],
      },
      fee: {
        calculated: [],
        payable: [],
      },
    },
    schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/application.json`,
  },
};
