import {GeoJSON} from 'geojson';
import {Area} from '../../utils';

export type Materials = {
  boundary?: string;
  door?: string;
  lighting?: string;
  roof?: string;
  surface?: string;
  wall?: string;
  window?: string;
  other?: string;
};

export type GeoBoundary = {
  site: GeoJSON;
  area: Area;
};
