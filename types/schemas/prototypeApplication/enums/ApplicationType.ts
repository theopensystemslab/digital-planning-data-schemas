export type AdvertConsentApplicationType =
  /**
   * @description
   * advertConsent: Consent to display an advertisement
   */
  'advertConsent';

export type AmendmentApplicationType =
  /**
   * @description Consent to make small changes to a project with Planning Permission
   */
  | 'amendment'
  /**
   * @description Consent to make small (minor material) changes to a project with Planning Permission
   */
  | 'amendment.minorMaterial'
  /**
   * @description Consent to make small (non-material) changes to a project with Planning Permission
   */
  | 'amendment.nonMaterial';

export type ApprovalApplicationType =
  /**
   * @description Planning approval
   */
  | 'approval'
  /**
   * @description Approval of details reserved by condition
   */
  | 'approval.conditions'
  /**
   * @description Approval of reserved matters
   */
  | 'approval.reservedMatters';

export type ComplianceConfirmationApplicationType =
  /**
   * @description Written confirmation of compliance with a planning condition
   */
  'complianceConfirmation';

export type EnvironmentalImpactApplicationType =
  /**
   * @description Environmental Impact Decision
   */
  | 'environmentalImpact'
  /**
   * @description Environmental Impact Decision - Scoping
   */
  | 'environmentalImpact.scoping'
  /**
   * @description Environmental Impact Decision - Screening
   */
  | 'environmentalImpact.screening';

export type HazardousSubstanceConsentApplicationType =
  /**
   * @description Consent to move and dispose of hazardous substances
   */
  'hazardousSubstanceConsent';

export type HedgerowRemovalNoticeApplicationType =
  /**
   * @description Notice to remove a hedge
   */
  'hedgerowRemovalNotice';

export type LandDrainageConsentApplicationType =
  /**
   * @description Consent to do works affecting ordinary watercourses or land drainage
   */
  'landDrainageConsent';

export type LDCApplicationType =
  /**
   * @description Lawful Development Certificate'
   */
  | 'ldc'
  /**
   * @description Lawful Development Certificate - Existing use lawful not to comply with a condition (S191C)
   */
  | 'ldc.breachOfCondition'
  /**
   * @description Lawful Development Certificate - Existing use
   */
  | 'ldc.existing'
  /**
   * @description Lawful Development Certificate - Works to a Listed Building (S26H)
   */
  | 'ldc.listedBuildingWorks'
  /**
   * @description Lawful Development Certificate - Proposed use
   */
  | 'ldc.proposed';

export type ListedApplicationType =
  /**
   * @description Consent to do works to a Listed Building
   */
  'listed';

export type NotifyCompletionApplicationType =
  /**
   * @description Notification of completion
   */
  'notifyCompletion';

export type ObligationApplicationType =
  /**
   * @description Planning obligation
   */
  | 'obligation'
  /**
   * @description Discharge a planning obligation
   */
  | 'obligation.discharge'
  /**
   * @description Modify a planning obligation
   */
  | 'obligation.modify';

export type OnshoreExtractionOilAndGasApplicationType =
  /**
   * @description Onshore extraction of oil and gas
   */
  | 'onshoreExtractionOilAndGas'
  /**
   * @description Onshore extraction of oil and gas - Other
   */
  | 'onshoreExtractionOilAndGas.other'
  /**
   * @description Onshore extraction of oil and gas - Full planning permission for an extension to an existing site including associated development
   */
  | 'onshoreExtractionOilAndGas.pp.extension'
  /**
   * @description Onshore extraction of oil and gas - Full planning permission for waste development
   */
  | 'onshoreExtractionOilAndGas.pp.waste'
  /**
   * @description Onshore extraction of oil and gas - Full planning permission for oil and gas working including exploratory, appraisal and production phases
   */
  | 'onshoreExtractionOilAndGas.pp.working'
  /**
   * @description Onshore extraction of oil and gas - Review of conditions applying to Mineral Permissions (ROMPs)
   */
  | 'onshoreExtractionOilAndGas.review'
  /**
   * @description Onshore extraction of oil and gas - Variation of conditions
   */
  | 'onshoreExtractionOilAndGas.variation';

