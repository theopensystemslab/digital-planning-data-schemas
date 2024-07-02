import { Entity } from "../schema/data/shared";

/**
 * Values for `data.property.planning.designations`
 */
export const PlanningDesignations = {
  article4: 'Article 4 Direction area',
  'article4.caz': 'Central Activities Zone (CAZ)',
  brownfieldSite: 'Brownfield site',
  designated: 'Designated land',
  'designated.AONB': 'Area of Outstanding Natural Beauty (AONB)',
  'designated.conservationArea': 'Conservation Area',
  'designated.nationalPark': 'National Park',
  'designated.nationalPark.broads': 'National Park - Broads',
  'designated.WHS': 'UNESCO World Heritage Site or buffer zone',
  flood: 'Flood Risk Zone',
  'flood.zone.1': 'Flood Risk Zone 1 - Low risk',
  'flood.zone.2': 'Flood Risk Zone 2 - Medium risk',
  'flood.zone.3': 'Flood Risk Zone 3 - High risk',
  greenBelt: 'Green Belt',
  listed: 'Listed Building',
  'listed.grade.I': 'Listed Building - Grade I',
  'listed.grade.II': 'Listed Building - Grade II',
  'listed.grade.II*': 'Listed Building - Grade II*',
  locallyListed: 'Locally Listed Building',
  monument: 'Site of a Scheduled Monument',
  'nature.ASNW': 'Ancient Semi-Natural Woodland (ASNW)',
  'nature.ramsarSite': 'Ramsar site',
  'nature.SAC': 'Special Area of Conservation (SAC)',
  'nature.SPA': 'Special Protection Area (SPA)',
  'nature.SSSI': 'Site of Special Scientific Interest (SSSI)',
  registeredPark: 'Historic Park or Garden',
  'road.classified': 'Classified Road',
  tpo: 'Tree Preservation Order (TPO) or zone',
};

type PlanningDesigationKeys = keyof typeof PlanningDesignations;

type GenericPlanningDesignation<TKey extends PlanningDesigationKeys> = {
  value: TKey;
  description: (typeof PlanningDesignations)[TKey];
};

type PlanningDesignationMap = {
  [K in PlanningDesigationKeys]: GenericPlanningDesignation<K>;
};

type BasePlanningDesignation =
  PlanningDesignationMap[keyof PlanningDesignationMap];

/**
 * @description A planning designation that does not intersect with the proposed site, per the DE-9IM spatial relationship definition of intersects
 */
type NonIntersectingPlanningDesignation = {
  intersects: false;
} & BasePlanningDesignation;

/**
 * @description A planning designation that does intersect with the proposed site, per the DE-9IM spatial relationship definition of intersects
 */
type IntersectingPlanningDesignation = {
  intersects: true;
  entities: Entity[] | [];
} & BasePlanningDesignation;

/**
 * @id #PlanningDesignation
 * @description Planning designations that may intersect with the proposed site determined by spatial queries against Planning Data (planning.data.gov.uk) and Ordnance Survey
 */
export type PlanningDesignation =
  | NonIntersectingPlanningDesignation
  | IntersectingPlanningDesignation;
