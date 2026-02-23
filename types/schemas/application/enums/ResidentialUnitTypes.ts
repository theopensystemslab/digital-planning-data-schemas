export const UKResidentialUnitTypes = {
  cluster: 'Cluster flat',
  flat: 'Flat',
  house: 'House',
  other: 'Other',
  sheltered: 'Sheltered housing',
  studio: 'Studio or bedsit',
};

export const GLAResidentialUnitTypes = {
  cluster: 'Cluster flat',
  coLiving: 'Co-living unit',
  detached: 'Detached home',
  flat: 'Flat/apartment or maisonette',
  HMO: 'House in multiple occupation (HMO)',
  hostel: 'Hostel room',
  LW: 'Live/work unit',
  other: 'Other',
  semiDetached: 'Semi-detached home',
  student: 'Student accomodation',
  studio: 'Studio or bedsit',
  terraced: 'Terraced home',
};

type UKResidentialUnitTypeKeys = keyof typeof UKResidentialUnitTypes;

type GenericUKResidentialUnitType<TKey extends UKResidentialUnitTypeKeys> = {
  value: TKey;
  description: (typeof UKResidentialUnitTypes)[TKey];
};

type UKResidentialUnitTypeMap = {
  [K in UKResidentialUnitTypeKeys]: GenericUKResidentialUnitType<K>;
};

/**
 * @id #UKResidentialUnitType
 * @description Residential unit types tracked throughout the UK
 */
export type UKResidentialUnitType =
  UKResidentialUnitTypeMap[keyof UKResidentialUnitTypeMap];

type GLAResidentialUnitTypeKeys = keyof typeof GLAResidentialUnitTypes;

type GenericGLAResidentialUnitType<TKey extends GLAResidentialUnitTypeKeys> = {
  value: TKey;
  description: (typeof GLAResidentialUnitTypes)[TKey];
};

type GLAResidentialUnitTypeMap = {
  [K in GLAResidentialUnitTypeKeys]: GenericGLAResidentialUnitType<K>;
};

/**
 * @id #GLAResidentialUnitType
 * @description Residential unit types tracked by the Greater London Authority (GLA)
 */
export type GLAResidentialUnitType =
  GLAResidentialUnitTypeMap[keyof GLAResidentialUnitTypeMap];

export const GLANonPermanentDwellings = {
  pitches:
    'Gypsy and Traveller pitches and or Travelling Showpeople or Circus people plots',
  houseboats: 'Houseboat moorings used as main residence',
  caravans: 'Other non-permanent dwellings used as main residence',
};

type GLANonPermanentDwellingsKeys = keyof typeof GLANonPermanentDwellings;

type GenericGLANonPermanentDwellings<
  TKey extends GLANonPermanentDwellingsKeys,
> = {
  value: TKey;
  description: (typeof GLANonPermanentDwellings)[TKey];
};

type GLANonPermanentDwellingsTypeMap = {
  [K in GLANonPermanentDwellingsKeys]: GenericGLANonPermanentDwellings<K>;
};

/**
 * @id #GLANonPermanentDwellings
 * @description Non-permanent dwelling details tracked by the Greater London Authority (GLA) for full planning-permission to flats
 */
export type GLANonPermanentDwellingType =
  GLANonPermanentDwellingsTypeMap[keyof GLANonPermanentDwellingsTypeMap];
