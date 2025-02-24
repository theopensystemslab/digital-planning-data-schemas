import {Area, Date} from './utils';

/**
 * @title Community Infrastructure Levy
 * @description Details about the Community Infrastructure Levy planning charge, if applicable
 */
export type CommunityInfrastructureLevy = LiableForCIL | NotLiableForCIL;

type LiableForCIL = {
  // Result checks in PlanX are heirarchical (first check if project qualifies for full exemption from CIL, then CIL relief, else plain "liable")
  result:
    | 'exempt.annexe'
    | 'exempt.extension'
    | 'exempt.selfBuild'
    | 'relief.charity'
    | 'relief.socialHousing'
    | 'liable';
};

type NotLiableForCIL = {
  result: 'notLiable';
  declaration: true;
};

type BaseCIL = {
  /**
   * @description Does the application seek to remove or vary conditions on an existing planning permission (Section 73)
   */
  s73Application: boolean;
  /**
   * @description Does the application relate to details or reserved matters on an existing permission that was granted prior to the introduction of the CIL charge in the relevant local authority area?
   */
  existingPermissionPrecedingCIL: boolean;
  /**
   * @description Existing planning permission application reference number
   */
  existingPermissionReference: string;
  /**
   * @description Does the application include creation of one or more new dwellings (including residential annexes) either through new build or conversion (except the conversion of a single dwelling house into two or more separate dwellings with no additional gross internal area created)?
   */
  newDwellings: boolean;
  /**
   * @description Does the application involve new residential development (including new dwellings, extensions, conversions/changes of use, garages, basements or any other buildings ancillary to residential use)?
   */
  newResidentialDevelopment: boolean;
  /**
   * @description Does the application involve new non-residential development?
   */
  newNonResidentialDevelopment: boolean;
  proposedTotalArea: {
    /**
     * @description Total existing gross internal area
     */
    existing: Area;
    /**
     * @description Total gross internal area to be lost by change of use or demolition
     */
    loss: Area;
    /**
     * @description Total gross internal area proposed including change of use, basements, and ancillary buildings
     */
    proposed: Area;
    /**
     * @description Total net additional gross internal area following development
     */
    net: Area;
  };
  existingBuildings: {
    /**
     * @description How many existing buildings on the site will be retained, demolished or partially demolished as part of the development proposed?
     */
    count: number;
    /**
     * @description Details of each individual existing building as applicable
     */
    details?: {
      description: {
        /**
         * @description Description of existing building or part
         */
        existing: string;
        /**
         * @description Proposed use of retained gross internal area
         */
        proposed: string;
      };
      area: {
        /**
         * @description Gross internal area to be retained
         */
        retained: Area;
        /**
         * @description Gross internal area to be demolished
         */
        loss: Area;
      };
      /**
       * @description Was the building or part of the building occupied for its lawful use for 6 continuous months of the 36 previous months (excluding temporary permissions)?
       */
      continuousOccupation: boolean;
      /**
       * @description Is the building still occupied for its lawful use?
       */
      stillInUse: boolean;
      /**
       * @description When was the building last occupied for its lawful use?
       */
      lastOccupation: Date;
    }[];
  };
  unoccupiedBuildings: {
    /**
     * @description Are there existing buildings on the property into which people do not usually go or that have been granted temporary planning permission?
     */
    count: number;
    /**
     * @description Details of each individual unoccupied building as applicable
     */
    details?: {
      description: {
        /**
         * @description Description of unoccupied building or part
         */
        existing: string;
        /**
         * @description Proposed use of retained gross internal area
         */
        proposed: string;
      };
      area: {
        /**
         * @description Gross internal area to be retained
         */
        retained: Area;
        /**
         * @description Gross internal area to be demolished
         */
        loss: Area;
      };
    }[];
  };
  newMezzanine: {
    /**
     * @description Will the project create a new mezzanine floor within an existing building?
     */
    applicable: boolean;
    /**
     * @description Details of each new mezzaine floor with an existing building as applicable
     */
    details?: {
      /**
       * @description Description of the use of the new mezzanine
       */
      description: string;
      /**
       * @description Proposed floorspace of the new mezzanine
       */
      area: Area;
    }[];
  };
};
