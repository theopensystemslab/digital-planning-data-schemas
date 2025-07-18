import {PrototypeApplication} from '../../../types/schemas/prototypeApplication';

const version = process.env['VERSION'] || '@next';

export const landDrainageConsentPrototype: PrototypeApplication = {
  applicationType: 'landDrainageConsent',
  data: {
    user: {
      role: 'applicant',
    },
    applicant: {
      type: 'company',
      name: {
        title: 'Bishop',
        first: 'Gundulf',
        last: 'of Rochester',
      },
      email: 'Gundulf1066@email.org',
      phone: {
        primary: '012345678900',
      },
      company: {
        name: 'The Normans',
      },
      address: {
        sameAsSiteAddress: true,
      },
      ownership: {
        interest: 'other',
      },
      maintenanceContact: [
        {
          when: 'duringConstruction',
          address: {
            line1: 'Pevensey Castle',
            town: 'Pevensey',
            postcode: 'PE737SY',
          },
          contact: {
            name: {
              title: 'Count',
              first: 'Robert',
              last: 'of Mortain',
            },
            email: 'countbobby@email.org',
            phone: {primary: '012345678901'},
          },
        },
        {
          when: 'afterConstruction',
          address: {
            line1: 'Dover Castle',
            town: 'Dover',
            postcode: 'DO737CA',
          },
          contact: {
            name: {
              title: 'Baron',
              first: 'Roger',
              last: 'De Leybourne',
            },
            email: 'baronsarerevolting@email.org',
            phone: {primary: '098765432109'},
            company: {
              name: "The Barons' Revolt",
            },
          },
        },
      ],
    },
    property: {
      address: {
        latitude: 51.3893641,
        longitude: 0.5014056,
        x: 574136.97,
        y: 168560.23,
        title: 'ROCHESTER CASTLE, CASTLE HILL, ROCHESTER',
        source: 'Ordnance Survey',
        uprn: '000044026089',
        usrn: '32100321',
        pao: 'ROCHESTER CASTLE',
        street: 'CASTLE HILL',
        town: 'ROCHESTER',
        postcode: 'ME1 1SW',
        singleLine: 'ROCHESTER CASTLE, CASTLE HILL, ROCHESTER, MEDWAY, ME1 1SW',
      },
      localAuthorityDistrict: ['Medway'],
      region: 'South East',
      ward: 'Rochester West & Borstal',
      type: 'object.monument.ruin',
      planning: {
        sources: [
          'https://api.editor.planx.dev/gis/medway?geom=MULTIPOLYGON+%28%28%280.501333+51.389204%2C+0.501327+51.389199%2C+0.501346+51.38919%2C+0.501352+51.389196%2C+0.5014+51.389172%2C+0.501397+51.389144%2C+0.501411+51.389132%2C+0.501444+51.389121%2C+0.501496+51.389119%2C+0.501434+51.389032%2C+0.501347+51.388881%2C+0.501359+51.388874%2C+0.501334+51.388851%2C+0.501338+51.388839%2C+0.501489+51.388798%2C+0.501726+51.388796%2C+0.502053+51.389053%2C+0.50167+51.389267%2C+0.501967+51.38942%2C+0.501988+51.389411%2C+0.50202+51.389429%2C+0.502181+51.389535%2C+0.502302+51.389655%2C+0.502374+51.38964%2C+0.502416+51.389716%2C+0.502369+51.389725%2C+0.502368+51.389734%2C+0.502346+51.389744%2C+0.502395+51.389854%2C+0.502762+51.389814%2C+0.502818+51.389814%2C+0.50282+51.389997%2C+0.5028+51.390009%2C+0.502456+51.390001%2C+0.502391+51.390006%2C+0.502379+51.390081%2C+0.502361+51.390118%2C+0.50232+51.390174%2C+0.502262+51.390227%2C+0.502188+51.390267%2C+0.502061+51.390275%2C+0.502009+51.390294%2C+0.501308+51.390767%2C+0.501288+51.390844%2C+0.501277+51.390848%2C+0.501089+51.390825%2C+0.501085+51.390821%2C+0.501112+51.390769%2C+0.501038+51.390767%2C+0.501053+51.390696%2C+0.501025+51.390664%2C+0.501099+51.390638%2C+0.501106+51.390622%2C+0.501062+51.390559%2C+0.501022+51.390527%2C+0.50097+51.390464%2C+0.50088+51.390319%2C+0.500776+51.390202%2C+0.500592+51.389857%2C+0.500495+51.389655%2C+0.500548+51.38964%2C+0.500614+51.389683%2C+0.500618+51.389621%2C+0.500633+51.38958%2C+0.500721+51.389489%2C+0.500771+51.389459%2C+0.501262+51.389242%2C+0.501258+51.389238%2C+0.501285+51.389225%2C+0.501279+51.389219%2C+0.501296+51.389212%2C+0.501302+51.389218%2C+0.501333+51.389204%29%29%29&analytics=false&sessionId=8e372199-30e8-4b01-aef0-0745195b0e14',
          'https://api.editor.planx.dev/roads?usrn=32100321',
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
            intersects: true,
            entities: [
              {
                name: 'Tidal Models - Risk level 3',
                source: {
                  text: 'Planning Data',
                  url: 'https://www.planning.data.gov.uk/entity/65104983',
                },
              },
              {
                name: 'Tidal Models - Risk level 2',
                source: {
                  text: 'Planning Data',
                  url: 'https://www.planning.data.gov.uk/entity/65230121',
                },
              },
            ],
          },
          {
            value: 'listed',
            description: 'Listed building',
            intersects: true,
            entities: [
              {
                name: 'ROCHESTER CASTLE',
                source: {
                  text: 'Planning Data',
                  url: 'https://www.planning.data.gov.uk/entity/31792007',
                },
              },
              {
                name: 'Rochester Castle',
                source: {
                  text: 'Planning Data',
                  url: 'https://www.planning.data.gov.uk/entity/42127185',
                },
              },
            ],
          },
          {
            value: 'articleFour',
            description: 'Article 4 direction area',
            intersects: false,
          },
          {
            value: 'monument',
            description: 'Site of a Scheduled Monument',
            intersects: true,
            entities: [
              {
                name: 'Rochester Castle',
                source: {
                  text: 'Planning Data',
                  url: 'https://www.planning.data.gov.uk/entity/13909855',
                },
              },
            ],
          },
          {
            value: 'greenBelt',
            description: 'Green belt',
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
            value: 'flood.zoneOne',
            description: 'Flood zone 1 - Low risk',
            intersects: false,
          },
          {
            value: 'flood.zoneTwo',
            description: 'Flood zone 2 - Medium risk',
            intersects: true,
          },
          {
            value: 'flood.zoneThree',
            description: 'Flood zone 3 - High risk',
            intersects: true,
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
            description: 'Listed building - Grade I',
            intersects: true,
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
            value: 'listed.gradeTwo',
            description: 'Listed building - Grade II',
            intersects: false,
          },
          {
            value: 'listed.gradeTwoStar',
            description: 'Listed building - Grade II*',
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
            intersects: true,
            entities: [
              {
                name: 'Polygon',
                source: {
                  text: 'Planning Data',
                  url: 'https://www.planning.data.gov.uk/entity/44009809',
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
                  [0.501333, 51.389204],
                  [0.501327, 51.389199],
                  [0.501346, 51.38919],
                  [0.501352, 51.389196],
                  [0.5014, 51.389172],
                  [0.501397, 51.389144],
                  [0.501411, 51.389132],
                  [0.501444, 51.389121],
                  [0.501496, 51.389119],
                  [0.501434, 51.389032],
                  [0.501347, 51.388881],
                  [0.501359, 51.388874],
                  [0.501334, 51.388851],
                  [0.501338, 51.388839],
                  [0.501489, 51.388798],
                  [0.501726, 51.388796],
                  [0.502053, 51.389053],
                  [0.50167, 51.389267],
                  [0.501967, 51.38942],
                  [0.501988, 51.389411],
                  [0.50202, 51.389429],
                  [0.502181, 51.389535],
                  [0.502302, 51.389655],
                  [0.502374, 51.38964],
                  [0.502416, 51.389716],
                  [0.502369, 51.389725],
                  [0.502368, 51.389734],
                  [0.502346, 51.389744],
                  [0.502395, 51.389854],
                  [0.502762, 51.389814],
                  [0.502818, 51.389814],
                  [0.50282, 51.389997],
                  [0.5028, 51.390009],
                  [0.502456, 51.390001],
                  [0.502391, 51.390006],
                  [0.502379, 51.390081],
                  [0.502361, 51.390118],
                  [0.50232, 51.390174],
                  [0.502262, 51.390227],
                  [0.502188, 51.390267],
                  [0.502061, 51.390275],
                  [0.502009, 51.390294],
                  [0.501308, 51.390767],
                  [0.501288, 51.390844],
                  [0.501277, 51.390848],
                  [0.501089, 51.390825],
                  [0.501085, 51.390821],
                  [0.501112, 51.390769],
                  [0.501038, 51.390767],
                  [0.501053, 51.390696],
                  [0.501025, 51.390664],
                  [0.501099, 51.390638],
                  [0.501106, 51.390622],
                  [0.501062, 51.390559],
                  [0.501022, 51.390527],
                  [0.50097, 51.390464],
                  [0.50088, 51.390319],
                  [0.500776, 51.390202],
                  [0.500592, 51.389857],
                  [0.500495, 51.389655],
                  [0.500548, 51.38964],
                  [0.500614, 51.389683],
                  [0.500618, 51.389621],
                  [0.500633, 51.38958],
                  [0.500721, 51.389489],
                  [0.500771, 51.389459],
                  [0.501262, 51.389242],
                  [0.501258, 51.389238],
                  [0.501285, 51.389225],
                  [0.501279, 51.389219],
                  [0.501296, 51.389212],
                  [0.501302, 51.389218],
                  [0.501333, 51.389204],
                ],
              ],
            ],
          },
          properties: {
            name: '',
            entity: 12000665421,
            prefix: 'title-boundary',
            dataset: 'title-boundary',
            'end-date': '',
            typology: 'geography',
            reference: '45856207',
            'entry-date': '2024-05-06',
            'start-date': '2010-06-08',
            'organisation-entity': '13',
          },
        },
        area: {
          hectares: 1.684864,
          squareMetres: 16848.64,
        },
      },
    },
    application: {
      fee: {
        calculated: 200,
        payable: 200,
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
        reference: '24/12345/PRE',
        date: '2024-06-08',
        officer: 'Unknown',
        summary: 'Not provided',
      },
      planningApp: {
        reference: '24/12345/FUL',
        date: '2024-06-28',
        localPlanningAuthority: 'Medway',
      },
    },
    proposal: {
      projectType: ['alter'],
      description:
        'Upgrading of our drawbridge as it needs a bit of work - retarring, sharpen the spikes, derust the chains etc. We will need to access the lifting gear which is situated in the moat so will need to temporarily divert the water ',
      date: {
        start: '2024-07-08',
        completion: '2024-08-08',
      },
      boundary: {
        site: {
          type: 'Feature',
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                [
                  [0.501333, 51.389204],
                  [0.501327, 51.389199],
                  [0.501346, 51.38919],
                  [0.501352, 51.389196],
                  [0.5014, 51.389172],
                  [0.501397, 51.389144],
                  [0.501411, 51.389132],
                  [0.501444, 51.389121],
                  [0.501496, 51.389119],
                  [0.501434, 51.389032],
                  [0.501347, 51.388881],
                  [0.501359, 51.388874],
                  [0.501334, 51.388851],
                  [0.501338, 51.388839],
                  [0.501489, 51.388798],
                  [0.501726, 51.388796],
                  [0.502053, 51.389053],
                  [0.50167, 51.389267],
                  [0.501967, 51.38942],
                  [0.501988, 51.389411],
                  [0.50202, 51.389429],
                  [0.502181, 51.389535],
                  [0.502302, 51.389655],
                  [0.502374, 51.38964],
                  [0.502416, 51.389716],
                  [0.502369, 51.389725],
                  [0.502368, 51.389734],
                  [0.502346, 51.389744],
                  [0.502395, 51.389854],
                  [0.502762, 51.389814],
                  [0.502818, 51.389814],
                  [0.50282, 51.389997],
                  [0.5028, 51.390009],
                  [0.502456, 51.390001],
                  [0.502391, 51.390006],
                  [0.502379, 51.390081],
                  [0.502361, 51.390118],
                  [0.50232, 51.390174],
                  [0.502262, 51.390227],
                  [0.502188, 51.390267],
                  [0.502061, 51.390275],
                  [0.502009, 51.390294],
                  [0.501308, 51.390767],
                  [0.501288, 51.390844],
                  [0.501277, 51.390848],
                  [0.501089, 51.390825],
                  [0.501085, 51.390821],
                  [0.501112, 51.390769],
                  [0.501038, 51.390767],
                  [0.501053, 51.390696],
                  [0.501025, 51.390664],
                  [0.501099, 51.390638],
                  [0.501106, 51.390622],
                  [0.501062, 51.390559],
                  [0.501022, 51.390527],
                  [0.50097, 51.390464],
                  [0.50088, 51.390319],
                  [0.500776, 51.390202],
                  [0.500592, 51.389857],
                  [0.500495, 51.389655],
                  [0.500548, 51.38964],
                  [0.500614, 51.389683],
                  [0.500618, 51.389621],
                  [0.500633, 51.38958],
                  [0.500721, 51.389489],
                  [0.500771, 51.389459],
                  [0.501262, 51.389242],
                  [0.501258, 51.389238],
                  [0.501285, 51.389225],
                  [0.501279, 51.389219],
                  [0.501296, 51.389212],
                  [0.501302, 51.389218],
                  [0.501333, 51.389204],
                ],
              ],
            ],
          },
          properties: {
            name: '',
            entity: 12000665421,
            prefix: 'title-boundary',
            dataset: 'title-boundary',
            'end-date': '',
            typology: 'geography',
            reference: '45856207',
            'entry-date': '2024-05-06',
            'start-date': '2010-06-08',
            'organisation-entity': '13',
            planx_user_action: 'Accepted the title boundary',
          },
        },
        area: {
          hectares: 1.684864,
          squareMetres: 16848.64,
        },
      },
      watercourse: {
        name: 'Rochester Castle Moat',
        type: 'ditch',
      },
      structures: {
        type: 'bridge',
        total: 4,
        permanent: {
          count: 1,
        },
        temporary: {
          count: 3,
        },
      },
      environmentalImpactDescription:
        'These are the environmental impact of the works to be undertaken: A, B, C. And this is how we are mitigating them: 1, 2, 3',
    },
  },
  responses: [
    {
      question: 'What type of property is it?',
      responses: [
        {
          value: 'Something else',
        },
      ],
      metadata: {
        autoAnswered: true,
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
        autoAnswered: true,
      },
    },
    {
      question: 'What type of property is it?',
      responses: [
        {
          value: 'Historic site',
        },
      ],
      metadata: {},
    },
    {
      question:
        'Did you get any pre-application advice from the council before making this application?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {},
    },
    {
      question: 'What was the name of the planning officer you spoke to?',
      responses: [
        {
          value: 'unknown',
        },
      ],
      metadata: {},
    },
    {
      question: 'What was your reference?',
      responses: [
        {
          value: '24/12345/PRE',
        },
      ],
      metadata: {},
    },
    {
      question: 'What date was the pre-application advice given on?',
      responses: [
        {
          value: '2024-06-08',
        },
      ],
      metadata: {},
    },
    {
      question: 'What was the pre-application advice you have received?',
      responses: [
        {
          value:
            'this is the advice received. this is the advice received.this is the advice received.this is the advice received.this is the advice received.',
        },
      ],
      metadata: {},
    },
    {
      question: 'Which Local Planning authority is it?',
      responses: [
        {
          value: 'Medway',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: 'Connections with Medway Council',
      responses: [
        {
          value: 'None of the above apply to me',
        },
      ],
      metadata: {},
    },
    {
      question: 'I confirm that:',
      responses: [
        {
          value:
            'The information contained in this application is truthful, accurate and complete, to the best of my knowledge',
        },
      ],
      metadata: {},
    },
  ],
  files: [
    {
      name: 'https://api.editor.planx.dev/file/private/40z9r39r/test%20document.pdf',
      type: ['relevantInformation'],
    },
  ],
  metadata: {
    id: '8e372199-30e8-4b01-aef0-0745195b0e14',
    organisation: 'MDW',
    submittedAt: '2024-07-11T08:28:22.493Z',
    source: 'PlanX',
    service: {
      flowId: '5aab3466-8fb0-4e73-b51d-347d61ad5547',
      url: 'https://editor.planx.dev/medway/apply-for-land-drainage-consent-copy/published',
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