export type PAApplicationType =
  /**
   * @description Prior Approval
   */
  | 'pa'
  /**
   * @description Prior Approval - Larger extension to a house
   */
  | 'pa.part1.classA'
  /**
   * @description Prior Approval - Adding storeys to a house
   */
  | 'pa.part1.classAA'
  /**
   * @description Prior Approval - Convert a commercial building to mixed use
   */
  | 'pa.part3.classG'
  /**
   * @description Prior Approval - Convert a mixed use building into a home
   */
  | 'pa.part3.classM'
  /**
   * @description Prior Approval - Convert a commercial building into a home or homes
   */
  | 'pa.part3.classMA'
  /**
   * @description Prior Approval - Convert a casino or amusement arcade into a home or homes
   */
  | 'pa.part3.classN'
  /**
   * @description Prior Approval - Convert an agricultural building into a home
   */
  | 'pa.part3.classQ'
  /**
   * @description Prior Approval - Convert an agricultural building to a commercial use
   */
  | 'pa.part3.classR'
  /**
   * @description Prior Approval - Convert an agricultural building to a school
   */
  | 'pa.part3.classS'
  /**
   * @description Prior Approval - Convert a commercial building to a school
   */
  | 'pa.part3.classT'
  /**
   * @description Prior Approval - Changes of use permitted under a permission granted on an application
   */
  | 'pa.part3.classV'
  /**
   * @description Prior Approval - Put up a temporary structure
   */
  | 'pa.part4.classBB'
  /**
   * @description Prior Approval - Develop a temporary campsite
   */
  | 'pa.part4.classBC'
  /**
   * @description Prior Approval - Put temporary school buildings on vacant commercial land
   */
  | 'pa.part4.classCA'
  /**
   * @description Prior Approval - Use a building or land to shoot a film
   */
  | 'pa.part4.classE'
  /**
   * @description Prior Approval - Alter or add new buildings to agricultural or forestry sites
   */
  | 'pa.part6'
  /**
   * @description Prior Approval - Build new agricultural buildings on a unit of 5 hectares or more
   */
  | 'pa.part6.classA'
  /**
   * @description Prior Approval - Build new agricultural buildings on a unit of less than 5 hectares
   */
  | 'pa.part6.classB'
  /**
   * @description Prior Approval - Build new forestry buildings
   */
  | 'pa.part6.classE'
  /**
   * @description Prior Approval - Install click and collect facilities
   */
  | 'pa.part7.classC'
  /**
   * @description Prior Approval - Extend a school, college, university, prison or hospital
   */
  | 'pa.part7.classM'
  /**
   * @description Prior Approval - Development of toll facilities
   */
  | 'pa.part9.classD'
  /**
   * @description Prior Approval - Demolish a building
   */
  | 'pa.part11.classB'
  /**
   * @description Prior Approval - Install or change solar equipment on domestic premises
   */
  | 'pa.part14.classA'
  /**
   * @description Prior Approval - Install or change stand-alone solar equipment on domestic premises
   */
  | 'pa.part14.classB'
  /**
   * @description Prior Approval - Install or change solar panels
   */
  | 'pa.part14.classJ'
  /**
   * @description Prior Approval - Install or change stand-alone solar equipment on non-domestic premises
   */
  | 'pa.part14.classK'
  /**
   * @description Prior Approval - Installation of a solar canopy on non-domestic, off-street parking
   */
  | 'pa.part14.classOA'
  /**
   * @description Prior Approval - Install telecommunications equipment
   */
  | 'pa.part16.classA'
  /**
   * @description Prior Approval - Coal mining
   */
  | 'pa.part17'
  /**
   * @description Prior Approval - Other developments ancillary to mining operations
   */
  | 'pa.part17.classB'
  /**
   * @description Prior Approval - Developments for maintenance or safety
   */
  | 'pa.part17.classC'
  /**
   * @description Prior Approval - Coal mining development by the Coal Authority for maintenance or safety
   */
  | 'pa.part17.classG'
  /**
   * @description Prior Approval - Development under private acts or orders
   */
  | 'pa.part18.classA'
  /**
   * @description Prior Approval - Development on a closed defence site
   */
  | 'pa.part19.classTA'
  /**
   * @description Prior Approval - Build homes on a detached blocks of flats
   */
  | 'pa.part20.classA'
  /**
   * @description Prior Approval - Build homes on a detached commercial building
   */
  | 'pa.part20.classAA'
  /**
   * @description Prior Approval - Build homes on an adjoining commercial or mixed use building
   */
  | 'pa.part20.classAB'
  /**
   * @description Prior Approval - Build homes on adjoining houses
   */
  | 'pa.part20.classAC'
  /**
   * @description Prior Approval - Build homes on detached houses
   */
  | 'pa.part20.classAD'
  /**
   * @description Prior Approval - Demolish buildings and build homes in their place
   */
  | 'pa.part20.classZA';

