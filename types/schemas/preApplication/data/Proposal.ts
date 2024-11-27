import {GeoBoundary} from '../../application/data/shared';

export interface Proposal {
  description: string;
  /**
   * @description Location plan boundary proposed by the user, commonly referred to as the red line boundary
   */
  boundary?: GeoBoundary;
}
