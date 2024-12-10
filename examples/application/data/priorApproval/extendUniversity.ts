import {Application} from '../../../../src/types/schemas/application';

const version = process.env['VERSION'] || '@next';

export const priorApprovalExtendUniversity: Application = {
  data: {
    user: {
      role: 'applicant',
    },
    applicant: {
      type: 'company',
      name: {
        first: 'John',
        last: 'Betjeman',
      },
      email: 'johnnybthepoet@email.org',
      phone: {
        primary: '012345678901',
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
        latitude: 51.5647555,
        longitude: -0.1532914,
        x: 528097,
        y: 186713,
        title: '31, HIGHGATE WEST HILL, LONDON',
        source: 'Ordnance Survey',
        uprn: '000005008312',
        usrn: '20400012',
        pao: '31',
        street: 'HIGHGATE WEST HILL',
        town: 'LONDON',
        postcode: 'N6 6NP',
        singleLine: '31, HIGHGATE WEST HILL, LONDON, CAMDEN, N6 6NP',
      },
      localAuthorityDistrict: ['Camden'],
      region: 'London',
      type: {
        value: 'commercial.education.university',
        description: 'University',
      },
      planning: {
        sources: [
          'https://api.editor.planx.dev/gis/camden?geom=MULTIPOLYGON+%28%28%28-0.153392+51.564734%2C+-0.153391+51.564724%2C+-0.153376+51.564725%2C+-0.153085+51.564757%2C+-0.1531+51.564806%2C+-0.15335+51.564785%2C+-0.153392+51.564734%29%29%29&analytics=false&sessionId=7e147b04-0a8b-44fc-a249-c36ef6407f84',
          'https://api.editor.planx.dev/roads?usrn=20400012',
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
            intersects: true,
            entities: [
              {
                name: 'Basements',
                source: {
                  text: 'Planning Data',
                  url: 'https://www.planning.data.gov.uk/entity/7010002613',
                },
              },
            ],
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
            intersects: true,
            entities: [
              {
                name: 'Highgate Village',
                source: {
                  text: 'Planning Data',
                  url: 'https://www.planning.data.gov.uk/entity/44009654',
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
                  [-0.153392, 51.564734],
                  [-0.153391, 51.564724],
                  [-0.153376, 51.564725],
                  [-0.153085, 51.564757],
                  [-0.1531, 51.564806],
                  [-0.15335, 51.564785],
                  [-0.153392, 51.564734],
                ],
              ],
            ],
          },
          properties: {
            name: '',
            entity: 12000488653,
            prefix: 'title-boundary',
            dataset: 'title-boundary',
            'end-date': '',
            typology: 'geography',
            reference: '36535150',
            'entry-date': '2024-05-06',
            'start-date': '2008-08-14',
            'organisation-entity': '13',
          },
        },
        area: {
          hectares: 0.011762,
          squareMetres: 117.62,
        },
      },
      titleNumber: {
        known: 'No',
      },
      EPC: {
        known: 'The property does not have one',
      },
      parking: {
        cars: {
          count: 0,
        },
        vans: {
          count: 0,
        },
        motorcycles: {
          count: 0,
        },
        cycles: {
          count: 5,
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
    },
    application: {
      type: {
        value: 'pa.part7.classM',
        description:
          'Prior Approval - Extend a school, college, university, prison or hospital',
      },
      fee: {
        calculated: 120,
        payable: 120,
        category: {
          one: 0,
          two: 0,
          three: 0,
          four: 0,
          five: 0,
          sixAndSeven: 0,
          eight: 0,
          nine: 0,
          ten: 0,
          eleven: {
            one: 0,
            two: 0,
          },
          twelve: {
            one: 0,
            two: 0,
          },
          thirteen: 0,
          fourteen: 0,
        },
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
          govPay: '90u259k4b9qh4tn2h220ui2um3',
        },
      },
      leadDeveloper: {
        type: 'ukCompany',
        company: {
          name: 'Fit For Cabbages Developments',
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
      projectType: [
        {
          value: 'extend',
          description: 'Extend a building or add an outbuilding',
        },
      ],
      description:
        'New extension to university building, for the purposes of teaching downbeat poetry about Slough to the masses. 6 metres to the rear and 4 metres in height.',
      date: {
        start: '2024-07-28',
        completion: '2024-07-28',
      },
      boundary: {
        site: {
          type: 'Feature',
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                [
                  [-0.153392, 51.564734],
                  [-0.153391, 51.564724],
                  [-0.153376, 51.564725],
                  [-0.153085, 51.564757],
                  [-0.1531, 51.564806],
                  [-0.15335, 51.564785],
                  [-0.153392, 51.564734],
                ],
              ],
            ],
          },
          properties: {
            name: '',
            entity: 12000488653,
            prefix: 'title-boundary',
            dataset: 'title-boundary',
            'end-date': '',
            typology: 'geography',
            reference: '36535150',
            'entry-date': '2024-05-06',
            'start-date': '2008-08-14',
            'organisation-entity': '13',
            planx_user_action: 'Accepted the title boundary',
          },
        },
        area: {
          hectares: 0.011762,
          squareMetres: 117.62,
        },
      },
      parking: {
        cars: {
          count: 0,
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
          count: 8,
          difference: 3,
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
      schemeName: "Sir John Betjeman's New Extension",
      utilities: {
        internet: {
          commercialUnits: {count: 1},
          residentialUnits: {count: 0},
        },
        fire: {
          suppression: true,
        },
      },
      energy: {
        type: ['solar'],
        solar: {
          capacity: {megawatts: 6},
        },
      },
      urbanGreeningFactor: {score: 2},
      greenRoof: {
        area: {squareMetres: 12},
      },
      waste: {
        reuseRecycle: {percent: 0},
      },
      charging: {
        active: {count: 3},
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
      question: 'Is the property in Camden?',
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
          value: 'Education',
        },
      ],
      metadata: {
        sectionName: 'The property',
      },
    },
    {
      question: 'What type of educational building is it?',
      responses: [
        {
          value: 'University',
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
      question:
        'Is the site of the proposed development within the curtilage of a listed building?',
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
        'Would the development prevent the ongoing use of land used as a playing field for that purpose?',
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
      question: 'What is the footprint of the proposed development?',
      responses: [
        {
          value: '250 square metres or less',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Will the footprint of the proposed development be greater than 25% of the cumulative footprint of existing buildings?',
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
        'Will any part of the proposed development be closer than 5 metres to the site boundary?',
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
        'Will any rooftop structures, such as plant or machinery, exceed 1.5 metres in height?',
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
      question: 'What does the proposed development consist of?',
      responses: [
        {
          value: 'Extension of an existing building',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Can you confirm that both of the following statements with regard to the height of the proposed development are true?',
      responses: [
        {
          value: 'Yes, I can confirm that both of these statements are true.',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: '[HIDDEN] proposal in scope?',
      responses: [
        {
          value: 'Yes',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Is the proposed development located within any of the following types of site?',
      responses: [
        {
          value:
            'No, the site is not located within any of the described areas',
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
          value: 'Another use',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'Select your project',
      responses: [
        {
          value: 'Erect, extend or alter a university building',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type of application is being applied for?',
      responses: [
        {
          value: 'Part 7 Class M',
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
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'List all the changes involved in the project',
      responses: [
        {
          value: 'Add a storey',
        },
        {
          value: 'Convert a garage',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Is the property affected by any Article 4 directions removing this type of permitted development right?',
      responses: [
        {
          value: 'None of these',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Is the property affected by any Aticle 4 directions removing this type of permitted development right?',
      responses: [
        {
          value: 'None of these',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Is the property affected by any Aticle 4 directions removing this type of permitted development right?',
      responses: [
        {
          value: 'None of these',
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
          value: 'Extend a university building',
        },
      ],
      metadata: {
        autoAnswered: true,
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
      question: 'Describe the proposed work',
      responses: [
        {
          value:
            'New extension to university building, 6 metres to the rear and 4 metres in height, clad in books of poetry.',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'Is any part of the site on designated land?',
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
      question: 'Describe the materials of the buildings',
      responses: [
        {
          value:
            'The facade treatment will be sympathetic with the existing building and character of the area, using namely glazed tiles, london stock brick and standing seam zinc roofing.',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015, Schedule 2, Part 7, Class',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/7/crossheading/class-m-extensions-etc-for-schools-colleges-universities-and-hospitals',
          },
          {
            text: 'M',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/7/crossheading/class-m-extensions-etc-for-schools-colleges-universities-and-hospitals',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Is the project within, or near, a Conservation Area, a Listed Building or a site of Archaeological interest?',
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
        'Describe any impacts on heritage areas, historic buildings or archaeological remains, and how these will be mitigated',
      responses: [
        {
          value:
            'These are the impacts on heritage:\nA\nB\nC\n and this is how they will be mitigated:\n1\n2\n3',
        },
      ],
      metadata: {
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
          value: '2024-07-28',
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
          value: '2024-07-28',
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
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'Does the project have a known intended name?',
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
      question: 'Please provide the project name',
      responses: [
        {
          value: "Sir John Betjeman's New Extension",
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'Has a lead developer been assigned to the project?',
      responses: [
        {
          value: 'Yes, a registered company in the UK',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'Please provide the full company name of the lead developer',
      responses: [
        {
          value: 'Fit For Cabbages Developments',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'Please provide the UK company registration number',
      responses: [
        {
          value: '12345679ABC',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Does this application replace or amend a previously granted planning permission?',
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
      question: '[HIDDEN] Part 3 class MA?',
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
      question: 'What is the existing gross internal floor area?',
      responses: [
        {
          value: '400',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'What existing gross internal floor area will be lost as a result of the proposed development?',
      responses: [
        {
          value: '10',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The London Plan',
            url: 'https://www.london.gov.uk/sites/default/files/intend_to_publish_-_clean.pdf',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'What gross internal floor area will be gained as a result of the proposed development?',
      responses: [
        {
          value: '390',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The London Plan',
            url: 'https://www.london.gov.uk/sites/default/files/intend_to_publish_-_clean.pdf',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Are any vehicle charging or hydrogen refuelling points being added as part of the proposal?',
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
      question: 'What type of vehicle charging points are being created?',
      responses: [
        {
          value: 'Active charging points',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'How many active charging points are being created?',
      responses: [
        {
          value: '3',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type of vehicle charging points are being created',
      responses: [
        {
          value: 'Fast chargers',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Does the project involve the development of new building units?',
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
        'Which if any of the following will be required as part of the proposed development?',
      responses: [
        {
          value: 'Full fibre internet connection',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'How many residential units will be served by a full fibre internet connection?',
      responses: [
        {
          value: '0',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'How many commercial units will be served by a full fibre internet connection?',
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
      question: 'Is a fire suppression system proposed?',
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
      question: 'Have you consulted with mobile network operators?',
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
      question: 'Will the proposal provide any of the following?',
      responses: [
        {
          value: 'Solar energy',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'What is the proposed total capacity of any solar energy generation?',
      responses: [
        {
          value: '6',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'What is the Urban Greening Factor Score?',
      responses: [
        {
          value: '2',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'What area of green roof is proposed?',
      responses: [
        {
          value: '12',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'What percentage of material from demolition and construction will be re-used or recycled?',
      responses: [
        {
          value: '0',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'Does the proposal constitute a major development?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'https://www.legislation.gov.uk/uksi/2015/595/article/2/made',
            url: 'https://www.legislation.gov.uk/uksi/2015/595/article/2/made',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Does the project involve the addition of self-contained residential units or student accommodation on the site?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The London Plan',
            url: 'https://www.london.gov.uk/sites/default/files/intend_to_publish_-_clean.pdf',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Does the project involve the removal of self-contained residential units or student accommodation on the site?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The London Plan',
            url: 'https://www.london.gov.uk/sites/default/files/intend_to_publish_-_clean.pdf',
          },
        ],
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
          value: '5',
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
          value: '8',
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
          value: 'Sir John Betjeman 012345678901 johnnybthepoet@email.org',
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
          value: 'No',
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
          value: '12 Cabbage Lane, Slough, FR1 3ND',
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
          value: 'Extend a university',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Upload drawings',
      },
    },
    {
      question:
        'Does the proposal involve extending or altering an existing building?',
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
          value: 'Extend a university',
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
          value: 'Extension',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Check your application',
      },
    },
    {
      question: 'Are the public allowed to access the building?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        sectionName: 'Check your application',
      },
    },
    {
      question:
        'Is the sole purpose of the project to provide disabled access to (or within) the building?',
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
          {
            text: 'Regulation 4 (1)(b)',
            url: 'https://www.legislation.gov.uk/uksi/2012/2920/regulation/4',
          },
        ],
        sectionName: 'Check your application',
      },
    },
    {
      question: 'What type of prior approval application is it?',
      responses: [
        {
          value: 'Erect, extend or alter a university',
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
          value: 'Camden',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Check your application',
      },
    },
    {
      question: 'Connections with London Borough of Camden',
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
          value: 'Camden',
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
          value: 'Extend a school, college, university, prison or hospital',
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
      name: 'https://api.editor.planx.dev/file/private/o9ckva99/test%20document.pdf',
      type: [
        {
          value: 'otherDocument',
          description: 'Other - document',
        },
      ],
    },
    {
      name: 'https://api.editor.planx.dev/file/private/p3e01fea/test%20document.pdf',
      type: [
        {
          value: 'sitePlan.proposed',
          description: 'Site plan - proposed',
        },
        {
          value: 'elevations.existing',
          description: 'Elevations - existing',
        },
        {
          value: 'elevations.proposed',
          description: 'Elevations - proposed',
        },
      ],
    },
  ],
  metadata: {
    id: '7e147b04-0a8b-44fc-a249-c36ef6407f84',
    organisation: 'CMD',
    submittedAt: '2024-06-29T11:11:11.143Z',
    source: 'PlanX',
    service: {
      flowId: '3245f1f1-d044-4e73-a819-20a7ff730964',
      url: 'https://editor.planx.dev/camden/apply-for-prior-approval/published',
      files: {
        required: [
          {
            value: 'sitePlan.proposed',
            description: 'Site plan - proposed',
          },
          {
            value: 'elevations.existing',
            description: 'Elevations - existing',
          },
          {
            value: 'elevations.proposed',
            description: 'Elevations - proposed',
          },
        ],
        recommended: [],
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
              '<p>This application does not qualify for any exemptions or reductions</p>',
          },
        ],
      },
    },
    schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/application.json`,
  },
};
