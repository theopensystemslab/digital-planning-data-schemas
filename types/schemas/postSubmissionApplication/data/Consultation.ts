import {Date} from '../../../shared/utils';
import {PrimaryApplicationType} from '../../prototypeApplication/enums/ApplicationType';

type ConsultationBase = {
  /**
   * YYYY-MM-DD
   * This is the date that the consultation will start for the application.
   */
  startDate: Date;
  /**
   * YYYY-MM-DD
   * This is the date that the statutory consultation will end for the application.
   */
  endDate: Date;

  /**
   * @todo expiry and extensions?
   */

  /**
   * @todo Expand on Site Notice
   */
  siteNotice: boolean;
};

/**
 * TypeMap of PrimaryApplicationTypes to their specific Consultation models
 */
type ConsultationVariants = {};

/**
 * @internal Conditional type to return a specific or generic Property model, based on PrimaryApplicationType
 */
export type Consultation<TPrimary extends PrimaryApplicationType> =
  TPrimary extends keyof ConsultationVariants
    ? ConsultationVariants[TPrimary]
    : ConsultationBase;
