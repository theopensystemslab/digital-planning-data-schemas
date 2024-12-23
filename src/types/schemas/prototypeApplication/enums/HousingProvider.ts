/**
 * @description Other affordable housing provider
 */
type AffordableHousing = 'affordableHousing';

/**
 * @description Council delivered build to rent
 */
type CouncilBuildToRent = 'councilBuildToRent';

/**
 * @description Council delivery company
 */
type CouncilDelivery = 'councilDelivery';

/**
 * @description Housing association
 */
type HA = 'HA';

/**
 * @description Local Authority
 */
type LA = 'LA';

/**
 * @description Private
 */
type Private = 'private';

/**
 * @description Private rented sector
 */
type PrivateRented = 'privateRented';

/**
 * @description Other public authority
 */
type PublicAuthority = 'publicAuthority';

/**
 * @description Self-build
 */
type SelfBuild = 'selfBuild';

/**
 * @id #GLAHousingProvider
 * @description Housing provider categories tracked by the Greater London Authority (GLA)
 */
export type GLAHousingProvider =
  | AffordableHousing
  | CouncilBuildToRent
  | CouncilDelivery
  | HA
  | LA
  | Private
  | PrivateRented
  | PublicAuthority
  | SelfBuild;
