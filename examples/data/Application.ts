import {Schema} from '../../types/Schema';
import {ApplicationType} from '../../types/schema/data/Application';

export const validApplication: Schema['data']['application'] = {
  type: {
    value: 'ldc.proposed',
    description: ApplicationType['ldc.proposed'],
  },
  fee: {
    calculated: 103,
    payable: 103,
    exemption: {
      disability: false,
      resubmission: false,
    },
    reduction: {
      alternative: false,
      parishCouncil: false,
      sports: false,
    },
    reference: {
      govPay: 'abc123',
    },
  },
  declaration: {
    accurate: true,
    connection: 'none',
  },
};
