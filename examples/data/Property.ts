import {Schema} from '../../types/Schema';

export const validProperty: Schema['data']['property'] = {
  address: {
    uprn: '200003453480',
    usrn: '22500531',
    latitude: 51.4859056,
    longitude: -0.0760466,
    pao: '47',
    street: 'COBOURG ROAD',
    town: 'LONDON',
    postcode: 'SE5 0HU',
    x: 533683,
    y: 178083,
    title: '47, COBOURG ROAD, LONDON',
    source: 'Ordnance Survey',
  },
  region: 'London',
  localAuthorityDistrict: ['Southwark'],
  type: {
    value: 'residential.HMO.parent',
    description: 'HMO Parent',
  },
  boundary: {
    site: {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-0.1186569035053321, 51.465703531871384],
            [-0.1185938715934822, 51.465724418998775],
            [-0.1184195280075143, 51.46552473766957],
            [-0.11848390102387167, 51.4655038504508],
            [-0.1186569035053321, 51.465703531871384],
          ],
        ],
      },
      properties: null,
    },
    area: {
      squareMetres: 10000,
      hectares: 1,
    },
  },
  constraints: {
    planning: [
      {
        value: 'listed',
        description: 'Listed Building',
        overlaps: false,
      },
      {
        value: 'designated.conservationArea',
        description: 'Conservation Area',
        overlaps: true,
        entities: ['Cobourg Road Nature Preserve'],
      },
    ],
  },
  titleNumber: {
    known: 'Yes',
    number: '123',
  },
  EPC: {
    known: 'The property does not have one',
  },
};
