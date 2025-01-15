import {URL} from '../../../shared/utils';
import {UKResidentialUnitType} from '../enums/ResidentialUnitType';
import {UKTenureType} from '../enums/TenureType';

export type PrototypeEntity = {
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
