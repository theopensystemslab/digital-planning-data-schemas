import {GeoJSON} from '../../utils';

/**
 * @id #Property
 * @description The site where the works will happen
 */
export interface Property {
  address: SiteAddress | OSAddress;
  type?: {
    value: string;
    description: string;
  };
  boundary?: {
    site: string; // @todo use GeoJSON from utils, but ajv tests "ignore"/fail
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
  source: 'Ordnance Survey' | 'Proposed by applicant';
}

/**
 * @id #OSAddress
 * @description Address information for the site if an existing address sourced from 'Ordnance Survey'
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
