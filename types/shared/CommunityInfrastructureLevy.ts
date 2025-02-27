import {Area, Date} from './utils';

/**
 * @title Community Infrastructure Levy (CIL) Form 1
 * @description Details about the Community Infrastructure Levy planning charge according to Form 1: Additional information, if applicable
 */
export type CommunityInfrastructureLevy = LiableForCIL | NotLiableForCIL;

interface BaseCIL {
  /**
   * @description Does the application seek to remove or vary conditions on an existing planning permission (Section 73)
   */
  s73Application: boolean;
  /**
   * @description Does the application relate to details or reserved matters on an existing permission that was granted prior to the introduction of the CIL charge in the relevant local authority area?
   */
  existingPermissionPrecedingCIL: boolean;
  /**
   * @description Planning application reference number for the existing permission if applicable
   */
  existingPermissionReference?: string;
}

interface LiableForCIL extends BaseCIL {
  // Result checks in PlanX are heirarchical (first check if project qualifies for full exemption from CIL, then CIL relief, else plain "liable")
  result:
    | 'exempt.annexe'
    | 'exempt.extension'
    | 'exempt.selfBuild'
    | 'relief.charity'
    | 'relief.socialHousing'
    | 'liable';
  claim: {
    /**
     * @description Do you wish to claim an exemption for a residential annex or extension?
     */
    annexeOrExtensionExemption: boolean;
    /**
     * @description Do you wish to claim a self build exemption for a whole new home?
     */
    selfBuildExemption: boolean;
    /**
     * @description Is the site owned by a charity where the development will be wholly or mainly for charitable purposes, and the development will be either occupied by or under the control of a charitable institution?
     */
    charityRelief: boolean;
    /**
     * @description Does the proposed development include affordable housing which qualifies for mandatory or discretionary Social Housing relief?
     */
    socialHousingRelief: boolean;
  };
  /**
   * @description Does the application involve a change in the amount of gross internal area where one or more new dwellings (including residential annexes) are to be created, either through new build or conversion (except the conversion of a single dwelling house into two or more separate dwellings with no additional gross internal area created)?
   */
  newDwellings: boolean;
  /**
   * @description Does the application involve a change in the amount or use of new build development, where the total (including that previously granted planning permission) is over 100 square metres gross internal area?
   */
  floorAreaHundredPlus?: boolean;
  /**
   * @description Does the application involve new residential development (including new dwellings, extensions, conversions/changes of use, garages, basements or any other buildings ancillary to residential use)?
   */
  newResidentialDevelopment: boolean;
  /**
   * @description Does the application involve new non-residential development?
   */
  newNonResidentialDevelopment: boolean;
  proposedTotalArea?: {
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
  /**
   * @description How many existing buildings on the site will be retained, demolished or partially demolished as part of the development proposed?
   */
  existingBuildings?: {
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
  /**
   * @description Are there existing buildings on the property into which people do not usually go or that have been granted temporary planning permission?
   */
  unoccupiedBuildings?: {
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
  /**
   * @description Will the project create a new mezzanine floor within an existing building?
   */
  newMezzanine?: {
    /**
     * @description Description of the use of the new mezzanine
     */
    description: string;
    /**
     * @description Proposed floorspace of the new mezzanine
     */
    area: Area;
  }[];
}

interface NotLiableForCIL extends BaseCIL {
  result: 'notLiable';
  /**
   * @description Has the user confirmed that the CIL information they have provided is correct? Specifically, that this project does not create either new buildings with 100m² new floor space or new dwellings, and therefore does not need to pay the Community Infrastructure Levy (CIL)?
   */
  declaration?: true;
}
