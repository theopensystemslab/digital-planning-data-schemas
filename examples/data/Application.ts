import {Schema} from '../../types/Schema';

export const validApplication: Schema['data']['application'] = {
  type: {
    value: 'ldc.proposed',
    description: 'Lawful Development Certificate - Proposed',
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
    connection: {
      value: 'none',
    },
  },
};
