import {UKResidentialUnitType} from '../enums/ResidentialUnitTypes';
import {UKTenureType} from '../enums/TenureTypes';

export type ResidentialUnits = {
  total: number;
  residential: {
    type: UKResidentialUnitType;
    tenure: UKTenureType;
    bedrooms: number;
    identicalUnits: number;
  }[];
};
