import {PrototypeApplication} from '../../../../types/schemas/prototypeApplication';

const version = process.env['VERSION'] || '@next';

export const planningPermissionFullHouseholderInConservationAreaPrototype: PrototypeApplication =
  {
    applicationType: 'pp.full.householder',
    data: {
      application: {
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
            govPay: 'sandbox-ref-456',
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
        role: 'proxy',
      },
      applicant: {
        type: 'individual',
        name: {
          first: 'David',
          last: 'Bowie',
        },
        email: 'ziggy@example.com',
        phone: {
          primary: 'Not provided by agent',
        },
        address: {
          sameAsSiteAddress: true,
        },
        siteContact: {
          role: 'proxy',
        },
        ownership: {
          interest: 'owner.sole',
          certificate: 'a',
          agriculturalTenants: false,
          declaration: {
            accurate: true,
          },
        },
        agent: {
          name: {
            first: 'Ziggy',
            last: 'Stardust',
          },
          email: 'ziggy@example.com',
          phone: {
            primary: '01100 0110 0011',
          },
          address: {
            line1: '40 Stansfield Road',
            line2: 'Brixton',
            town: 'London',
            county: 'Greater London',
            postcode: 'SW9 9RZ',
            country: 'UK',
          },
        },
      },
      property: {
        address: {
          latitude: 51.451594,
          longitude: -0.0823141,
          x: 533346,
          y: 174256,
          title: '140, WOODWARDE ROAD, LONDON',
          singleLine: '140, WOODWARDE ROAD, LONDON, SOUTHWARK, SE22 8UR',
          source: 'Ordnance Survey',
          uprn: '200003442431',
          usrn: '22502753',
          pao: '140',
          street: 'WOODWARDE ROAD',
          town: 'LONDON',
          postcode: 'SE22 8UR',
        },
        ward: 'Dulwich Village',
        boundary: {
          site: {
            type: 'Feature',
            geometry: {
              type: 'MultiPolygon',
              coordinates: [
                [
                  [
                    [-0.082375, 51.451423],
                    [-0.082071, 51.451786],
                    [-0.082162, 51.451815],
                    [-0.082465, 51.451452],
                    [-0.082375, 51.451423],
                  ],
                ],
              ],
            },
            properties: {
              name: '',
              entity: 12000596619,
              prefix: 'title-boundary',
              dataset: 'title-boundary',
              enddate: '',
              typology: 'geography',
              reference: '37641594',
              entrydate: '2024-05-06',
              startdate: '2001-11-24',
              organisationentity: 13,
            },
          },
          area: {
            hectares: 0.032166,
            squareMetres: 321.66,
          },
        },
        planning: {
          sources: [
            'https://api.editor.planx.dev/gis/southwark?geom=MULTIPOLYGON+%28%28%28-0.082375+51.451423%2C+-0.082071+51.451786%2C+-0.082162+51.451815%2C+-0.082465+51.451452%2C+-0.082375+51.451423%29%29%29&analytics=false&sessionId=d5e442ce-1bfb-43db-ab3b-dc8e0081e8c2',
            'https://api.editor.planx.dev/roads?usrn=22502753',
          ],
          designations: [
            {
              value: 'articleFour',
              description: 'Article 4 direction area',
              intersects: false,
            },
            {
              value: 'flood',
              description: 'Flood risk',
              intersects: false,
            },
            {
              value: 'tpo',
              description: 'Tree Preservation Order (TPO) or zone',
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
              value: 'designated',
              description: 'Designated land',
              intersects: true,
            },
            {
              value: 'greenBelt',
              description: 'Green belt',
              intersects: false,
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
              value: 'brownfieldSite',
              description: 'Brownfield site',
              intersects: false,
            },
            {
              value: 'nature.SPA',
              description: 'Special Protection Area (SPA)',
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
              intersects: true,
              entities: [
                {
                  name: 'Dulwich Village',
                  source: {
                    url: 'https://www.planning.data.gov.uk/entity/44007440',
                    text: 'Planning Data',
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
        localAuthorityDistrict: ['Southwark'],
        region: 'London',
        type: 'residential.dwelling.house.semiDetached',
        titleNumber: {
          known: 'No',
        },
        EPC: {
          known: 'The property does not have one',
        },
        parking: {
          cars: {
            count: 1,
          },
          cycles: {
            count: 2,
          },
        },
      },
      proposal: {
        projectType: ['alter'],
        description: 'Single storey rear extension.',
        boundary: {
          site: {
            type: 'Feature',
            geometry: {
              type: 'MultiPolygon',
              coordinates: [
                [
                  [
                    [-0.082375, 51.451423],
                    [-0.082071, 51.451786],
                    [-0.082162, 51.451815],
                    [-0.082465, 51.451452],
                    [-0.082375, 51.451423],
                  ],
                ],
              ],
            },
            properties: {
              name: '',
              entity: 12000596619,
              prefix: 'title-boundary',
              dataset: 'title-boundary',
              enddate: '',
              typology: 'geography',
              reference: '37641594',
              entrydate: '2024-05-06',
              startdate: '2001-11-24',
              planx_user_action: 'Accepted the title boundary',
              organisationentity: 13,
            },
          },
          area: {
            hectares: 0.032166,
            squareMetres: 321.66,
          },
        },
        date: {
          start: '2024-08-01',
          completion: '2024-08-21',
        },
        extend: {
          area: {
            squareMetres: 19,
          },
        },
        parking: {
          cars: {
            count: 1,
            difference: 0,
          },
          cycles: {
            count: 2,
            difference: 0,
          },
        },
      },
    },
    responses: [
      {
        question: 'Is the property in Southwark?',
        responses: [{value: 'Yes'}],
        metadata: {autoAnswered: true, sectionName: 'The property'},
      },
      {
        question: 'What type of property is it?',
        responses: [{value: 'House'}],
        metadata: {autoAnswered: true, sectionName: 'The property'},
      },
      {
        question: 'What type of house is it?',
        responses: [{value: 'Semi-detached'}],
        metadata: {autoAnswered: true, sectionName: 'The property'},
      },
      {
        question: 'What type of application is it?',
        responses: [{value: 'Apply for planning permission'}],
        metadata: {autoAnswered: true, sectionName: 'About you'},
      },
      {
        question: 'Are you applying on behalf of someone else?',
        responses: [{value: 'No'}],
        metadata: {sectionName: 'About you'},
      },
      {
        question: 'Which of these best describes you?',
        responses: [{value: 'Private individual'}],
        metadata: {sectionName: 'About you'},
      },
      {
        question: 'Your contact details',
        responses: [
          {
            value:
              'Mr Steven Parry 07980987654 freya.cunningham@southwark.gov.uk',
          },
        ],
        metadata: {sectionName: 'About you'},
      },
      {
        question: 'Is your contact address the same as the property address?',
        responses: [{value: 'Yes'}],
        metadata: {sectionName: 'About you'},
      },
      {
        question: 'Can a planning officer see the works from public land?',
        responses: [
          {value: "No, to see the works you'd have to come onto the property"},
        ],
        metadata: {sectionName: 'About you'},
      },
      {
        question:
          'We may need to visit the site to assess your application. If we do, who should we contact to arrange the visit?',
        responses: [{value: 'Me, the applicant'}],
        metadata: {sectionName: 'About you'},
      },
      {
        question: 'What type of application is this?',
        responses: [{value: 'Planning Permission'}],
        metadata: {autoAnswered: true, sectionName: 'About you'},
      },
      {
        question: 'Which of these best describes you?',
        responses: [{value: "I'm the applicant"}],
        metadata: {autoAnswered: true, sectionName: 'About you'},
      },
      {
        question: 'Are you the sole owner of the land?',
        responses: [{value: 'Yes'}],
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
        question: 'Does the land have any agricultural tenants?',
        responses: [{value: 'No'}],
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
        question: 'Certificate of ownership declaration - Certificate A',
        responses: [{value: 'I certify the above'}],
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
        question: 'What type of application are you submitting?',
        responses: [{value: 'Householder application'}],
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
        question: 'Select the changes involved in the project',
        responses: [{value: 'Alterations to a home and the surrounding land'}],
        metadata: {sectionName: 'The project'},
      },
      {
        question: 'Do your alterations involve any of these projects?',
        responses: [{value: 'None of these'}],
        metadata: {sectionName: 'The project'},
      },
      {
        question: 'Does your project involve changes to an existing roof?',
        responses: [{value: 'No'}],
        metadata: {sectionName: 'The project'},
      },
      {
        question:
          'Does your project involve any alterations to ground or floor levels?',
        responses: [{value: 'No'}],
        metadata: {sectionName: 'The project'},
      },
      {
        question: 'Have works already started?',
        responses: [{value: 'No'}],
        metadata: {sectionName: 'The project'},
      },
      {
        question: 'What type of development are you applying for?',
        responses: [{value: 'Householder application'}],
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
        question: 'Is the property in a flood zone?',
        responses: [{value: 'No'}],
        metadata: {autoAnswered: true, sectionName: 'The project'},
      },
      {
        question: 'Is the property in flood zone 1?',
        responses: [{value: 'No'}],
        metadata: {autoAnswered: true, sectionName: 'The project'},
      },
      {
        question: 'Is the property in an area locally vulnerable to flooding?',
        responses: [{value: 'No'}],
        metadata: {autoAnswered: true, sectionName: 'The project'},
      },
      {
        question: 'Does the project introduce any external materials?',
        responses: [{value: 'Yes'}],
        metadata: {sectionName: 'The project'},
      },
      {
        question: 'Do all the new materials match the existing?',
        responses: [{value: 'Yes'}],
        metadata: {sectionName: 'The project'},
      },
      {
        question: 'What external materials are you adding?',
        responses: [
          {value: 'External walls'},
          {value: 'Windows'},
          {value: 'Doors'},
          {value: 'Roof'},
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
        question:
          'Describe the external wall materials of the existing property',
        responses: [{value: 'Stock brick'}],
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
        question:
          'Describe the external window frame materials of the existing property',
        responses: [{value: 'Grey aluminum'}],
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
        question:
          'Describe the external door materials of the existing property',
        responses: [{value: 'Dark wood'}],
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
        question: 'Describe the roof materials of the existing property',
        responses: [{value: 'Clay tiles'}],
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
        question:
          'Do you want to share more about materials in the documents or drawings you upload?',
        responses: [{value: 'Yes'}],
        metadata: {sectionName: 'The project'},
      },
      {
        question:
          'Does the project add any additional floorspace to the property?',
        responses: [{value: 'Yes'}],
        metadata: {sectionName: 'The project'},
      },
      {
        question: 'How much new floorspace is being added to the property?',
        responses: [{value: '19'}],
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
        question: 'How much new floor area is being added to the property?',
        responses: [{value: 'Less than 100m²'}],
        metadata: {autoAnswered: true, sectionName: 'The project'},
      },
      {
        question: 'Does the project involve any of these?',
        responses: [{value: 'No, none of these'}],
        metadata: {sectionName: 'The project'},
      },
      {
        question: 'Are there any protected trees on the property?',
        responses: [{value: 'No'}],
        metadata: {autoAnswered: true, sectionName: 'The project'},
      },
      {
        question:
          'Are there any trees or hedges that could fall within the property or the areas affected by the project (the previously drawn outline)?',
        responses: [{value: 'No'}],
        metadata: {sectionName: 'The project'},
      },
      {
        question:
          'Have you already told us that you are doing works to a tree or hedge?',
        responses: [{value: 'No'}],
        metadata: {autoAnswered: true, sectionName: 'The project'},
      },
      {
        question: 'Are there any protected trees on the property?',
        responses: [{value: 'No'}],
        metadata: {autoAnswered: true, sectionName: 'The project'},
      },
      {
        question: 'Is the site in a conservation area?',
        responses: [{value: 'Yes'}],
        metadata: {autoAnswered: true, sectionName: 'The project'},
      },
      {
        question:
          'Might the works affect any tree with a trunk wider than 100mm?',
        responses: [
          {
            value: 'No, definitely not',
            metadata: {flags: ['Works to trees & hedges / Not required']},
          },
        ],
        metadata: {
          policyRefs: [
            {
              text: 'The Town and Country Planning (Tree Preservation)(England) Regulations 2012 Part 3',
              url: 'https://www.legislation.gov.uk/uksi/2012/605/part/3/made',
            },
          ],
          sectionName: 'The project',
        },
      },
      {
        question: 'What type of application is this?',
        responses: [{value: 'Apply for planning permission'}],
        metadata: {autoAnswered: true, sectionName: 'The project'},
      },
      {
        question: 'Could your works affect a protected tree?',
        responses: [{value: 'No'}],
        metadata: {autoAnswered: true, sectionName: 'The project'},
      },
      {
        question: 'Is the property in Greater London?',
        responses: [{value: 'Yes'}],
        metadata: {autoAnswered: true, sectionName: 'The project'},
      },
      {
        question: 'Does the site include more than one property?',
        responses: [{value: 'No'}],
        metadata: {
          policyRefs: [
            {
              text: 'Greater London Authority Act 1999',
              url: 'https://www.legislation.gov.uk/ukpga/1999/29/section/346',
            },
          ],
          sectionName: 'The project',
        },
      },
      {
        question: 'Do you know the title number of the property?',
        responses: [{value: 'No'}],
        metadata: {sectionName: 'The project'},
      },
      {
        question:
          'Does the property have an Energy Performance Certificate (EPC)?',
        responses: [{value: 'No'}],
        metadata: {
          policyRefs: [
            {
              text: 'Greater London Authority Act 1999',
              url: 'https://www.legislation.gov.uk/ukpga/1999/29/section/346',
            },
          ],
          sectionName: 'The project',
        },
      },
      {
        question: 'What type of application is this?',
        responses: [{value: 'Planning permission for a home'}],
        metadata: {autoAnswered: true, sectionName: 'The project'},
      },
      {
        question: 'Have works already started?',
        responses: [{value: 'No'}],
        metadata: {autoAnswered: true, sectionName: 'The project'},
      },
      {
        question: 'When are the works planned to start?',
        responses: [{value: '2024-08-01'}],
        metadata: {
          policyRefs: [
            {
              text: 'Greater London Authority Act 1999',
              url: 'https://www.legislation.gov.uk/ukpga/1999/29/section/346',
            },
          ],
          sectionName: 'The project',
        },
      },
      {
        question: 'When are the works planned to be completed?',
        responses: [{value: '2024-08-21'}],
        metadata: {
          policyRefs: [
            {
              text: 'Greater London Authority Act 1999',
              url: 'https://www.legislation.gov.uk/ukpga/1999/29/section/346',
            },
          ],
          sectionName: 'The project',
        },
      },
      {
        question: 'Do the changes involve any of these?',
        responses: [{value: 'Alterations to a building'}],
        metadata: {autoAnswered: true, sectionName: 'The project'},
      },
      {
        question:
          'Do the changes involve creating any new bedrooms or bathrooms?',
        responses: [{value: 'No'}],
        metadata: {sectionName: 'The project'},
      },
      {
        question:
          'Are there existing or are you proposing parking spaces for any of these on the site?',
        responses: [{value: 'None of these'}],
        metadata: {
          policyRefs: [
            {
              text: 'Greater London Authority Act 1999',
              url: 'https://www.legislation.gov.uk/ukpga/1999/29/section/346',
            },
          ],
          sectionName: 'The project',
        },
      },
      {
        question: 'Is the property on designated land?',
        responses: [{value: 'Yes'}],
        metadata: {autoAnswered: true, sectionName: 'The project'},
      },
      {
        question:
          'Does the project create 100 square metres or more of additional floor area?',
        responses: [{value: 'No'}],
        metadata: {
          autoAnswered: true,
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
        responses: [{value: 'Conservation area'}],
        metadata: {
          autoAnswered: true,
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
        responses: [{value: 'None of these'}],
        metadata: {
          autoAnswered: true,
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
        question: 'Heritage Statement needed?',
        responses: [{value: 'Yes'}],
        metadata: {autoAnswered: true, sectionName: 'The project'},
      },
      {
        question: 'Data option provided?',
        responses: [{value: 'Yes'}],
        metadata: {autoAnswered: true, sectionName: 'The project'},
      },
      {
        question: 'How do you want to submit the Heritage Statement?',
        responses: [{value: 'Upload a document later'}],
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
        question:
          'Did you get any pre-application advice from the council before making this application?',
        responses: [{value: 'Yes'}],
        metadata: {sectionName: 'Your application'},
      },
      {
        question: 'What was the name of the planning officer you spoke to?',
        responses: [{value: 'Josie Nolan'}],
        metadata: {sectionName: 'Your application'},
      },
      {
        question: 'What was your reference?',
        responses: [{value: '24/EQ/2019'}],
        metadata: {sectionName: 'Your application'},
      },
      {
        question: 'What date was the pre-application advice given on?',
        responses: [{value: '2024-04-01'}],
        metadata: {sectionName: 'Your application'},
      },
      {
        question: 'What was the pre-application advice you have received?',
        responses: [
          {
            value:
              'The works I want to do would be acceptable if I made the extension slightly smaller and shorter.',
          },
        ],
        metadata: {sectionName: 'Your application'},
      },
      {
        question: 'What type of application is it?',
        responses: [{value: 'Full planning permission'}],
        metadata: {autoAnswered: true, sectionName: 'Your application'},
      },
      {
        question: 'What type of development are you applying for?',
        responses: [{value: 'Householder application'}],
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
        question: 'Check for multiple fees?',
        responses: [{value: 'No'}],
        metadata: {autoAnswered: true, sectionName: 'Your application'},
      },
      {
        question: 'What type of application is it?',
        responses: [{value: 'Another application type'}],
        metadata: {autoAnswered: true, sectionName: 'Your application'},
      },
      {
        question: 'Is the property a home?',
        responses: [{value: 'Yes'}],
        metadata: {autoAnswered: true, sectionName: 'Your application'},
      },
      {
        question: 'Does the project involve any of these changes?',
        responses: [{value: 'None of these'}],
        metadata: {autoAnswered: true, sectionName: 'Your application'},
      },
      {
        question: 'Does the project involve any of these changes?',
        responses: [{value: 'Alteration'}],
        metadata: {autoAnswered: true, sectionName: 'Your application'},
      },
      {
        question: 'Fee exemption for projects supporting disabled residents',
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
          sectionName: 'Your application',
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
          sectionName: 'Your application',
        },
      },
      {
        question: 'Does the application qualify for a disability exemption?',
        responses: [{value: 'No'}],
        metadata: {autoAnswered: true, sectionName: 'Your application'},
      },
      {
        question: 'Is the site a sports field?',
        responses: [{value: 'No'}],
        metadata: {autoAnswered: true, sectionName: 'Your application'},
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
          sectionName: 'Your application',
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
          sectionName: 'Your application',
        },
      },
      {
        question:
          'Does the application qualify for the sports club fee reduction?',
        responses: [{value: 'No'}],
        metadata: {autoAnswered: true, sectionName: 'Your application'},
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
          sectionName: 'Your application',
        },
      },
      {
        question:
          'Does the application qualify for the alternative application reduction?',
        responses: [{value: 'No'}],
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
        question: 'What type of application is it?',
        responses: [{value: 'Full planning permission'}],
        metadata: {autoAnswered: true, sectionName: 'Your application'},
      },
      {
        question: 'What does the project involve?',
        responses: [
          {
            value: 'Alteration',
            metadata: {flags: ['Community infrastructure levy / Not liable']},
          },
        ],
        metadata: {
          autoAnswered: true,
          sectionName: 'Your application',
        },
      },
      {
        question: 'What type of development are you applying for?',
        responses: [{value: 'Householder application'}],
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
        question: 'Have the works already started?',
        responses: [{value: 'No'}],
        metadata: {
          autoAnswered: true,
          sectionName: 'Upload application documents',
        },
      },
      {
        question: 'What changes does the project involve?',
        responses: [{value: 'Alterations'}],
        metadata: {
          autoAnswered: true,
          sectionName: 'Upload application documents',
        },
      },
      {
        question: 'Is the user a professional agent?',
        responses: [{value: 'No'}],
        metadata: {
          autoAnswered: true,
          sectionName: 'Upload application documents',
        },
      },
      {
        question: 'Is this for submission or information only?',
        responses: [{value: 'Submission'}],
        metadata: {
          autoAnswered: true,
          sectionName: 'Upload application documents',
        },
      },
      {
        question: 'Which Local Planning authority is it?',
        responses: [{value: 'Southwark'}],
        metadata: {autoAnswered: true, sectionName: 'Review and confirm'},
      },
      {
        question: 'Connections with Southwark Council',
        responses: [{value: 'None of the above apply to me'}],
        metadata: {sectionName: 'Review and confirm'},
      },
      {
        question: 'I confirm that:',
        responses: [
          {
            value:
              'The information contained in this application is truthful, accurate and complete, to the best of my knowledge',
          },
        ],
        metadata: {sectionName: 'Review and confirm'},
      },
      {
        question: 'Does the application qualify for a disability exemption?',
        responses: [{value: 'No'}],
        metadata: {autoAnswered: true, sectionName: 'Pay and send'},
      },
      {
        question: 'Does the application qualify for a resubmission exemption?',
        responses: [{value: 'No'}],
        metadata: {autoAnswered: true, sectionName: 'Pay and send'},
      },
      {
        question: 'What type of application is it?',
        responses: [{value: 'Full planning permission'}],
        metadata: {autoAnswered: true, sectionName: 'Pay and send'},
      },
      {
        question: 'Which Local Planning authority is it?',
        responses: [{value: 'Southwark'}],
        metadata: {autoAnswered: true, sectionName: 'Pay and send'},
      },
    ],
    files: [
      {
        name: 'https://api.editor.planx.dev/file/private/5w5v8s8z/other.pdf',
        type: ['otherDrawing'],
      },
      {
        name: 'https://api.editor.planx.dev/file/private/5w5v8s8z/other.pdf',
        type: ['heritageStatement'],
      },
      {
        name: 'https://api.editor.planx.dev/file/private/5w5v8s8z/other.pdf',
        type: ['sitePlan.existing', 'sitePlan.proposed'],
      },
      {
        name: 'https://api.editor.planx.dev/file/private/7nrefxnn/elevations.pdf',
        type: ['elevations.existing', 'elevations.proposed'],
      },
      {
        name: 'https://api.editor.planx.dev/file/private/311w2id6/floor_plans.pdf',
        type: ['floorPlan.existing', 'floorPlan.proposed'],
      },
    ],
    metadata: {
      organisation: 'SWK',
      id: 'd5e442ce-1bfb-43db-ab3b-dc8e0081e8c2',
      source: 'PlanX',
      service: {
        flowId: 'bba306e7-15c8-438f-a71e-a1e5d3a99caf',
        url: 'https://editor.planx.dev/southwark/apply-for-planning-permission/published',
        files: {
          required: [
            'sitePlan.existing',
            'sitePlan.proposed',
            'elevations.existing',
            'elevations.proposed',
            'floorPlan.existing',
            'floorPlan.proposed',
            'heritageStatement',
          ],
          recommended: [],
          optional: [
            'photographs.existing',
            'otherDocument',
            'otherDrawing',
            'visualisations',
          ],
        },
        fee: {
          category: {
            sixAndSeven: [
              {
                description:
                  'The fee to apply for planning permission to alter or extend a single home is £258.',
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
                'The fee to apply for planning permission to alter or extend a single home is £258.',
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
                'The fee to apply for planning permission to alter or extend a single home is £258.',
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
      submittedAt: '2023-10-02T00:00:00.00Z',
      schema: `https://theopensystemslab.github.io/digital-planning-data-schemas/${version}/schemas/prototypeApplication.json`,
    },
  };
