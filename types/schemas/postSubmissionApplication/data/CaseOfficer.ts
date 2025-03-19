import {PrimaryApplicationType} from '../../prototypeApplication/enums/ApplicationType';

export type CaseOfficerBase = {
  name: string;
};

/**
 * TypeMap of PrimaryApplicationTypes to their specific CaseOfficer models
 */
type CaseOfficerVariants = {};

/**
 * @internal Conditional type to return a specific or generic Property model, based on PrimaryApplicationType
 */
export type CaseOfficer<TPrimary extends PrimaryApplicationType> =
  TPrimary extends keyof CaseOfficerVariants
    ? CaseOfficerVariants[TPrimary]
    : CaseOfficerBase;
