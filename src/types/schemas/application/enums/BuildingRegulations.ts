/**
 * Values of `data.proposal.units.residential`
 */
export const BuildingRegulations = {
  m42: 'Part M4(2) of the Building Regulations 2010',
  m432a: 'Part M4(3)(2a) of the Building Regulations 2010',
  m432b: 'Part M4(3)(2b) of the Building Regulations 2010',
  none: 'None of these',
};

type BuildingRegulationKeys = keyof typeof BuildingRegulations;

type GenericBuildingRegulation<TKey extends BuildingRegulationKeys> = {
  value: TKey;
  description: (typeof BuildingRegulations)[TKey];
};

type BuildingRegulationMap = {
  [K in BuildingRegulationKeys]: GenericBuildingRegulation<K>;
};

/**
 * @id #BuildingRegulation
 * @description Building regulations
 */
export type BuildingRegulation =
  BuildingRegulationMap[keyof BuildingRegulationMap];
