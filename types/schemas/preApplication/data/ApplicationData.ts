import {ApplicationDeclaration} from '../../application/data/ApplicationData';

/**
 * @id #PreApplicationData
 * @description Information about this planning pre-application
 */
export interface PreApplicationData {
  fee: {
    /**
     * @description Total payable fee in GBP
     */
    payable: number;
  };
  declaration: ApplicationDeclaration;
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
