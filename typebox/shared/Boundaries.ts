import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';
import {Area} from './utils';

export type GeoBoundary = Static<typeof GeoBoundary>;
export const GeoBoundary = Type.Object({
  site: Type.Any(), // GeoJSON
  area: Area,
});
