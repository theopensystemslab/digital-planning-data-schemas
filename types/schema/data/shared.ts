import {GeoJSON} from 'geojson';
import {UKResidentialUnitType} from '../../enums/ResidentialUnitTypes';
import {UKTenureType} from '../../enums/TenureTypes';
import {Area, URL} from '../../utils';

export type Materials = {
  boundary?: string;
  door?: string;
  lighting?: string;
  roof?: string;
  surface?: string;
  wall?: string;
  window?: string;
  other?: string;
};

export type GeoBoundary = {
  site: GeoJSON;
  area: Area;
};

export type Entity = {
  name: string;
  description?: string;
  source: PlanningDataSource | OSRoadsSource;
};

type PlanningDataSource = {
  text: 'Planning Data';
  url: URL;
};

type OSRoadsSource = {
  text: 'Ordnance Survey MasterMap Highways';
};

export type ResidentialUnits = {
  residential: {
    type: UKResidentialUnitType;
    tenure: UKTenureType;
    bedrooms: number;
    identicalUnits: number;
  }[];
};
