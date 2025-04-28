import {ApplicationType} from '../../prototypeApplication/enums/ApplicationType';

export type CaseOfficerBase = {
  name: string;
};

/**
 * TypeMap of granular application types to their specific CaseOfficer models
 */
type CaseOfficerVariants = {};

/**
 * @internal Conditional type to return a specific or generic Property model
 */
export type CaseOfficer<T extends ApplicationType> =
  T extends keyof CaseOfficerVariants
    ? CaseOfficerVariants[T]
    : CaseOfficerBase;
