import {PrototypeApplication} from '../../../../types/schemas/prototypeApplication';

const version = process.env['VERSION'] || '@next';

export const priorApprovalConvertCommercialToHomePrototype: PrototypeApplication =
  {
    applicationType: 'pa.part3.classMA',
    data: {
      user: {
        role: 'agent',
      },
      applicant: {
        type: 'individual',
        name: {
          first: 'Vincent',
          last: 'Van Gogh',
        },
        email: 'ouchmyear@email.org',
        phone: {
          primary: '012345678901',
        },
        address: {
          sameAsSiteAddress: true,
        },
        siteContact: {
          role: 'agent',
        },
        agent: {
          name: {
            first: 'Alan',
            last: 'Agent',
          },
          email: 'alanagent@email.org',
          phone: {
            primary: '098765432109',
          },
          company: {
            name: "Alan's Property & Fine Art Consultants PLC",
          },
          address: {
            line1: '12 Agent Avenue',
            line2: '',
            town: 'Plantown',
            county: '',
            postcode: 'PL47TN',
            country: '',
          },
        },
      },
      property: {
        address: {
          latitude: 51.4745098,
          longitude: -0.1151501,
          x: 530999,
          y: 176745,
          title: '87, HACKFORD ROAD, LONDON',
          source: 'Ordnance Survey',
          uprn: '100021847182',
          usrn: '21900651',
          pao: '87',
          street: 'HACKFORD ROAD',
          town: 'LONDON',
          postcode: 'SW9 0RE',
          singleLine: '87, HACKFORD ROAD, LONDON, LAMBETH, SW9 0RE',
        },
        localAuthorityDistrict: ['Lambeth'],
        region: 'London',
        type: 'commercial.retail.shop',
        planning: {
          sources: [
            'https://api.editor.planx.dev/gis/lambeth?geom=MULTIPOLYGON+%28%28%28-0.114876+51.474474%2C+-0.114863+51.474517%2C+-0.115261+51.474548%2C+-0.11527+51.474504%2C+-0.114876+51.474474%29%29%29&analytics=false&sessionId=86a5ba3e-1a7f-4460-bf46-826c3f982a92',
            'https://api.editor.planx.dev/roads?usrn=21900651',
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
              intersects: true,
              entities: [
                {
                  name: '87, HACKFORD ROAD SW9',
                  source: {
                    text: 'Planning Data',
                    url: 'https://www.planning.data.gov.uk/entity/31537921',
                  },
                },
                {
                  name: 'No Address Supplied',
                  source: {
                    text: 'Planning Data',
                    url: 'https://www.planning.data.gov.uk/entity/42103309',
                  },
                },
              ],
            },
            {
              value: 'articleFour',
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
              intersects: true,
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
              value: 'listed.gradeOne',
              description: 'Listed Building - Grade I',
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
              value: 'listed.gradeTwo',
              description: 'Listed Building - Grade II',
              intersects: true,
            },
            {
              value: 'listed.gradeTwoStar',
              description: 'Listed Building - Grade II*',
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
              intersects: true,
              entities: [
                {
                  name: 'Hackford Road',
                  source: {
                    text: 'Planning Data',
                    url: 'https://www.planning.data.gov.uk/entity/44000877',
                  },
                },
              ],
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
                    [-0.114876, 51.474474],
                    [-0.114863, 51.474517],
                    [-0.115261, 51.474548],
                    [-0.11527, 51.474504],
                    [-0.114876, 51.474474],
                  ],
                ],
              ],
            },
            properties: {
              name: '',
              entity: 12000528882,
              prefix: 'title-boundary',
              dataset: 'title-boundary',
              'end-date': '',
              typology: 'geography',
              reference: '51792928',
              'entry-date': '2024-05-06',
              'start-date': '2011-05-10',
              'organisation-entity': '13',
            },
          },
          area: {
            hectares: 0.013555000000000001,
            squareMetres: 135.55,
          },
        },
        titleNumber: {
          known: 'Yes',
          number: '24/12345/FUL',
        },
        EPC: {
          known: 'Yes',
          number: '1234-1234-1234-1234',
        },
        parking: {
          cars: {
            count: 1,
          },
          vans: {
            count: 0,
          },
          motorcycles: {
            count: 0,
          },
          cycles: {
            count: 0,
          },
          buses: {
            count: 0,
          },
          disabled: {
            count: 0,
          },
          carClub: {
            count: 0,
          },
          offStreet: {
            residential: {
              count: 0,
            },
          },
          other: {
            count: 0,
          },
        },
        // occupation: {
        //   status: 'vacant',
        // },
      },
      application: {
        fee: {
          calculated: 258,
          payable: 258,
          exemption: {
            disability: false,
            resubmission: false,
          },
          reduction: {
            sports: false,
            parishCouncil: false,
            alternative: false,
          },
          reference: {
            govPay: 'sandbox-789',
          },
        },
        leadDeveloper: {
          type: 'overseasCompany',
          company: {
            name: 'Impression Developments Inc.',
            registrationNumber: '12345679ABC',
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
        projectType: ['changeOfUse'],
        description:
          'Change of use from my sunflower and art supplies shop into a home.',
        schemeName: "Vincent's New Property Venture",
        date: {
          start: '2024-07-28',
          completion: '2035-07-28',
        },
        boundary: {
          site: {
            type: 'Feature',
            geometry: {
              type: 'MultiPolygon',
              coordinates: [
                [
                  [
                    [-0.114876, 51.474474],
                    [-0.114863, 51.474517],
                    [-0.115261, 51.474548],
                    [-0.11527, 51.474504],
                    [-0.114876, 51.474474],
                  ],
                ],
              ],
            },
            properties: {
              name: '',
              entity: 12000528882,
              prefix: 'title-boundary',
              dataset: 'title-boundary',
              'end-date': '',
              typology: 'geography',
              reference: '51792928',
              'entry-date': '2024-05-06',
              'start-date': '2011-05-10',
              'organisation-entity': '13',
              planx_user_action: 'Accepted the title boundary',
            },
          },
          area: {
            hectares: 0.013555000000000001,
            squareMetres: 135.55,
          },
        },
        parking: {
          cars: {
            count: 1,
            difference: 0,
          },
          vans: {
            count: 0,
            difference: 0,
          },
          motorcycles: {
            count: 0,
            difference: 0,
          },
          cycles: {
            count: 2,
            difference: 2,
          },
          buses: {
            count: 0,
            difference: 0,
          },
          disabled: {
            count: 0,
            difference: 0,
          },
          carClub: {
            count: 0,
            difference: 0,
          },
          offStreet: {
            residential: {
              count: 0,
              difference: 0,
            },
          },
          other: {
            count: 0,
            difference: 0,
          },
        },
        units: {
          residential: {
            rebuilt: [
              {
                development: 'changeOfUse',
                type: 'terraced',
                bedrooms: 3,
                habitableRooms: 7,
                area: {squareMetres: 300},
                tenure: 'marketForRent',
                provider: 'private',
                garden: false,
                sheltered: false,
                olderPersons: false,
                compliance: ['m42', 'm432a', 'm432b'],
                identicalUnits: 1,
              },
            ],
          },
        },
        energy: {
          type: ['heatPump'],
          heatPumps: {
            capacity: {megawatts: 2},
          },
        },
        greenRoof: {
          area: {squareMetres: 0},
        },
        urbanGreeningFactor: {
          score: 4,
        },
        utilities: {
          gas: {connections: {count: 1}},
          water: {connections: {count: 1}},
          internet: {
            residentialUnits: {count: 1},
            commercialUnits: {count: 0},
          },
        },
        waste: {
          reuseRecycle: {percent: 2},
        },
      },
    },
    preAssessment: [
      {
        value: 'Planning permission / Permission needed',
        description:
          'It looks like the proposed changes may require planning permission.',
      },
    ],
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
            value: 'Retail and services',
          },
        ],
        metadata: {
          sectionName: 'The property',
        },
      },
      {
        question: 'What type of retail unit is it?',
        responses: [
          {
            value: 'Shop',
          },
        ],
        metadata: {
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
        question: 'What is the property used as?',
        responses: [
          {
            value: 'Shop',
          },
        ],
        metadata: {
          policyRefs: [
            {
              text: 'The Town and Country Planning (Use Classes) (Amendment) (England) Regulations 2020',
              url: 'https://www.legislation.gov.uk/uksi/2020/757/made',
            },
            {
              text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015',
              url: 'https://www.legislation.gov.uk/uksi/2015/596/contents',
            },
          ],
          sectionName: 'About the project',
        },
      },
      {
        question: 'Is the shop any of these?',
        responses: [
          {
            value: "No, it's another kind of shop",
          },
        ],
        metadata: {
          policyRefs: [
            {
              text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 3',
              url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/3',
            },
          ],
          sectionName: 'About the project',
        },
      },
      {
        question: 'What does the shop sell?',
        responses: [
          {
            value: 'Other goods',
          },
        ],
        metadata: {
          policyRefs: [
            {
              text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 3',
              url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/3',
            },
          ],
          sectionName: 'About the project',
        },
      },
      {
        question: 'What do you want to change its use to?',
        responses: [
          {
            value: 'Single house',
          },
        ],
        metadata: {
          policyRefs: [
            {
              text: 'The Town and Country Planning (Use Classes) (Amendment) (England) Regulations 2020',
              url: 'https://www.legislation.gov.uk/uksi/2020/757/made',
            },
          ],
          sectionName: 'About the project',
        },
      },
      {
        question: 'What part of the building will be converted?',
        responses: [
          {
            value: 'The entire building',
          },
        ],
        metadata: {
          sectionName: 'About the project',
        },
      },
      {
        question: 'Is the site within an Area of Outstanding Natural Beauty?',
        responses: [
          {
            value: 'No',
            metadata: {
              flags: ['Planning permission / Prior approval'],
            },
          },
        ],
        metadata: {
          autoAnswered: true,
          policyRefs: [
            {
              text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 3, Class MA',
              url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/3',
            },
          ],
          sectionName: 'About the project',
        },
      },
      {
        question: 'Is the site in the Broads?',
        responses: [
          {
            value: 'No',
            metadata: {
              flags: ['Planning permission / Prior approval'],
            },
          },
        ],
        metadata: {
          autoAnswered: true,
          policyRefs: [
            {
              text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 3, Class MA',
              url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/3',
            },
          ],
          sectionName: 'About the project',
        },
      },
      {
        question: 'Is the site in a National Park?',
        responses: [
          {
            value: 'No',
            metadata: {
              flags: ['Planning permission / Prior approval'],
            },
          },
        ],
        metadata: {
          autoAnswered: true,
          policyRefs: [
            {
              text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 3, Class MA',
              url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/3',
            },
          ],
          sectionName: 'About the project',
        },
      },
      {
        question: 'Is the site part of a World Heritage Site?',
        responses: [
          {
            value: 'No',
            metadata: {
              flags: ['Planning permission / Prior approval'],
            },
          },
        ],
        metadata: {
          autoAnswered: true,
          policyRefs: [
            {
              text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 3, Class MA',
              url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/3',
            },
          ],
          sectionName: 'About the project',
        },
      },
      {
        question: 'Is the site in an area of Special Scientific Interest?',
        responses: [
          {
            value: 'No',
            metadata: {
              flags: ['Planning permission / Prior approval'],
            },
          },
        ],
        metadata: {
          autoAnswered: true,
          policyRefs: [
            {
              text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 3, Class MA',
              url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/3',
            },
          ],
          sectionName: 'About the project',
        },
      },
      {
        question: 'Is the site in a safety hazard area?',
        responses: [
          {
            value: 'No',
            metadata: {
              flags: ['Planning permission / Prior approval'],
            },
          },
        ],
        metadata: {
          autoAnswered: true,
          policyRefs: [
            {
              text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 3, Class MA',
              url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/3',
            },
          ],
          sectionName: 'About the project',
        },
      },
      {
        question: 'Is the site in a military explosives storage area?',
        responses: [
          {
            value: 'No',
            metadata: {
              flags: ['Planning permission / Prior approval'],
            },
          },
        ],
        metadata: {
          autoAnswered: true,
          policyRefs: [
            {
              text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 3, Class MA',
              url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/3',
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
            metadata: {
              flags: ['Planning permission / Prior approval'],
            },
          },
        ],
        metadata: {
          autoAnswered: true,
          policyRefs: [
            {
              text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 3, Class MA',
              url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/3',
            },
          ],
          sectionName: 'About the project',
        },
      },
      {
        question: 'Is any part of the property listed?',
        responses: [
          {
            value: 'Yes',
            metadata: {
              flags: ['Planning permission / Permission needed'],
            },
          },
        ],
        metadata: {
          autoAnswered: true,
          policyRefs: [
            {
              text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 3, Class MA',
              url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/3',
            },
          ],
          sectionName: 'About the project',
        },
      },
      {
        question: 'What type of property is it?',
        responses: [
          {
            value: 'Shop',
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
            value: 'Convert a commercial building into a home or homes',
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
            value: 'Convert a commercial building into a home or homes',
          },
        ],
        metadata: {
          autoAnswered: true,
          sectionName: 'About the project',
        },
      },
      {
        question: 'You need to submit a Sunlight and Daylight Report',
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
        question: 'How many new homes are being build?',
        responses: [
          {
            value: '1',
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
        question: 'Describe the design and external appearance of the project',
        responses: [
          {
            value:
              'The existing shop front will be replaced by a new wall with a large painting of some hay stacks on it. Some more information about the appearance of the building. ',
          },
        ],
        metadata: {
          sectionName: 'About the project',
        },
      },
      {
        question: 'Is the building currently used as a nursery?',
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
        question: 'Is the building currently used for healthcare?',
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
        question: 'Is the property in a conservation area?',
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
          'Does the project involve changing the use of any part of the ground floor?',
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
          'Describe the impacts that the change of use will have on the character or sustainability of the conservation area and how these will be mitigated',
        responses: [
          {
            value:
              'These are the impacts that the change of use will have:\n1\n2\n3\nAnd this is how it will be mitigated:\nA\nB\nC',
          },
        ],
        metadata: {
          sectionName: 'About the project',
        },
      },
      {
        question: 'Will the building be 18 metres or more in height?',
        responses: [
          {
            value: 'No',
          },
        ],
        metadata: {
          policyRefs: [
            {
              text: 'Fire safety guidance, 2021',
              url: 'https://www.gov.uk/guidance/fire-safety-and-high-rise-residential-buildings-from-1-august-2021',
            },
          ],
          sectionName: 'About the project',
        },
      },
      {
        question: 'Will the building be 7 or more storeys tall?',
        responses: [
          {
            value: 'No',
          },
        ],
        metadata: {
          policyRefs: [
            {
              text: 'Fire safety guidance, 2021',
              url: 'https://www.gov.uk/guidance/fire-safety-and-high-rise-residential-buildings-from-1-august-2021',
            },
          ],
          sectionName: 'About the project',
        },
      },
      {
        question:
          'Is the building in an area that is also used for heavy industry, waste management, storage or distribution?',
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
        question: 'Your contact details',
        responses: [
          {
            value:
              "Alan Agent Alan's Property & Fine Art Consultants PLC 098765432109 alanagent@email.org",
          },
        ],
        metadata: {
          sectionName: 'About you',
        },
      },
      {
        question: 'Are you applying on behalf of someone else?',
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
        question: 'Which of these best describes you?',
        responses: [
          {
            value: 'Professional agent',
          },
        ],
        metadata: {
          sectionName: 'About you',
        },
      },
      {
        question: 'Your contact address',
        responses: [
          {
            value: '12 Agent Avenue, Plantown, PL47TN',
          },
        ],
        metadata: {
          sectionName: 'About you',
        },
      },
      {
        question: 'Which of these best describes the applicant?',
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
        question: "Applicant's contact details",
        responses: [
          {
            value: 'Vincent Van Gogh 012345678901 ouchmyear@email.org',
          },
        ],
        metadata: {
          sectionName: 'About you',
        },
      },
      {
        question:
          "Is the applicant's contact address the same as the property address?",
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
        question: "Applicant's contact address",
        responses: [
          {
            value: 'Haywain House, Rotterdam, 12543, The Netherlands',
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
        question: 'Which of these best describes you?',
        responses: [
          {
            value: 'Professional agent',
          },
        ],
        metadata: {
          autoAnswered: true,
          sectionName: 'About you',
        },
      },
      {
        question: 'If we need to make a site visit, who should we contact?',
        responses: [
          {
            value: 'Me, the agent',
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
            value: 'Convert a commercial building into a home or homes',
          },
        ],
        metadata: {
          autoAnswered: true,
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
            value: 'Convert a commercial building into a home or homes',
          },
        ],
        metadata: {
          autoAnswered: true,
          sectionName: 'Check your application',
        },
      },
      {
        question: 'Does the project involve any building works?',
        responses: [
          {
            value: 'Yes',
          },
        ],
        metadata: {
          policyRefs: [
            {
              text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) (Amendment) Regulations 2023',
              url: 'https://www.legislation.gov.uk/uksi/2023/1197/made',
            },
          ],
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
            value: 'Change use',
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
            value: 'Convert a commercial building into a home or homes',
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
        question: 'Is this application a resubmission?',
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
            value: 'No',
          },
        ],
        metadata: {
          autoAnswered: true,
          sectionName: 'Check your application',
        },
      },
      {
        question:
          'Does the application qualify to the same-day-planning-application exemption?',
        responses: [
          {
            value: 'No',
          },
        ],
        metadata: {
          autoAnswered: true,
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
            value: 'Lambeth',
          },
        ],
        metadata: {
          autoAnswered: true,
          sectionName: 'Check your application',
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
        question: 'Connections with London Borough of Lambeth',
        responses: [
          {
            value: 'None of the above apply to me',
          },
        ],
        metadata: {
          autoAnswered: true,
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
          autoAnswered: true,
          sectionName: 'Check your application',
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
          sectionName: 'Pay and submit',
        },
      },
      {
        question:
          'What type of prior approval application is it?application.type',
        responses: [
          {
            value: 'Convert a commercial building into a home or homes',
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
        name: 'https://api.editor.planx.dev/file/private/bpxw8ekr/test%20document.pdf',
        type: ['noiseAssessment'],
      },
      {
        name: 'https://api.editor.planx.dev/file/private/2mrowm3t/test%20document.pdf',
        type: ['usePlan.proposed', 'sitePlan.proposed'],
      },
      {
        name: 'https://api.editor.planx.dev/file/private/eu61v4yk/test%20document.pdf',
        type: ['sitePlan.existing'],
      },
      {
        name: 'https://api.editor.planx.dev/file/private/fd7o1wnh/test%20document.pdf',
        type: ['sunlightAndDaylightReport'],
      },
    ],
    metadata: {
      id: '86a5ba3e-1a7f-4460-bf46-826c3f982a92',
      organisation: 'LBH',
      submittedAt: '2024-06-29T12:25:58.777Z',
      source: 'PlanX',
      service: {
        flowId: 'f3cae2c8-9a64-4ce1-8cef-8e6832ad383d',
        url: 'https://editor.planx.dev/lambeth/apply-for-prior-approval/published',
        files: {
          required: [
            'sitePlan.proposed',
            'usePlan.proposed',
            'noiseAssessment',
            'sunlightAndDaylightReport',
          ],
          recommended: ['sitePlan.existing'],
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
                '<p>This application does not qualify for any exemptions or reductions</p>',
            },
          ],
        },
      },
      schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/prototypeApplication.json`,
    },
  };
