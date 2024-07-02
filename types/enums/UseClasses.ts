export const GLAUseClasses = {
  bTwo: 'B2 - General industry',
  bEight: 'B8 - Storage and distribution',
  cOne: 'C1 - Hotels',
  cTwo: 'C2 - Residential institutions',
  cTwoA: 'C2a - Secure residential institutions',
  cThree: 'C3 - Dwellinghouses',
  cFour: 'C4 - Houses in multiple occupation (HMOs)',
  e: 'E - Commercial, business and service',
  fOne: 'F1 - Learning and non-residential institutions',
  fTwo: 'F2 - Local community uses',
  SG: 'Sui generis',
  unknown: 'Not known',
};

type GLAUseClassKeys = keyof typeof GLAUseClasses;

type GenericGLAUseClass<TKey extends GLAUseClassKeys> = {
  value: TKey;
  description: (typeof GLAUseClasses)[TKey];
};

type GLAUseClassMap = {
  [K in GLAUseClassKeys]: GenericGLAUseClass<K>;
};

/**
 * @id #GLAUseClass
 * @description Use classes tracked by the Greater London Authority (GLA)
 */
export type GLAUseClass = GLAUseClassMap[keyof GLAUseClassMap];