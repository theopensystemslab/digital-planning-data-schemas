export const NationalResidentialUnitTypes = {
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

export const ResidentialUnitTypes = {
  ...NationalResidentialUnitTypes,
  ...GLAResidentialUnitTypes,
};
