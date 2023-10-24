import {GeoJSON} from 'geojson';
import {ProjectTypes} from '../../enums/ProjectTypes';
import {VehicleParking} from '../../enums/VehicleParking';
import {Area, Date} from '../../utils';

/**
 * @id #Proposal
 * @description Information about the proposed works and any changes to the property
 */
export interface Proposal {
  projectType: ProjectType[];
  description: string;
  boundary?: {
    site: GeoJSON;
    area: Area;
  };
  date?: {
    start?: Date;
    completion?: Date;
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
        count: {
          existing: number;
          proposed: number;
        };
        club?: VehicleParkingCount;
        disabled?: VehicleParkingCount;
        other?: VehicleParkingCount;
        residents?: VehicleParkingCount;
      };
      offStreet?: {
        count: {
          existing: number;
          proposed: number;
        };
        club?: VehicleParkingCount;
        disabled?: VehicleParkingCount;
        other?: VehicleParkingCount;
        residents?: VehicleParkingCount;
      };
    };
    vans?: {
      count: {
        existing: number;
        proposed: number;
      };
      onStreet?: VehicleParkingCount;
      offStreet?: VehicleParkingCount;
    };
    motorcycles?: {
      count: {
        existing: number;
        proposed: number;
      };
      onStreet?: VehicleParkingCount;
      offStreet?: VehicleParkingCount;
    };
    bicycles?: {
      count: {
        existing: number;
        proposed: number;
      };
      onStreet?: VehicleParkingCount;
      offStreet?: VehicleParkingCount;
    };
    buses?: {
      count: {
        existing: number;
        proposed: number;
      };
      onStreet?: VehicleParkingCount;
      offStreet?: VehicleParkingCount;
    };
  };
}

type VehicleParkingCount = {
  count: {
    existing: number;
    proposed: number;
  };
};

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
