export const DevelopmentTypes = {
  changeOfUse: 'Change of use',
  changeOfUseFrom: 'Change of use of an existing single home',
  changeOfUseTo: 'Change of use to a home',
  conversion: 'Conversion',
  extension: 'Extension',
  newBuild: 'New build',
  notKnown: 'Not known',
};

type DevelopmentTypeKeys = keyof typeof DevelopmentTypes;

type GenericDevelopmentType<TKey extends DevelopmentTypeKeys> = {
  value: TKey;
  description: (typeof DevelopmentTypes)[TKey];
};

type DevelopmentTypeMap = {
  [K in DevelopmentTypeKeys]: GenericDevelopmentType<K>;
};

/**
 * @id #DevelopmentType
 * @description Development types
 */
export type DevelopmentType = DevelopmentTypeMap[keyof DevelopmentTypeMap];
