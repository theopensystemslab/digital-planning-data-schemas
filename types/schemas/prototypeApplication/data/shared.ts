import {UKResidentialUnitType} from '../enums/ResidentialUnitType';
import {UKTenureType} from '../enums/TenureType';

export type ResidentialUnits = {
  total: number;
  residential: {
    type: UKResidentialUnitType;
    tenure: UKTenureType;
    bedrooms: number;
    identicalUnits: number;
  }[];
};
