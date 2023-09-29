import {Schema} from '../../types/Schema';

export const validProposal: Schema['data']['proposal'] = {
  projectType: [
    {
      value: 'alter.equipment.solar',
      description: 'Install solar panels',
    },
    {
      value: 'new.leisure',
      description: 'Leisure premises',
    },
  ],
  description: 'This is a test application',
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
};
