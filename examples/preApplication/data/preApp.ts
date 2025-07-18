import {PreApplication} from '../../../types/schemas/preApplication';

const version = process.env['VERSION'] || '@next';

export const preApplication: PreApplication = {
  data: {
    user: {
      role: 'applicant',
    },
    applicant: {
      type: 'individual',
      name: {
        first: 'Ted',
        last: 'Hughes',
      },
      email: 'ted@poetlaureates.org',
      phone: {
        primary: '0123456789',
      },
      company: {
        name: 'Poet Laureates',
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
        latitude: 53.5020957,
        longitude: -1.0205473,
        x: 465065,
        y: 401044,
        title: '75, MAIN STREET, AUCKLEY',
        source: 'Ordnance Survey',
        uprn: '100050747612',
        usrn: '11201833',
        pao: '75',
        street: 'MAIN STREET',
        town: 'DONCASTER',
        postcode: 'DN9 3HW',
        singleLine: '75, MAIN STREET, AUCKLEY, DONCASTER, DN9 3HW',
      },
      ward: 'Finningley',
      localAuthorityDistrict: ['Doncaster'],
      region: 'Yorkshire and The Humber',
      type: {
        value: 'residential.house.detached',
        description: 'Detached',
      },
      planning: {
        sources: [
          'https://api.editor.planx.dev/gis/doncaster?geom=MULTIPOLYGON+%28%28%28-1.0206931342729486+53.50213165258532%2C+-1.020646+53.502065000000016%2C+-1.020719+53.502047000000005%2C+-1.0206422209739665+53.50198572771234%2C+-1.020557+53.501923000000005%2C+-1.020433+53.50195500000001%2C+-1.0205027461051923+53.50206709121434%2C+-1.020549684762953+53.50215722902928%2C+-1.0206931342729486+53.50213165258532%29%29%29&analytics=false&sessionId=1a768034-c07a-4cd5-92b6-fc4a1fd0abd4',
          'https://api.editor.planx.dev/roads?usrn=11201833',
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
            intersects: true,
            entities: [
              {
                name: 'Main Street - B Road',
                source: {
                  text: 'Ordnance Survey MasterMap Highways',
                },
              },
            ],
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
                  [-1.020687, 53.502123],
                  [-1.020646, 53.502065],
                  [-1.020719, 53.502047],
                  [-1.020557, 53.501923],
                  [-1.020433, 53.501955],
                  [-1.020543, 53.502144],
                  [-1.020687, 53.502123],
                ],
              ],
            ],
          },
          properties: {
            name: '',
            entity: 12000365388,
            prefix: 'title-boundary',
            dataset: 'title-boundary',
            'end-date': '',
            typology: 'geography',
            reference: '30240506',
            'entry-date': '2024-05-06',
            'start-date': '2009-12-10',
            'organisation-entity': '13',
          },
        },
        area: {
          hectares: 0.025664,
          squareMetres: 256.64,
        },
      },
    },
    application: {
      type: {
        value: 'preApp',
        description: 'Pre-application',
      },
      fee: {
        payable: 450,
        reference: {
          govPay: '8tdudifjrg7va2ud2nptc6iedf',
        },
      },
      declaration: {
        accurate: true,
        connection: {
          value: 'none',
        },
      },
      information: {
        harmful: {
          applicable: false,
        },
        sensitive: {
          applicable: false,
        },
      },
    },
    proposal: {
      description:
        'Add a conservatory onto the rear of my first storey to use as a reading room and library.',
      boundary: {
        site: {
          type: 'Feature',
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                [
                  [-1.0206931342729486, 53.50213165258532],
                  [-1.020646, 53.502065000000016],
                  [-1.020719, 53.502047000000005],
                  [-1.0206422209739665, 53.50198572771234],
                  [-1.020557, 53.501923000000005],
                  [-1.020433, 53.50195500000001],
                  [-1.0205027461051923, 53.50206709121434],
                  [-1.020549684762953, 53.50215722902928],
                  [-1.0206931342729486, 53.50213165258532],
                ],
              ],
            ],
          },
          properties: {
            name: '',
            label: '1',
            entity: 12000365388,
            prefix: 'title-boundary',
            dataset: 'title-boundary',
            'end-date': '',
            typology: 'geography',
            reference: '30240506',
            'entry-date': '2024-05-06',
            'start-date': '2009-12-10',
            'area.hectares': 0.026773,
            'area.squareMetres': 267.73,
            'organisation-entity': '13',
            planx_user_action: 'Amended the title boundary',
          },
        },
        area: {
          hectares: 0.026773,
          squareMetres: 267.73,
        },
      },
    },
  },
  responses: [
    {
      question: 'This is a new service',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'The property',
      },
    },
    {
      question: 'Is the property in Doncaster?',
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
          value: 'Detached',
        },
      ],
      metadata: {
        autoAnswered: true,
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
      question: 'Does the property include any heritage assets?',
      responses: [
        {
          value: 'None of these',
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
          value: 'Pre application advice',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the applicant',
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
        sectionName: 'About the applicant',
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
        sectionName: 'About the applicant',
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
        sectionName: 'About the applicant',
      },
    },
    {
      question: 'Your contact details',
      responses: [
        {
          value: 'Ted Hughes Poet Laureates 0123456789 ted@poetlaureates.org',
        },
      ],
      metadata: {
        sectionName: 'About the applicant',
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
        sectionName: 'About the applicant',
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
        sectionName: 'About the applicant',
      },
    },
    {
      question: 'What type of application is this?',
      responses: [
        {
          value: 'Other',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the applicant',
      },
    },
    {
      question: 'Which of these best describes your project?',
      responses: [
        {
          value: 'Works or extensions to a house',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Does the site contain a tree protected by a Tree Preservation Order?',
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
      question: 'Are there any trees on the property?',
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
      question: 'Does the development build over existing utilities?',
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
      question: 'What type of pre-application are you applying for?',
      responses: [
        {
          value: 'Non-major pre application',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Pre application advice offers',
      },
    },
    {
      question: 'Planning Pre-Application Advice Services',
      responses: [
        {
          value: 'Written advice (£450)',
        },
      ],
      metadata: {
        sectionName: 'Pre application advice offers',
      },
    },
    {
      question: 'What type of application is this?',
      responses: [
        {
          value: 'None of these',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Review and confirm',
      },
    },
    {
      question: 'Connections with City of Doncaster Council',
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
      question: 'Confirm the information in this application is correct',
      responses: [
        {
          value:
            'I confirm that the information contained in this application is truthful, accurate and complete, to the best of my knowledge',
        },
      ],
      metadata: {
        sectionName: 'Review and confirm',
      },
    },
    {
      question:
        "Would disclosure of any of the information you have provided harm someone's commercial interests?",
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'Pay and send',
      },
    },
    {
      question: 'Is any of the information you have provided sensitive?',
      responses: [
        {
          value: 'No',
        },
      ],
      metadata: {
        sectionName: 'Pay and send',
      },
    },
  ],
  files: [
    {
      name: 'https://api.editor.planx.dev/file/private/fomris6d/correspondence.pdf',
      type: [
        {
          value: 'otherSupporting',
          description: 'Other - supporting document',
        },
      ],
    },
    {
      name: 'https://api.editor.planx.dev/file/private/7xsm1un0/myPlans.pdf',
      type: [
        {
          value: 'sitePlan.existing',
          description: 'Site plan - existing',
        },
        {
          value: 'sitePlan.proposed',
          description: 'Site plan - proposed',
        },
      ],
    },
  ],
  metadata: {
    id: '1a768034-c07a-4cd5-92b6-fc4a1fd0abd4',
    organisation: 'DNC',
    submittedAt: '2024-11-25T07:30:05.995Z',
    source: 'PlanX',
    service: {
      flowId: '426494e7-34a2-4a94-a554-8ecc5e20e3ef',
      url: 'https://editor.planx.dev/doncaster/pre-application-advice/published',
      files: {
        required: [
          {value: 'sitePlan.proposed', description: 'Site plan - proposed'},
        ],
        recommended: [
          {value: 'sitePlan.existing', description: 'Site plan - existing'},
          {value: 'elevations.existing', description: 'Elevations - existing'},
          {value: 'elevations.proposed', description: 'Elevations - proposed'},
          {value: 'floorPlan.existing', description: 'Floor plan - existing'},
          {value: 'floorPlan.proposed', description: 'Floor plan - proposed'},
          {
            value: 'photographs.existing',
            description: 'Photographs - existing',
          },
          {
            value: 'otherSupporting',
            description: 'Other - supporting document',
          },
        ],
        optional: [],
      },
      fee: {
        payable: [],
        calculated: [],
      },
    },
    schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/preApplication.json`,
  },
};
