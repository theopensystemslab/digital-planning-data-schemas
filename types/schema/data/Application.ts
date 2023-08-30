import {DateTime} from '../../utils';

/**
 * @id #Application
 * @description Information about this planning application
 */
export interface Application {
  type: {
    value: keyof typeof ApplicationType;
    description: ApplicationType;
  };
  fee: ApplicationFee;
  declaration: {
    accurate: true;
    connection:
      | 'employee'
      | 'relation.employee'
      | 'electedMember'
      | 'relation.electedMember'
      | 'none';
    description?: string; // application.declaration.connection.description in content
  };
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
    disability: boolean; // @todo add application.fee.exemption.disability.reason & applicant.disability.evidence
    resubmission: boolean; // @todo add application.resubmission.original.applicationReference & application.resubmission.originalReference.appeal
  };
  reduction: {
    alternative: boolean;
    parishCouncil: boolean;
    sports: boolean;
  };
  reference?: {
    govPay: string;
  };
}

/**
 * @id #PreApplication
 * @description Details of the pre-application, if applicable
 */
export interface PreApplication {
  reference: string;
  date: DateTime;
  officer: string;
  summary: string;
}

/**
 * @id #ApplicationType
 * @description Planning application types supported by this schema
 */
export enum ApplicationType {
  'ldc' = 'Lawful Development Certificate',
  'ldc.proposed' = 'Lawful Development Certificate - Proposed',
  'ldc.existing' = 'Lawful Development Certificate - Existing',
  'pa' = 'Prior Approval',
  'pa.part1.classA' = 'Prior Approval - Larger extension to a house',
  'pa.part1.classAA' = 'Prior Approval - Adding storeys to a house',
  'pa.part3.classG' = 'Prior Approval - Convert a commercial building to mixed use',
  'pa.part3.classM' = 'Prior Approval - Convert a mixed use building into a home',
  'pa.part3.classMA' = 'Prior Approval - Convert a commercial building into a home or homes',
  'pa.part3.classN' = 'Prior Approval - Convert a casino or amusement arcade into a home or homes',
  'pa.part3.classQ' = 'Prior Approval - Convert an agricultural building into a home',
  'pa.part3.classR' = 'Prior Approval - Convert an agricultural building to a commercial use',
  'pa.part3.classS' = 'Prior Approval - Convert an agricultural building to a school',
  'pa.part3.classT' = 'Prior Approval - Convert a commercial building to a school',
  'pa.part4.classBB' = 'Prior Approval - Put up a temporary structure',
  'pa.part4.classE' = 'Prior Approval - Use a building or land to shoot a film',
  'pa.part6.classA' = 'Prior Approval - Build new agricultural buildings on a unit of 5 hectares or more',
  'pa.part6.classB' = 'Prior Approval - Build new agricultural buildings on a unit of less than 5 hectares',
  'pa.part6.classE' = 'Prior Approval - Build new forestry buildings',
  'pa.part7.classC' = 'Prior Approval - Install click and collect facilities',
  'pa.part7.classM' = 'Prior Approval - Extend a school, college, university, prison or hospital',
  'pa.part11.classB' = 'Prior Approval - Demolish a building',
  'pa.part14.classJ' = 'Prior Approval - Install or change solar panels',
  'pa.part16.classA' = 'Prior Approval - Install telecommunications equipment',
  'pa.part20.classA' = 'Prior Approval - Build homes on a detached blocks of flats',
  'pa.part20.classAA' = 'Prior Approval - Build homes on a detached commercial building',
  'pa.part20.classAB' = 'Prior Approval - Build homes on an adjoining commercial or mixed use building',
  'pa.part20.classAC' = 'Prior Approval - Build homes on adjoining houses',
  'pa.part20.classAD' = 'Prior Approval - Build homes on detached houses',
  'pa.part20.classZA' = 'Prior Approval - Demolish buildings and build homes in their place',
  'pp' = 'Planning Permission',
  'pp.full.householder' = 'Planning Permission',
  'pp.full.householder.retro' = 'Planning Permission',
}
