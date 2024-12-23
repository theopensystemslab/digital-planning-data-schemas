/**
 * @description B2 - General industry
 */
type BTwo = 'bTwo';

/**
 * @description B8 - Storage and distribution
 */
type BEight = 'bEight';

/**
 * @description C1 - Hotels
 */
type COne = 'cOne';

/**
 * @description C2 - Residential institutions
 */
type CTwo = 'cTwo';

/**
 * @description C2a - Secure residential institutions
 */
type CTwoA = 'cTwoA';

/**
 * @description C3 - Dwellinghouses
 */
type CThree = 'cThree';

/**
 * @description C4 - Houses in multiple occupation (HMOs)
 */
type CFour = 'cFour';

/**
 * @description E - Commercial, business and service
 */
type E = 'e';

/**
 * @description F1 - Learning and non-residential institutions
 */
type FOne = 'fOne';

/**
 * @description F2 - Local community uses
 */
type FTwo = 'fTwo';

/**
 * @description Sui generis
 */
type SG = 'SG';

/**
 * @description Not known
 */
type Unknown = 'unknown';

/**
 * @id #GLAUseClass
 * @description Use classes tracked by the Greater London Authority (GLA)
 */
export type GLAUseClass =
  | BTwo
  | BEight
  | COne
  | CTwo
  | CTwoA
  | CThree
  | CFour
  | E
  | FOne
  | FTwo
  | SG
  | Unknown;
