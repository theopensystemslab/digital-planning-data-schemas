import {Declaration} from '../../../shared/Declarations';
import {Fee} from '../../../shared/Fees';

/**
 * @id #PreApplicationData
 * @description Information about this planning pre-application
 */
export interface PreApplicationData {
  type: {
    value: 'preApp';
    description: 'Pre-application';
  };
  fee: Pick<Fee, 'payable' | 'reference'>;
  declaration: Declaration;
  information: {
    harmful: {
      /**
       * @description Would disclosure of any of the information provided by the user in the pre-application harm someone's commercial interests?
       */
      applicable: boolean;
      description?: string;
    };
    sensitive: {
      /**
       * @description Is any of of the information provided by the user in the pre-application sensitive?
       */
      applicable: boolean;
      description?: string;
    };
  };
}
