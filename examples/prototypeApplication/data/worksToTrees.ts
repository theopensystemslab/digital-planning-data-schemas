import {PrototypeApplication} from '../../../types/schemas/prototypeApplication';

const version = process.env['VERSION'] || '@next';

export const worksToTreesPrototype: PrototypeApplication = {
  applicationType: 'wtt.consent',
  data: {
    user: {
      role: 'applicant',
    },
    applicant: {
      type: 'individual',
      name: {
        first: 'Annie',
        last: 'Besant',
      },
      email: 'annie@besant.com',
      phone: {
        primary: 'Not provided by agent',
      },
      address: {
        sameAsSiteAddress: true,
      },
    },
    property: {
      address: {
        latitude: 51.4241681,
        longitude: -0.0813623,
        x: 533492,
        y: 171208,
        title: '39, COLBY ROAD, LONDON',
        source: 'Ordnance Survey',
        uprn: '200003432951',
        usrn: '22500536',
        pao: '39',
        street: 'COLBY ROAD',
        town: 'LONDON',
        postcode: 'SE19 1HA',
        singleLine: '39, COLBY ROAD, LONDON, SOUTHWARK, SE19 1HA',
      },
      localAuthorityDistrict: ['Southwark'],
      region: 'London',
      type: 'residential.dwelling.house.terrace',
      planning: {
        sources: [
          'https://api.editor.planx.dev/gis/southwark?geom=MULTIPOLYGON+%28%28%28-0.081395+51.42407%2C+-0.081379+51.424087%2C+-0.081256+51.424213%2C+-0.081342+51.424252%2C+-0.081486+51.424107%2C+-0.081395+51.42407%29%29%29&vals=articleFour%2CarticleFour.caz%2CbrownfieldSite%2Cdesignated.AONB%2Cdesignated.conservationArea%2CgreenBelt%2Cdesignated.nationalPark%2Cdesignated.nationalPark.broads%2Cdesignated.WHS%2Cflood%2Clisted%2Cmonument%2Cnature.ASNW%2Cnature.ramsarSite%2Cnature.SAC%2Cnature.SPA%2Cnature.SSSI%2CregisteredPark%2Ctpo%2Croad.classified&analytics=false&sessionId=3ef50552-107e-452b-a2e1-6e98df0b93fb',
          'https://api.editor.planx.dev/roads?usrn=22500536',
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
            value: 'articleFour',
            description: 'Article 4 direction area',
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
                  [-0.081395, 51.42407],
                  [-0.081379, 51.424087],
                  [-0.081256, 51.424213],
                  [-0.081342, 51.424252],
                  [-0.081486, 51.424107],
                  [-0.081395, 51.42407],
                ],
              ],
            ],
          },
          properties: {
            name: '',
            entity: 12000576442,
            prefix: 'title-boundary',
            dataset: 'title-boundary',
            'end-date': '',
            typology: 'geography',
            reference: '37684646',
            'entry-date': '2024-05-06',
            'start-date': '2001-11-07',
            'organisation-entity': '13',
          },
        },
        area: {
          hectares: 0.013942,
          squareMetres: 139.42,
        },
      },
    },
    application: {
      fee: {
        notApplicable: true,
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
                  [-0.081395, 51.42407],
                  [-0.081379, 51.424087],
                  [-0.081256, 51.424213],
                  [-0.081342, 51.424252],
                  [-0.081486, 51.424107],
                  [-0.081395, 51.42407],
                ],
              ],
            ],
          },
          properties: {
            name: '',
            entity: 12000576442,
            prefix: 'title-boundary',
            dataset: 'title-boundary',
            'end-date': '',
            typology: 'geography',
            reference: '37684646',
            'entry-date': '2024-05-06',
            'start-date': '2001-11-07',
            'organisation-entity': '13',
            planx_user_action: 'Accepted the title boundary',
          },
        },
        area: {
          squareMetres: 139.42,
        },
      },
    },
  },
  responses: [
    {
      question: 'Is your site in the London Borough of Southwark?',
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
      question: 'Is the property in a conservation area?',
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
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Are there any trees protected by a Tree Preservation Order on the property?',
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
        sectionName: 'About the project',
      },
    },
    {
      question: 'What are you applying for?',
      responses: [
        {
          value: 'Works to trees subject to an Order',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Does the project include any changes other than the works to trees or hedges?',
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
      question: 'What are you applying for?',
      responses: [
        {
          value: 'Works to trees subject to an Order',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Are you aware of any special circumstances that affect your works to trees?',
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
      question: 'List and describe the trees',
      responses: [
        {
          value: 'Oak (T1), rear garden, mature (80cm diameter).\n\n',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'What are you applying for?',
      responses: [
        {
          value: 'Works to trees subject to an Order',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'Describe the works to trees',
      responses: [
        {
          value: 'prune tree',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'Describe the reasons for works to trees',
      responses: [
        {
          value: 'Branch is over street ',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Do the reasons for your proposed works include any of the following?',
      responses: [
        {
          value: 'Condition of the tree(s)',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Are you the owner of the tree(s) or an agent applying on their behalf?',
      responses: [
        {
          value: 'I am the owner of the tree',
        },
      ],
      metadata: {
        sectionName: 'About you',
      },
    },
    {
      question:
        'Is your address different from the location of the tree(s) you have provided?',
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
      question: 'Please provide your contact details',
      responses: [
        {
          value: 'Annie Besant 7946 0000  annie@besant.com',
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
  ],
  files: [
    {
      name: 'https://api.editor.planx.dev/file/private/y2xwb4fj/Screenshot%202025-01-30%20at%2013.48.33.png',
      type: ['sketchPlan'],
    },
    {
      name: 'https://api.editor.planx.dev/file/private/squ1bfta/Screenshot%202025-01-30%20at%2013.48.33.png',
      type: ['treeConditionReport'],
    },
  ],
  metadata: {
    id: '3ef50552-107e-452b-a2e1-6e98df0b93fb',
    organisation: 'SWK',
    submittedAt: '2025-02-03T11:24:33.017Z',
    source: 'PlanX',
    service: {
      flowId: '4ab8165c-aa19-4126-a684-450395afe96a',
      url: 'https://editor.planx.uk/southwark/apply-for-works-to-trees/published',
      files: {
        required: ['sketchPlan', 'treeConditionReport'],
        recommended: [],
        optional: ['photographs.existing'],
      },
      fee: {
        notApplicable: true,
      },
    },
    schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/prototypeApplication.json`,
  },
};
