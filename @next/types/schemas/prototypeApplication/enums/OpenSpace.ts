/**
 * @description Allotments, community gardens and city farms
 */
type Allotment = 'allotment';

/**
 * @description Amenity
 */
type Amenity = 'amenity';

/**
 * @description Brownfield land
 */
type Brownfield = 'brownfield';

/**
 * @description Cemeteries, churchyards and other burial grounds
 */
type Burial = 'burial';

/**
 * @description Provision for children and young people
 */
type Children = 'children';

/**
 * @description Civic spaces
 */
type Civic = 'civic';

/**
 * @description Countryside in urban fringe areas
 */
type Fringe = 'fringe';

/**
 * @description Green corridors
 */
type GreenCorridor = 'greenCorridor';

/**
 * @description Natural and semi-natural
 */
type Natural = 'natural';

/**
 * @description Non-residential institution grounds or gardens
 */
type NonResidential = 'nonResidential';

/**
 * @description Parks and gardens
 */
type Park = 'park';

/**
 * @description Residential gardens
 */
type Residential = 'residential';

/**
 * @description Outdoor sports facilities
 */
type Sport = 'sport';

/**
 * @description Green Belt
 */
type GreenBelt = 'greenBelt';

/**
 * @description Local Open Spaces
 */
type Local = 'local';

/**
 * @description Metropolitan Open Land
 */
type Metropolitan = 'metropolitan';

/**
 * @description Not designated
 */
type None = 'none';

/**
 * @description Other designation
 */
type Other = 'other';

/**
 * @id #OpenSpaceType
 * @description Types of natural open spaces
 */
export type OpenSpaceType =
  | Allotment
  | Amenity
  | Brownfield
  | Burial
  | Children
  | Civic
  | Fringe
  | GreenCorridor
  | Natural
  | NonResidential
  | Park
  | Residential
  | Sport;

/**
 * @id #OpenSpaceDesignation
 * @description Designations of natural open spaces
 */
export type OpenSpaceDesignation =
  | GreenBelt
  | Local
  | Metropolitan
  | None
  | Other;
