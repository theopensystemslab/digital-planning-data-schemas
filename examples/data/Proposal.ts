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
};
