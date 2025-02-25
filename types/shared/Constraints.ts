import {URL} from './utils';

/**
 * This list includes more values than PlanX currently checks (see `data.property.planning.designations` in example payloads),
 *   but is a good representation of all possible designations which may be put to users now or automatically checked in the future based on Planning Data's backlog
 */
export const PlanningDesignations = {
  aerodrome: 'Aerodrome',
  archaeologicalPriorityArea: 'Archaeological priority area',
  areasOfArchaeologicalPotential: 'Areas of archaeological potential',
  articleFour: 'Article 4 Direction area',
  'articleFour.caz': 'Central Activities Zone (CAZ)',
  aquifer: 'Aquifer',
  'aquifer.principal': 'Principal aquifer',
  'aquifer.secondary': 'Secondary aquifer',
  brownfieldSite: 'Brownfield site',
  coastalChangeManagementArea: 'Coastal change management area',
  communityAsset: 'Community asset',
  'communityAsset.nominated': 'Community asset - Nomimated',
  'communityAsset.registered': 'Community asset - Registered',
  designated: 'Designated land',
  'designated.AONB': 'Area of Outstanding Natural Beauty (AONB)',
  'designated.conservationArea': 'Conservation Area',
  'designated.nationalPark': 'National Park',
  'designated.nationalPark.broads': 'National Park - Broads',
  'designated.WHS': 'UNESCO World Heritage Site (WHS)',
  'designated.WHS.bufferZone': 'UNESCO World Heritage Site (WHS) buffer zone',
  explosivesOrdnanceStorage: 'Explosives or ordnance storage',
  flood: 'Flood risk',
  'flood.criticalDrainage': 'Areas of critical drainage problems',
  'flood.local': 'Local flood site',
  'flood.storageArea': 'Flood storage area',
  'flood.stormSurge': 'Coastal storm surge flood risk area',
  'flood.zoneOne': 'Flood Risk Zone 1 - Low risk',
  'flood.zoneTwo': 'Flood Risk Zone 2 - Medium risk',
  'flood.zoneThree': 'Flood Risk Zone 3 - High risk',
  'flood.zoneThree.a': 'Flood Risk Zone 3a - High risk',
  'flood.zoneThree.b': 'Flood Risk Zone 3b - Highest risk',
  greenBelt: 'Green Belt',
  heritageCoast: 'Heritage coast',
  historicUndergroundWatercourse: 'Historic underground watercourse',
  irreplaceableHabitat: 'Irreplaceable habitat',
  landfill: 'Landfill',
  'landfill.authorised': 'Authorised landfill site',
  'landfill.historic': 'Historic landfill site',
  listed: 'Listed Building',
  'listed.gradeOne': 'Listed Building - Grade I',
  'listed.gradeTwo': 'Listed Building - Grade II',
  'listed.gradeTwoStar': 'Listed Building - Grade II*',
  localLandscapeRegister:
    'Designed space or landscape on the local landscape register',
  locallyListed: 'Locally Listed Building',
  monument: 'Site of a Scheduled Monument',
  'nature.ASNW': 'Ancient Semi-Natural Woodland (ASNW)',
  'nature.localGeologicalSite': 'Local geological site',
  'nature.localNatureReserve': 'Local nature reserve',
  'nature.localPriorityHabitat':
    'Local Biodiversity Action Plan (BAP) priority habitat',
  'nature.localWildlifeSite': 'Local wildlife site',
  'nature.priorityHabitat': 'Habitat of principal importance (Section 41)',
  'nature.ramsarSite': 'Ramsar site',
  'nature.ramsarSite.proposed': 'Proposed Ramsar site',
  'nature.RIGS':
    'Regionally Important Geological and Geomorphological Site (RIGS)',
  'nature.SAC': 'Special Area of Conservation (SAC)',
  'nature.SAC.possible': 'Possible Special Area of Conservation (SAC)',
  'nature.SPA': 'Special Protection Area (SPA)',
  'nature.SPA.potential': 'Potential Special Protection Area (SPA)',
  'nature.SSSI': 'Site of Special Scientific Interest (SSSI)',
  'nature.veteranTree': 'Veteran tree',
  registeredPark: 'Historic Park or Garden',
  'road.classified': 'Classified Road',
  safeguardedLand: 'Safeguarded land',
  safetyHazardArea: 'Safety hazard area',
  sourceProtectionZone: 'Source protection zone',
  tpo: 'Tree Preservation Order (TPO) or zone',
  watercourse: 'Watercourse',
  'watercourse.mainRiver': 'Main river',
  'watercourse.other': 'Other watercourse',
};

type PlanningDesigationKeys = keyof typeof PlanningDesignations;

type GenericPlanningDesignation<TKey extends PlanningDesigationKeys> = {
  value: TKey;
  description: (typeof PlanningDesignations)[TKey];
};

type PlanningDesignationMap = {
  [K in PlanningDesigationKeys]: GenericPlanningDesignation<K>;
};

export type BasePlanningDesignation =
  PlanningDesignationMap[keyof PlanningDesignationMap];

/**
 * @title Non-intersecting planning designation
 * @description A planning designation that does not intersect with the proposed site, per the DE-9IM spatial relationship definition of intersects
 */
type NonIntersectingPlanningDesignation = {
  intersects: false;
} & BasePlanningDesignation;

/**
 * @title Intersecting planning designation
 * @description A planning designation that does intersect with the proposed site, per the DE-9IM spatial relationship definition of intersects
 */
type IntersectingPlanningDesignation = {
  intersects: true;
  entities?: Entity[];
} & BasePlanningDesignation;

type PlanningDataSource = {
  text: 'Planning Data';
  url: URL;
};

type OSRoadsSource = {
  text: 'Ordnance Survey MasterMap Highways';
};

/**
 * @title Designated entity
 * @description A specific entity within an intersecting planning designation category
 */
export type Entity = {
  name: string;
  description?: string;
  source: PlanningDataSource | OSRoadsSource;
};

/**
 * @title Planning designation
 * @description Planning designations that may intersect with the proposed site determined by spatial queries against Planning Data (planning.data.gov.uk) and Ordnance Survey
 */
export type PlanningDesignation =
  | NonIntersectingPlanningDesignation
  | IntersectingPlanningDesignation;

/**
 * @internal Planning constraints are a generic type, while planning designations adhere to enum value/description pairs
 */
type BasePlanningConstraint = {
  value: string;
  description: string;
};

/**
 * @title Non-intersecting planning constraint
 * @description A planning constraint that does not intersect with the proposed site, per the DE-9IM spatial relationship definition of intersects
 */
type NonIntersectingPlanningConstraint = {
  intersects: false;
} & BasePlanningConstraint;

/**
 * @title Intersecting planning constraint
 * @description A planning constraint that does intersect with the proposed site, per the DE-9IM spatial relationship definition of intersects
 */
type IntersectingPlanningConstraint = {
  intersects: true;
  entities: Entity[];
} & BasePlanningConstraint;

/**
 * @title Planning constraint
 * @description Planning constraints that may intersect with the proposed site
 */
export type PlanningConstraint =
  | NonIntersectingPlanningConstraint
  | IntersectingPlanningConstraint;
