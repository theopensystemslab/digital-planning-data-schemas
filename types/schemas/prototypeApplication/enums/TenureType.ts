/**
 * @description Affordable home ownership
 */
type AHO = 'AHO';

/**
 * @description Market housing
 */
type MH = 'MH';

/**
 * @description Other
 */
type Other = 'other';

/**
 * @description Social, affordable or interim rent
 */
type SAIR = 'SAIR';

/**
 * @description Self-build and custom build
 */
type SelfCustomBuild = 'selfCustomBuild';

/**
 * @description Starter homes
 */
type SH = 'SH';

/**
 * @description Affordable rent (not at LAR benchmark rents)
 */
type AR = 'AR';

/**
 * @description Discount market rate
 */
type DMR = 'DMR';

/**
 * @description Discount market rate (charged at London Living Rents)
 */
type DMRLLR = 'DMRLLR';

/**
 * @description Discount market sale
 */
type DMS = 'DMS';

/**
 * @description London Affordable Rent
 */
type LAR = 'LAR';

/**
 * @description London Living Rent
 */
type LRR = 'LRR';

/**
 * @description London Shared Ownership
 */
type LSO = 'LSO';

/**
 * @description Market for rent
 */
type MarketForRent = 'marketForRent';

/**
 * @description Market for sale
 */
type MarketForSale = 'marketForSale';

/**
 * @description Shared equity
 */
type SharedEquity = 'sharedEquity';

/**
 * @description Social rent
 */
type SR = 'SR';

/**
 * @id #GLATenureType
 * @description Tenure types tracked by the Greater London Authority (GLA)
 */
export type GLATenureType =
  | AR
  | DMR
  | DMRLLR
  | DMS
  | LAR
  | LRR
  | LSO
  | MarketForRent
  | MarketForSale
  | SharedEquity
  | SR;

/**
 * @id #UKTenureType
 * @description Tenure types tracked throughout the UK
 */
export type UKTenureType = AHO | MH | Other | SAIR | SelfCustomBuild | SH;
