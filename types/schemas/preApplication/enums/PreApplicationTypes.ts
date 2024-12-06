/**
 * Values of `data.application.type`
 */
export const PreApplicationTypes = {
  preApp: 'Pre-application advice',
  'preApp.householder': 'Pre-application advice - Householder',
  'preApp.minor': 'Pre-application advice - Minor',
  'preApp.major': 'Pre-application advice - Major',
};

export type PreApplicationTypeKeys = keyof typeof PreApplicationTypes;

type GenericPreApplicationType<TKey extends PreApplicationTypeKeys> = {
  value: TKey;
  description: (typeof PreApplicationTypes)[TKey];
};

type PreApplicationTypeMap = {
  [K in PreApplicationTypeKeys]: GenericPreApplicationType<K>;
};

/**
 * @id #PreApplicationType
 * @description Planning application types
 */
export type PreApplicationType =
  PreApplicationTypeMap[keyof PreApplicationTypeMap];
