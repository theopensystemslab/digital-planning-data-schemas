import {Application} from '../../../../src/types/schemas/application/SchemaRoot';

const version = process.env['VERSION'] || '@next';

export const priorApprovalLargerExtension: Application = {
  data: {
    user: {
      role: 'applicant',
    },
    applicant: {
      type: 'individual',
      name: {
        first: 'William',
        last: 'Zane',
      },
      email: 'areyouon@email.org',
      phone: {
        primary: '01234000000',
      },
      address: {
        sameAsSiteAddress: true,
      },
      siteContact: {
        role: 'applicant',
      },
    },
    property: {
      address: {
        latitude: 51.3304155,
        longitude: -0.1043842,
        x: 532161,
        y: 160741,
        title: '32, ST JAMES ROAD, PURLEY',
        source: 'Ordnance Survey',
        uprn: '100020623888',
        usrn: '20502851',
        pao: '32',
        street: 'ST JAMES ROAD',
        town: 'PURLEY',
        postcode: 'CR8 2DL',
        singleLine: '32 ST JAMES ROAD, PURLEY, CROYDON, CR8 2DL',
      },
      localAuthorityDistrict: ['Croydon'],
      region: 'London',
      type: {
        value: 'residential.dwelling.house.detached',
        description: 'Detached',
      },
      planning: {
        sources: [
          'https://api.editor.planx.dev/gis/southwark?geom=MULTIPOLYGON+%28%28%28-0.072763+51.456622%2C+-0.072749+51.456669%2C+-0.073167+51.456732%2C+-0.073195+51.456736%2C+-0.073213+51.456688%2C+-0.072763+51.456622%29%29%29&analytics=false&sessionId=80d3c3c2-0d1c-4a79-be99-912f488c2f02',
          'https://api.editor.planx.dev/roads?usrn=22500947',
        ],
        designations: [
          {
            value: 'tpo',
            description: 'Tree Preservation Order (TPO) or zone',
            intersects: false,
          },
          {
            value: 'flood',
            description: 'Flood Risk Zone',
            intersects: false,
          },
          {
            value: 'listed',
            description: 'Listed Building',
            intersects: false,
          },
          {
            value: 'article4',
            description: 'Article 4 Direction area',
            intersects: false,
          },
          {
            value: 'monument',
            description: 'Site of a Scheduled Monument',
            intersects: false,
          },
          {
            value: 'greenBelt',
            description: 'Green Belt',
            intersects: false,
          },
          {
            value: 'designated',
            description: 'Designated land',
            intersects: false,
          },
          {
            value: 'nature.SAC',
            description: 'Special Area of Conservation (SAC)',
            intersects: false,
          },
          {
            value: 'nature.SPA',
            description: 'Special Protection Area (SPA)',
            intersects: false,
          },
          {
            value: 'nature.ASNW',
            description: 'Ancient Semi-Natural Woodland (ASNW)',
            intersects: false,
          },
          {
            value: 'nature.SSSI',
            description: 'Site of Special Scientific Interest (SSSI)',
            intersects: false,
          },
          {
            value: 'brownfieldSite',
            description: 'Brownfield site',
            intersects: false,
          },
          {
            value: 'designated.WHS',
            description: 'UNESCO World Heritage Site or buffer zone',
            intersects: false,
          },
          {
            value: 'registeredPark',
            description: 'Historic Park or Garden',
            intersects: false,
          },
          {
            value: 'designated.AONB',
            description: 'Area of Outstanding Natural Beauty (AONB)',
            intersects: false,
          },
          {
            value: 'nature.ramsarSite',
            description: 'Ramsar site',
            intersects: false,
          },
          {
            value: 'designated.nationalPark',
            description: 'National Park',
            intersects: false,
          },
          {
            value: 'designated.conservationArea',
            description: 'Conservation Area',
            intersects: false,
          },
          {
            value: 'designated.nationalPark.broads',
            description: 'National Park - Broads',
            intersects: false,
          },
          {
            value: 'road.classified',
            description: 'Classified Road',
            intersects: false,
          },
        ],
      },
      boundary: {
        site: {
          type: 'Feature',
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                [
                  [-0.072763, 51.456622],
                  [-0.072749, 51.456669],
                  [-0.073167, 51.456732],
                  [-0.073195, 51.456736],
                  [-0.073213, 51.456688],
                  [-0.072763, 51.456622],
                ],
              ],
            ],
          },
          properties: {
            name: '',
            entity: 12000593377,
            prefix: 'title-boundary',
            dataset: 'title-boundary',
            'end-date': '',
            typology: 'geography',
            reference: '37786766',
            'entry-date': '2024-05-06',
            'start-date': '2002-06-26',
            'organisation-entity': '13',
          },
        },
        area: {
          hectares: 0.017289,
          squareMetres: 172.89,
        },
      },
    },
    application: {
      type: {
        value: 'pa.part1.classA',
        description: 'Prior Approval - Larger extension to a house',
      },
      fee: {
        calculated: 120,
        payable: 0,
        exemption: {
          disability: true,
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
      projectType: [
        {
          value: 'extend.rear',
          description: 'Add a rear or side extension (or conservatory)',
        },
      ],
      description:
        'A 2 storey rear extension with a roof garden and built in pizza oven',
      date: {
        start: '2024-06-17',
        completion: '2050-06-18',
      },
      boundary: {
        site: {
          type: 'Feature',
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                [
                  [-0.072763, 51.456622],
                  [-0.072749, 51.456669],
                  [-0.073167, 51.456732],
                  [-0.073195, 51.456736],
                  [-0.073213, 51.456688],
                  [-0.072763, 51.456622],
                ],
              ],
            ],
          },
          properties: {
            name: '',
            entity: 12000593377,
            prefix: 'title-boundary',
            dataset: 'title-boundary',
            'end-date': '',
            typology: 'geography',
            reference: '37786766',
            'entry-date': '2024-05-06',
            'start-date': '2002-06-26',
            'organisation-entity': '13',
            planx_user_action: 'Accepted the title boundary',
          },
        },
        area: {
          hectares: 0.017289,
          squareMetres: 172.89,
        },
      },
    },
  },
  preAssessment: [
    {
      value: 'Planning permission / Prior approval',
      description:
        'It looks like the proposed changes do not require planning permission, however the applicant must apply for Prior Approval before proceeding.',
    },
  ],
  responses: [
    {
      question: 'Is the property in Southwark?',
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
      question: 'What type of property is it?',
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
      question: 'Have the works already started?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'Describe the project.',
      responses: [
        {
          value:
            'A 2 storey rear extension with a roof garden and built in pizza oven.',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type of property is it?',
      responses: [
        {
          value: 'House',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'Select your project',
      responses: [
        {
          value: 'Add a rear extension',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type of property is it?',
      responses: [
        {
          value: 'House',
        },
      ],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/contents/made',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type of house is it?',
      responses: [
        {
          value: 'Mid terrace',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'How many storeys does the original house have?',
      responses: [
        {
          value: '2 or more',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'Does the original house have a projection to the rear?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'Was the house always a house?',
      responses: [
        {
          value: 'Yes, it was built as a house',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015, Schedule 2, Part 1, Class A',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Was the house built before 2020?',
      responses: [
        {
          value: 'Yes, it was built before 2020',
          metadata: {
            flags: ['Planning permission / Permitted development'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class 1 A.',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Which of these best describes the new extension?',
      responses: [
        {
          value: 'Single storey',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Section 2, Part 1, Class A',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Does the original house have a projection to the rear?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'Which of these best describes your extension?',
      responses: [
        {
          value: 'Rear',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'General Permitted Development Order 2015, Technical Guidance (PDF, 500KB)',
            url: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/830643/190910_Tech_Guide_for_publishing.pdf',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Is any part of the extension within 2 metres of the boundary?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class A',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Is the property on designated land?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'Is the property a site of special scientific interest?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type of house is it?',
      responses: [
        {
          value: 'A terrace',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question:
        'How far does the new rear addition extend beyond the back wall of the original house?',
      responses: [
        {
          value: '3 to 6m',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class A.1 (f)(i)',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Is this a prior approval application for a larger rear extension?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Exactly how far will the new addition extend beyond the back wall of the original house?',
      responses: [
        {
          value: '5',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class A',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type of roof does the extension have?',
      responses: [
        {
          value: 'Flat',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'Will any part of the extension be higher than 4m?',
      responses: [
        {
          value: 'No',
          metadata: {
            flags: ['Planning permission / Permitted development'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class A.1 (g)(ii)',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1',
          },
          {
            text: 'Permitted Development Rights for Householders Technical Guidance (PDF, 500KB)',
            url: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/830643/190910_Tech_Guide_for_publishing.pdf',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Is this a prior approval application for a larger rear extension?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'What is the exact height of the extension?',
      responses: [
        {
          value: '3.6',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class A',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'How many storeys does the original house have?',
      responses: [
        {
          value: '2 or more',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Is any part of the extension within 2 metres of a boundary of the house?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'How many storeys does the original house have?',
      responses: [
        {
          value: '2 or more',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Are the materials of the extension similar to the original house?',
      responses: [
        {
          value: 'Yes',
          metadata: {
            flags: ['Planning permission / Permitted development'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class A',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Is the property on designated land?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question:
        'How much of the available area around the house is covered by extensions and outbuildings?',
      responses: [
        {
          value: '50% or less of the available area around the original house',
          metadata: {
            flags: ['Planning permission / Permitted development'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class A',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'What will you use the extension for?',
      responses: [
        {
          value: 'Hobby space or similar',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class A',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1',
          },
          {
            text: 'Town and Country Planning Act 1990, Section 55',
            url: 'https://www.legislation.gov.uk/ukpga/1990/8/section/55',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Who will use the hobby space?',
      responses: [
        {
          value: 'Me and my family, personal use only',
          metadata: {
            flags: ['Planning permission / Permitted development'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'Town and Country Planning Act 1990, Section 55',
            url: 'https://www.legislation.gov.uk/ukpga/1990/8/section/55',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type of application is being applied for?',
      responses: [
        {
          value: 'Part 1 Class A',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'Is the property subject to any Article 4 directions?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type of prior approval application is it?',
      responses: [
        {
          value: 'Larger extension to a house',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'How many properties adjoin yours?',
      responses: [
        {
          value: '2',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015, Schedule 2, Part 1, Class A.4 (5)',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1/crossheading/class-a-enlargement-improvement-or-other-alteration-of-a-dwellinghouse',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Enter the address of the first adjoining property',
      responses: [
        {
          value: '21 Fellbrigg Road, London, SE22 9HQ',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015, Schedule 2, Part 1, Class A.4 (5)',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1/crossheading/class-a-enlargement-improvement-or-other-alteration-of-a-dwellinghouse',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Enter the address of the second adjoining property',
      responses: [
        {
          value: '25 Fellbrigg Road, London, SE22 9HQ',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015, Schedule 2, Part 1, Class A.4 (5)',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1/crossheading/class-a-enlargement-improvement-or-other-alteration-of-a-dwellinghouse',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Is the proposal within the Greater London Authority?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'Does the site include more than one property?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'Greater London Authority Act 1999',
            url: 'https://www.legislation.gov.uk/ukpga/1999/29/section/346',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Do you know the title number of the property?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Does the property have an Energy Performance Certificate (EPC)?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'Greater London Authority Act 1999',
            url: 'https://www.legislation.gov.uk/ukpga/1999/29/section/346',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Enter the reference number (RRN) from the most recent EPC',
      responses: [
        {
          value: '1234-1234-1234-1234-1234',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type of application is this?',
      responses: [
        {
          value: 'Prior approval',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'When are the works planned to start?',
      responses: [
        {
          value: '2024-06-17',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'Greater London Authority Act 1999',
            url: 'https://www.legislation.gov.uk/ukpga/1999/29/section/346',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'When are the works planned to be completed?',
      responses: [
        {
          value: '2050-06-18',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'Greater London Authority Act 1999',
            url: 'https://www.legislation.gov.uk/ukpga/1999/29/section/346',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        '[HIDDEN] Is the application for prior approval for an extension to a dwelling house?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'What is the gross internal floor area to be added?',
      responses: [
        {
          value: '40',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Do the changes involve creating any new bedrooms or bathrooms?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Are there existing or are you proposing parking spaces for any of these on the site?',
      responses: [
        {
          value: 'Bicycles',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'Greater London Authority Act 1999',
            url: 'https://www.legislation.gov.uk/ukpga/1999/29/section/346',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'What is the number of existing bicycle parking spaces?',
      responses: [
        {
          value: '2',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'Greater London Authority Act 1999',
            url: 'https://www.legislation.gov.uk/ukpga/1999/29/section/346',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'What is the proposed total number of bicycle parking spaces?',
      responses: [
        {
          value: '2',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'Greater London Authority Act 1999',
            url: 'https://www.legislation.gov.uk/ukpga/1999/29/section/346',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type of application is it?',
      responses: [
        {
          value: 'Apply for prior approval',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About you',
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
      question: 'Which of these best describes you?',
      responses: [
        {
          value: 'Private individual',
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
          value: 'William Zane 01234000000 areyouon@email.org',
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
      question: 'Can a planning officer see the works from public land?',
      responses: [
        {
          value: "Yes, it's visible from the road or somewhere else",
        },
      ],
      metadata: {
        sectionName: 'About you',
      },
    },
    {
      question:
        'We may need to visit the site to assess your application. If we do, who should we contact to arrange the visit?',
      responses: [
        {
          value: 'Me, the applicant',
        },
      ],
      metadata: {
        sectionName: 'About you',
      },
    },
    {
      question: 'What type of prior approval application is it?',
      responses: [
        {
          value: 'Larger extension to a house',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Upload drawings',
      },
    },
    {
      question: 'Has the house already been extended?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'Upload drawings',
      },
    },
    {
      question: 'Is this for submission or information only?',
      responses: [
        {
          value: 'Submission',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Upload drawings',
      },
    },
    {
      question: 'What type of application is it?',
      responses: [
        {
          value: 'Prior approval',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Check your application',
      },
    },
    {
      question: 'What type of prior approval application is it?',
      responses: [
        {
          value: 'Larger extension to a house',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Check your application',
      },
    },
    {
      question: 'Is the property a home?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Check your application',
      },
    },
    {
      question: 'What works does the project involve?',
      responses: [
        {
          value: 'Extension',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Check your application',
      },
    },
    {
      question:
        'Is the purpose of the project to support the needs of a disabled resident?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14',
            url: 'https://www.legislation.gov.uk/uksi/2012/2920/regulation/14',
          },
          {
            text: 'UK Statutory Instruments 2012 No. 2920 Regulation 4',
            url: 'https://www.legislation.gov.uk/uksi/2012/2920/regulation/4/made',
          },
          {
            text: 'Equalities Act 2010, Section 6',
            url: 'https://www.legislation.gov.uk/ukpga/2010/15/section/6',
          },
          {
            text: 'Children Act 1989, Part 3',
            url: 'https://www.legislation.gov.uk/ukpga/1989/41/part/III',
          },
        ],
        sectionName: 'Check your application',
      },
    },
    {
      question: 'Are you the applicant?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Check your application',
      },
    },
    {
      question: 'Would you like to upload evidence of your disability?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'Check your application',
      },
    },
    {
      question: 'What type of prior approval application is it?',
      responses: [
        {
          value: 'Larger extension to a house',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Check your application',
      },
    },
    {
      question:
        'Are you submitting any other planning applications about the same works or changes?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14',
            url: 'https://www.legislation.gov.uk/uksi/2012/2920/regulation/14',
          },
        ],
        sectionName: 'Check your application',
      },
    },
    {
      question: 'Does the application qualify for a disability exemption?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Check your application',
      },
    },
    {
      question: 'Is it any of these?',
      responses: [
        {
          value: 'None of these',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Check your application',
      },
    },
    {
      question: 'Check for multiple fees?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Check your application',
      },
    },
    {
      question: 'What type of application is it?',
      responses: [
        {
          value: 'Prior approval',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Check your application',
      },
    },
    {
      question: 'Which Local Planning authority is it?',
      responses: [
        {
          value: 'Southwark',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Check your application',
      },
    },
    {
      question: 'Connections with Southwark Council',
      responses: [
        {
          value: 'None of the above apply to me',
        },
      ],
      metadata: {
        sectionName: 'Check your application',
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
        sectionName: 'Check your application',
      },
    },
    {
      question: 'Which Local Planning authority is it?',
      responses: [
        {
          value: 'Southwark',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Pay and submit',
      },
    },
    {
      question:
        'What type of prior approval application is it?application.type',
      responses: [
        {
          value: 'Larger extension to a house',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Pay and submit',
      },
    },
  ],
  files: [
    {
      name: 'https://api.editor.planx.dev/file/private/dfaz9qu5/location%20plan_proposed_01.jpg',
      type: [
        {
          value: 'sitePlan.proposed',
          description: 'Site plan - proposed',
        },
      ],
    },
    {
      name: 'https://api.editor.planx.dev/file/private/avilhq1j/elevations_existing_01.jpg',
      type: [
        {
          value: 'elevations.existing',
          description: 'Elevations - existing',
        },
      ],
    },
    {
      name: 'https://api.editor.planx.dev/file/private/tis6f8hh/elevations_proposed_01.jpg',
      type: [
        {
          value: 'elevations.proposed',
          description: 'Elevations - proposed',
        },
      ],
    },
  ],
  metadata: {
    id: '80d3c3c2-0d1c-4a79-be99-912f488c2f02',
    organisation: 'SWK',
    submittedAt: '2024-06-26T18:14:45.726Z',
    source: 'PlanX',
    service: {
      flowId: 'c6628103-c648-4663-81e1-bfa0a1a18340',
      url: 'https://editor.planx.uk/southwark/apply-for-prior-approval/published',
      files: {
        required: [
          {
            value: 'sitePlan.proposed',
            description: 'Site plan - proposed',
          },
        ],
        recommended: [
          {
            value: 'elevations.existing',
            description: 'Elevations - existing',
          },
          {
            value: 'elevations.proposed',
            description: 'Elevations - proposed',
          },
        ],
        optional: [
          {
            value: 'photographs.existing',
            description: 'Photographs - existing',
          },
          {
            value: 'otherDrawing',
            description: 'Other - drawing',
          },
          {
            value: 'otherDocument',
            description: 'Other - document',
          },
          {
            value: 'visualisations',
            description: 'Visualisations',
          },
        ],
      },
      fee: {
        calculated: [
          {
            policyRefs: [
              {
                text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023',
                url: 'https://www.legislation.gov.uk/uksi/2023/1197/made',
              },
            ],
          },
        ],
        payable: [
          {
            description:
              '<p>If the proposed works (to either a home or within the curtilage of a home) is for the <strong>sole</strong> purpose of providing either:</p>\n<p></p>\n<p>- A means of access to (or within) the dwellinghouse for a disabled resident (current or future)</p>\n<p></p>\n<p>OR</p>\n<p></p>\n<p>- Providing facilities that are designed to ensure the disabled persons safety, health or comfort</p>\n<p></p>\n<p>OR</p>\n<p></p>\n<p>- Providing disabled access to a public building</p>\n<p></p>\n<p>Then no planning fee will be payable for this application.</p>',
            policyRefs: [
              {
                text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14',
                url: 'https://www.legislation.gov.uk/uksi/2012/2920/regulation/14',
              },
              {
                text: 'Regulation 4',
                url: 'https://www.legislation.gov.uk/uksi/2012/2920/regulation/4/made',
              },
            ],
          },
        ],
      },
    },
    schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/application.json`,
  },
};
