export const GLAOpenSpaceTypes = {
  allotment: 'Allotments, community gardens and city farms',
  amenity: 'Amenity',
  brownfield: 'Brownfield land',
  burial: 'Cemeteries, churchyards and other burial grounds',
  children: 'Provision for children and young people',
  civic: 'Civic spaces',
  fringe: 'Countryside in urban fringe areas',
  greenCorridor: 'Green corridors',
  natural: 'Natural and semi-natural',
  nonResidential: 'Non-residential institution grounds or gardens',
  park: 'Parks and gardens',
  residential: 'Residential gardens',
  sport: 'Outdoor sports facilities',
};

export const GLAOpenSpaceDesignations = {
  greenBelt: 'Green Belt',
  local: 'Local Open Spaces',
  metropolitan: 'Metropolitan Open Land',
  none: 'Not designated',
  other: 'Other designation',
};

type OpenSpaceTypeKeys = keyof typeof GLAOpenSpaceTypes;

type GenericOpenSpaceType<TKey extends OpenSpaceTypeKeys> = {
  value: TKey;
  description: (typeof GLAOpenSpaceTypes)[TKey];
};

type OpenSpaceTypeMap = {
  [K in OpenSpaceTypeKeys]: GenericOpenSpaceType<K>;
};

/**
 * @id #OpenSpaceType
 * @description Types of natural open spaces
 */
export type OpenSpaceType = OpenSpaceTypeMap[keyof OpenSpaceTypeMap];

type OpenSpaceDesignationKeys = keyof typeof GLAOpenSpaceDesignations;

type GenericOpenSpaceDesignation<TKey extends OpenSpaceDesignationKeys> = {
  value: TKey;
  description: (typeof GLAOpenSpaceDesignations)[TKey];
};

type OpenSpaceDesignationMap = {
  [K in OpenSpaceDesignationKeys]: GenericOpenSpaceDesignation<K>;
};

/**
 * @id #OpenSpaceDesignation
 * @description Designations of natural open spaces
 */
export type OpenSpaceDesignation =
  OpenSpaceDesignationMap[keyof OpenSpaceDesignationMap];
