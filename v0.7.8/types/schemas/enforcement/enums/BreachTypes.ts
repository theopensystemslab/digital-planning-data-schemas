// Sourced from https://editor.planx.uk/open-digital-planning/report-a-planning-breach-about-the-breach
//   and https://editor.planx.uk/open-digital-planning/report-a-planning-breach-scoping
export const BreachTypes = {
  alter: 'Alteration',
  'alter.boundary': 'New or modified boundary fence or wall',
  'alter.equipment.antennae': 'Microwave antennas or satellite dishes',
  'alter.highways': 'Creation of a new access (eg a dropped kerb)',
  'alter.landscape': 'Change of land levels',
  'alter.openings': 'Works to windows or doors',
  'alter.roof': 'Changes to roof including skylights',
  'alter.soilPipes': 'Chimney flue or soil and vent pipes',
  'alter.surfaces.parking': 'Creation of driveway or laying of hardstanding',
  'alter.swimmingPool': 'New or modified swimming pool',
  'alter.trees': 'Works to trees',
  'alter.trees.tree': 'Works to a dangerous or dead tree',
  'alter.trees.tree.other': 'Other works to a tree',
  'alter.trees.tree.prune': 'Works to a healthy tree',
  'alter.trees.tree.remove': 'Felling of a tree',
  changeOfUse: 'Unauthorised change of use',
  'changeOfUse.caravans': 'Caravan or mobile homes',
  extend: 'Extension',
  'extend.porch': 'New or modified porch',
  'extend.roof.dormer': 'Inserting a dormer window',
  listed: 'Works to a listed building',
  minerals: 'Minerals and waste development',
  other: 'Other type of planning breach',
  outbuilding: 'New or modified outbuilding (eg garage or shed)',
  planningCondition: 'Breach of a planning condition',
  signage: 'New adverts or signage (including flags)',
  untidySite: 'Untidy land',
};

type BreachTypeKeys = keyof typeof BreachTypes;

type GenericBreachType<TKey extends BreachTypeKeys> = {
  value: TKey;
  description: (typeof BreachTypes)[TKey];
};

type BreachTypeMap = {
  [K in BreachTypeKeys]: GenericBreachType<K>;
};

/**
 * @id #BreachType
 * @description Planning breach types
 */
export type BreachType = BreachTypeMap[keyof BreachTypeMap];
