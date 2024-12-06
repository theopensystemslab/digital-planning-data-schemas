import {Entity} from './Entity';

type BasePlanningConstraint = {
  value: string;
  description: string;
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
 * @title #PlanningConstraint
 * @description Planning constraints that intersect with the proposed site
 */
export type PlanningConstraint =
  | NonIntersectingPlanningConstraint
  | IntersectingPlanningConstraint;
