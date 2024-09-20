import {PrototypeApplication} from '../../../../types/schemas/prototypeApplication';
import {PPApplicant} from '../../../../types/schemas/prototypeApplication/data/Applicant';

const version = process.env['VERSION'] || '@next';

export const planningPermissionMajorPrototype: PrototypeApplication = {
  applicationType: 'pp.full.major',
  data: {
    user: {
      role: 'agent',
    },
    applicant: {
      type: 'company',
      name: {
        first: 'Mike',
        last: 'McHouseface',
      },
      email: 'mikemchouseface@housefacemike.com',
      phone: {
        primary: '9876543210',
      },
      company: {
        name: 'McHouseface Incorporated',
      },
      address: {
        sameAsSiteAddress: true,
      },
      siteContact: {
        role: 'other',
        name: 'Kyle Keybearer',
        email: 'kylewiththekeys@keysfromkyle.com',
        phone: '543210',
      },
      ownership: {
        interest: 'other',
        certificate: 'b',
        noticeGiven: true,
        ownersKnown: 'all',
        owners: [
          {
            name: 'Agamemnon Agricullen',
            address: {
              town: 'Mycenae',
              line1: 'Aggy Avenue',
              line2: '',
              county: '',
              country: 'Greece',
              postcode: '212 00',
            },
            noticeDate: '2024-01-01',
          },
        ],
        declaration: {
          accurate: true,
        },
      } as PPApplicant['ownership'],
      agent: {
        name: {
          first: 'Andy',
          last: 'Agent',
        },
        email: 'andytheagent@agncagency.com',
        phone: {
          primary: '0123456789',
        },
        company: {
          name: 'AGNC Agency',
        },
        address: {
          line1: 'Roady Road',
          line2: '',
          town: 'Towny Town',
          county: '',
          postcode: 'Cody Code',
          country: '',
        },
      },
    },
    property: {
      address: {
        latitude: 51.51257224609594,
        longitude: -0.5189885919643893,
        x: 502869.8591151078,
        y: 180333.4537434135,
        title: 'House McHouseface Housing',
        source: 'Proposed by applicant',
      },
      localAuthorityDistrict: ['Buckinghamshire', 'South Bucks'],
      region: 'South East',
      type: 'other.unsupported',
      // use: {
      //   description: 'Vacant brownfield',
      // },
      planning: {
        sources: [
          'https://api.editor.planx.dev/gis/buckinghamshire?geom=POLYGON+%28%28-0.5202563671906586+51.51349326091676%2C+-0.5162271673824664+51.51342965453125%2C+-0.5160930726385158+51.5119189712527%2C+-0.5186025432309797+51.51150473816995%2C+-0.5192921685359919+51.51150076298916%2C+-0.5197391470751718+51.5115882253788%2C+-0.5204032314768795+51.51156039632619%2C+-0.5207544293552119+51.512609937924225%2C+-0.5202563671906586+51.51349326091676%29%29&sessionId=180da003-279d-40dc-b538-a616c8c2a700',
        ],
        designations: [
          {
            value: 'tpo',
            intersects: false,
          },
          {
            value: 'flood',
            intersects: false,
          },
          {
            value: 'listed',
            intersects: false,
          },
          {
            value: 'article4',
            intersects: false,
          },
          {
            value: 'monument',
            intersects: false,
          },
          {
            value: 'greenBelt',
            intersects: true,
            entities: [
              {
                name: 'Buckinghamshire',
                source: {
                  text: 'Planning Data',
                  url: 'https://www.planning.data.gov.uk/entity/610030',
                },
              },
            ],
          },
          {
            value: 'designated',
            intersects: false,
          },
          {
            value: 'nature.SAC',
            intersects: false,
          },
          {
            value: 'nature.SPA',
            intersects: false,
          },
          {
            value: 'nature.ASNW',
            intersects: false,
          },
          {
            value: 'nature.SSSI',
            intersects: false,
          },
          {
            value: 'brownfieldSite',
            intersects: false,
          },
          {
            value: 'designated.WHS',
            intersects: false,
          },
          {
            value: 'registeredPark',
            intersects: false,
          },
          {
            value: 'designated.AONB',
            intersects: false,
          },
          {
            value: 'nature.ramsarSite',
            intersects: false,
          },
          {
            value: 'designated.nationalPark',
            intersects: false,
          },
          {
            value: 'designated.conservationArea',
            intersects: false,
          },
          {
            value: 'designated.nationalPark.broads',
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
                  [-0.525061, 51.514352],
                  [-0.525278, 51.513929],
                  [-0.525415, 51.513695],
                  [-0.525716, 51.513284],
                  [-0.52582, 51.513149],
                  [-0.526395, 51.512578],
                  [-0.526474, 51.512515],
                  [-0.526452, 51.512518],
                  [-0.526483, 51.512486],
                  [-0.526068, 51.512397],
                  [-0.523001, 51.511595],
                  [-0.520218, 51.510925],
                  [-0.517193, 51.51149],
                  [-0.51608, 51.511659],
                  [-0.512427, 51.512263],
                  [-0.51294, 51.514283],
                  [-0.51624, 51.514275],
                  [-0.516107, 51.514586],
                  [-0.515866, 51.514961],
                  [-0.515496, 51.515608],
                  [-0.515375, 51.515791],
                  [-0.515233, 51.516085],
                  [-0.515087, 51.516427],
                  [-0.515002, 51.516564],
                  [-0.51593, 51.51681],
                  [-0.51572, 51.517065],
                  [-0.515697, 51.517105],
                  [-0.515076, 51.517944],
                  [-0.517128, 51.518561],
                  [-0.517376, 51.518606],
                  [-0.517472, 51.518631],
                  [-0.518067, 51.518889],
                  [-0.518535, 51.519053],
                  [-0.519212, 51.519268],
                  [-0.519295, 51.519132],
                  [-0.519332, 51.519087],
                  [-0.519402, 51.519063],
                  [-0.519778, 51.519074],
                  [-0.519836, 51.51911],
                  [-0.519794, 51.519233],
                  [-0.519782, 51.519305],
                  [-0.519782, 51.51938],
                  [-0.519791, 51.519392],
                  [-0.519814, 51.519401],
                  [-0.520024, 51.519401],
                  [-0.520946, 51.519346],
                  [-0.521302, 51.519305],
                  [-0.521431, 51.519302],
                  [-0.521839, 51.519245],
                  [-0.521818, 51.519184],
                  [-0.521806, 51.519184],
                  [-0.5218, 51.519164],
                  [-0.521768, 51.519168],
                  [-0.521645, 51.518838],
                  [-0.52135, 51.518888],
                  [-0.521321, 51.518816],
                  [-0.521348, 51.518812],
                  [-0.521338, 51.518785],
                  [-0.522282, 51.518658],
                  [-0.522348, 51.519178],
                  [-0.522998, 51.519094],
                  [-0.522932, 51.518675],
                  [-0.523307, 51.518771],
                  [-0.523838, 51.518729],
                  [-0.523878, 51.518918],
                  [-0.52392, 51.518914],
                  [-0.523943, 51.519022],
                  [-0.524932, 51.51886],
                  [-0.52487, 51.518642],
                  [-0.524794, 51.518432],
                  [-0.524769, 51.518321],
                  [-0.52465, 51.518036],
                  [-0.524606, 51.517876],
                  [-0.52459, 51.517846],
                  [-0.524504, 51.517529],
                  [-0.52444, 51.51722],
                  [-0.524403, 51.517082],
                  [-0.524459, 51.516655],
                  [-0.524776, 51.515182],
                  [-0.524921, 51.514691],
                  [-0.524995, 51.514496],
                  [-0.525061, 51.514352],
                ],
              ],
            ],
          },
          properties: {
            name: '',
            entity: 12000001973,
            prefix: 'title-boundary',
            dataset: 'title-boundary',
            'end-date': '',
            typology: 'geography',
            reference: '49708846',
            'entry-date': '2024-05-06',
            'start-date': '2011-01-11',
            'organisation-entity': '13',
          },
        },
        area: {
          hectares: 59.48202,
          squareMetres: 594820.2,
        },
      },
    },
    application: {
      fee: {
        calculated: 2535,
        payable: 2535,
        category: {
          one: 578,
          eight: 293,
          eleven: {
            two: 2535,
          },
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
          govPay: 'sandbox-456',
        },
      },
      declaration: {
        accurate: true,
        connection: {
          value: 'none',
        },
      },
      preApp: {
        reference: 'PP420',
        date: '2024-05-01',
        officer: 'Paul the Planner',
        summary: 'Not provided',
      },
    },
    proposal: {
      projectType: [
        'new.residential.dwelling',
        'alter.surfaces.parking',
        'alter.highways.access',
      ],
      description:
        'The erection of 25 private dwellinghouses and associated infrastructure on vacant brownfield site',
      boundary: {
        site: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-0.5202563671906586, 51.51349326091676],
                [-0.5162271673824664, 51.51342965453125],
                [-0.5160930726385158, 51.5119189712527],
                [-0.5186025432309797, 51.51150473816995],
                [-0.5192921685359919, 51.51150076298916],
                [-0.5197391470751718, 51.5115882253788],
                [-0.5204032314768795, 51.51156039632619],
                [-0.5207544293552119, 51.512609937924225],
                [-0.5202563671906586, 51.51349326091676],
              ],
            ],
          },
          properties: null,
        },
        area: {
          hectares: 6.1751949999999995,
          squareMetres: 61751.95,
        },
      },
      access: {
        affected: 'newRoad',
      },
      utilities: {
        foulSewageDisposal: 'sewer',
      },
      flood: {
        surfaceWaterDisposal: 'drainageSystem',
      },
      units: {
        total: 25,
        residential: [
          {
            type: 'house',
            tenure: 'MH',
            bedrooms: 3,
            identicalUnits: 10,
          },
          {
            type: 'house',
            tenure: 'MH',
            bedrooms: 4,
            identicalUnits: 5,
          },
          {
            type: 'flat',
            tenure: 'SAIR',
            bedrooms: 1,
            identicalUnits: 8,
          },
          {
            type: 'house',
            tenure: 'SAIR',
            bedrooms: 2,
            identicalUnits: 2,
          },
        ],
      },
    },
  },
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
          value: 'Other',
        },
      ],
      metadata: {
        sectionName: 'The property',
      },
    },
    {
      question: 'What type of property is it?',
      responses: [
        {
          value: 'No, none of these',
        },
      ],
      metadata: {
        sectionName: 'The property',
      },
    },
    {
      question: 'What type of property is it?',
      responses: [
        {
          value: 'Vacant land',
        },
      ],
      metadata: {
        sectionName: 'The property',
      },
    },
    {
      question: 'Is the property in a flood zone?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The property',
      },
    },
    {
      question: 'What type of application is it?',
      responses: [
        {
          value: 'Apply for planning permission',
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
            'Andy Agent AGNC Agency 0123456789 andytheagent@agncagency.com',
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
          value: 'Roady Road, Towny Town, Cody Code',
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
          value: 'Company',
        },
      ],
      metadata: {
        sectionName: 'About you',
      },
    },
    {
      question: 'Name of the company',
      responses: [
        {
          value: 'McHouseface Incorporated',
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
          value:
            'Mike McHouseface 9876543210 mikemchouseface@housefacemike.com',
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
          value: 'Posty Postlane, Postown, ABC 123',
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
          value: "No, to see the works you'd have to come onto the property",
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
          value: 'Someone else',
        },
      ],
      metadata: {
        sectionName: 'About you',
      },
    },
    {
      question:
        'Contact details of the person we should contact about a site visit',
      responses: [
        {
          value: 'Kyle Keybearer 543210 kylewiththekeys@keysfromkyle.com',
        },
      ],
      metadata: {
        sectionName: 'About you',
      },
    },
    {
      question: 'What type of application is this?',
      responses: [
        {
          value: 'Planning Permission',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About you',
      },
    },
    {
      question: 'Which of these best describes you?',
      responses: [
        {
          value: "I'm acting on the applicant's behalf",
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About you',
      },
    },
    {
      question: 'How many owners or agricultural tenants have been notified?',
      responses: [
        {
          value: '1',
        },
      ],
      metadata: {
        sectionName: 'About you',
      },
    },
    {
      question: 'Full name of the notified owner or agricultural tenant',
      responses: [
        {
          value: 'Agamemnon Agricullen',
        },
      ],
      metadata: {
        sectionName: 'About you',
      },
    },
    {
      question: 'Address of the notified owner or agricultural tenant',
      responses: [
        {
          value: 'Aggy Avenue, Mycenae, 212 00, Greece',
        },
      ],
      metadata: {
        sectionName: 'About you',
      },
    },
    {
      question:
        'Date on which notice was given to the owner or agricultural tenant',
      responses: [
        {
          value: '2024-07-01',
        },
      ],
      metadata: {
        sectionName: 'About you',
      },
    },
    {
      question: 'Is the applicant the sole owner of the land?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015',
            url: 'https://www.legislation.gov.uk/uksi/2015/595/article/13/made',
          },
        ],
        sectionName: 'About you',
      },
    },
    {
      question:
        'Does the applicant know the names and addresses of all owners and agricultural tenants?',
      responses: [
        {
          value: 'Yes, all of them',
        },
      ],
      metadata: {
        sectionName: 'About you',
      },
    },
    {
      question:
        'Has the applicant given requisite notice to all the owners and agricultural tenants?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015',
            url: 'https://www.legislation.gov.uk/uksi/2015/595/article/13/made',
          },
        ],
        sectionName: 'About you',
      },
    },
    {
      question: 'Certificate of ownership declaration - Certificate B',
      responses: [
        {
          value: 'I certify that the above is true',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'Article 13 of the Town and Country Planning (Development Management Procedure) (England) Order 2015',
            url: 'https://www.legislation.gov.uk/uksi/2015/595/article/13/made',
          },
          {
            text: 'Schedule 2 to the Town and Country Planning (Development Management Procedure (England) (Order) 2015',
            url: 'https://www.legislation.gov.uk/uksi/2015/595/schedule/2/made',
          },
        ],
        sectionName: 'About you',
      },
    },
    {
      question: 'What type of application are you submitting?',
      responses: [
        {
          value: 'Major development',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'https://www.legislation.gov.uk/uksi/2015/595/article/2/made',
            url: 'https://www.legislation.gov.uk/uksi/2015/595/article/2/made',
          },
        ],
        sectionName: 'The project',
      },
    },
    {
      question: 'Does your project involve changes to an existing roof?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'Does your project involve any alterations to ground or floor levels?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'Does your project involve any alterations to ground or floor levels?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question: 'Have works already started?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'Select the changes involved in the project',
      responses: [
        {
          value: 'Homes',
        },
        {
          value: 'Car parking',
        },
        {
          value: 'Service roads and other means of access',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'Does the proposal involve a change of use?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question:
        'Does the development involve new built waste disposal facilities?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question: 'What type of development are you applying for?',
      responses: [
        {
          value: 'Major development',
        },
      ],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'https://www.legislation.gov.uk/uksi/2015/595/article/2/made',
            url: 'https://www.legislation.gov.uk/uksi/2015/595/article/2/made',
          },
        ],
        sectionName: 'The project',
      },
    },
    {
      question: 'What type of application are you submitting?',
      responses: [
        {
          value: 'Something else',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question: 'Does the development involve any of the following?',
      responses: [
        {
          value: 'New public roads to be provided within the site',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'Do your plans and drawings identify areas to store and aid the collection of waste?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'Have arrangements been made for the separate storage and collection of recyclable waste?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'Does the project introduce any external materials?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'Are you providing further details about existing or proposed materials through your plans, drawings, or a design and access statement?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'Is the property in Greater London?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question:
        'Are there existing or are you proposing parking spaces for any of these on the site?',
      responses: [
        {
          value: 'Cars',
        },
        {
          value: 'Bicycles',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'What is the number of existing car parking spaces?',
      responses: [
        {
          value: '0',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'What is the proposed total number of car parking spaces?',
      responses: [
        {
          value: '30',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'What is the number of existing bicycle parking spaces?',
      responses: [
        {
          value: '0',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'What is the proposed total number of bicycle parking spaces?',
      responses: [
        {
          value: '20',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'How is foul sewage to be disposed of?',
      responses: [
        {
          value: 'Main sewer',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'Are you proposing to connect to the existing drainage system?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'Is the project likely to affect biodiversity or geological conservation in any of these areas?',
      responses: [
        {
          value: 'None of these',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question:
        'Could the project affect the biodiversity or geology on the development site or land adjacent to or near it?',
      responses: [
        {
          value: 'No, definitely not',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'Are there any protected trees on the property?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question: 'Are there trees or hedges on the proposed development site?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'Are there trees or hedges on land adjacent to the proposed development site that could influence the development or might be important as part of the local landscape character?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'Does the proposal involve the need to dispose of trade effluents or waste?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'Does the proposal involve the use or storage of any of the following materials?',
      responses: [
        {
          value: 'None of these',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'What type of application are you submitting?',
      responses: [
        {
          value: 'Something else',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question:
        'Does your proposal involve the loss, gain or change of use of non-residential floorspace?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'Does the development involve the loss or gain of rooms in hotels or residential institutions and hostels?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'Does the development concern industrial or commercial processes?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'Is the proposal a waste management development?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question: 'Is the property in a flood zone?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question: 'Is the property in flood zone 1?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question: 'Is the property in an area vulnerable to flooding?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question:
        'Is the development within 20 metres of a watercourse (e.g. river, stream or canal)?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'Will the development increase the flood risk elsewhere?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'How will surface water be disposed of?',
      responses: [
        {
          value: 'Sustainable drainage system',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'Is the site of the development currently vacant?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question: 'Please describe the current use of the site',
      responses: [
        {
          value: 'Vacant brownfield',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'Does the project involve any of the following?',
      responses: [
        {
          value: 'None of these',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'Is the property in Greater London?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question: 'Does your project result in the gain or loss of any homes?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question: 'Which of these does your project involve?',
      responses: [
        {
          value: 'Proposing one or more new residential units',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'Does the project affect any residential units?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question:
        'Are there any existing employees on the site or will the development lead to new employees on the site?',
      responses: [
        {
          value: 'None of the above',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'Are hours of opening relevant to this development?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'Is the property in Greater London?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question: 'What type of application is this?',
      responses: [
        {
          value: 'Major development',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question: 'How do you want to submit this information?',
      responses: [
        {
          value: 'Upload a document',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (Development Management Procedure) (England) 2015 (as amended)',
            url: 'http://www.legislation.gov.uk/uksi/2015/595/article/7/made',
          },
        ],
        sectionName: 'The project',
      },
    },
    {
      question: 'Does the property include any of these?',
      responses: [
        {
          value: 'None of these',
        },
      ],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'The Town and Country Planning (Development Management Procedure) (England) 2015 (as amended',
            url: 'http://www.legislation.gov.uk/uksi/2015/595/article/7/made',
          },
        ],
        sectionName: 'The project',
      },
    },
    {
      question: 'Does the property include any of these?',
      responses: [
        {
          value: 'None of these',
        },
      ],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'The Town and Country Planning (Development Management Procedure) (England) 2015 (as amended',
            url: 'http://www.legislation.gov.uk/uksi/2015/595/article/7/made',
          },
        ],
        sectionName: 'The project',
      },
    },
    {
      question: 'Heritage Statement needed?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The project',
      },
    },
    {
      question:
        'Do you believe that, if the development is granted planning permission, the Biodiversity Gain Condition would apply? ',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'Part 2, Schedule 7A of the Town and Country Planning Act 1990',
            url: 'https://www.legislation.gov.uk/ukpga/2021/30/schedule/14/enacted',
          },
        ],
        sectionName: 'The project',
      },
    },
    {
      question:
        'When was the pre-development biodiversity value of onsite habitat(s) calculated?',
      responses: [
        {
          value: 'An earlier proposed date',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'On what date was the pre-development biodiversity value of onsite habitat(s) calculated?',
      responses: [
        {
          value: '2024-05-01',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question: 'Why was this date used?',
      responses: [
        {
          value: 'N/A',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'What was the pre-development biodiversity value of onsite habitats on the provided date?',
      responses: [
        {
          value: '0',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'What was the publication date of the biodiversity metric tool(s) used to calculate the onsite biodiversity value(s)?',
      responses: [
        {
          value: '2024-04-07',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'Has there been any loss (or degradation) of any onsite habitat(s), resulting from activities carried out before the provided date?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'Does the application site have irreplaceable habitat(s) which exist on land to which this application relates?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Biodiversity Gain Requirements (Irreplaceable Habitat) Regulations 2024',
            url: 'https://www.legislation.gov.uk/uksi/2024/48/made',
          },
        ],
        sectionName: 'The project',
      },
    },
    {
      question:
        'Please confirm your application is accompanied by the following',
      responses: [
        {
          value: 'I confirm the above',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'Please provide any other details (for example references to relevant documents)',
      responses: [
        {
          value: 'N/A',
        },
      ],
      metadata: {
        sectionName: 'The project',
      },
    },
    {
      question:
        'Did you get any pre-application advice from the council before making this application?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        sectionName: 'Your application',
      },
    },
    {
      question: 'What was the name of the planning officer you spoke to?',
      responses: [
        {
          value: 'Paul the Planner',
        },
      ],
      metadata: {
        sectionName: 'Your application',
      },
    },
    {
      question: 'What was your reference?',
      responses: [
        {
          value: 'PP420',
        },
      ],
      metadata: {
        sectionName: 'Your application',
      },
    },
    {
      question: 'What date was the pre-application advice given on?',
      responses: [
        {
          value: '2024-05-01',
        },
      ],
      metadata: {
        sectionName: 'Your application',
      },
    },
    {
      question: 'What was the pre-application advice you have received?',
      responses: [
        {
          value:
            'The proposal will require the new Biodiversity Net Gain conditions.',
        },
      ],
      metadata: {
        sectionName: 'Your application',
      },
    },
    {
      question: 'What type of application is it?',
      responses: [
        {
          value: 'Full planning permission',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Your application',
      },
    },
    {
      question: 'What type of development are you applying for?',
      responses: [
        {
          value: 'Major development',
        },
      ],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'https://www.legislation.gov.uk/uksi/2015/595/article/2/made',
            url: 'https://www.legislation.gov.uk/uksi/2015/595/article/2/made',
          },
        ],
        sectionName: 'Your application',
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
        sectionName: 'Your application',
      },
    },
    {
      question: 'Are you building fewer than 10 new homes?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Your application',
      },
    },
    {
      question: 'What types of changes does the application relate to?',
      responses: [
        {
          value: 'New buildings',
        },
        {
          value: 'Alterations',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Your application',
      },
    },
    {
      question: 'What types of changes does the application relate to?',
      responses: [
        {
          value: 'New build homes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Your application',
      },
    },
    {
      question: 'What types of changes does the application relate to?',
      responses: [
        {
          value: 'Hard surfaces used for car parking',
        },
        {
          value: 'Access roads',
        },
        {
          value: 'Other alterations',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Your application',
      },
    },
    {
      question: 'Check for multiple fees?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Your application',
      },
    },
    {
      question: 'Does the proposal include fees in category 1 or 2 to 13?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Your application',
      },
    },
    {
      question: 'Does the proposal include developments in category 1?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Your application',
      },
    },
    {
      question:
        'Does the proposal include development in categories 2, 3 or 4?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Your application',
      },
    },
    {
      question: 'Does the proposal include developments in category 5 to 13?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Your application',
      },
    },
    {
      question: 'What type of application is it?',
      responses: [
        {
          value: 'Another application type',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Your application',
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
        sectionName: 'Your application',
      },
    },
    {
      question: 'Does the project involve any of these changes?',
      responses: [
        {
          value: 'Construction of a new building',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Your application',
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
        sectionName: 'Your application',
      },
    },
    {
      question: 'Is the site a sports field?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Your application',
      },
    },
    {
      question:
        'Is the application being made by (or on behalf of) a parish or community council?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 - Regulation 11',
            url: 'https://www.legislation.gov.uk/uksi/2012/2920/regulation/11',
          },
        ],
        sectionName: 'Your application',
      },
    },
    {
      question:
        'Are you also submitting another proposal for the same site today?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 10',
            url: 'https://www.legislation.gov.uk/uksi/2012/2920/schedule/1',
          },
        ],
        sectionName: 'Your application',
      },
    },
    {
      question:
        'Does the application qualify for the sports club fee reduction?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Your application',
      },
    },
    {
      question:
        'Does the application qualify for the parish council reduction?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 - Regulation 11',
            url: 'https://www.legislation.gov.uk/uksi/2012/2920/regulation/11',
          },
        ],
        sectionName: 'Your application',
      },
    },
    {
      question:
        'Does the application qualify for the alternative application reduction?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 10',
            url: 'https://www.legislation.gov.uk/uksi/2012/2920/schedule/1',
          },
        ],
        sectionName: 'Your application',
      },
    },
    {
      question: 'What type of development are you applying for?',
      responses: [
        {
          value: 'Major development',
        },
      ],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'https://www.legislation.gov.uk/uksi/2015/595/article/2/made',
            url: 'https://www.legislation.gov.uk/uksi/2015/595/article/2/made',
          },
        ],
        sectionName: 'Upload application documents',
      },
    },
    {
      question: 'What type of application are you submitting?',
      responses: [
        {
          value: 'Major',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Upload application documents',
      },
    },
    {
      question: 'Is the application for a waste development?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Upload application documents',
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
        sectionName: 'Review and confirm',
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
    {
      question: 'Does the application qualify for a disability exemption?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Pay and send',
      },
    },
    {
      question: 'What type of application is it?',
      responses: [
        {
          value: 'Full planning permission',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Pay and send',
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
        sectionName: 'Pay and send',
      },
    },
  ],
  files: [
    {
      name: 'https://api.editor.planx.dev/file/private/k9n2v5rn/Site-location-plan-example.pdf',
      type: ['relevantInformation'],
    },
    {
      name: 'https://api.editor.planx.dev/file/private/a8i079zc/Elevations-best-practice.pdf',
      type: ['necessaryInformation'],
    },
  ],
  metadata: {
    id: '180da003-279d-40dc-b538-a616c8c2a700',
    organisation: 'BKM',
    submittedAt: '2024-07-03T06:57:54.645Z',
    source: 'PlanX',
    service: {
      flowId: '28e258a7-812f-4390-b520-7c00e7f5cd77',
      url: 'https://editor.planx.dev/buckinghamshire/apply-for-planning-permission/published',
      files: {
        required: ['necessaryInformation'],
        recommended: ['relevantInformation'],
        optional: [],
      },
      fee: {
        calculated: [],
        payable: [],
      },
    },
    schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/prototypeApplication.json`,
  },
};
