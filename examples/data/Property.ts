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
    site: 'GeoJSON TBD',
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
