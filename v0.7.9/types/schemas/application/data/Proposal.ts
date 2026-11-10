import {GeoBoundary} from './../../../shared/Boundaries';
import {Materials} from '../../../shared/Materials';
import {BuildingRegulation} from '../enums/BuildingRegulations';
import {DevelopmentType} from '../enums/DevelopmentTypes';
import {GLAHousingProvider} from '../enums/HousingProviders';
import {OpenSpaceDesignation, OpenSpaceType} from '../enums/OpenSpaces';
import {ProjectType} from '../enums/ProjectTypes';
import {ProtectedSpaceDesignation} from '../enums/ProtectedSpaces';
import {GLAResidentialUnitType} from '../enums/ResidentialUnitTypes';
import {GLATenureType} from '../enums/TenureTypes';
import {Area, Date, Integer} from '../../../shared/utils';
import {ResidentialUnits} from './shared';
import {
  ProposedLondonParking,
  ProposedNationalParking,
} from '../../../shared/Parking';

/**
 * @id #Proposal
 * @description Information about the proposed works and any changes to the property
 */
export type Proposal = BaseProposal | LondonProposal;

export interface BaseProposal {
  projectType: ProjectType[];
  description: string;
  date?: ProposalDates;
  /**
   * @description Location plan boundary proposed by the user, commonly referred to as the red line boundary
   */
  boundary?: GeoBoundary;
  /**
   * @description Proposed materials, if applicable to projectType
   */
  materials?: Materials;
  /**
   * @description Proposed pedestrian & vehicle access, roads and rights of way, if applicable to application.type
   */
  access?: {
    affected?:
      | 'vehicle'
      | 'pedestrian'
      | 'newRoad'
      | 'rightsOfWay.newPublic'
      | 'rightsOfWay.changes'
      | {
          /** @description Is new or altered vehicle access proposed? */
          vehicle: boolean;
          /** @description Is new or altered pedestrian access proposed? */
          pedestrian: boolean;
          /** @description Are any rights of way created, diverted or extinguished? */
          rightOfWay: boolean;
        };
    new?: {
      /** @description Are new public roads provided within the site? */
      publicRoad: boolean;
      /** @description Are new public rights of way provided within the site? */
      rightOfWay: boolean;
    };
  };
  /**
   * @description Proposed utilities, if applicable to application.type
   */
  utilities?: {
    /** @description Type of proposed foul sewage disposal */
    foulSewageDisposal?: 'sewer' | 'tank' | 'plant' | 'pit' | 'other';
    /** @description Count of new full fibre Internet connections */
    internet?: {
      commercialUnits: {count: number};
      residentialUnits: {count: number};
    };
    /** @description Whether the proposal introduces a fire suppression system */
    fire?: {
      suppression: boolean;
    };
    /** @description Count of new gas connections */
    gas?: {
      connections: {count: number};
    };
    /** @description Count of new water connections */
    water?: {
      connections: {count: number};
    };
  };
  /**
   * @description Assessment of flood risk, if applicable to application.type
   */
  flood?: {
    /** @description Is the site at risk of flooding? */
    atRisk?: boolean;
    /** @description Is your project within 20 metres of a watercourse? */
    within20mOfWatercourse?: boolean;
    /** @description Will the proposal increase the flood risk elsewhere? */
    increaseRiskElsewhere?: boolean;
    /** @description How will surface water be disposed of? */
    surfaceWaterDisposal?:
      | 'sustainableDrainageSystem'
      | 'drainageSystem'
      | 'soakaway'
      | 'sewer'
      | 'watercourse'
      | 'pondOrLake'
      | 'other';
  };
  /**
   * @description Details of biodiversity and geological conservation, if applicable to application.type
   */
  ecology?: {
    speciesAffected?: 'site' | 'adjacent' | 'none';
    featuresAffected?: 'site' | 'adjacent' | 'none';
    conservationAffected?: 'site' | 'adjacent' | 'none';
  };
  /**
   * @description Proposed land use, including storage of hazardous materials, if applicable to application.type
   */
  use?: {
    description?: string;
    contamination?: 'known' | 'suspected' | 'vulnerable';
    storage?: string[];
    /** @description Is the proposed use vulnerable to contamination? */
    vulnerableToContamination?: boolean;
  };
  extend?: {
    area: Area;
  };
  new?: {
    area: Area;
    count?: {
      bathrooms?: number;
      bedrooms?: number;
      dwellings?: number;
    };
  };
  newDwellings?: {
    newBuild?: {count: number};
  };
  units?: ResidentialUnits;
  watercourse?: {
    name: string;
    type: 'ditch' | 'millStream' | 'pond' | 'river' | 'streamOrBrook' | 'other';
  };
  structures?: {
    type:
      | 'bridge'
      | 'catchpit'
      | 'culvert'
      | 'pipe'
      | 'gully'
      | 'headwall'
      | 'manhole'
      | 'weir'
      | 'other';
    total: number;
    permanent?: {
      count: number;
    };
    temporary?: {
      count: number;
    };
  };
  environmentalImpactDescription?: string;
  started?: {
    /** @description Has the project already started? */
    value: boolean;
    /** @description Date that project was started */
    date?: Date;
  };
  completed?: {
    /** @description Has the project been completed? */
    value: boolean;
    /** @description Date that project was completed */
    date?: Date;
  };
  /**
   * @description Is it a proposal for public service infrastructure?
   */
  publicServiceInfrastructure?: boolean;
  wasteStorage?: {
    /** @description Does the project accommodate waste storage areas? */
    affected: boolean;
    /** @description Will recyclable waste be stored and collected separately? */
    separated: 'yes' | 'no' | 'not applicable';
  };
  /**
   * @title Biodiversity net gain (BNG)
   */
  BNG?: {
    /** @description Does the BNG condition apply? */
    applies: boolean;
    exemption?: {
      /** @description Why doesn't it apply? */
      justification?: string;
    };
    preDevelopmentValue?: {
      /** @description Pre-development biodiversity value */
      value: number;
      calculated?: {
        /** @description Is the date of the calculation the application date? */
        applicationDate?: boolean;
        /** @description Earlier date of pre-development biodiversity calculation */
        date?: Date;
        /** @description Justification for earlier date */
        earlyJustification?: string;
      };
      /** @description Metric tool publication date for recent calculation */
      metricToolPublicationDate?: Date;
    };
    degradation?: {
      /** @description Has any degradation occured? */
      value: boolean;
      /** @description Provide more details of degradation */
      details?: string;
      /** @description Date immediately before degrading activity was carried out */
      preStartDate?: Date;
    };
    preDegradationValue?: {
      /** @description Onsite biodiversity value on the date immediately before degrading activity was carried out */
      value: number;
      /** @description Metric tool publication date for pre-degradation calculation */
      metricToolPublicationDate?: Date;
    };
    irreplaceableHabitat?: {
      /** @description Does the site have irreplaceable habitat? */
      value: boolean;
      /** @description More details about irreplaceable habitat */
      details?: string;
    };
  };
  foulSewage?: {
    /** @description How will foul sewage be disposed of? */
    disposal: 'sewer' | 'pit' | 'tank' | 'plant' | 'other';
    /** @description Are you proposing to connect to the existing drainage system? */
    newConnection: boolean;
  };
  natureImpacts?: {
    /** @description Protected or priority species affected */
    protectedSpeciesAffected: NatureImpact;
    /** @description Designated sites, important habitats or other important features affected? */
    designatedSitesAffected: NatureImpact;
    /** @description Important habitats affected, either on the project site ('onSite') or near to the project site ('adjacent') */
    importantHabitatsAffected?: 'onSite' | 'adjacent';
    /** @description Sites of geological conservation affected? */
    geologicalSitesAffected: NatureImpact;
  };
  trees?: {
    /** @description Are there trees and hedges on the project site? */
    onSite: boolean;
    /** @description Are there trees or hedges adjacent to the site that could influence the development or might be important as part of the local landscape character? */
    influenceDevelopment: boolean;
  };
  effluent?: {
    /** @description Does the proposed use involve disposal of trade effluent? */
    disposal: boolean;
  };
  residentialUnits?: {
    /** @description Does the project change the number or type of residential units on the site? */
    change: boolean;
  };
  nonResidentialFloorspace?: {
    /** @description Does your proposal impact non-residential floorspace? */
    affected: boolean;
  };
  employment?: {
    /** @description Number of existing employees: full time, part time, and total full time equivalent */
    existingEmployees: EmployeeCounts & {fullTime: {number: Integer}};
    /** @description Number of proposed employees: full time, part time, and total full time equivalent */
    proposedEmployees?: EmployeeCounts;
  };
  /**
   * @description Hours of operation per use, or 'not applicable'
   */
  hoursOfOperation?: string;
  site?: {
    /** @description What is the site area in hectares? */
    hectares: number;
  };
  commercialProcesses?: {
    /** @description Describe activities processes carried out on the site, or 'none' */
    description: string;
    /** @description Is the proposal a waste management development? */
    wasteManagement: boolean;
  };
  /**
   * @description Does the proposed use involve the storage of hazardous chemicals?
   */
  hazardousSubstanceStorage?: boolean;
  /**
   * @description Proposed parking spaces
   */
  parking?: ProposedNationalParking;
}

