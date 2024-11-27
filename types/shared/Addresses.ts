/**
 * @description Address information available for any site, whether existing or proposed
 */
export interface SiteAddress {
  /**
   * @description Single line address description
   */
  title: string;
  /**
   * @description Easting coordinate in British National Grid (OSGB36)
   */
  x: number;
  /**
   * @description Northing coordinate in British National Grid (OSGB36)
   */
  y: number;
  /**
   * @description Latitude coordinate in EPSG:4326 (WGS84)
   */
  latitude: number;
  /**
   * @description Longitude coordinate in EPSG:4326 (WGS84)
   */
  longitude: number;
}

/**
 * @title #ProposedAddress
 * @description Address information for sites without a known Unique Property Reference Number (UPRN)
 */
export interface ProposedAddress extends SiteAddress {
  source: 'Proposed by applicant';
}

/**
 * @title #OSAddress
 * @description Address information for sites with a known address sourced from Ordnance Survey AddressBase Premium LPI source
 */
export interface OSAddress extends SiteAddress {
  /**
   * @title Unique Property Reference Number
   * @maxLength 12
   */
  uprn: string;
  /**
   * @title Unique Street Reference Number
   * @maxLength 8
   */
  usrn: string;
  /**
   * @title Primary Addressable Object start range and/or building description
   * @description Combined `PAO_START_NUMBER`, `PAO_START_SUFFIX`, `PAO_TEXT` OS LPI properties
   */
  pao: string;
  /**
   * @title Primary Addressable Object (PAO) end range
   * @description Combined `PAO_END_NUMBER`, `PAO_END_SUFFIX` OS LPI properties
   */
  paoEnd?: string;
  /**
   * @title Secondary Addressable Object (SAO) start range and/or building description
   * @description Combined `SAO_START_NUMBER`, `SAO_START_SUFFIX`, `SAO_TEXT` OS LPI properties
   */
  sao?: string;
  /**
   * @title Secondary Addressable Object (SAO) end range
   * @description Combined `SAO_END_NUMBER`, `SAO_END_SUFFIX` OS LPI properties
   */
  saoEnd?: string;
  street: string;
  town: string;
  postcode: string;
  organisation?: string;
  singleLine: string;
  source: 'Ordnance Survey';
}
