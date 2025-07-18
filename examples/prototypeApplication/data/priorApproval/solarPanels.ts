import {PrototypeApplication} from '../../../../types/schemas/prototypeApplication';

const version = process.env['VERSION'] || '@next';

export const priorApprovalSolarPanelsPrototype: PrototypeApplication = {
  applicationType: 'pa.part14.classJ',
  data: {
    user: {
      role: 'applicant',
    },
    applicant: {
      type: 'individual',
      name: {
        first: 'Bill',
        last: 'Shakespeare',
      },
      email: 'byanyothername@email.org',
      phone: {
        primary: '012345678901',
      },
      address: {
        sameAsSiteAddress: true,
      },
    },
    property: {
      address: {
        latitude: 51.5081124,
        longitude: -0.0965717,
        x: 532192,
        y: 180515,
        title:
          'INTERNATIONAL SHAKESPEARE GLOBE CENTRE LTD, SHAKESPEARE GLOBE THEATRE, 21, NEW GLOBE WALK, LONDON',
        source: 'Ordnance Survey',
        uprn: '200003377200',
        usrn: '22503078',
        pao: '21SHAKESPEARE GLOBE THEATRE',
        street: 'NEW GLOBE WALK',
        town: 'LONDON',
        postcode: 'SE1 9DT',
        singleLine:
          'INTERNATIONAL SHAKESPEARE GLOBE CENTRE LTD, SHAKESPEARE GLOBE THEATRE, 21, NEW GLOBE WALK, LONDON, SOUTHWARK, SE1 9DT',
      },
      ward: 'Borough & Bankside',
      localAuthorityDistrict: ['Southwark'],
      region: 'London',
      type: 'commercial.leisure.entertainment',
      boundary: {
        site: {
          type: 'Feature',
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                [
                  [-0.097554, 51.507945],
                  [-0.097612, 51.507942],
                  [-0.097592, 51.507805],
                  [-0.097442, 51.507818],
                  [-0.097257, 51.507806],
                  [-0.097255, 51.507821],
                  [-0.096964, 51.507802],
                  [-0.096853, 51.507857],
                  [-0.096465, 51.507835],
                  [-0.096391, 51.508281],
                  [-0.096748, 51.508303],
                  [-0.096891, 51.508319],
                  [-0.097056, 51.5083],
                  [-0.097068, 51.508316],
                  [-0.097096, 51.508318],
                  [-0.097232, 51.508312],
                  [-0.09723, 51.508301],
                  [-0.097249, 51.508299],
                  [-0.097247, 51.508292],
                  [-0.097277, 51.50829],
                  [-0.097279, 51.508302],
                  [-0.097362, 51.508296],
                  [-0.097358, 51.508284],
                  [-0.09741, 51.50828],
                  [-0.097414, 51.508291],
                  [-0.097452, 51.508288],
                  [-0.09745, 51.508279],
                  [-0.097626, 51.508267],
                  [-0.097607, 51.508177],
                  [-0.097597, 51.508177],
                  [-0.097554, 51.507945],
                ],
              ],
            ],
          },
          properties: {
            name: '',
            entity: 12000608797,
            prefix: 'title-boundary',
            dataset: 'title-boundary',
            'end-date': '',
            typology: 'geography',
            reference: '53336201',
            'entry-date': '2024-05-06',
            'start-date': '2011-12-01',
            'organisation-entity': '13',
          },
        },
        area: {
          hectares: 0.424414,
          squareMetres: 4244.14,
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
          count: 0,
        },
        vans: {
          count: 0,
        },
        motorcycles: {
          count: 0,
        },
        cycles: {
          count: 30,
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
      fee: {
        calculated: 120,
        payable: 120,
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
          govPay: 'mfm6s5irae9bh5g75p3ks5opng',
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
      projectType: ['alter.equipment.solar'],
      description: 'Not provided',
      date: {
        start: '2024-07-28',
        completion: '2030-07-28',
      },
      boundary: {
        site: {
          type: 'Feature',
          geometry: {
            type: 'MultiPolygon',
            coordinates: [
              [
                [
                  [-0.097554, 51.507945],
                  [-0.097612, 51.507942],
                  [-0.097592, 51.507805],
                  [-0.097442, 51.507818],
                  [-0.097257, 51.507806],
                  [-0.097255, 51.507821],
                  [-0.096964, 51.507802],
                  [-0.096853, 51.507857],
                  [-0.096465, 51.507835],
                  [-0.096391, 51.508281],
                  [-0.096748, 51.508303],
                  [-0.096891, 51.508319],
                  [-0.097056, 51.5083],
                  [-0.097068, 51.508316],
                  [-0.097096, 51.508318],
                  [-0.097232, 51.508312],
                  [-0.09723, 51.508301],
                  [-0.097249, 51.508299],
                  [-0.097247, 51.508292],
                  [-0.097277, 51.50829],
                  [-0.097279, 51.508302],
                  [-0.097362, 51.508296],
                  [-0.097358, 51.508284],
                  [-0.09741, 51.50828],
                  [-0.097414, 51.508291],
                  [-0.097452, 51.508288],
                  [-0.09745, 51.508279],
                  [-0.097626, 51.508267],
                  [-0.097607, 51.508177],
                  [-0.097597, 51.508177],
                  [-0.097554, 51.507945],
                ],
              ],
            ],
          },
          properties: {
            name: '',
            entity: 12000608797,
            prefix: 'title-boundary',
            dataset: 'title-boundary',
            'end-date': '',
            typology: 'geography',
            reference: '53336201',
            'entry-date': '2024-05-06',
            'start-date': '2011-12-01',
            'organisation-entity': '13',
            planx_user_action: 'Accepted the title boundary',
          },
        },
        area: {
          hectares: 0.424414,
          squareMetres: 4244.14,
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
          count: 30,
          difference: 0,
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
          value: 'Something else',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The property',
      },
    },
    {
      question: 'Which of these best describes the use of the property?',
      responses: [
        {
          value: 'Leisure and sport',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'The property',
      },
    },
    {
      question: 'What type of leisure property is it?',
      responses: [
        {
          value: 'Entertainment',
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
            'Installation of solar panels on the roof of the globe theatre',
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
      question: 'What type of property is it?',
      responses: [
        {
          value: 'Neither a house nor a flat',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'About the project',
      },
    },
    {
      question: 'What do you want to install?',
      responses: [
        {
          value: 'Solar photovoltaics (PV)',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Are there any other locations where the equipment could be installed?',
      responses: [
        {
          value: 'Yes',
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 14, Class A',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/14/crossheading/class-a-installation-or-alteration-etc-of-solar-equipment-on-domestic-premises',
          },
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 14, Class K',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/14/crossheading/class-k-installation-or-alteration-etc-of-standalone-solar-equipment-on-nondomestic-premises',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question:
        'Would the solar panels would be less visible from the highway in these other locations?',
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
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 14, Class A',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/14/crossheading/class-a-installation-or-alteration-etc-of-solar-equipment-on-domestic-premises',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Is the building listed?',
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
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 14, Class J',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/14/crossheading/class-j-installation-or-alteration-etc-of-solar-equipment-on-nondomestic-premises',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Is the property a scheduled monument?',
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
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 14, Class J',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/14/crossheading/class-j-installation-or-alteration-etc-of-solar-equipment-on-nondomestic-premises',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'Where are the new solar panels?',
      responses: [
        {
          value: 'On roofs',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type of roofs are they?',
      responses: [
        {
          value: 'Pitched',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question:
        'How far do the new solar panels stick out from the pitched roofs?',
      responses: [
        {
          value: '0.2m or less',
          metadata: {
            flags: ['Planning permission / Permitted development'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 14, Class J',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/14',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'How far are the new solar panels from the edge of the roof?',
      responses: [
        {
          value: '1m or more from the edge of the roof',
          metadata: {
            flags: ['Planning permission / Permitted development'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 14, Class J',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/14',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'What do you want to install?',
      responses: [
        {
          value: 'Solar photovoltaics (PV)',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'What is the total capacity of all solar photovoltaics (PV)?',
      responses: [
        {
          value: 'More than 50kW',
          metadata: {
            flags: ['Planning permission / Prior approval'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 14, Class J',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/14',
          },
        ],
        sectionName: 'About the project',
      },
    },
    {
      question: 'The solar panels must be removed when no longer needed.',
      responses: [
        {
          value: 'OK',
          metadata: {
            flags: ['Planning permission / Permitted development'],
          },
        },
      ],
      metadata: {
        policyRefs: [
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 14, Class A',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/14/crossheading/class-a-installation-or-alteration-etc-of-solar-equipment-on-domestic-premises',
          },
          {
            text: 'The Town and Country Planning (General Permitted Development) (England) Order 2015 Schedule 2, Part 14, Class K',
            url: 'https://www.legislation.gov.uk/uksi/2015/596/schedule/2/part/14/crossheading/class-k-installation-or-alteration-etc-of-standalone-solar-equipment-on-nondomestic-premises',
          },
        ],
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
          value: 'Install solar panels',
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
          value: 'Part 14 Class J',
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
        sectionName: 'About the project',
      },
    },
    {
      question: 'What type of prior approval application is it?',
      responses: [
        {
          value: 'Install or change solar panels',
        },
      ],
      metadata: {
        autoAnswered: true,
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
          value: 'Yes',
        },
      ],
      metadata: {
        sectionName: 'About the project',
      },
    },
    {
      question: 'What is the title number of the property?',
      responses: [
        {
          value: '24/12345/FUL',
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
          value: '1234-1234-1234-1234',
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
          value: '2030-07-28',
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
          value: '0',
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
          value: '30',
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
          value: '30',
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
          value: 'Bill Shakespeare 012345678901 byanyothername@email.org',
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
          value: '12 Sonnet Street, Stratford upon Avon, TH334RD',
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
          value: 'Install or change solar panels',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Upload drawings',
      },
    },
    {
      question: 'Where will the solar panels be installed?',
      responses: [
        {
          value: 'On roofs',
        },
      ],
      metadata: {
        autoAnswered: true,
        sectionName: 'Upload drawings',
      },
    },
    {
      question:
        'Your planning officer will need to check how far the solar panels stick out beyond the surface of the roof. What do you have that shows this?',
      responses: [
        {
          value: 'Section drawing of the building',
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
          value: 'Install or change solar panels',
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
          value: 'Alteration',
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
          value: 'Install or change solar panels',
        },
      ],
      metadata: {
        autoAnswered: true,
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
          value: 'Install or change solar panels',
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
      name: 'https://api.editor.planx.dev/file/private/mq2iovsi/test%20document.pdf',
      type: ['sections.proposed'],
    },
    {
      name: 'https://api.editor.planx.dev/file/private/czxk98ug/test%20document.pdf',
      type: ['sitePlan.proposed'],
    },
  ],
  metadata: {
    id: 'dee911d0-48b4-438c-96b6-2bb12ae46335',
    organisation: 'SWK',
    submittedAt: '2024-06-29T13:06:44.801Z',
    source: 'PlanX',
    service: {
      flowId: 'c6628103-c648-4663-81e1-bfa0a1a18340',
      url: 'https://editor.planx.dev/southwark/apply-for-prior-approval/published',
      files: {
        required: ['sitePlan.proposed', 'sections.proposed'],
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
