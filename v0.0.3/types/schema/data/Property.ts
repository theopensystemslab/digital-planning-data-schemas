import {PropertyTypes} from '../../enums/PropertyTypes';

/**
 * @id #Property
 * @description The site where the works will happen
 */
export interface Property {
  address: ProposedAddress | OSAddress;
  type: PropertyType;
  boundary?: {
    site: string; // @todo use GeoJSON from utils here, but ajv tests failing
    area: {
      squareMeters: number;
      hectares: number;
    };
  };
  constraints?: {
    planning: {
      value: string;
      description: string;
      intersects: boolean;
    }[];
  };
}

/**
 * @id #SiteAddress
 * @description Address information available for any site, whether existing or proposed
 */
export interface SiteAddress {
  title: string;
  x: number;
  y: number;
  latitude: number;
  longitude: number;
  region: string;
  localAuthorityDistrict: string[];
}

/**
 * @id #ProposedAddress
 * @description Address information for sites without a known Unique Property Reference Number (UPRN)
 */
export interface ProposedAddress extends SiteAddress {
  source: 'Proposed by applicant';
}

/**
 * @id #OSAddress
 * @description Address information for sites with a known address sourced from Ordnance Survey AddressBase Premium
 */
export interface OSAddress extends SiteAddress {
  uprn: string;
  usrn: string;
  pao: string;
  street: string;
  town: string;
  postcode: string;
  organisation?: string;
  source: 'Ordnance Survey';
}

type PropertyTypeKeys = keyof typeof PropertyTypes;

type GenericPropertyType<TKey extends PropertyTypeKeys> = {
  value: TKey;
  description: (typeof PropertyTypes)[TKey];
};

type PropertyTypeMap = {
  [K in PropertyTypeKeys]: GenericPropertyType<K>;
};

/**
 * @id #PropertyType
 * @description Property types derived from Basic Land and Property Unit (BLPU) classification codes
 */
export type PropertyType = PropertyTypeMap[keyof PropertyTypeMap];
