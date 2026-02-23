import {
  GLANonPermanentDwellingType,
  GLAResidentialUnitType,
  UKResidentialUnitType,
} from '../enums/ResidentialUnitTypes';
import {GLATenureType, UKTenureType} from '../enums/TenureTypes';

export type ResidentialUnits = {
  total: number;
  residential: {
    type: UKResidentialUnitType | GLAResidentialUnitType;
    tenure: UKTenureType | GLATenureType;
    bedrooms: number;
    identicalUnits: number;
    nonPermanentDwelling?: GLANonPermanentDwellingType;
  }[];
};
