import {URL} from '../../../shared/utils';
import {UKResidentialUnitType} from '../enums/ResidentialUnitTypes';
import {UKTenureType} from '../enums/TenureTypes';

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
  total: number;
  residential: {
    type: UKResidentialUnitType;
    tenure: UKTenureType;
    bedrooms: number;
    identicalUnits: number;
  }[];
};