export type PPApplicationType =
  /**
   * @description Planning Permission
   */
  | 'pp'
  /**
   * @description Planning Permission for development, including all householder, minor, and major applications
   */
  | 'pp.full'
  /**
   * @description Full Planning Permission and consent to display an advert
   */
  | 'pp.full.advertConsent'
  /**
   * @description Full Planning Permission including demolition in a Conservation Area
   */
  | 'pp.full.demolition'
  /**
   * @description Full Planning Permission - Fast track for the purposes of Affordable Housing
   */
  | 'pp.full.fastTrack.affordable'
  /**
   * @description Planning Permission - Full householder
   */
  | 'pp.full.householder'
  /**
   * @description Planning Permission - Full householder with consent to do works to a Listed Building
   */
  | 'pp.full.householder.listed'
  /**
   * @description Planning Permission - Full householder retrospective
   */
  | 'pp.full.householder.retro'
  /**
   * @description Planning Permission - Major application
   */
  | 'pp.full.major'
  /**
   * @description Planning Permission - Technical details consent for major development
   */
  | 'pp.full.major.technicalDetails'
  /**
   * @description Planning Permission - Technical details consent for waste development
   */
  | 'pp.full.major.technicalDetails.waste'
  /**
   * @description Planning Permission - Full planning permission for waste development
   */
  | 'pp.full.major.waste'
  /**
   * @description Planning Permission - Minor application
   */
  | 'pp.full.minor'
  /**
   * @description Planning Permission - Minor application and consent to do works to a Listed Building
   */
  | 'pp.full.minor.listed'
  /**
   * @description Planning Permission - Technical details consent for minor development
   */
  | 'pp.full.minor.technicalDetails'
  /**
   * @description Planning Permission - Consent to extract minerals and related development, such as temporary buildings and roads
   */
  | 'pp.mineralExtraction'
  /**
   * @description Planning permission - Outline for proposed development'
   */
  | 'pp.outline'
  /**
   * @description Outline Planning Permission - Consent for the principle of a project witholding all details
   */
  | 'pp.outline.all'
  /**
   * @description Outline Planning Permission - Consent for the principle of a project specifying some details
   */
  | 'pp.outline.some'
  /**
   * @description Planning permission - Outline for proposed development (minor)'
   */
  | 'pp.outline.minor'
  /**
   * @description Outline Planning Permission - Consent for the principle of a project witholding all details (minor)
   */
  | 'pp.outline.minor.all'
  /**
   * @description Outline Planning Permission - Consent for the principle of a project specifying some details (minor)
   */
  | 'pp.outline.minor.some'
  /**
   * @description Planning permission - Outline for proposed development (major)
   */
  | 'pp.outline.major'
  /**
   * @description Outline Planning Permission - Consent for the principle of a project witholding all details (major)
   */
  | 'pp.outline.major.all'
  /**
   * @description Outline Planning Permission - Consent for the principle of waste development witholding all details
   */
  | 'pp.outline.major.all.waste'
  /**
   * @description Outline Planning Permission - Consent for the principle of a project specifying some details (major)
   */
  | 'pp.outline.major.some'
  /**
   * @description Outline Planning Permission - Consent for the principle of waste development witholding all details
   */
  | 'pp.outline.major.some.waste'
  /**
   * @description Planning Permission in Principle - Consent for the principle of a project with less than 1000 square metres floor area on a site of less than 1 hectare
   */
  | 'pp.pip';

export type RightsOfWayOrderApplicationType =
  /**
   * @description Rights of Way Order - Apply to move or close a path
   */
  'rightsOfWayOrder';

/**
 * @description Works to trees
 */
type WTT = 'wtt';

/**
 * @description Consent to carry out works to a tree with a Tree Preservation Order
 */
type WTTConstent = 'wtt.consent';

/**
 * @description Notification of proposed works to a tree in a Conservation Area
 */
type WTTNotice = 'wtt.notice';

export type WTTApplicationType = WTT | WTTConstent | WTTNotice;

/**
 * @id #ApplicationType
 * @description Planning application types
 */
export type ApplicationType =
  | AdvertConsentApplicationType
  | AmendmentApplicationType
  | ApprovalApplicationType
  | ComplianceConfirmationApplicationType
  | EnvironmentalImpactApplicationType
  | HazardousSubstanceConsentApplicationType
  | HedgerowRemovalNoticeApplicationType
  | LandDrainageConsentApplicationType
  | LDCApplicationType
  | ListedApplicationType
  | NotifyCompletionApplicationType
  | ObligationApplicationType
  | OnshoreExtractionOilAndGasApplicationType
  | PAApplicationType
  | PPApplicationType
  | RightsOfWayOrderApplicationType
  | WTTApplicationType;

/**
 * @internal
 */
type ExtractPrimaryKeys<T> = T extends `${infer K}.${string}` ? K : T;

/**
 * @internal
 */
export type PrimaryApplicationType = ExtractPrimaryKeys<ApplicationType>;
