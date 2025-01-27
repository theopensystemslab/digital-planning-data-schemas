import {GeoBoundary} from '../../../shared/Boundaries';
import {Materials} from '../../../shared/Materials';
import {ProposedLondonParking} from '../../../shared/Parking';
import {Area, Date, Integer} from '../../../shared/utils';
import {PrimaryApplicationType} from '../enums/ApplicationType';
import {BuildingRegulation} from '../enums/BuildingRegulation';
import {DevelopmentType} from '../enums/DevelopmentType';
import {GLAHousingProvider} from '../enums/HousingProvider';
import {OpenSpaceDesignation, OpenSpaceType} from '../enums/OpenSpace';
import {ProjectType} from '../enums/ProjectType';
import {ProtectedSpaceDesignation} from '../enums/ProtectedSpaceDesignation';
import {GLAResidentialUnitType} from '../enums/ResidentialUnitType';
import {GLATenureType} from '../enums/TenureType';
import {ResidentialUnits} from './shared';

/**
 * @description Information about the proposed works and any changes to the property
 */
export type ProposalBase = EnglandProposal | LondonProposal;

export interface EnglandProposal {
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
   * @desription Proposed pedestrian & vehicle access, roads and rights of way, if applicable to application.type
   */
  access?: {
    affected?:
      | 'vehicle'
      | 'pedestrian'
      | 'newRoad'
      | 'rightsOfWay.newPublic'
      | 'rightsOfWay.changes';
  };
  /**
   * @description Proposed utilities, if applicable to application.type
   */
  utilities?: {
    /** @description Type of proposed foul sewage disposal */
    foulSewageDisposal?: 'sewer' | 'tank' | 'plant' | 'pit' | 'other';
    /** @description Count of new full fibre Internet connections */
    internet?: {
      commercialUnits: {count: Integer};
      residentialUnits: {count: Integer};
    };
    /** @description Whether the proposal introduces a fire suppression system */
    fire?: {
      suppression: boolean;
    };
    /** @description Count of new gas connections */
    gas?: {
      connections: {count: Integer};
    };
    /** @description Count of new water connections */
    water?: {
      connections: {count: Integer};
    };
  };
  /**
   * @description Assessment of flood risk, if applicable to application.type
   */
  flood?: {
    surfaceWaterDisposal?:
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
  };
  extend?: {
    area: Area;
  };
  new?: {
    area: Area;
    count?: {
      bathrooms?: Integer;
      bedrooms?: Integer;
      dwellings?: Integer;
    };
  };
  newDwellings?: {
    newBuild?: {count: Integer};
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
    total: Integer;
    permanent?: {
      count: Integer;
    };
    temporary?: {
      count: Integer;
    };
  };
  environmentalImpactDescription?: string;
}

/**
 * @description Proposal details for project sites within the Greater London Authority (GLA) area
 */
export interface LondonProposal extends Omit<EnglandProposal, 'units'> {
  schemeName?: string;
  parking?: ProposedLondonParking;
  /**
   * @description Creating new buildings
   */
  newBuildings?: NewBuildingsOrStoreys;
  /**
   * @description Increasing the height of existing buildings
   */
  newStoreys?: NewBuildingsOrStoreys;
  /**
   * @description Project cost in GBP
   */
  cost?: {
    projected: '2m' | '2mTo100m' | '100m';
  };
  /**
   * @description Electric vehicle charing points
   */
  charging?: {
    active?: {count: Integer};
    passive?: {count: Integer};
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
    /**
     * @uniqueItems true
     */
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

/**
 * @description Details about creating new buildings or increasing the height of existing buildings
 */
export interface NewBuildingsOrStoreys {
  count: Integer;
  buildings?: {
    height: {metres: number};
    storeys: Integer;
  }[];
}

/**
 * @description When the proposed works will start and be completed by, not required for all application types
 */
export interface ProposalDates {
  start?: Date;
  completion?: Date;
}

interface GLARetainedUnit {
  bedrooms: Integer;
  tenure: GLATenureType;
  type: GLAResidentialUnitType;
  identicalUnits: Integer;
}

interface GLALostUnit extends GLARetainedUnit {
  habitableRooms: Integer;
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

/**
 * TypeMap of PrimaryApplicationTypes to their specific Proposal models
 */
type ProposalVariants = {};

/**
 * @internal Conditional type to return a specific or generic Proposal model, based on PrimaryApplicationType
 */
export type Proposal<TPrimary extends PrimaryApplicationType> =
  TPrimary extends keyof ProposalVariants
    ? ProposalVariants[TPrimary]
    : ProposalBase;
