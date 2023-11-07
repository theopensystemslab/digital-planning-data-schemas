import {Schema} from '../../types/Schema';

export const validLDCP: Schema = {
  data: {
    application: {
      type: {
        value: 'ldc.proposed',
        description: 'Lawful Development Certificate - Proposed use',
      },
      fee: {
        calculated: 103,
        payable: 0,
        exemption: {
          disability: true,
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
    user: {
      role: 'applicant',
    },
    applicant: {
      type: 'individual',
      name: {
        first: 'Enid',
        last: 'Blyton',
      },
      email: 'famousfive@example.com',
      phone: {
        primary: '05555 555 555',
      },
      address: {
        sameAsSiteAddress: true,
      },
      siteContact: {
        role: 'applicant',
      },
      interest: 'owner.sole',
      ownership: {
        certificate: 'a',
      },
    },
    property: {
      address: {
        latitude: 51.6154458,
        longitude: -0.6463271,
        x: 493822,
        y: 191603,
        title: '7, BLYTON CLOSE, BEACONSFIELD',
        singleLine: '7, BLYTON CLOSE, BEACONSFIELD, HP9 2LX',
        source: 'Ordnance Survey',
        uprn: '100080482163',
        usrn: '35200844',
        pao: '7',
        street: 'BLYTON CLOSE',
        town: 'BEACONSFIELD',
        postcode: 'HP9 2LX',
      },
      boundary: {
        site: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-0.646633654832832, 51.61556919642334],
                [-0.6466296315193095, 51.61554504700152],
                [-0.6465049088001171, 51.61551173743314],
                [-0.6464512646198194, 51.61522027766699],
                [-0.6463131308555524, 51.61522943785954],
                [-0.6463037431240002, 51.61520695374722],
                [-0.6462487578391951, 51.615222775901515],
                [-0.6462393701076429, 51.61520861923739],
                [-0.6459456682205124, 51.615292726412235],
                [-0.6460489332675857, 51.61561499701554],
                [-0.646633654832832, 51.61556919642334],
              ],
            ],
          },
          properties: null,
        },
        area: {
          hectares: 0.141826,
          squareMetres: 1418.26,
        },
      },
      constraints: {
        planning: [
          {
            value: 'tpo',
            description: 'Tree Preservation Order (TPO) or zone',
            overlaps: false,
          },
          {
            value: 'listed',
            description: 'Listed Building',
            overlaps: false,
          },
          {
            value: 'article4',
            description: 'Article 4 Direction area',
            overlaps: false,
          },
          {
            value: 'monument',
            description: 'Site of a Scheduled Monument',
            overlaps: false,
          },
          {
            value: 'designated',
            description: 'Designated land',
            overlaps: false,
          },
          {
            value: 'nature.SAC',
            description: 'Special Area of Conservation (SAC)',
            overlaps: false,
          },
          {
            value: 'nature.ASNW',
            description: 'Ancient Semi-Natural Woodland (ASNW)',
            overlaps: false,
          },
          {
            value: 'nature.SSSI',
            description: 'Site of Special Scientific Interest (SSSI)',
            overlaps: false,
          },
          {
            value: 'locallyListed',
            description: 'Locally Listed Building',
            overlaps: false,
          },
          {
            value: 'designated.SPA',
            description: 'Special Protection Area (SPA)',
            overlaps: false,
          },
          {
            value: 'designated.WHS',
            description: 'UNESCO World Heritage Site or buffer zone',
            overlaps: false,
          },
          {
            value: 'registeredPark',
            description: 'Historic Park or Garden',
            overlaps: false,
          },
          {
            value: 'designated.AONB',
            description: 'Area of Outstanding Natural Beauty (AONB)',
            overlaps: false,
          },
          {
            value: 'designated.nationalPark',
            description: 'National Park',
            overlaps: false,
          },
          {
            value: 'designated.conservationArea',
            description: 'Conservation Area',
            overlaps: false,
          },
          {
            value: 'article4.caz',
            description: 'Central Activities Zone (CAZ)',
            overlaps: false,
          },
          {
            value: 'designated.nationalPark.broads',
            description: 'National Park - Broads',
            overlaps: false,
          },
          {
            value: 'road.classified',
            description: 'Classified Road',
            overlaps: false,
          },
        ],
      },
      localAuthorityDistrict: ['Buckinghamshire', 'South Bucks'],
      region: 'South East',
      type: {
        value: 'residential.dwelling.house.detached',
        description: 'Detached',
      },
    },
    proposal: {
      projectType: [
        {
          value: 'extend.rear',
          description: 'Add a rear or side extension (or conservatory)',
        },
      ],
      description: 'Rear extension of a home',
      boundary: {
        site: {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-0.646633654832832, 51.61556919642334],
                [-0.6466296315193095, 51.61554504700152],
                [-0.6465049088001171, 51.61551173743314],
                [-0.6464512646198194, 51.61522027766699],
                [-0.6463131308555524, 51.61522943785954],
                [-0.6463037431240002, 51.61520695374722],
                [-0.6462487578391951, 51.615222775901515],
                [-0.6462393701076429, 51.61520861923739],
                [-0.6459456682205124, 51.615292726412235],
                [-0.6460489332675857, 51.61561499701554],
                [-0.646633654832832, 51.61556919642334],
              ],
            ],
          },
          properties: null,
        },
        area: {
          hectares: 0.141826,
          squareMetres: 1418.26,
        },
      },
      date: {},
      details: {
        extend: {
          area: {
            squareMetres: 24,
          },
        },
      },
    },
  },
  result: [
    {
      value: 'Planning permission / Permitted development',
      description:
        'It looks like the proposed changes may fall within the rules for Permitted Development and therefore would not need planning permission.',
    },
  ],
  responses: [
    {
      question: 'List the changes involved in the project',
      responses: [
        {
          value: 'Add a rear or side extension (or conservatory)',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'Town and Country Planning Act 1990 (Section 55), The Town and Country Planning (General Permitted Development) (England) Order 2015',
          },
        ],
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
          },
        ],
      },
    },
    {
      question: 'What type of house is it?',
      responses: [
        {
          value: 'Detached',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: 'How many storeys does the original house have?',
      responses: [
        {
          value: '2 or more',
        },
      ],
      metadata: {},
    },
    {
      question: 'Does the original house have a projection to the rear?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {},
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
          },
        ],
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
          },
        ],
      },
    },
    {
      question: 'How many storeys does the extension have?',
      responses: [
        {
          value: '1 storey',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Section 2, Part 1, Class A',
          },
        ],
      },
    },
    {
      question: 'Does the original house have a projection to the rear?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: 'Which of these best describes your project?',
      responses: [
        {
          value: 'Rear only',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'General Permitted Development Order 2015, Technical guidance (PDF)',
          },
        ],
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
      },
    },
    {
      question: 'What type of house is it?',
      responses: [
        {
          value: 'Detached',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question:
        'How far does the new addition extend beyond the back wall of the original house?',
      responses: [
        {
          value: 'Less than 4m',
          metadata: {
            flags: ['Planning permission / Permitted development'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 1, Class A.1 (f)(i)',
          },
        ],
      },
    },
    {
      question: 'What is the shortest distance to the property boundary?',
      responses: [
        {
          value: '2m or more',
        },
      ],
      metadata: {},
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
          },
        ],
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
      },
    },
    {
      question:
        'How much of the property is covered by extensions and outbuildings?',
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
          },
        ],
      },
    },
    {
      question: 'What types of changes does the project involve?',
      responses: [
        {
          value: 'Extension',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question:
        'Have you already told us that you are doing works to a tree or hedge?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
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
      },
    },
    {
      question: 'Is the site in a conservation area?',
      responses: [
        {
          value: 'No',
          metadata: {
            flags: ['Works to trees & hedges / Not required'],
          },
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: 'What are you applying about?',
      responses: [
        {
          value: 'Proposed changes I want to make in the future',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: 'What do the works involve?',
      responses: [
        {
          value: 'Works to extend a property',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: 'What does the project involve?',
      responses: [
        {
          value: 'Add a rear or side extension (or conservatory)',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question:
        'How much is the internal floor area of the property increasing by?',
      responses: [
        {
          value: '24',
        },
      ],
      metadata: {},
    },
    {
      question: 'Is it a residential property?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: 'Do the changes involve the creation of any new homes?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {},
    },
    {
      question:
        'Do the changes involve creating any new bedrooms or bathrooms?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {},
    },
    {
      question: 'Do the changes involve the creation of any new homes?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: 'Is the property in the Greater London Authority area?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        autoAnswered: true,
        policyRefs: [
          {
            text: 'Greater London Authority Act 1999',
          },
        ],
      },
    },
    {
      question: 'Which of these best describes you?',
      responses: [
        {
          value: 'Applicant',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: 'Which of these best describes your interest in the land?',
      responses: [
        {
          value: 'Sole owner',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (Development Management Procedure) (England) Order 2015',
          },
        ],
      },
    },
    {
      question: 'What types of changes does the project involve?',
      responses: [
        {
          value: 'Extension',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question:
        'Does the work involve any alterations to ground or floor levels?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {},
    },
    {
      question: 'Would you like to upload any photographs?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {},
    },
    {
      question: 'What types of extension are being added?',
      responses: [
        {
          value: 'Rear or side',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: 'Do you also want to add existing internal floor plans?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {},
    },
    {
      question:
        'Is the roof of the extension already shown on another set of drawings?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {},
    },
    {
      question:
        'Would you like to upload any additional drawings, documents or images?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {},
    },
    {
      question: 'What type of planning application are you making?',
      responses: [
        {
          value: 'Lawful Development Certificate',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: 'What type of changes are you applying for?',
      responses: [
        {
          value: 'Proposed changes',
        },
      ],
      metadata: {
        autoAnswered: true,
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
      },
    },
    {
      question: 'What types of changes does the application relate to?',
      responses: [
        {
          value: 'Extension',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: 'How many homes does this application relate to?',
      responses: [
        {
          value: '1',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012 Schedule 1, Part 2',
          },
        ],
      },
    },
    {
      question: 'What type of extension is it?',
      responses: [
        {
          value: 'Rear or side extension',
        },
      ],
      metadata: {
        autoAnswered: true,
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
      },
    },
    {
      question:
        'Is the sole purpose of the project to support the needs of a disabled resident?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 14UK Statutory Instruments 2012 No. 2920 Regulation 4, Equalities Act 2010, Section 6 Children Act 1989, Part 3',
          },
        ],
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
            text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 9',
          },
        ],
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
            text: 'The Town and Country Planning (Fees for Applications, Deemed Applications, Requests and Site Visits) (England) Regulations 2012, Regulation 8',
          },
        ],
      },
    },
    {
      question: 'What type of application is this?',
      responses: [
        {
          value: 'Lawful Development Certificate',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: "What was the original application's reference number?",
      responses: [
        {
          value: 'M8AG1C F4R4WAY TR33',
        },
      ],
      metadata: {},
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
          },
        ],
      },
    },
    {
      question: 'What was the result of the original application?',
      responses: [
        {
          value: 'Withdrawn',
        },
      ],
      metadata: {},
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
            text: 'UK Statutory Instruments 2012 No. 2920 Regulation 8',
          },
        ],
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
      },
    },
    {
      question:
        'Did you get any pre-application advice before making this application?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {},
    },
    {
      question:
        'What local planning authority is this application being sent to?',
      responses: [
        {
          value: 'South Buckinghamshire',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: 'What type of application is it?',
      responses: [
        {
          value: 'Lawful Development Certificate',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: 'What type of works are you applying about?',
      responses: [
        {
          value: 'Proposed',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: "What is the applicant's interest in the land?",
      responses: [
        {
          value: 'Owner',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: "What is the user's role?",
      responses: [
        {
          value: 'Applicant',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
    {
      question: "What is the applicant's declared connections?",
      responses: [
        {
          value: 'None',
        },
      ],
      metadata: {
        autoAnswered: true,
      },
    },
  ],
  files: [
    {
      name: 'https://api.editor.planx.dev/file/private/ha2qdn2z/RoofPlan.pdf',
      type: [
        {
          value: 'property.drawing.roofPlan',
          description: 'Roof plan - existing',
        },
      ],
    },
    {
      name: 'https://api.editor.planx.dev/file/private/3u00rjyw/Site%20plan.pdf',
      type: [
        {
          value: 'property.drawing.sitePlan',
          description: 'Site plan - existing',
        },
      ],
    },
    {
      name: 'https://api.editor.planx.dev/file/private/g92g9w65/RoofPlan.pdf',
      type: [
        {
          value: 'proposal.drawing.roofPlan',
          description: 'Roof plan - proposed',
        },
      ],
    },
    {
      name: 'https://api.editor.planx.dev/file/private/i7tag96k/Site%20plan.pdf',
      type: [
        {
          value: 'proposal.drawing.sitePlan',
          description: 'Site plan - proposed',
        },
      ],
    },
    {
      name: 'https://api.editor.planx.dev/file/private/tw50m88n/Elevations.pdf',
      type: [
        {
          value: 'property.drawing.elevation',
          description: 'Elevations - existing',
        },
      ],
    },
    {
      name: 'https://api.editor.planx.dev/file/private/diahn9ft/Plan.pdf',
      type: [
        {
          value: 'property.drawing.floorPlan',
          description: 'Floor plan - existing',
        },
      ],
    },
    {
      name: 'https://api.editor.planx.dev/file/private/0rpf43jj/Elevations.pdf',
      type: [
        {
          value: 'proposal.drawing.elevation',
          description: 'Elevations - proposed',
        },
      ],
    },
    {
      name: 'https://api.editor.planx.dev/file/private/iio7ok5g/Plan.pdf',
      type: [
        {
          value: 'proposal.drawing.floorPlan',
          description: 'Floor plan - proposed',
        },
      ],
    },
  ],
  metadata: {
    source: 'PlanX',
    organisation: 'Buckinghamshire',
    id: '8da51c5b-a2a0-4386-a15d-29d66f9c121c',
    service: {
      flowId: '824628b2-deeb-48b0-92b1-2ca7f3b17163',
      url: 'https://www.editor.planx.dev/buckinghamshire/apply-for-a-lawful-development-certificate/preview',
    },
    createdAt: '2023-10-01 00:00:00',
    submittedAt: '2023-10-02 00:00:00',
    schema:
      'https://theopensystemslab.github.io/digital-planning-data-schemas/v0.0.1/schema.json',
  },
};
