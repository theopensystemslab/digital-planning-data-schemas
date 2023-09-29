/**
 * Minimum set of values for `property.constraints.planning`
 *   actual values will also include council-specific variables like `article4.{councilName}.hmo`
 */
export const PlanningConstraints = {
  article4: 'Article 4 Direction area',
  'article4.caz': 'Central Activities Zone (CAZ)',
  designated: 'Designated land',
  'designated.AONB': 'Area of Outstanding Natural Beauty (AONB)',
  'designated.conservationArea': 'Conservation Area',
  'designated.nationalPark': 'National Park',
  'designated.nationalPark.broads': 'National Park - Broads',
  'designated.SPA': 'Special Protection Area (SPA)',
  'designated.WHS': 'UNESCO World Heritage Site or buffer zone',
  listed: 'Listed Building',
  locallyListed: 'Locally Listed Building',
  monument: 'Site of a Scheduled Monument',
  'nature.ASNW': 'Ancient Semi-Natural Woodland (ASNW)',
  'nature.SAC': 'Special Area of Conservation (SAC)',
  'nature.SSSI': 'Site of Special Scientific Interest (SSSI)',
  registeredPark: 'Historic Park or Garden',
  'road.classified': 'Classified Road',
  tpo: 'Tree Preservation Order (TPO) or zone',
};
