export const NationalTenureTypes = {
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

export const TenureTypes = {
  ...NationalTenureTypes,
  ...GLATenureTypes,
};
