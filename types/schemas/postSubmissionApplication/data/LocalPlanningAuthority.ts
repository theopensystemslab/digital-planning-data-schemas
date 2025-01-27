import {PrimaryApplicationType} from '../../prototypeApplication/enums/ApplicationType';

type LocalPlanningAuthorityBase = {
  /**
   * When an application is validated it immediately goes into the consultation stage (if the application type allows it)
   * However some LPA's allow comments until a decision regardles of whether there is a consultation stage
   * This field allows LPA's to set this behaviour per application in their back office and not obstruct the planning process
   */
  commentsAcceptedUntilDecision: boolean;
};

/**
 * TypeMap of PrimaryLocalPlanningAuthorityTypes to their specific LocalPlanningAuthority models
 */
type LocalPlanningAuthorityVariants = {};

/**
 * @internal Conditional type to return a specific or generic Property model, based on PrimaryLocalPlanningAuthorityType
 */
export type LocalPlanningAuthority<TPrimary extends PrimaryApplicationType> =
  TPrimary extends keyof LocalPlanningAuthorityVariants
    ? LocalPlanningAuthorityVariants[TPrimary]
    : LocalPlanningAuthorityBase;
