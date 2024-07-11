import {Schema} from '../../../types/Schema';

const version = process.env['VERSION'] || '@next';

export const lawfulDevelopmentCertificateExisting: Schema = {
  data: {
    application: {
      type: {
        value: 'ldc.existing',
        description: 'Lawful Development Certificate - Existing use',
      },
      fee: {
        calculated: 258,
        payable: 258,
        category: {
          sixAndSeven: 258,
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
          govPay: 'sandbox-ref-123',
        },
      },
      declaration: {
        accurate: true,
        connection: {
          value: 'none',
        },
      },
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
      address: {
        latitude: 51.6994957,
        longitude: -0.708966,
        x: 489320,
        y: 200872,
        title: 'GIPSY HOUSE, WHITEFIELD LANE, GREAT MISSENDEN',
        singleLine: 'GIPSY HOUSE, WHITEFIELD LANE, GREAT MISSENDEN, HP16 0BP',
        source: 'Ordnance Survey',
        uprn: '100081174436',
        usrn: '07300709',
        pao: '',
        street: 'WHITEFIELD LANE',
        town: 'GREAT MISSENDEN',
        postcode: 'HP16 0BP',
      },
      boundary: {
        site: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-0.7085376977920632, 51.699564621757816],
                [-0.7086127996444802, 51.69965605327502],
                [-0.708982944488535, 51.699654390885456],
                [-0.7089909911155797, 51.699673508361855],
                [-0.7089319825172521, 51.699683482694184],
                [-0.7089520990848638, 51.69973002954916],
                [-0.7091867923736667, 51.69968930105364],
                [-0.7092216610908603, 51.699688469859495],
                [-0.709239095449457, 51.69968514508267],
                [-0.709253847599039, 51.6997134056779],
                [-0.7093128561973666, 51.69970176896433],
                [-0.7092699408531282, 51.699610337539525],
                [-0.7096253335476013, 51.699648572521454],
                [-0.7098613679409116, 51.69958457046823],
                [-0.7098962366581053, 51.69955049141595],
                [-0.7098090648651213, 51.6994216557425],
                [-0.7099243998527616, 51.699390070166544],
                [-0.7098264992237182, 51.699238791576136],
                [-0.7097460329532714, 51.699236297968724],
                [-0.7095716893673034, 51.69927536446852],
                [-0.7095421850681398, 51.69927619567025],
                [-0.7092954218387698, 51.69931941814053],
                [-0.7090929150581455, 51.69937427737031],
                [-0.709021836519251, 51.69938923896689],
                [-0.7089574635028936, 51.6994008757608],
                [-0.7088904082775213, 51.69942082454341],
                [-0.7086691260337761, 51.699501450783515],
                [-0.7086181640624932, 51.699517243535354],
                [-0.7085457444191079, 51.699541348251245],
                [-0.7085350155830483, 51.69954799782576],
                [-0.7085376977920632, 51.699564621757816],
              ],
            ],
          },
          properties: null,
        },
        area: {
          hectares: 0.299367,
          squareMetres: 2993.67,
        },
      },
      planning: {
        sources: [
          'https://api.editor.planx.dev/gis/buckinghamshire?geom=POLYGON+%28%28-0.7085376977920632+51.699564621757816%2C+-0.7086127996444802+51.69965605327502%2C+-0.708982944488535+51.699654390885456%2C+-0.7089909911155797+51.699673508361855%2C+-0.7089319825172521+51.699683482694184%2C+-0.7089520990848638+51.69973002954916%2C+-0.7091867923736667+51.69968930105364%2C+-0.7092216610908603+51.699688469859495%2C+-0.709239095449457+51.69968514508267%2C+-0.709253847599039+51.6997134056779%2C+-0.7093128561973666+51.69970176896433%2C+-0.7092699408531282+51.699610337539525%2C+-0.7096253335476013+51.699648572521454%2C+-0.7098613679409116+51.69958457046823%2C+-0.7098962366581053+51.69955049141595%2C+-0.7098090648651213+51.6994216557425%2C+-0.7099243998527616+51.699390070166544%2C+-0.7098264992237182+51.699238791576136%2C+-0.7097460329532714+51.699236297968724%2C+-0.7095716893673034+51.69927536446852%2C+-0.7095421850681398+51.69927619567025%2C+-0.7092954218387698+51.69931941814053%2C+-0.7090929150581455+51.69937427737031%2C+-0.709021836519251+51.69938923896689%2C+-0.7089574635028936+51.6994008757608%2C+-0.7088904082775213+51.69942082454341%2C+-0.7086691260337761+51.699501450783515%2C+-0.7086181640624932+51.699517243535354%2C+-0.7085457444191079+51.699541348251245%2C+-0.7085350155830483+51.69954799782576%2C+-0.7085376977920632+51.699564621757816%29%29&analytics=false&sessionId=95f90e21-93f5-4761-90b3-815c673e041f',
          'https://api.editor.planx.dev/roads?usrn=07300709',
        ],
        designations: [
          {
            value: 'article4',
            description: 'Article 4 Direction area',
            intersects: true,
            entities: [
              {
                name: 'Whole District excluding the Town of Chesham - Poultry production.',
                description:
                  'Bucks County Council Town and Country Planning Act 1947 Town and Country Planning General Development Order 1950. Re Whole District excluding the Town of Chesham. In relation to poultry production.',
                source: {
                  text: 'Planning Data',
                  url: 'https://www.planning.data.gov.uk/entity/7010002192',
                },
              },
            ],
          },
          {
            value: 'article4.caz',
            description: 'Central Activities Zone (CAZ)',
            intersects: false,
          },
          {
            value: 'tpo',
            description: 'Tree Preservation Order (TPO) or zone',
            intersects: false,
          },
          {
            value: 'listed',
            description: 'Listed Building',
            intersects: false,
          },
          {
            value: 'monument',
            description: 'Site of a Scheduled Monument',
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
            value: 'locallyListed',
            description: 'Locally Listed Building',
            intersects: false,
          },
          {
            value: 'nature.SPA',
            description: 'Special Protection Area (SPA)',
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
            intersects: true,
            entities: [
              {
                name: 'Chilterns',
                source: {
                  text: 'Planning Data',
                  url: 'https://www.planning.data.gov.uk/entity/1000005',
                },
              },
            ],
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
      localAuthorityDistrict: ['Buckinghamshire', 'Chiltern'],
      region: 'South East',
      type: {
        value: 'residential.dwelling.house.detached',
        description: 'Detached',
      },
    },
    proposal: {
      projectType: [
        {
          value: 'extend.outbuilding.studio',
          description: 'Add an outbuilding - studio',
        },
      ],
      description:
        'Construction of a small outbuilding for use as a writing studio.',
      boundary: {
        site: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-0.7085376977920632, 51.699564621757816],
                [-0.7086127996444802, 51.69965605327502],
                [-0.708982944488535, 51.699654390885456],
                [-0.7089909911155797, 51.699673508361855],
                [-0.7089319825172521, 51.699683482694184],
                [-0.7089520990848638, 51.69973002954916],
                [-0.7091867923736667, 51.69968930105364],
                [-0.7092216610908603, 51.699688469859495],
                [-0.709239095449457, 51.69968514508267],
                [-0.709253847599039, 51.6997134056779],
                [-0.7093128561973666, 51.69970176896433],
                [-0.7092699408531282, 51.699610337539525],
                [-0.7096253335476013, 51.699648572521454],
                [-0.7098613679409116, 51.69958457046823],
                [-0.7098962366581053, 51.69955049141595],
                [-0.7098090648651213, 51.6994216557425],
                [-0.7099243998527616, 51.699390070166544],
                [-0.7098264992237182, 51.699238791576136],
                [-0.7097460329532714, 51.699236297968724],
                [-0.7095716893673034, 51.69927536446852],
                [-0.7095421850681398, 51.69927619567025],
                [-0.7092954218387698, 51.69931941814053],
                [-0.7090929150581455, 51.69937427737031],
                [-0.709021836519251, 51.69938923896689],
                [-0.7089574635028936, 51.6994008757608],
                [-0.7088904082775213, 51.69942082454341],
                [-0.7086691260337761, 51.699501450783515],
                [-0.7086181640624932, 51.699517243535354],
                [-0.7085457444191079, 51.699541348251245],
                [-0.7085350155830483, 51.69954799782576],
                [-0.7085376977920632, 51.699564621757816],
              ],
            ],
          },
          properties: null,
        },
        area: {
          hectares: 0.299367,
          squareMetres: 2993.67,
        },
      },
      date: {},
    },
  },
  preAssessment: [
    {
      value: 'Planning permission / Immune',
      description:
        'It looks like the changes may now be beyond the time limit for enforcement action. This does not apply if the changes have been deliberately concealed.',
    },
  ],
  responses: [
    {
      question: 'List the changes involved in the project',
      responses: [
        {value: 'Outbuildings (such as sheds, garages or garden offices)'},
      ],
      metadata: {},
    },
    {
      question: 'What type of changes were they?',
      responses: [{value: 'Extension'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'Were the works carried out more than 4 years ago?',
      responses: [
        {value: 'Yes', metadata: {flags: ['Planning permission / Immune']}},
      ],
      metadata: {
        policyRefs: [
          {
            text: 'Town and Country Planning Act 1990 Section 171B',
            url: 'https://www.legislation.gov.uk/ukpga/1990/8/section/171B',
          },
        ],
      },
    },
    {
      question: 'Have the works been completed?',
      responses: [{value: 'Yes'}],
      metadata: {
        policyRefs: [
          {
            text: 'Town and Country Planning Act 1990 Section 171B',
            url: 'https://www.legislation.gov.uk/ukpga/1990/8/section/171B',
          },
        ],
      },
    },
    {
      question: 'When were the works completed?',
      responses: [{value: '1959-01-01'}],
      metadata: {
        policyRefs: [
          {
            text: 'Town and Country Planning Act 1990 Section 171B',
            url: 'https://www.legislation.gov.uk/ukpga/1990/8/section/171B',
          },
        ],
      },
    },
    {
      question: 'Has anyone ever attempted to conceal the changes?',
      responses: [
        {value: 'No', metadata: {flags: ['Planning permission / Immune']}},
      ],
      metadata: {
        policyRefs: [
          {
            text: 'Secretary of State for Communities and Local Government and another v Welwyn Hatfield Borough Council and Bonsall / Jackson v Secretary of State for Communities and Local Government',
            url: 'https://www.supremecourt.uk/cases/docs/uksc-2010-0036-judgment.pdf',
          },
        ],
      },
    },
    {
      question: 'Has enforcement action been taken about these changes?',
      responses: [
        {value: 'No', metadata: {flags: ['Planning permission / Immune']}},
      ],
      metadata: {
        policyRefs: [
          {
            text: 'Town and Country Planning Act 1990 Section 171A',
            url: 'https://www.legislation.gov.uk/ukpga/1990/8/section/171A',
          },
          {
            text: 'Town and Country Planning Act 1990 Section 191',
            url: 'https://www.legislation.gov.uk/ukpga/1990/8/section/191',
          },
        ],
      },
    },
    {
      question: 'List the changes involved in the project',
      responses: [
        {value: 'Add an outbuilding (such as a shed, garage or garden office)'},
        {value: 'Outbuildings (such as a shed, garage or garden office)'},
      ],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'Town and Country Planning Act 1990 (Section 55)',
            url: 'https://www.legislation.gov.uk/ukpga/1990/8/section/55',
          },
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/contents',
          },
        ],
      },
    },
    {
      question: 'What type of house is it?',
      responses: [{value: 'Detached'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'What type of property is it?',
      responses: [{value: 'House'}],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Development Order 2015',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/contents',
          },
          {
            text: 'Section 336 of the Town and Country Planning Act',
            url: 'https://www.legislation.gov.uk/ukpga/1990/8/section/336/enacted',
          },
        ],
      },
    },
    {
      question: 'Is any part of the property listed?',
      responses: [{value: 'No'}],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'The Town The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class E.',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1/crossheading/class-e-buildings-etc-incidental-to-the-enjoyment-of-a-dwellinghouse',
          },
        ],
      },
    },
    {
      question: 'Was the house originally built as a house?',
      responses: [{value: 'Yes, it was built as a house'}],
      metadata: {},
    },
    {
      question: 'Was the house built before 2020?',
      responses: [{value: 'Yes, it was built before 2020'}],
      metadata: {},
    },
    {
      question: 'What is the new outbuilding used for?',
      responses: [{value: 'Studio'}],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class E',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1/crossheading/class-e-buildings-etc-incidental-to-the-enjoyment-of-a-dwellinghouse',
          },
        ],
      },
    },
    {
      question: 'How will the studio be used?',
      responses: [
        {
          value: 'Personal use',
          metadata: {flags: ['Planning permission / Permitted development']},
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Section 2, Part 1. Class E',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1/crossheading/class-e-buildings-etc-incidental-to-the-enjoyment-of-a-dwellinghouse',
          },
        ],
      },
    },
    {
      question: 'How many storeys does the new outbuilding have?',
      responses: [
        {
          value: '1 storey',
          metadata: {flags: ['Planning permission / Permitted development']},
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Section 2, Part 1. Class E.1 (d) (h)',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1/crossheading/class-e-buildings-etc-incidental-to-the-enjoyment-of-a-dwellinghouse',
          },
        ],
      },
    },
    {
      question:
        'Does the outbuilding include any balconies, decks, verandahs or platforms that are more than 30cm above ground level?',
      responses: [
        {
          value: 'No',
          metadata: {flags: ['Planning permission / Permitted development']},
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Section 2, Part 1. Class E.1 (d)',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1/crossheading/class-e-buildings-etc-incidental-to-the-enjoyment-of-a-dwellinghouse',
          },
        ],
      },
    },
    {
      question:
        'Is any part of the new outbuilding in front of the original house?',
      responses: [
        {
          value: 'No',
          metadata: {flags: ['Planning permission / Permitted development']},
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class E.1 (c)',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1',
          },
        ],
      },
    },
    {
      question: 'Is the property on designated land?',
      responses: [{value: 'Yes'}],
      metadata: {autoAnswered: true},
    },
    {
      question:
        'Is any part of the new outbuilding between a side wall of the original house and the boundary?',
      responses: [
        {
          value: 'No',
          metadata: {flags: ['Planning permission / Permitted development']},
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class E.3',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1',
          },
        ],
      },
    },
    {
      question: 'Is any part of the new structure within 2m of the boundary?',
      responses: [{value: 'No, it is 2m or more from the boundary'}],
      metadata: {},
    },
    {
      question: 'What type of roof does the new outbuilding have?',
      responses: [{value: 'Dual pitch roof'}],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class E',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1/crossheading/class-e-buildings-etc-incidental-to-the-enjoyment-of-a-dwellinghouse',
          },
        ],
      },
    },
    {
      question: 'How high is the new outbuilding?',
      responses: [
        {
          value: '4m or lower',
          metadata: {flags: ['Planning permission / Permitted development']},
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class E.1 (e)(ii)',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1/crossheading/class-e-buildings-etc-incidental-to-the-enjoyment-of-a-dwellinghouse',
          },
        ],
      },
    },
    {
      question: 'Is the property on designated land?',
      responses: [{value: 'Yes'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'Is the property in any of the following?',
      responses: [
        {
          value: 'An area of outstanding natural beauty',
          metadata: {flags: ['Planning permission / Permission needed']},
        },
      ],
      metadata: {autoAnswered: true},
    },
    {
      question: 'How far from the house is the new outbuilding?',
      responses: [{value: 'More than 20m from the house'}],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class E',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1',
          },
        ],
      },
    },
    {
      question:
        'What is the total footprint of all outbuildings more than 20m from the house?',
      responses: [
        {
          value: '10m² or less',
          metadata: {flags: ['Planning permission / Permitted development']},
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class E.2',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1',
          },
        ],
      },
    },
    {
      question:
        'How much of the property is covered by extensions and outbuildings?',
      responses: [
        {
          value: '50% or less of the available area around the original house',
          metadata: {flags: ['Planning permission / Permitted development']},
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class E.1 (b)',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1',
          },
        ],
      },
    },
    {
      question:
        'Does the new outbuilding have a satellite dish or antenna on it?',
      responses: [
        {
          value: 'No',
          metadata: {flags: ['Planning permission / Permitted development']},
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class E.1 (i)',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/1',
          },
        ],
      },
    },
    {
      question: 'Is the new outbuilding air conditioned?',
      responses: [
        {
          value: 'No',
          metadata: {flags: ['Planning permission / Not development']},
        },
      ],
      metadata: {},
    },
    {
      question: 'What types of changes does the project involve?',
      responses: [{value: 'Extension'}],
      metadata: {autoAnswered: true},
    },
    {
      question:
        'Have you already told us that you are doing works to a tree or hedge?',
      responses: [{value: 'No'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'Are there any protected trees on the property?',
      responses: [{value: 'No'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'Is the site in a conservation area?',
      responses: [
        {
          value: 'No',
          metadata: {flags: ['Works to trees & hedges / Not required']},
        },
      ],
      metadata: {autoAnswered: true},
    },
    {
      question: 'What are you applying about?',
      responses: [{value: 'Existing changes I have made in the past'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'What do the works involve?',
      responses: [{value: 'Works to extend a property'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'What does the project involve?',
      responses: [
        {
          value:
            'Add an outbuilding (such as sheds, shelters or garden offices)',
        },
      ],
      metadata: {autoAnswered: true},
    },
    {
      question: 'Is it a residential property?',
      responses: [{value: 'Yes'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'Do the changes involve the creation of any new homes?',
      responses: [{value: 'No'}],
      metadata: {},
    },
    {
      question:
        'Do the changes involve creating any new bedrooms or bathrooms?',
      responses: [{value: 'No'}],
      metadata: {},
    },
    {
      question: 'What is the internal floor area of the new outbuilding?',
      responses: [{value: '9'}],
      metadata: {},
    },
    {
      question: 'Do the changes involve the creation of any new homes?',
      responses: [{value: 'No'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'Is the property in the Greater London Authority area?',
      responses: [{value: 'No'}],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'Greater London Authority Act 1999',
            url: 'https://www.legislation.gov.uk/ukpga/1999/29/section/346',
          },
        ],
      },
    },
    {
      question: 'Your contact details',
      responses: [
        {value: 'Mr F Fox 0234 567 8910 f.fox@boggischickenshed.com'},
      ],
      metadata: {},
    },
    {
      question: "Did you already provide the applicant's email address?",
      responses: [{value: 'No'}],
      metadata: {autoAnswered: true},
    },
    {
      question: "Applicant's email address",
      responses: [{value: 'r.dahl@example.com'}],
      metadata: {},
    },
    {
      question: "Did you already provide the applicant's telephone number?",
      responses: [{value: 'No'}],
      metadata: {autoAnswered: true},
    },
    {
      question: "Applicant's telephone number",
      responses: [{value: '01098 765 432'}],
      metadata: {},
    },
    {
      question: 'Which of these best describes you?',
      responses: [{value: "Agent acting on the applicant's behalf"}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'Have you notified the other owners?',
      responses: [{value: 'Yes'}],
      metadata: {},
    },
    {
      question:
        "Which of these best describes the applicant's interest in the land?",
      responses: [{value: 'Co-owner'}],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (Development Management Procedure) (England) Order 2015',
            url: 'https://www.legislation.gov.uk/uksi/2015/595/article/39/made',
          },
        ],
      },
    },
    {
      question: 'How many other owners are there?',
      responses: [{value: 'Two or more other owners'}],
      metadata: {},
    },
    {
      question: 'Do you know who the other owners of the site are?',
      responses: [{value: 'Yes, all of them'}],
      metadata: {},
    },
    {
      question: 'How many owners are there in total?',
      responses: [{value: '3'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'Full name of Owner 2',
      responses: [{value: 'William Wonka'}],
      metadata: {},
    },
    {
      question: 'Address of Owner 2',
      responses: [
        {
          value:
            'The Factory, 10, Scrumdiddlyumptious Avenue, Oomaph upon Ouse, CH0C0L8',
        },
      ],
      metadata: {},
    },
    {
      question: 'Have you already notified the other owners?',
      responses: [{value: 'Yes'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'Date on which notice was given to Owner 2',
      responses: [{value: '1964-04-01'}],
      metadata: {},
    },
    {
      question: 'Full name of Owner 3',
      responses: [{value: 'Matilda Wormwood'}],
      metadata: {},
    },
    {
      question: 'Address of Owner 3',
      responses: [{value: '9, Library Way, Reading, L1T3R8Y'}],
      metadata: {},
    },
    {
      question: 'Have you already notified the other owners?',
      responses: [{value: 'Yes'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'Date on which notice was given to Owner 3',
      responses: [{value: '1988-04-01'}],
      metadata: {},
    },
    {
      question: 'What types of changes did the project involve?',
      responses: [{value: 'Extension'}],
      metadata: {autoAnswered: true},
    },
    {
      question:
        'Would you like to upload any photographs of the property as it is today?',
      responses: [{value: 'Yes'}],
      metadata: {},
    },
    {
      question: 'What type of extension have you added?',
      responses: [{value: 'Outbuilding'}],
      metadata: {autoAnswered: true},
    },
    {
      question:
        'Is the roof of the outbuilding shown on a drawing you have already uploaded?',
      responses: [{value: 'Yes'}],
      metadata: {},
    },
    {
      question: 'Did the works involve any alterations to ground levels?',
      responses: [{value: 'No'}],
      metadata: {},
    },
    {
      question:
        'Would you like to upload any photographs of the property before the changes?',
      responses: [{value: 'No'}],
      metadata: {},
    },
    {
      question:
        'Would you like to upload any other additional drawings or documents?',
      responses: [{value: 'No'}],
      metadata: {},
    },
    {
      question: 'Provide evidence of completion date',
      responses: [
        {value: 'Construction invoices'},
        {value: 'Other documents or correspondence'},
      ],
      metadata: {},
    },
    {
      question: 'What do these construction invoices show?',
      responses: [{value: "Nothing, it's a test document. "}],
      metadata: {},
    },
    {
      question: 'What do these documents show?',
      responses: [{value: 'Nothing really, this is just a test. '}],
      metadata: {},
    },
    {
      question: 'What type of planning application are you making?',
      responses: [{value: 'Lawful Development Certificate'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'What type of changes are you applying for?',
      responses: [{value: 'Existing changes'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'Is the property a home?',
      responses: [{value: 'Yes'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'What types of changes does the application relate to?',
      responses: [{value: 'Extension'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'How many homes does this application relate to?',
      responses: [{value: '1'}],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Schedule 1, Part 2',
            url: 'https://www.legislation.gov.uk/uksi/2012/2920/contents',
          },
        ],
      },
    },
    {
      question: 'What type of extension did you build?',
      responses: [
        {value: 'Outbuilding (such as shed, shelter or garden office'},
      ],
      metadata: {autoAnswered: true},
    },
    {
      question: 'Is the property a home?',
      responses: [{value: 'Yes'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'What works does the project involve?',
      responses: [{value: 'Extension'}],
      metadata: {autoAnswered: true},
    },
    {
      question:
        'Is the sole purpose of the project to support the needs of a disabled resident?',
      responses: [{value: 'No'}],
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
      },
    },
    {
      question: 'Is this application a resubmission?',
      responses: [{value: 'No'}],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 9',
            url: 'https://www.legislation.gov.uk/uksi/2012/2920/regulation/9',
          },
        ],
      },
    },
    {
      question: 'Does the application qualify for a disability exemption?',
      responses: [{value: 'No'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'Does the application qualify for a resubmission exemption?',
      responses: [{value: 'No'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'Is the site a sports field?',
      responses: [{value: 'No'}],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 3',
            url: 'https://www.legislation.gov.uk/uksi/2012/2920/schedule/1',
          },
        ],
      },
    },
    {
      question:
        'Is the application being made by (or on behalf of) a parish or community council?',
      responses: [{value: 'No'}],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 - Regulation 11',
            url: 'https://www.legislation.gov.uk/uksi/2012/2920/regulation/11',
          },
        ],
      },
    },
    {
      question:
        'Are you also submitting another proposal for the same site today?',
      responses: [{value: 'No'}],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Chapter 2, Paragraph 10',
            url: 'https://www.legislation.gov.uk/uksi/2012/2920/schedule/1',
          },
        ],
      },
    },
    {
      question:
        'Does the application qualify for the sports club fee reduction?',
      responses: [{value: 'No'}],
      metadata: {autoAnswered: true},
    },
    {
      question:
        'Does the application qualify for the parish council reduction?',
      responses: [{value: 'No'}],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 - Regulation 11',
            url: 'https://www.legislation.gov.uk/uksi/2012/2920/regulation/11',
          },
        ],
      },
    },
    {
      question:
        'Does the application qualify for the alternative application reduction?',
      responses: [{value: 'No'}],
      metadata: {autoAnswered: true},
    },
    {
      question:
        'Did you get any pre-application advice before making this application?',
      responses: [{value: 'No'}],
      metadata: {},
    },
    {
      question:
        'What local planning authority is this application being sent to?',
      responses: [{value: 'Chiltern'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'What type of application is it?',
      responses: [{value: 'Lawful Development Certificate'}],
      metadata: {autoAnswered: true},
    },
    {
      question: 'What type of works are you applying about?',
      responses: [{value: 'Existing'}],
      metadata: {autoAnswered: true},
    },
    {
      question: "What is the applicant's interest in the land?",
      responses: [{value: 'Owner'}],
      metadata: {autoAnswered: true},
    },
    {
      question: "What is the user's role?",
      responses: [{value: 'Other'}],
      metadata: {autoAnswered: true},
    },
    {
      question: "What is the applicant's declared connections?",
      responses: [{value: 'None'}],
      metadata: {autoAnswered: true},
    },
  ],
  files: [
    {
      name: 'https://api.editor.planx.dev/file/private/tbp4kiba/myPlans.pdf',
      type: [
        {
          value: 'photographs.proposed',
          description: 'Photographs - proposed',
        },
        {
          value: 'sitePlan.proposed',
          description: 'Site plan - proposed',
        },
        {
          value: 'elevations.proposed',
          description: 'Elevations - proposed',
        },
        {
          value: 'floorPlan.proposed',
          description: 'Floor plan - proposed',
        },
      ],
    },
    {
      name: 'https://api.editor.planx.dev/file/private/vyyogkcf/correspondence.pdf',
      type: [
        {
          value: 'otherEvidence',
          description: 'Other - evidence or correspondence',
        },
      ],
      description: 'Nothing really, this is just a test. ',
    },
    {
      name: 'https://api.editor.planx.dev/file/private/97ltnrxr/invoice.pdf',
      type: [
        {
          value: 'constructionInvoice',
          description: 'Construction invoice',
        },
      ],
      description: "Nothing, it's a test document. ",
    },
  ],
  metadata: {
    organisation: 'BKM',
    id: '95f90e21-93f5-4761-90b3-815c673e041f',
    source: 'PlanX',
    service: {
      flowId: '824628b2-deeb-48b0-92b1-2ca7f3b17163',
      url: 'https://www.editor.planx.dev/buckinghamshire/apply-for-a-lawful-development-certificate/preview',
      files: {
        required: [
          {
            value: 'photographs.proposed',
            description: 'Photographs - proposed',
          },
          {
            value: 'sitePlan.proposed',
            description: 'Site plan - proposed',
          },
          {
            value: 'elevations.proposed',
            description: 'Elevations - proposed',
          },
          {
            value: 'floorPlan.proposed',
            description: 'Floor plan - proposed',
          },
          {
            value: 'floorPlan.proposed',
            description: 'Floor plan - proposed',
          },
        ],
        recommended: [
          {
            value: 'otherEvidence',
            description: 'Other - evidence or correspondence',
          },
          {
            value: 'constructionInvoice',
            description: 'Construction invoice',
          },
        ],
        optional: [],
      },
      fee: {
        category: {
          sixAndSeven: [
            {
              description:
                'The planning fee for an application for a Certificate of Lawfulness relating to existing alterations or extensions of a single home is £258.',
              policyRefs: [
                {
                  text: 'UK Statutory Instruments 2023 No. 1197',
                  url: 'https://www.legislation.gov.uk/uksi/2023/1197/made',
                },
              ],
            },
          ],
        },
        calculated: [
          {
            description:
              'The planning fee for an application for a Certificate of Lawfulness relating to existing alterations or extensions of a single home is £258.',
            policyRefs: [
              {
                text: 'UK Statutory Instruments 2023 No. 1197',
                url: 'https://www.legislation.gov.uk/uksi/2023/1197/made',
              },
            ],
          },
        ],
        payable: [
          {
            description:
              'The planning fee for an application for a Certificate of Lawfulness relating to existing alterations or extensions of a single home is £258.',
            policyRefs: [
              {
                text: 'UK Statutory Instruments 2023 No. 1197',
                url: 'https://www.legislation.gov.uk/uksi/2023/1197/made',
              },
            ],
          },
        ],
      },
    },
    submittedAt: '2023-10-02t00:00:00z',
    schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schema.json`,
  },
};
