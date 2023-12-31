import {ApplicationTypes} from '../../enums/ApplicationTypes';
import {Date} from '../../utils';

/**
 * @id #Application
 * @description Information about this planning application
 */
export interface Application {
  type: ApplicationType;
  fee: ApplicationFee;
  declaration: ApplicationDeclaration;
  preApp?: PreApplication;
}

/**
 * @id #ApplicationFee
 * @description The costs associated with this application
 */
export interface ApplicationFee {
  calculated: number;
  payable: number;
  exemption: {
    disability: boolean; // @todo add application.fee.exemption.disability.reason
    resubmission: boolean; // @todo add application.resubmission.original.applicationReference & application.resubmission.originalReference.appeal
  };
  reduction: {
    alternative: boolean;
    parishCouncil: boolean;
    sports: boolean;
  };
  reference?: {
    /**
     * @description GOV.UK Pay payment reference number
     */
    govPay: string; // @todo require when payable > 0
  };
}

/**
 * @id #ApplicationDeclaration
 * @description Declarations about the accuracy of this application and any personal connections to the receiving authority
 */
export interface ApplicationDeclaration {
  accurate: boolean;
  connection: {
    value:
      | 'employee'
      | 'relation.employee'
      | 'electedMember'
      | 'relation.electedMember'
      | 'none';
    description?: string;
  };
}

/**
 * @id #PreApplication
 * @description Details of the pre-application, if applicable
 */
export interface PreApplication {
  reference: string;
  date: Date;
  officer: string;
  summary: string;
}

type ApplicationTypeKeys = keyof typeof ApplicationTypes;

type GenericApplicationType<TKey extends ApplicationTypeKeys> = {
  value: TKey;
  description: (typeof ApplicationTypes)[TKey];
};

type ApplicationTypeMap = {
  [K in ApplicationTypeKeys]: GenericApplicationType<K>;
};

/**
 * @id #ApplicationType
 * @description Planning application types
 */
export type ApplicationType = ApplicationTypeMap[keyof ApplicationTypeMap];
