import {OSAddress, ProposedAddress} from './Addresses';
import {GeoBoundary} from './Boundaries';
import {Region} from './Regions';

/**
 * @description Details about the property as the site exists now
 */
export type Site = {
  /**
   * @description The property address
   */
  address: ProposedAddress | OSAddress;
  /**
   * @description Current and historic UK Local Authority Districts that contain this address sourced from planning.data.gov.uk/dataset/local-authority-district
   */
  localAuthorityDistrict: string[];
  /**
   * @description Name of the ward sourced from planning.data.gov.uk/dataset/ward
   */
  ward: string;
  /**
   * @description Name of the region sourced from planning.data.gov.uk/dataset/region; "London" is a proxy for the Greater London Authority
   */
  region: Region;
  /**
   * @description HM Land Registry Index polygon for this property, commonly referred to as the blue line boundary, sourced from planning.data.gov.uk/dataset/title-boundary
   */
  boundary?: GeoBoundary;
};

// TODO eventually add 'type' to shared def above once enums are standardised (eg matching all fields set by PlanX's FindProperty component)
