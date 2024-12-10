/**
 * @description Part M4(2) of the Building Regulations 2010
 */
type M42 = 'm42';

/**
 * @description Part M4(3)(2a) of the Building Regulations 2010
 */
type M432a = 'm432a';

/**
 * @description Part M4(3)(2b) of the Building Regulations 2010
 */
type M432b = 'm432b';

/**
 * @description None of these
 */
type None = 'none';

/**
 * @id #BuildingRegulation
 * @description Building regulations
 */
export type BuildingRegulation = M42 | M432a | M432b | None;
