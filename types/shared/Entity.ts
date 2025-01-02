import {URL} from './utils';

type PlanningDataSource = {
  text: 'Planning Data';
  url: URL;
};

type OSRoadsSource = {
  text: 'Ordnance Survey MasterMap Highways';
};

export type Entity = {
  name: string;
  description?: string;
  source: PlanningDataSource | OSRoadsSource;
};
