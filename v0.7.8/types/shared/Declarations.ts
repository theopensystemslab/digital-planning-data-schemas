/**
 * @title Declaration
 * @description Declarations about the accuracy of this application and any personal connections to the receiving authority
 */
export interface Declaration {
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
