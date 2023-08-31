import {Schema} from '../../types/Schema';
import {PropertyType} from '../../types/schema/data/Property';

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
    region: 'London',
    localAuthorityDistrict: ['Southwark'],
    source: 'Ordnance Survey',
  },
  type: {
    value: 'residential.HMO.parent',
    description: PropertyType['residential.HMO.parent'],
  },
  boundary: {
    site: 'GeoJSON TBD',
    area: {
      squareMeters: 10000,
      hectares: 1,
    },
  },
  constraints: {
    planning: [
      {
        value: 'listed',
        description: 'Listed Building',
        intersects: false,
      },
      {
        value: 'designated.conservationArea',
        description: 'Conservation Area',
        intersects: true,
      },
    ],
  },
};
