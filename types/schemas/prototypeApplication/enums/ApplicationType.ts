/**
 * @internal
 * @description Map of planning application types to their descriptors.
 * This map is used to provide a consistent set of application types across the system.
 * Each key is a specific application type, and the value is an object containing
 * the code, label, and whether it is a service descriptor.
 * Service descriptors are not submittable but are used to create the primary application type lists
 * This map is used to ensure that the application types are consistent and can be easily referenced.
 */
export const applicationTypeMap = {
  // advertConsent
  advertConsent: {
    code: 'advertConsent',
    label: 'Consent to display an advertisement',
    isServiceDescriptor: false,
  },
  // amendment
  amendment: {
    code: 'amendment',
    label:
      'Consent to make small changes to a project with Planning Permission',
    isServiceDescriptor: true,
  },
  'amendment.minorMaterial': {
    code: 'amendment.minorMaterial',
    label:
      'Consent to make small (minor material) changes to a project with Planning Permission',
    isServiceDescriptor: false,
  },
  'amendment.nonMaterial': {
    code: 'amendment.nonMaterial',
    label:
      'Consent to make small (non-material) changes to a project with Planning Permission',
    isServiceDescriptor: false,
  },
  // approval
  approval: {
    code: 'approval',
    label: 'Planning approval',
    isServiceDescriptor: true,
  },
  'approval.conditions': {
    code: 'approval.conditions',
    label: 'Approval of details reserved by condition',
    isServiceDescriptor: false,
  },
  'approval.reservedMatters': {
    code: 'approval.reservedMatters',
    label: 'Approval of reserved matters',
    isServiceDescriptor: false,
  },
  // complianceConfirmation
  complianceConfirmation: {
    code: 'complianceConfirmation',
    label: 'Written confirmation of compliance with a planning condition',
    isServiceDescriptor: false,
  },
  //environmentalImpact
  environmentalImpact: {
    code: 'environmentalImpact',
    label: 'Environmental Impact Decision',
    isServiceDescriptor: true,
  },
  'environmentalImpact.scoping': {
    code: 'environmentalImpact.scoping',
    label: 'Environmental Impact Decision - Scoping',
    isServiceDescriptor: false,
  },
  'environmentalImpact.screening': {
    code: 'environmentalImpact.screening',
    label: 'Environmental Impact Decision - Screening',
    isServiceDescriptor: false,
  },
  // hazardousSubstanceConsent
  hazardousSubstanceConsent: {
    code: 'hazardousSubstanceConsent',
    label: 'Consent to move and dispose of hazardous substances',
    isServiceDescriptor: false,
  },
  // hedgerowRemovalNotice
  hedgerowRemovalNotice: {
    code: 'hedgerowRemovalNotice',
    label: 'Notice to remove a hedge',
    isServiceDescriptor: false,
  },
  // landDrainageConsent
  landDrainageConsent: {
    code: 'landDrainageConsent',
    label:
      'Consent to do works affecting ordinary watercourses or land drainage',
    isServiceDescriptor: false,
  },
  // ldc
  ldc: {
    code: 'ldc',
    label: 'Lawful Development Certificate',
    isServiceDescriptor: true,
  },
  'ldc.breachOfCondition': {
    code: 'ldc.breachOfCondition',
    label:
      'Lawful Development Certificate - Existing use lawful not to comply with a condition (S191C)',
    isServiceDescriptor: false,
  },
  'ldc.existing': {
    code: 'ldc.existing',
    label: 'Lawful Development Certificate - Existing use',
    isServiceDescriptor: false,
  },
  'ldc.listedBuildingWorks': {
    code: 'ldc.listedBuildingWorks',
    label: 'Lawful Development Certificate - Works to a Listed Building (S26H)',
    isServiceDescriptor: false,
  },
  'ldc.proposed': {
    code: 'ldc.proposed',
    label: 'Lawful Development Certificate - Proposed use',
    isServiceDescriptor: false,
  },
  // listed
  listed: {
    code: 'listed',
    label: 'Consent to do works to a Listed Building',
    isServiceDescriptor: false,
  },
  // notifyCompletion
  notifyCompletion: {
    code: 'notifyCompletion',
    label: 'Notification of completion',
    isServiceDescriptor: false,
  },
  // obligation
  obligation: {
    code: 'obligation',
    label: 'Planning obligation',
    isServiceDescriptor: true,
  },
  'obligation.discharge': {
    code: 'obligation.discharge',
    label: 'Discharge a planning obligation',
    isServiceDescriptor: false,
  },
  'obligation.modify': {
    code: 'obligation.modify',
    label: 'Modify a planning obligation',
    isServiceDescriptor: false,
  },
  // onshoreExtractionOilAndGas
  onshoreExtractionOilAndGas: {
    code: 'onshoreExtractionOilAndGas',
    label: 'Onshore extraction of oil and gas',
    isServiceDescriptor: true,
  },
  'onshoreExtractionOilAndGas.other': {
    code: 'onshoreExtractionOilAndGas.other',
    label: 'Onshore extraction of oil and gas - Other',
    isServiceDescriptor: false,
  },
  'onshoreExtractionOilAndGas.pp.extension': {
    code: 'onshoreExtractionOilAndGas.pp.extension',
    label:
      'Onshore extraction of oil and gas - Full planning permission for an extension to an existing site including associated development',
    isServiceDescriptor: false,
  },
  'onshoreExtractionOilAndGas.pp.waste': {
    code: 'onshoreExtractionOilAndGas.pp.waste',
    label:
      'Onshore extraction of oil and gas - Full planning permission for waste development',
    isServiceDescriptor: false,
  },
  'onshoreExtractionOilAndGas.pp.working': {
    code: 'onshoreExtractionOilAndGas.pp.working',
    label:
      'Onshore extraction of oil and gas - Full planning permission for oil and gas working including exploratory, appraisal and production phases',
    isServiceDescriptor: false,
  },
  'onshoreExtractionOilAndGas.review': {
    code: 'onshoreExtractionOilAndGas.review',
    label:
      'Onshore extraction of oil and gas - Review of conditions applying to Mineral Permissions (ROMPs)',
    isServiceDescriptor: false,
  },
  'onshoreExtractionOilAndGas.variation': {
    code: 'onshoreExtractionOilAndGas.variation',
    label: 'Onshore extraction of oil and gas - Variation of conditions',
    isServiceDescriptor: false,
  },
  // pa
  pa: {code: 'pa', label: 'Prior Approval', isServiceDescriptor: true},
  'pa.part1.classA': {
    code: 'pa.part1.classA',
    label: 'Prior Approval - Larger extension to a house',
    isServiceDescriptor: false,
  },
  'pa.part1.classAA': {
    code: 'pa.part1.classAA',
    label: 'Prior Approval - Adding storeys to a house',
    isServiceDescriptor: false,
  },
  'pa.part3.classG': {
    code: 'pa.part3.classG',
    label: 'Prior Approval - Convert a commercial building to mixed use',
    isServiceDescriptor: false,
  },
  'pa.part3.classM': {
    code: 'pa.part3.classM',
    label: 'Prior Approval - Convert a mixed use building into a home',
    isServiceDescriptor: false,
  },
  'pa.part3.classMA': {
    code: 'pa.part3.classMA',
    label:
      'Prior Approval - Convert a commercial building into a home or homes',
    isServiceDescriptor: false,
  },
  'pa.part3.classN': {
    code: 'pa.part3.classN',
    label:
      'Prior Approval - Convert a casino or amusement arcade into a home or homes',
    isServiceDescriptor: false,
  },
  'pa.part3.classQ': {
    code: 'pa.part3.classQ',
    label: 'Prior Approval - Convert an agricultural building into a home',
    isServiceDescriptor: false,
  },
  'pa.part3.classR': {
    code: 'pa.part3.classR',
    label:
      'Prior Approval - Convert an agricultural building to a commercial use',
    isServiceDescriptor: false,
  },
  'pa.part3.classS': {
    code: 'pa.part3.classS',
    label: 'Prior Approval - Convert an agricultural building to a school',
    isServiceDescriptor: false,
  },
  'pa.part3.classT': {
    code: 'pa.part3.classT',
    label: 'Prior Approval - Convert a commercial building to a school',
    isServiceDescriptor: false,
  },
  'pa.part3.classV': {
    code: 'pa.part3.classV',
    label:
      'Prior Approval - Changes of use permitted under a permission granted on an application',
    isServiceDescriptor: false,
  },
  'pa.part4.classBB': {
    code: 'pa.part4.classBB',
    label: 'Prior Approval - Put up a temporary structure',
    isServiceDescriptor: false,
  },
  'pa.part4.classBC': {
    code: 'pa.part4.classBC',
    label: 'Prior Approval - Develop a temporary campsite',
    isServiceDescriptor: false,
  },
  'pa.part4.classCA': {
    code: 'pa.part4.classCA',
    label:
      'Prior Approval - Put temporary school buildings on vacant commercial land',
    isServiceDescriptor: false,
  },
  'pa.part4.classE': {
    code: 'pa.part4.classE',
    label: 'Prior Approval - Use a building or land to shoot a film',
    isServiceDescriptor: false,
  },
  'pa.part6': {
    code: 'pa.part6',
    label:
      'Prior Approval - Alter or add new buildings to agricultural or forestry sites',
    isServiceDescriptor: false,
  },
  'pa.part6.classA': {
    code: 'pa.part6.classA',
    label:
      'Prior Approval - Build new agricultural buildings on a unit of 5 hectares or more',
    isServiceDescriptor: false,
  },
  'pa.part6.classB': {
    code: 'pa.part6.classB',
    label:
      'Prior Approval - Build new agricultural buildings on a unit of less than 5 hectares',
    isServiceDescriptor: false,
  },
  'pa.part6.classE': {
    code: 'pa.part6.classE',
    label: 'Prior Approval - Build new forestry buildings',
    isServiceDescriptor: false,
  },
  'pa.part7.classC': {
    code: 'pa.part7.classC',
    label: 'Prior Approval - Install click and collect facilities',
    isServiceDescriptor: false,
  },
  'pa.part7.classM': {
    code: 'pa.part7.classM',
    label:
      'Prior Approval - Extend a school, college, university, prison or hospital',
    isServiceDescriptor: false,
  },
  'pa.part9.classD': {
    code: 'pa.part9.classD',
    label: 'Prior Approval - Development of toll facilities',
    isServiceDescriptor: false,
  },
  'pa.part11.classB': {
    code: 'pa.part11.classB',
    label: 'Prior Approval - Demolish a building',
    isServiceDescriptor: false,
  },
  'pa.part14.classA': {
    code: 'pa.part14.classA',
    label:
      'Prior Approval - Install or change solar equipment on domestic premises',
    isServiceDescriptor: false,
  },
  'pa.part14.classB': {
    code: 'pa.part14.classB',
    label:
      'Prior Approval - Install or change stand-alone solar equipment on domestic premises',
    isServiceDescriptor: false,
  },
  'pa.part14.classJ': {
    code: 'pa.part14.classJ',
    label: 'Prior Approval - Install or change solar panels',
    isServiceDescriptor: false,
  },
  'pa.part14.classK': {
    code: 'pa.part14.classK',
    label:
      'Prior Approval - Install or change stand-alone solar equipment on non-domestic premises',
    isServiceDescriptor: false,
  },
  'pa.part14.classOA': {
    code: 'pa.part14.classOA',
    label:
      'Prior Approval - Installation of a solar canopy on non-domestic, off-street parking',
    isServiceDescriptor: false,
  },
  'pa.part16.classA': {
    code: 'pa.part16.classA',
    label: 'Prior Approval - Install telecommunications equipment',
    isServiceDescriptor: false,
  },
  'pa.part17': {
    code: 'pa.part17',
    label: 'Prior Approval - Coal mining',
    isServiceDescriptor: false,
  },
  'pa.part17.classB': {
    code: 'pa.part17.classB',
    label: 'Prior Approval - Other developments ancillary to mining operations',
    isServiceDescriptor: false,
  },
  'pa.part17.classC': {
    code: 'pa.part17.classC',
    label: 'Prior Approval - Developments for maintenance or safety',
    isServiceDescriptor: false,
  },
  'pa.part17.classG': {
    code: 'pa.part17.classG',
    label:
      'Prior Approval - Coal mining development by the Coal Authority for maintenance or safety',
    isServiceDescriptor: false,
  },
  'pa.part18.classA': {
    code: 'pa.part18.classA',
    label: 'Prior Approval - Development under private acts or orders',
    isServiceDescriptor: false,
  },
  'pa.part19.classTA': {
    code: 'pa.part19.classTA',
    label: 'Prior Approval - Development on a closed defence site',
    isServiceDescriptor: false,
  },
  'pa.part20.classA': {
    code: 'pa.part20.classA',
    label: 'Prior Approval - Build homes on a detached blocks of flats',
    isServiceDescriptor: false,
  },
  'pa.part20.classAA': {
    code: 'pa.part20.classAA',
    label: 'Prior Approval - Build homes on a detached commercial building',
    isServiceDescriptor: false,
  },
  'pa.part20.classAB': {
    code: 'pa.part20.classAB',
    label:
      'Prior Approval - Build homes on an adjoining commercial or mixed use building',
    isServiceDescriptor: false,
  },
  'pa.part20.classAC': {
    code: 'pa.part20.classAC',
    label: 'Prior Approval - Build homes on adjoining houses',
    isServiceDescriptor: false,
  },
  'pa.part20.classAD': {
    code: 'pa.part20.classAD',
    label: 'Prior Approval - Build homes on detached houses',
    isServiceDescriptor: false,
  },
  'pa.part20.classZA': {
    code: 'pa.part20.classZA',
    label: 'Prior Approval - Demolish buildings and build homes in their place',
    isServiceDescriptor: false,
  },
  // pp
  pp: {code: 'pp', label: 'Planning Permission', isServiceDescriptor: true},
  'pp.full': {
    code: 'pp.full',
    label:
      'Planning Permission for development, including all householder, minor, and major applications',
    isServiceDescriptor: true,
  },
  'pp.full.advertConsent': {
    code: 'pp.full.advertConsent',
    label: 'Full Planning Permission and consent to display an advert',
    isServiceDescriptor: false,
  },
  'pp.full.demolition': {
    code: 'pp.full.demolition',
    label:
      'Full Planning Permission including demolition in a Conservation Area',
    isServiceDescriptor: false,
  },
  'pp.full.fastTrack.affordable': {
    code: 'pp.full.fastTrack.affordable',
    label:
      'Full Planning Permission - Fast track for the purposes of Affordable Housing',
    isServiceDescriptor: false,
  },
  'pp.full.householder': {
    code: 'pp.full.householder',
    label: 'Planning Permission - Full householder',
    isServiceDescriptor: false,
  },
  'pp.full.householder.listed': {
    code: 'pp.full.householder.listed',
    label:
      'Planning Permission - Full householder with consent to do works to a Listed Building',
    isServiceDescriptor: false,
  },
  'pp.full.householder.retro': {
    code: 'pp.full.householder.retro',
    label: 'Planning Permission - Full householder retrospective',
    isServiceDescriptor: false,
  },
  'pp.full.major': {
    code: 'pp.full.major',
    label: 'Planning Permission - Major application',
    isServiceDescriptor: false,
  },
  'pp.full.major.technicalDetails': {
    code: 'pp.full.major.technicalDetails',
    label:
      'Planning Permission - Technical details consent for major development',
    isServiceDescriptor: false,
  },
  'pp.full.major.technicalDetails.waste': {
    code: 'pp.full.major.technicalDetails.waste',
    label:
      'Planning Permission - Technical details consent for waste development',
    isServiceDescriptor: false,
  },
  'pp.full.major.waste': {
    code: 'pp.full.major.waste',
    label:
      'Planning Permission - Full planning permission for waste development',
    isServiceDescriptor: false,
  },
  'pp.full.minor': {
    code: 'pp.full.minor',
    label: 'Planning Permission - Minor application',
    isServiceDescriptor: false,
  },
  'pp.full.minor.listed': {
    code: 'pp.full.minor.listed',
    label:
      'Planning Permission - Minor application and consent to do works to a Listed Building',
    isServiceDescriptor: false,
  },
  'pp.full.minor.technicalDetails': {
    code: 'pp.full.minor.technicalDetails',
    label:
      'Planning Permission - Technical details consent for minor development',
    isServiceDescriptor: false,
  },
  'pp.mineralExtraction': {
    code: 'pp.mineralExtraction',
    label:
      'Planning Permission - Consent to extract minerals and related development, such as temporary buildings and roads',
    isServiceDescriptor: false,
  },
  'pp.outline': {
    code: 'pp.outline',
    label: 'Planning permission - Outline for proposed development',
    isServiceDescriptor: false,
  },
  'pp.outline.all': {
    code: 'pp.outline.all',
    label:
      'Outline Planning Permission - Consent for the principle of a project witholding all details',
    isServiceDescriptor: false,
  },
  'pp.outline.some': {
    code: 'pp.outline.some',
    label:
      'Outline Planning Permission - Consent for the principle of a project specifying some details',
    isServiceDescriptor: false,
  },
  'pp.outline.minor': {
    code: 'pp.outline.minor',
    label: 'Planning permission - Outline for proposed development (minor)',
    isServiceDescriptor: false,
  },
  'pp.outline.minor.all': {
    code: 'pp.outline.minor.all',
    label:
      'Outline Planning Permission - Consent for the principle of a project witholding all details (minor)',
    isServiceDescriptor: false,
  },
  'pp.outline.minor.some': {
    code: 'pp.outline.minor.some',
    label:
      'Outline Planning Permission - Consent for the principle of a project specifying some details (minor)',
    isServiceDescriptor: false,
  },
  'pp.outline.major': {
    code: 'pp.outline.major',
    label: 'Planning permission - Outline for proposed development (major)',
    isServiceDescriptor: false,
  },
  'pp.outline.major.all': {
    code: 'pp.outline.major.all',
    label:
      'Outline Planning Permission - Consent for the principle of a project witholding all details (major)',
    isServiceDescriptor: false,
  },
  'pp.outline.major.all.waste': {
    code: 'pp.outline.major.all.waste',
    label:
      'Outline Planning Permission - Consent for the principle of waste development witholding all details',
    isServiceDescriptor: false,
  },
  'pp.outline.major.some': {
    code: 'pp.outline.major.some',
    label:
      'Outline Planning Permission - Consent for the principle of a project specifying some details (major)',
    isServiceDescriptor: false,
  },
  'pp.outline.major.some.waste': {
    code: 'pp.outline.major.some.waste',
    label:
      'Outline Planning Permission - Consent for the principle of waste development witholding some details',
    isServiceDescriptor: false,
  },
  'pp.pip': {
    code: 'pp.pip',
    label:
      'Planning Permission in Principle - Consent for the principle of a project with less than 1000 square metres floor area on a site of less than 1 hectare',
    isServiceDescriptor: false,
  },
  // rightsOfWayOrder
  rightsOfWayOrder: {
    code: 'rightsOfWayOrder',
    label: 'Rights of Way Order - Apply to move or close a path',
    isServiceDescriptor: false,
  },
  // wtt
  wtt: {code: 'wtt', label: 'Works to trees', isServiceDescriptor: true},
  'wtt.consent': {
    code: 'wtt.consent',
    label:
      'Consent to carry out works to a tree with a Tree Preservation Order',
    isServiceDescriptor: false,
  },
  'wtt.notice': {
    code: 'wtt.notice',
    label: 'Notification of proposed works to a tree in a Conservation Area',
    isServiceDescriptor: false,
  },
} as const;

