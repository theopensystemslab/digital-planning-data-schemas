/**
 * @description Change of use
 */
type ChangeOfUse = 'changeOfUse';

/**
 * @description Change of use of an existing single home
 */
type ChangeOfUseFrom = 'changeOfUseFrom';

/**
 * @description Change of use to a home
 */
type ChangeOfUseTo = 'changeOfUseTo';

/**
 * @description Conversion
 */
type Conversion = 'conversion';

/**
 * @description Extension
 */
type Extension = 'extension';

/**
 * @description New build
 */
type NewBuild = 'newBuild';

/**
 * @description Not known
 */
type NotKnown = 'notKnown';

/**
 * @id #DevelopmentType
 * @description Development types
 */
export type DevelopmentType =
  | ChangeOfUse
  | ChangeOfUseFrom
  | ChangeOfUseTo
  | Conversion
  | Extension
  | NewBuild
  | NotKnown;