type NatureImpact = 'onSite' | 'adjacent' | 'false';

interface EmployeeCounts {
  fullTime?: {number: Integer};
  partTime?: {number: Integer};
  fullTimeEquivalent?: {number: Integer};
}

/**
 * @id #LondonProposal
 * @description Proposal details for project sites within the Greater London Authority (GLA) area
 */
export interface LondonProposal extends Omit<
  BaseProposal,
  'units' | 'parking' | 'utilities' | 'flood'
> {
  schemeName?: string;
  /**
   * @description Proposed parking spaces
   */
  parking?: ProposedLondonParking;
  /**
   * @description Proposed utilities, if applicable to application.type
   */
  utilities?: LondonUtilities;
  /**
   * @description Assessment of flood risk, if applicable to application.type
   */
  flood?: LondonFlood;
  /**
   * @description Intended commencement date
   */
  plannedStartDate?: Date;
  /**
   * @description Intended completion date
   */
  plannedCompletionDate?: Date;
  /**
   * @description Scheme phasing
   */
  phased?: boolean;
  /**
   * @description Electric vehicle charging points by speed
   */
  EVcharging?: {
    /** @description Number of active EV charging points */
    active?: EVChargingPoints;
    /** @description Number of passive EV charging points */
    passive?: EVChargingPoints;
  };
  heating?: {
    electrical: {
      /** @description Homes with electrical heating */
      numberHomes: Integer;
    };
  };
  buildingDetails?: {
    main?: {
      /** @description Main building maximum height */
      height?: number;
      /** @description Main building number of storeys */
      storeys?: Integer;
    };
    outbuilding?: {
      /** @description Outbuilding maximum height */
      height?: number;
      /** @description Outbuilding number of storeys */
      storeys?: Integer;
    };
    /** @description Building reference */
    reference?: 'main' | 'outbuilding';
  };
  footprint?: {
    garden: {
      /** @description Does your proposal involve the loss of garden land? */
      removed: boolean;
    };
  };
  /**
   * @description Sub-division of building
   */
  subdivisionDetails?: string;
  nonPermanentDwellings?: {
    /** @description Non-permanent dwelling type */
    type?:
      | 'Non-permanent dwellings'
      | 'Traveller pitches/plots'
      | 'Houseboat moorings';
    gained?: {
      /** @description Non-permanent dwellings gained */
      number: Integer;
    };
    lost?: {
      /** @description Non-permanent dwellings lost */
      number: Integer;
    };
  };
  siteArea?: {
    /** @description Site area */
    hectares: number;
  };
  /**
   * @description Creating new buildings
   */
  newBuildings?: NewBuildingsOrStoreys;
  /**
   * @description Increasing the height of existing buildings
   */
  newStoreys?: NewBuildingsOrStoreys;
  /**
   * @description Project cost
   */
  cost?: {
    projected: '2m' | '2mTo100m' | '100m';
  };
  /**
   * @description Electric vehicle charing points
   */
  charging?: {
    active?: {count: number};
    passive?: {count: number};
  };
  /**
   * @description Changes that result in the loss, gain, or change of use of natural spaces
   */
  nature?: {
    openSpaces?: {
      impact: 'loss' | 'gain' | 'change';
      description: string;
      type: OpenSpaceType;
      designation: OpenSpaceDesignation;
      access: 'restricted' | 'unrestricted';
      area: {hectares: number};
      /**
       * @description Whether the open space change involves a land swap
       */
      swap: boolean;
    }[];
    protectedSpaces?: {
      impact: 'loss' | 'gain' | 'change';
      description: string;
      designation: ProtectedSpaceDesignation;
      access: 'restricted' | 'unrestricted';
      area: {hectares: number};
    }[];
    openSpace?: {
      /** @description Open Space access type */
      access?: 'restricted' | 'unrestricted';
      /** @description Open Space area */
      area?: number;
      /** @description Open Space change type */
      development: 'loss' | 'gain' | 'change';
      /** @description Open Space description */
      description?: string;
      /** @description Open Space designation */
      designation?: OpenSpaceDesignation;
      /** @description Open Space land swap */
      swap?: boolean;
      /** @description Open Space type */
      type?: OpenSpaceType;
    }[];
    protectedSpace?: {
      /** @description Protected Space access */
      access?: 'restricted' | 'unrestricted';
      /** @description Protected Space area */
      area?: number;
      /** @description Protected Space change type */
      development: 'loss' | 'gain' | 'change';
      /** @description Protected Space description */
      description?: string;
      /** @description Protected Space nature conservation designation */
      designation?: ProtectedSpaceDesignation;
    }[];
  };
  /**
   * @description Water management
   */
  water?: {
    /**
     * @description Internal residential water usage
     */
    usage: {litresPerPersonPerDay: number};
    /**
     * @description Whether the proposal includes rain water harvesting
     */
    rain: boolean;
    /**
     * @description Whether the proposal includes grey water re-use
     */
    grey: boolean;
  };
  /**
   * @description Proposed energy sources
   */
  energy?: {
    type: Array<'communityOwned' | 'heatPump' | 'solar'>;
    communityOwned?: {
      /** @description Proposed total capacity of any on-site community-owned energy generation in megawatts (mW) */
      capacity: {megawatts: number};
    };
    heatPumps?: {
      /** @description Proposed total capacity of any heat pumps in megawatts (mV) */
      capacity: {megawatts: number};
    };
    solar?: {
      /** @description Proposed total capacity of any solar energy generation in megawatts (mV) */
      capacity: {megawatts: number};
    };
  };
  /**
   * @description Urban Greening Factor Score
   */
  urbanGreeningFactor?: {
    score: number;
  };
  /**
   * @description Green roof
   */
  greenRoof?: {
    area: Area;
  };
  /**
   * @description Waste management of demolition and construction materials
   */
  waste?: {
    reuseRecycle: {percent: number};
  };
  units?: {
    residential: {
      new?: GLAGainedUnit[];
      rebuilt?: GLAGainedUnit[];
      removed?: GLALostUnit[];
      retained?: GLARetainedUnit[];
    };
  };
}

