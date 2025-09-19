/**
 * @description Comment on the design, size or height of new buildings or extensions
 */
type Design = 'design';

/**
 * @description Comment on the use and function of the proposed development
 */
type Use = 'use';

/**
 * @description Comment on impacts on natural light
 */
type Light = 'light';

/**
 * @description Comment on impacts to the privacy of neighbours
 */
type Privacy = 'privacy';

/**
 * @description Comment on impacts on disabled persons' access
 */
type Access = 'access';

/**
 * @description Comment on any noise from new uses
 */
type Noise = 'noise';

/**
 * @description Comment on impacts to traffic, parking or road safety
 */
type Traffic = 'traffic';

/**
 * @description Comment on other things
 */
type Other = 'other';

/**
 * @id #PublicCommentTopic
 * @description Types of comments
 */
export type PublicCommentTopic =
  | Design
  | Use
  | Light
  | Privacy
  | Access
  | Noise
  | Traffic
  | Other;
