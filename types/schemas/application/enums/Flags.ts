/**
 * Flags and their flagset that make up a result
 */
export const Flags = {
  'Planning permission / Immune':
    'It looks like the changes may now be beyond the time limit for enforcement action. This does not apply if the changes have been deliberately concealed.',
  'Planning permission / Missing information':
    'There is some key information missing that will be needed to assess this application.',
  'Planning permission / Permission needed':
    'It looks like the proposed changes may require planning permission.',
  'Planning permission / Prior approval':
    'It looks like the proposed changes do not require planning permission, however the applicant must apply for Prior Approval before proceeding.',
  'Planning permission / Notice':
    'It looks like the proposed changes may not require planning permission, however the applicant must provide notice to the planning authority before proceeding.',
  'Planning permission / Permitted development':
    'It looks like the proposed changes may fall within the rules for Permitted Development and therefore would not need planning permission.',
  'Planning permission / Not development':
    "It looks like the proposed changes may not fall within the legal definition of 'development', and therefore would not require planning permission.",
  'Works to listed buildings / Missing information': '',
  'Works to listed buildings / Consent needed': '',
  'Works to listed buildings / De minimis': '',
  'Works to listed buildings / Not required': '',
  'Works to trees & hedges / Missing information': '',
  'Works to trees & hedges / Consent needed': '',
  'Works to trees & hedges / Notice': '',
  'Works to trees & hedges / Not required': '',
  'Demolition in a conservation area / Missing information': '',
  'Demolition in a conservation area / Consent needed': '',
  'Demolition in a conservation area / De minimis': '',
  'Demolition in a conservation area / Not required': '',
  'Planning policy / Missing information': '',
  'Planning policy / Fails to meet policy': '',
  'Planning policy / Edge case': '',
  'Planning policy / Meets policy': '',
  'Community infrastructure levy / Missing information': '',
  'Community infrastructure levy / Exempt': '',
  'Community infrastructure levy / Relief': '',
  'Community infrastructure levy / Liable': '',
  'Community infrastructure levy / Not liable': '',
  'Material change of use / Missing information': '',
  'Material change of use / Material change of use': '',
  'Material change of use / Not material change of use': '',
};

type FlagKeys = keyof typeof Flags;

type GenericFlag<TKey extends FlagKeys> = {
  value: TKey;
  description: (typeof Flags)[TKey];
};

type FlagMap = {
  [K in FlagKeys]: GenericFlag<K>;
};

/**
 * @id #ResultFlag
 * @description The result of a single flagset
 */
export type ResultFlag = FlagMap[keyof FlagMap];
