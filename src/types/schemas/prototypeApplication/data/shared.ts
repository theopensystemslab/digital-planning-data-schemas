import {URL} from '../../../shared/utils';
import {UKResidentialUnitType} from '../enums/ResidentialUnitType';
import {UKTenureType} from '../enums/TenureType';

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
