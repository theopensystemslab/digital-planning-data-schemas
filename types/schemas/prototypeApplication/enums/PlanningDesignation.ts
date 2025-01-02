import {Entity} from '../data/shared';
/**
 * @description Article 4 Direction area
 */
type ArticleFour = 'articleFour';

/**
 * @description Central Activities Zone (CAZ)
 */
type ArticleFourCAZ = 'articleFour.caz';

/**
 * @description Brownfield site
 */
type BrownfieldSite = 'brownfieldSite';

/**
 * @description Designated land
 */
type Designated = 'designated';

/**
 * @description Area of Outstanding Natural Beauty (AONB)
 */
type DesignatedAONB = 'designated.AONB';

/**
 * @description Conservation Area
 */
type DesignatedConservationArea = 'designated.conservationArea';

/**
 * @description National Park
 */
type DesignatedNationalPark = 'designated.nationalPark';

/**
 * @description National Park - Broads
 */
type DesignatedNationalParkBroads = 'designated.nationalPark.broads';

/**
 * @description UNESCO World Heritage Site or buffer zone
 */
type DesignatedWHS = 'designated.WHS';

/**
 * @description Flood Risk Zone
 */
type Flood = 'flood';

/**
 * @description Flood Risk Zone 1 - Low risk
 */
type FloodZone1 = 'flood.zoneOne';

/**
 * @description Flood Risk Zone 2 - Medium risk
 */
type FloodZone2 = 'flood.zoneTwo';

/**
 * @description Flood Risk Zone 3 - High risk
 */
type FloodZone3 = 'flood.zoneThree';

/**
 * @description Green Belt
 */
type GreenBelt = 'greenBelt';

/**
 * @description Listed Building
 */
type Listed = 'listed';

/**
 * @description Listed Building - Grade I
 */
type ListedGradeI = 'listed.gradeOne';

/**
 * @description Listed Building - Grade II
 */
type ListedGradeII = 'listed.gradeTwo';

/**
 * @description Listed Building - Grade II*
 */
type ListedGradeIIStar = 'listed.gradeTwoStar';

/**
 * @description Locally Listed Building
 */
type LocallyListed = 'locallyListed';

/**
 * @description Site of a Scheduled Monument
 */
type Monument = 'monument';

/**
 * @description Ancient Semi-Natural Woodland (ASNW)
 */
type NatureASNW = 'nature.ASNW';

/**
 * @description Ramsar site
 */
type NatureRamsarSite = 'nature.ramsarSite';

/**
 * @description Special Area of Conservation (SAC)
 */
type NatureSAC = 'nature.SAC';

/**
 * @description Special Protection Area (SPA)
 */
type NatureSPA = 'nature.SPA';

/**
 * @description Site of Special Scientific Interest (SSSI)
 */
type NatureSSSI = 'nature.SSSI';

/**
 * @description Historic Park or Garden
 */
type RegisteredPark = 'registeredPark';

/**
 * @description Classified Road
 */
type RoadClassified = 'road.classified';

/**
 * @description Tree Preservation Order (TPO) or zone
 */
type TPO = 'tpo';

export type BasePlanningDesignation =
  | ArticleFour
  | ArticleFourCAZ
  | BrownfieldSite
  | Designated
  | DesignatedAONB
  | DesignatedConservationArea
  | DesignatedNationalPark
  | DesignatedNationalParkBroads
  | DesignatedWHS
  | Flood
  | FloodZone1
  | FloodZone2
  | FloodZone3
  | GreenBelt
  | Listed
  | ListedGradeI
  | ListedGradeII
  | ListedGradeIIStar
  | LocallyListed
  | Monument
  | NatureASNW
  | NatureRamsarSite
  | NatureSAC
  | NatureSPA
  | NatureSSSI
  | RegisteredPark
  | RoadClassified
  | TPO;

/**
 * @description A planning designation that does not intersect with the proposed site, per the DE-9IM spatial relationship definition of intersects
 */
type NonIntersectingPlanningDesignation = {
  intersects: false;
} & {value: BasePlanningDesignation};

/**
 * @description A planning designation that does intersect with the proposed site, per the DE-9IM spatial relationship definition of intersects
 */
type IntersectingPlanningDesignation = {
  intersects: true;
  entities?: Entity[];
} & {value: BasePlanningDesignation};

/**
 * @id #PlanningDesignation
 * @description Planning designations that may intersect with the proposed site determined by spatial queries against Planning Data (planning.data.gov.uk) and Ordnance Survey
 */
export type PlanningDesignation =
  | NonIntersectingPlanningDesignation
  | IntersectingPlanningDesignation;

type BasePlanningConstraint = {
  constraint: string;
};

/**
 * @description A planning constraint that does not intersect with the proposed site, per the DE-9IM spatial relationship definition of intersects
 */
type NonIntersectingPlanningConstraint = {
  intersects: false;
} & BasePlanningConstraint;

/**
 * @description A planning constraint that does intersect with the proposed site, per the DE-9IM spatial relationship definition of intersects
 */
type IntersectingPlanningConstraint = {
  intersects: true;
  entities: Entity[];
} & BasePlanningConstraint;

/**
 * @id #PlanningConstraint
 * @description Planning constraints that intersect with the proposed site
 */
export type PlanningConstraint =
  | NonIntersectingPlanningConstraint
  | IntersectingPlanningConstraint;