interface EVChargingPoints {
  /** @description Number of fast EV charging points */
  fast?: {number: Integer};
  /** @description Number of other EV charging points */
  other?: {number: Integer};
  /** @description Number of rapid EV charging points */
  rapid?: {number: Integer};
  /** @description Number of slow EV charging points */
  slow?: {number: Integer};
}

type BaseUtilities = NonNullable<BaseProposal['utilities']>;

/**
 * @description Proposed utilities for project sites within the Greater London Authority (GLA) area
 */
type LondonUtilities = Omit<BaseUtilities, 'water'> & {
  /** @description Count of new water connections */
  water?: NonNullable<BaseUtilities['water']> & {
    /** @description Grey water reuse */
    greyReuse?: boolean;
    /** @description Internal residential water usage */
    usage?: number;
    /** @description Rain water harvesting */
    rainHarvesting?: boolean;
  };
};

/**
 * @description Assessment of flood risk for project sites within the Greater London Authority (GLA) area
 */
type LondonFlood = NonNullable<BaseProposal['flood']> & {
  /** @description Green SuDS */
  greenSuDS?: boolean;
  /** @description Surface Water Discharge Percentage Reduction */
  dischargeReduction?: number;
};

/**
 * @id #NewBuildingsOrStoreys
 * @description Details about creating new buildings or increasing the height of existing buildings
 */
export interface NewBuildingsOrStoreys {
  count: number;
  buildings?: {
    height: {metres: number};
    storeys: number;
  }[];
}

/**
 * @id #ProposalDates
 * @description When the proposed works will start and be completed by, not required for all application types
 */
export interface ProposalDates {
  start?: Date;
  completion?: Date;
}

interface GLARetainedUnit {
  bedrooms: number;
  tenure: GLATenureType;
  type: GLAResidentialUnitType;
  identicalUnits: number;
}

interface GLALostUnit extends GLARetainedUnit {
  habitableRooms: number;
  compliance: BuildingRegulation[];
  provider: GLAHousingProvider;
  area: Area;
  sheltered: boolean;
  olderPersons: boolean;
}

interface GLAGainedUnit extends GLALostUnit {
  development: DevelopmentType;
  garden: boolean;
}
