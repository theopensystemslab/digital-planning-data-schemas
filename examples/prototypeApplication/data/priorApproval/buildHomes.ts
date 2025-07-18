import {PrototypeApplication} from '../../../../types/schemas/prototypeApplication';

const version = process.env['VERSION'] || '@next';

export const priorApprovalBuildHomesPrototype: PrototypeApplication = {
  applicationType: 'pa.part20.classAB',
  data: {
    user: {
      role: 'applicant',
    },
    applicant: {
      type: 'company',
      name: {
        first: 'Enid',
        last: 'Blyton',
      },
      email: 'ennyblizzle@email.org',
      phone: {
        primary: '098765432109',
      },
      address: {
        sameAsSiteAddress: true,
      },
    },
    property: {
      address: {
        latitude: 51.6154485,
        longitude: -0.6463076,
        x: 493822,
        y: 191603,
        title: '7, BLYTON CLOSE, BEACONSFIELD',
        source: 'Ordnance Survey',
        uprn: '100080482163',
        usrn: '35200844',
        pao: '7',
        street: 'BLYTON CLOSE',
        town: 'BEACONSFIELD',
        postcode: 'HP9 2LX',
        singleLine: '7, BLYTON CLOSE, BEACONSFIELD, BUCKINGHAMSHIRE, HP9 2LX',
      },
      localAuthorityDistrict: ['Buckinghamshire', 'South Bucks'],
      region: 'South East',
      ward: 'Beaconsfield',
      type: 'commercial.office',
      planning: {
        sources: [
          'https://api.editor.planx.dev/gis/buckinghamshire?geom=MULTIPOLYGON+%28%28%28-0.646634+51.615571%2C+-0.646629+51.615545%2C+-0.646505+51.615512%2C+-0.646452+51.61522%2C+-0.646313+51.61523%2C+-0.646304+51.615207%2C+-0.645951+51.615311%2C+-0.646049+51.615615%2C+-0.646634+51.615571%29%29%29&analytics=false&sessionId=312c81fd-7368-4f0b-92d8-91de4033312a',
          'https://api.editor.planx.dev/roads?usrn=35200844',
        ],
        designations: [
          {
            value: 'tpo',
            description: 'Tree Preservation Order (TPO) or zone',
            intersects: false,
          },
          {
            value: 'flood',
            description: 'Flood risk',
            intersects: false,
          },
          {
            value: 'listed',
            description: 'Listed building',
            intersects: false,
          },
          {
            value: 'articleFour',
            description: 'Article 4 direction area',
            intersects: false,
          },
          {
            value: 'monument',
            description: 'Site of a Scheduled Monument',
            intersects: false,
          },
          {
            value: 'greenBelt',
            description: 'Green belt',
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
            description: 'UNESCO World Heritage Site (WHS)',
            intersects: false,
          },
          {
            value: 'registeredPark',
            description: 'Registered parks and gardens',
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
            description: 'Conservation area',
            intersects: false,
          },
          {
            value: 'designated.nationalPark.broads',
            description: 'National Park - Broads',
            intersects: false,
          },
          {
            value: 'road.classified',
            description: 'Classified road',
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
                  [-0.646634, 51.615571],
                  [-0.646629, 51.615545],
                  [-0.646505, 51.615512],
                  [-0.646452, 51.61522],
                  [-0.646313, 51.61523],
                  [-0.646304, 51.615207],
                  [-0.645951, 51.615311],
                  [-0.646049, 51.615615],
                  [-0.646634, 51.615571],
                ],
              ],
            ],
          },
          properties: {
            name: '',
            entity: 12000048511,
            prefix: 'title-boundary',
            dataset: 'title-boundary',
            'end-date': '',
            typology: 'geography',
            reference: '44530928',
            'entry-date': '2024-05-06',
            'start-date': '2010-04-21',
            'organisation-entity': '13',
          },
        },
        area: {
          hectares: 0.138418,
          squareMetres: 1384.18,
        },
      },
    },
    application: {
      fee: {
        calculated: 4510,
        payable: 0,
        exemption: {
          disability: false,
          resubmission: true,
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
      projectType: ['new.residential.dwelling'],
      description:
        'The addition of homes as upper storeys to the existing commercial premises.',
      boundary: {
        site: {
          type: 'Feature',
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                [
                  [-0.646634, 51.615571],
                  [-0.646629, 51.615545],
                  [-0.646505, 51.615512],
                  [-0.646452, 51.61522],
                  [-0.646313, 51.61523],
                  [-0.646304, 51.615207],
                  [-0.645951, 51.615311],
                  [-0.646049, 51.615615],
                  [-0.646634, 51.615571],
                ],
              ],
            ],
          },
          properties: {
            name: '',
            entity: 12000048511,
            prefix: 'title-boundary',
            dataset: 'title-boundary',
            'end-date': '',
            typology: 'geography',
            reference: '44530928',
            'entry-date': '2024-05-06',
            'start-date': '2010-04-21',
            'organisation-entity': '13',
            planx_user_action: 'Accepted the title boundary',
          },
        },
        area: {
          hectares: 0.138418,
          squareMetres: 1384.18,
        },
      },
      newDwellings: {
        newBuild: {count: 10},
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
      question: 'Is the property in Buckinghamshire?',
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
          value: 'Something else',
        },
      ],
      metadata: {
        sectionName: 'The property',
      },
    },
    {
      question: 'Which of these best describes the use of the property?',
      responses: [
        {
          value: 'Commercial',
        },
      ],
      metadata: {
        sectionName: 'The property',
      },
    },
    {
      question: 'What type of commercial property is it?',
      responses: [
        {
          value: 'Office',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The property',
      },
    },
    {
      question: 'Has work already started?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'Town and Country Planning Act 1990, Part III, Section 55',
            url: 'https://www.legislation.gov.uk/ukpga/1990/8/section/55',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type of property is it?',
      responses: [
        {
          value: 'Commercial building',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'Is the building detached?',
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
      question: 'How was the building was converted to a home?',
      responses: [
        {
          value: 'With planning permission',
          metadata: {
            flags: ['Planning permission / Permitted development'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AA',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20',
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
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
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
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Is any part of the property listed?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Is any part of the property a scheduled monument?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB.',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Is the property in a safety hazard area?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Is the property in a military explosives storage area?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) (Amendment) (No. 2) Order 2020 Schedule 2, Part 1, Class AB.1 (p)',
            url: 'https://www.legislation.gov.uk/uksi/2020/755/pdfs/uksi_20200755_en.pdf',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Is the property within 3km of the perimeter of an aerodrome?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Has the original building has already had storeys added to it?',
      responses: [
        {
          value: 'No',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'How many uses did the building have on 5 March 2018?',
      responses: [
        {
          value: '1 use',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'How was the building used on 5 March 2018?',
      responses: [
        {
          value: 'Offices',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB.',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'When was the building constructed?',
      responses: [
        {
          value: 'Between 1 July 1948 and 5 March 2018',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'How many storeys does the existing building have?',
      responses: [
        {
          value: '2 or more storeys',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'How many new storeys do you want to add?',
      responses: [
        {
          value: '1 or 2',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'After the works, how much higher is the building?',
      responses: [
        {
          value: '7m or less',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Are the new homes added onto the main part of the building?',
      responses: [
        {
          value: 'Yes',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'What is the floor to ceiling height of the new storeys?',
      responses: [
        {
          value: 'The same as those in the existing building',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Are the new storeys more than 3m high?',
      responses: [
        {
          value: 'No, 3m or less',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class A',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-a-new-dwellinghouses-on-detached-blocks-of-flats',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'After the works, is the building higher than others in the row?',
      responses: [
        {
          value: 'Yes, higher',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'After the changes, how much higher is the extended building compared to others in its row?',
      responses: [
        {
          value: '3.5m or less',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Is the highest part of the new roof more than 18m high?',
      responses: [
        {
          value: 'No, it is 18m or less',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Are the new homes flats?',
      responses: [
        {
          value: 'Yes',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Does the project involve any engineering works to the existing building?',
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
      question: 'What do the engineering works involve?',
      responses: [
        {
          value: 'Strengthening existing walls',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
        {
          value: 'Strengthening existing foundations',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Do the works result in visible support structures on the outside of the building?',
      responses: [
        {
          value: 'No',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Are the engineering works within the curtilage of the building?',
      responses: [
        {
          value: 'Yes',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Do the engineering operations include other changes to the building?',
      responses: [
        {
          value:
            'No, the engineering operations are only to add new storeys to the building',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) (Amendment) (No. 2) Order 2020 Schedule 2, Part 20, Class AC',
            url: 'https://www.legislation.gov.uk/uksi/2020/755/pdfs/uksi_20200755_en.pdf',
          },
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) (Amendment) (No. 2) Order 2020 Schedule 2, Part 20, Class AD',
            url: 'https://www.legislation.gov.uk/uksi/2020/755/pdfs/uksi_20200755_en.pdf',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Does the new storey have side-facing windows or rooflights?',
      responses: [
        {
          value: 'No',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Does the project include new external staircases or doors?',
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
      question:
        'Does the external staircases and doors extend beyond the curtilage of the existing building?',
      responses: [
        {
          value: 'No',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Does the project involve adding new storage, waste or other ancillary features?',
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
      question:
        'Are the facilities entirely within the curtilage of the building?',
      responses: [
        {
          value: 'Yes',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Where are the facilities located?',
      responses: [
        {
          value: 'To the rear of the building',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB.',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Is there any plant equipment on the roof of the existing building?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class A',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Is there any new plant equipment on the roof of the new storeys?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Do any new homes have a floor area of less than 37m²?',
      responses: [
        {
          value: 'No',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Section 3, paragraph 9A',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/article/3',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Do all new homes meet the nationally described space standards?',
      responses: [
        {
          value: 'Yes',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Section 3, 9A',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/article/3',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Does the design seek to minimise negative impacts on light, views and privacy for neighbours as far as possible?',
      responses: [
        {
          value: 'Yes',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 20, Class AB.',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/20/crossheading/class-ab-new-dwellinghouses-on-terrace-buildings-in-commercial-or-mixed-use',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type of property is it?',
      responses: [
        {
          value: 'Office space',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type of application is being applied for?',
      responses: [
        {
          value: 'Part 20 Class AB',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type of application is being applied for?',
      responses: [
        {
          value: 'Part 20 Class AB',
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
          value: 'Build homes on an adjoining commercial or mixed use building',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type or prior approval application is it?',
      responses: [
        {
          value: 'Build homes on an adjoining commercial or mixed use building',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Describe any potential impacts on adjoining properties and how these will be mitigated',
      responses: [
        {
          value:
            'These are the potential impacts on the adjoining properties:\n1\n2\n3\nAnd this is how they are to be mitigated:\nA\nB\nC\n',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Is the property located near any air traffic or defence assets?',
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
        'Describe the impact of the extended building on any protected view.',
      responses: [
        {
          value:
            'This is the impact of the extended building on any protected view.',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'How many new homes are being build?',
      responses: [
        {
          value: '10',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Has any part of the site been identified as contaminated land?',
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
      question: 'Was the building previously used for any of these?',
      responses: [
        {
          value: 'None of these',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'Is the building in a flood risk area?',
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
      question: 'You need to submit a Noise Assessment',
      responses: [
        {
          value: 'Upload a document later',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'You need to submit a Transport Assessment',
      responses: [
        {
          value: 'Upload a document later',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'The project will result in an increase in the number of people living in the area. What impacts will this have on businesses and new residents, and how will this be mitigated?',
      responses: [
        {
          value:
            'Here are the impacts that the development will have:\n1\n2\n3\nAnd these are the mitigation measures:\nA\nB\nC',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Describe the impact of the project on residential amenity and facilities',
      responses: [
        {
          value:
            'the impact of the project on residential amenity and facilities. the impact of the project on residential amenity and facilities.the impact of the project on residential amenity and facilities',
        },
      ],
      metadata: {
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
          value: 'Company',
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
          value: 'Enid Blyton 098765432109 ennyblizzle@email.org',
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
          value: 'Build homes on an adjoining commercial or mixed use building',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Upload drawings',
      },
    },
    {
      question:
        'Do the changes involve any alterations to ground or floor levels?',
      responses: [
        {
          value: 'Yes',
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
          value: 'Build homes on an adjoining commercial or mixed use building',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Check your application',
      },
    },
    {
      question: 'Are you building fewer than 10 new homes?',
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
      question: 'Are you building fewer than 51 new homes?',
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
      question: 'Is the property a home?',
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
      question: 'What type of changes does the project involve?',
      responses: [
        {
          value: 'New build',
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
          value: 'Build homes on an adjoining commercial or mixed use building',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Check your application',
      },
    },
    {
      question: 'Is this application a resubmission?',
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
        ],
        sectionName: 'Check your application',
      },
    },
    {
      question:
        'Is this the first time you have resubmitted an application for this site?',
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
        ],
        sectionName: 'Check your application',
      },
    },
    {
      question: 'What was the result of the original application?',
      responses: [
        {
          value: 'Withdrawn',
        },
      ],
      metadata: {
        sectionName: 'Check your application',
      },
    },
    {
      question: 'When did you submit the original application?',
      responses: [
        {
          value: 'Within the last 12 months',
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
      question:
        'To qualify for a fee exemption, the proposed works must be of a similar description to the original application',
      responses: [
        {
          value: 'I understand',
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
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Check your application',
      },
    },
    {
      question: 'Does the application qualify for a resubmission exemption?',
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
      question: 'Connections with Buckinghamshire Council',
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
          value: 'Buckinghamshire',
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
          value: 'Build homes on an adjoining commercial or mixed use building',
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
      name: 'https://api.editor.planx.dev/file/private/xdaaquh0/test%20document.pdf',
      type: ['noiseAssessment'],
    },
    {
      name: 'https://api.editor.planx.dev/file/private/kk01qq8t/test%20document.pdf',
      type: [
        'roofPlan.proposed',
        'sections.existing',
        'sections.proposed',
        'floorPlan.existing',
        'floorPlan.proposed',
        'elevations.existing',
        'elevations.proposed',
      ],
    },
    {
      name: 'https://api.editor.planx.dev/file/private/knu6huv7/test%20document.pdf',
      type: ['sitePlan.proposed'],
    },
  ],
  metadata: {
    id: '312c81fd-7368-4f0b-92d8-91de4033312a',
    organisation: 'BKM',
    submittedAt: '2024-06-29T12:31:34.837Z',
    source: 'PlanX',
    service: {
      flowId: '6f76e837-7a42-40f3-80e9-a9482dce5982',
      url: 'https://editor.planx.dev/buckinghamshire/apply-for-prior-approval/published',
      files: {
        required: [
          'sitePlan.proposed',
          'elevations.existing',
          'elevations.proposed',
          'floorPlan.existing',
          'floorPlan.proposed',
          'roofPlan.proposed',
          'sections.existing',
          'sections.proposed',
          'noiseAssessment',
        ],
        recommended: [],
        optional: [
          'photographs.existing',
          'otherDrawing',
          'otherDocument',
          'visualisations',
        ],
      },
      fee: {
        calculated: [
          {
            description:
              '<p>The plannning fee for a Prior Approval application relating to creation of at least 10 but no more than 50 new homes on rooftops, or on a site created by demolishing vacant buildings is £451 per new home</p>',
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
              '<p>In the case of an application that is the first resubmission of an application on the same site that is similar in character and description, no planning fee is payable.</p>',
            policyRefs: [
              {
                text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14',
                url: 'https://www.legislation.gov.uk/uksi/2012/2920/regulation/14',
              },
            ],
          },
        ],
      },
    },
    schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/prototypeApplication.json`,
  },
};
