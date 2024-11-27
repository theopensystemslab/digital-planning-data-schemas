import {
  OSAddress,
  ProposedAddress,
  UKRegion,
} from '../../application/data/Property';
import {GeoBoundary} from '../../application/data/shared';
import {PlanningDesignation} from '../../application/enums/PlanningConstraints';
import {PropertyType} from '../../prototypeApplication/enums/PropertyTypes';
import {URL} from '../../../shared/utils';

export interface Property {
  address: ProposedAddress | OSAddress;
  region: UKRegion;
  /**
   * @description Current and historic UK Local Authority Districts that contain this address sourced from planning.data.gov.uk/dataset/local-authority-district
   */
  localAuthorityDistrict: string[];
  type: PropertyType;
  /**
   * @description HM Land Registry Index polygon for this property, commonly referred to as the blue line boundary, sourced from planning.data.gov.uk/dataset/title-boundary
   */
  boundary?: GeoBoundary;
  /**
   * @description Planning constraints and policies that intersect with this site and may impact or restrict development
   */
  planning?: {
    /**
     * @description A list of open data requests or websites that explain how these constraints were sourced
     */
    sources: URL[];
    designations?: PlanningDesignation[];
  };
}
