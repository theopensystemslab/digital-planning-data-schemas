/**
 * @description Cluster flat
 */
type Cluster = 'cluster';

/**
 * @description Co-living unit
 */
type CoLiving = 'coLiving';

/**
 * @description Detached home
 */
type Detached = 'detached';

/**
 * @description Flat
 */
type Flat = 'flat';

/**
 * @description House in multiple occupation (HMO)
 */
type HMO = 'HMO';

/**
 * @description House
 */
type House = 'house';

/**
 * @description Hostel room
 */
type Hostel = 'hostel';

/**
 * @description Live/work unit
 */
type LW = 'LW';

/**
 * @description Other
 */
type Other = 'other';

/**
 * @description Semi-detached home
 */
type SemiDetached = 'semiDetached';

/**
 * @description Sheltered housing
 */
type Sheltered = 'sheltered';

/**
 * @description Studio or bedsit
 */
type Studio = 'studio';

/**
 * @description Student accommodation
 */
type Student = 'student';

/**
 * @description Terraced home
 */
type Terraced = 'terraced';

/**
 * @id #UKResidentialUnitType
 * @description Residential unit types tracked throughout the UK
 */
export type UKResidentialUnitType =
  | Cluster
  | Flat
  | House
  | Other
  | Sheltered
  | Studio;

/**
 * @id #GLAResidentialUnitType
 * @description Residential unit types tracked by the Greater London Authority (GLA)
 */
export type GLAResidentialUnitType =
  | Cluster
  | CoLiving
  | Detached
  | Flat
  | HMO
  | Hostel
  | LW
  | Other
  | SemiDetached
  | Student
  | Studio
  | Terraced;
