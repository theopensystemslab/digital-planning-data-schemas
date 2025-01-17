/**
 * @title #FeeNotApplicable
 * @description An indicator that an application fee does not apply to this application type or journey
 */
export interface FeeNotApplicable {
  notApplicable: true;
}

/**
 * @title #Fee
 * @description The costs associated with this application
 */
export interface Fee {
  /**
   * @description Total calculated fee in GBP
   */
  calculated: number;
  /**
   * @description Total payable fee after any exemptions or reductions in GBP
   */
  payable: number;
  /**
   * @description Breakdown of calculated fee in GBP by category of development, based on the scales defined in The Town and Country Planning Regulations https://www.legislation.gov.uk/uksi/2012/2920/schedule/1/part/2
   */
  category?: {
    /**
     * @description Category 1 - New homes
     */
    one?: number;
    /**
     * @description Category 2 - Other new buildings
     */
    two?: number;
    /**
     * @description Category 3 - Agricultural buildings
     */
    three?: number;
    /**
     * @description Category 4 - Glasshouses on agricultural land
     */
    four?: number;
    /**
     * @description Category 5 - Plant equipment or machinery
     */
    five?: number;
    /**
     * @description Category 6 and 7 - Home or curtilage of home
     */
    sixAndSeven?: number;
    /**
     * @description Category 8 - Car parks or access roads
     */
    eight?: number;
    /**
     * @description Category 9 - Exploratory drilling
     */
    nine?: number;
    /**
     * @description Category 10 - Winning and working of oil or natural gas
     */
    ten?: number;
    eleven?: {
      /**
       * @description Category 11(1) - Mining operations
       */
      one?: number;
      /**
       * @description Category 11(2) - Other operations
       */
      two?: number;
    };
    twelve?: {
      /**
       * @description Category 12(1) - Change of use from single home to homes
       */
      one?: number;
      /**
       * @description Category 12(2) - Change of use to home
       */
      two?: number;
    };
    /**
     * @description Category 13 - Waste disposal
     */
    thirteen?: number;
    /**
     * @description Category 14 - Other change of use
     */
    fourteen?: number;
  };
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
