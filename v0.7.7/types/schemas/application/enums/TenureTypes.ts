export const UKTenureTypes = {
  AHO: 'Affordable home ownership',
  MH: 'Market housing',
  other: 'Other',
  SAIR: 'Social, affordable or interim rent',
  selfCustomBuild: 'Self-build and custom build',
  SH: 'Starter homes',
};

export const GLATenureTypes = {
  AR: 'Affordable rent (not at LAR benchmark rents)',
  DMR: 'Discount market rate',
  DMRLLR: 'Discount market rate (charged at London Living Rents)',
  DMS: 'Discount market sale',
  LAR: 'London Affordable Rent',
  LRR: 'London Living Rent',
  LSO: 'London Shared Ownership',
  marketForRent: 'Market for rent',
  marketForSale: 'Market for sale',
  other: 'Other',
  selfCustomBuild: 'Self-build and custom build',
  SH: 'Starter homes',
  sharedEquity: 'Shared equity',
  SR: 'Social rent',
};

type UKTenureTypeKeys = keyof typeof UKTenureTypes;

type GenericUKTenureType<TKey extends UKTenureTypeKeys> = {
  value: TKey;
  description: (typeof UKTenureTypes)[TKey];
};

type UKTenureTypeMap = {
  [K in UKTenureTypeKeys]: GenericUKTenureType<K>;
};

/**
 * @id #UKTenureType
 * @description Tenure types tracked throughout the UK
 */
export type UKTenureType = UKTenureTypeMap[keyof UKTenureTypeMap];

type GLATenureTypeKeys = keyof typeof GLATenureTypes;

type GenericGLATenureType<TKey extends GLATenureTypeKeys> = {
  value: TKey;
  description: (typeof GLATenureTypes)[TKey];
};

type GLATenureTypeMap = {
  [K in GLATenureTypeKeys]: GenericGLATenureType<K>;
};

/**
 * @id #GLATenureType
 * @description Tenure types tracked by the Greater London Authority (GLA)
 */
export type GLATenureType = GLATenureTypeMap[keyof GLATenureTypeMap];
