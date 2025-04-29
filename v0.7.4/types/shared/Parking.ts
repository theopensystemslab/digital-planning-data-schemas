type ProposedCount = {
  count: number;
  difference: number;
};

type ExistingCount = {count: number};

/**
 * @description Proposed parking spaces and total change or difference in parking spaces per the Greater London Authority specification
 */
export type ProposedLondonParking = {
  cars?: ProposedCount;
  vans?: ProposedCount;
  motorcycles?: ProposedCount;
  cycles?: ProposedCount;
  buses?: ProposedCount;
  disabled?: ProposedCount;
  carClub?: ProposedCount;
  offStreet?: {residential: ProposedCount};
  other?: ProposedCount;
};

/**
 * @description Existing parking spaces on the site per the Greater London Authority specification
 */
export type ExistingLondonParking = {
  cars?: ExistingCount;
  vans?: ExistingCount;
  motorcycles?: ExistingCount;
  cycles?: ExistingCount;
  buses?: ExistingCount;
  disabled?: ExistingCount;
  carClub?: ExistingCount;
  offStreet?: {residential: ExistingCount};
  other?: ExistingCount;
};