/**
 * @internal
 */
type ApplicationTypeCode = keyof typeof applicationTypeMap;

/**
 * @internal
 */
type SubmittableApplicationType = {
  [K in ApplicationTypeCode]: (typeof applicationTypeMap)[K]['isServiceDescriptor'] extends false
    ? K
    : never;
}[ApplicationTypeCode];

/**
 * @id #ApplicationType
 * @description Planning application types
 */
export type ApplicationType = SubmittableApplicationType;

/**
 * @internal
 */
type ExtractPrimaryKeys<T> = T extends `${infer K}.${string}` ? K : T;

/**
 * @title Primary application type
 * @description The first segment of the application type hierarchical code
 */
export type PrimaryApplicationType = ExtractPrimaryKeys<ApplicationType>;

/**
 * @description A map of primary application types to their human-readable descriptions
 */
export const primaryApplicationType = Object.entries(applicationTypeMap).reduce(
  (acc, [key, value]) => {
    const primaryKey = key.split('.')[0] as PrimaryApplicationType;
    if (!acc[primaryKey]) {
      acc[primaryKey] = value.label;
    }
    return acc;
  },
  {} as Record<PrimaryApplicationType, string>,
);

/**
 * @description A map of submitable application types to their human-readable descriptions
 */
export const applicationType = Object.entries(applicationTypeMap).reduce(
  (acc, [key, value]) => {
    if (!value.isServiceDescriptor) {
      acc[key as ApplicationType] = value.label;
    }
    return acc;
  },
  {} as Record<ApplicationType, string>,
);
