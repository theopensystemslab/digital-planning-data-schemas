import {ProjectTypes} from '../../enums/ProjectTypes';
import {VehicleParking} from '../../enums/VehicleParking';
import {DateTime} from '../../utils';

/**
 * @id #Proposal
 * @description Information about the project
 */
export interface Proposal {
  projectType: ProjectType[];
  description: string;
  boundary?: {
    site: Record<string, any>; // @todo use GeoJSON from utils here, but ajv tests failing
    area: {
      squareMetres: number;
      hectares: number;
    };
  };
  date?: {
    start: DateTime;
    completion?: DateTime;
  };
  retro?: {
    date: {
      start: DateTime;
      completion: DateTime;
    };
  };
  details?: ProposalDetails;
}

/**
 * @id #ProposalDetails
 * @description Details about the changes being proposed
 */
export type ProposalDetails = BaseDetails | LondonDetails;

export interface BaseDetails {
  extend?: {
    area: {
      squareMetres: number;
    };
  };
  new?: {
    area: {
      squareMetres: number;
    };
    count?: {
      bathrooms?: number;
      bedrooms?: number;
      dwellings?: number;
    };
  };
}

export interface LondonDetails extends BaseDetails {
  vehicleParking: {
    type: VehicleParking[];
    cars?: {
      count: {
        existing: number;
        proposed: number;
      };
      onStreet?: {
        club?: {
          count: {
            existing: number;
            proposed: number;
          };
        };
        disabled?: {
          count: {
            existing: number;
            proposed: number;
          };
        };
        other?: {
          count: {
            existing: number;
            proposed: number;
          };
        };
      };
      offStreet?: {
        club?: {
          count: {
            existing: number;
            proposed: number;
          };
        };
        disabled?: {
          count: {
            existing: number;
            proposed: number;
          };
        };
        other?: {
          count: {
            existing: number;
            proposed: number;
          };
        };
      };
    };
    vans?: {
      onStreet?: {
        count: {
          existing: number;
          proposed: number;
        };
      };
      offStreet?: {
        count: {
          existing: number;
          proposed: number;
        };
      };
    };
    motorcyles?: {
      onStreet?: {
        count: {
          existing: number;
          proposed: number;
        };
      };
      offStreet?: {
        count: {
          existing: number;
          proposed: number;
        };
      };
    };
    bicycles?: {
      onStreet?: {
        count: {
          existing: number;
          proposed: number;
        };
      };
      offStreet?: {
        count: {
          existing: number;
          proposed: number;
        };
      };
    };
    buses?: {
      onStreet?: {
        count: {
          existing: number;
          proposed: number;
        };
      };
      offStreet?: {
        count: {
          existing: number;
          proposed: number;
        };
      };
    };
  };
}

type ProjectTypeKeys = keyof typeof ProjectTypes;

type GenericProjectType<TKey extends ProjectTypeKeys> = {
  value: TKey;
  description: (typeof ProjectTypes)[TKey];
};

type ProjectTypeMap = {
  [K in ProjectTypeKeys]: GenericProjectType<K>;
};

/**
 * @id #ProjectType
 * @description Planning project types
 */
export type ProjectType = ProjectTypeMap[keyof ProjectTypeMap];

type VehicleParkingKeys = keyof typeof VehicleParking;

type GenericVehicleParking<TKey extends VehicleParkingKeys> = {
  value: TKey;
  description: (typeof VehicleParking)[TKey];
};

type VehicleParkingMap = {
  [K in VehicleParkingKeys]: GenericVehicleParking<K>;
};

/**
 * @id #VehicleParking
 * @description Vehicle parking types
 */
export type VehicleParking = VehicleParkingMap[keyof VehicleParkingMap];
