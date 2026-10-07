import {GeoJSON} from 'geojson';
import {Area} from './utils';

export type GeoBoundary = {
  site: GeoJSON;
  area: Area;
};
