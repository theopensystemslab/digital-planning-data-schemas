/**
 * @description Consent to display an advertisement
 */
export type AdvertConsentApplicationType = 'advertConsent';

/**
 * @description Consent to make small changes to a project with Planning Permission
 */
type Amendment = 'amendment';

/**
 * @description Consent to make small (minor material) changes to a project with Planning Permission
 */
type AmendmentMinorMaterial = 'amendment.minorMaterial';

/**
 * @description Consent to make small (non-material) changes to a project with Planning Permission
 */
type AmendmentNonMaterial = 'amendment.nonMaterial';

export type AmendmentApplicationType =
  | Amendment
  | AmendmentMinorMaterial
  | AmendmentNonMaterial;

/**
 * @description Planning approval
 */
type Approval = 'approval';

/**
 * @description Approval of details reserved by condition
 */
type ApprovalConditions = 'approval.conditions';

/**
 * @description Approval of reserved matters
 */
type ApprovalReservedMatters = 'approval.reservedMatters';

export type ApprovalApplicationType =
  | Approval
  | ApprovalConditions
  | ApprovalReservedMatters;

/**
 * @description Written confirmation of compliance with a planning condition
 */
export type ComplianceConfirmationApplicationType = 'complianceConfirmation';

/**
 * @description Environmental Impact Decision
 */
type EnvironmentalImpact = 'environmentalImpact';

/**
 * @description Environmental Impact Decision - Scoping
 */
type EnvironmentalImpactScoping = 'environmentalImpact.scoping';

/**
 * @description Environmental Impact Decision - Screening
 */
type EnvironmentalImpactScreening = 'environmentalImpact.screening';

export type EnvironmentalImpactApplicationType =
  | EnvironmentalImpact
  | EnvironmentalImpactScoping
  | EnvironmentalImpactScreening;

/**
 * @description Consent to move and dispose of hazardous substances
 */
export type HazardousSubstanceConsentApplicationType =
  'hazardousSubstanceConsent';

/**
 * @description Notice to remove a hedge
 */
export type HedgerowRemovalNoticeApplicationType = 'hedgerowRemovalNotice';

/**
 * @description Consent to do works affecting ordinary watercourses or land drainage
 */
export type LandDrainageConsentApplicationType = 'landDrainageConsent';

/**
 * @description Lawful Development Certificate
 */
type LDC = 'ldc';

/**
 * @description Lawful Development Certificate - Existing use lawful not to comply with a condition (S191C)
 */
type LDCBreachOfCondition = 'ldc.breachOfCondition';

/**
 * @description Lawful Development Certificate - Existing use
 */
type LDCExisting = 'ldc.existing';

/**
 * @description Lawful Development Certificate - Works to a Listed Building (S26H)
 */
type LDCListedBuildingWorks = 'ldc.listedBuildingWorks';

/**
 * @description Lawful Development Certificate - Proposed use
 */
type LDCProposed = 'ldc.proposed';

export type LDCApplicationType =
  | LDC
  | LDCBreachOfCondition
  | LDCExisting
  | LDCListedBuildingWorks
  | LDCProposed;

/**
 * @description Consent to do works to a Listed Building
 */
export type ListedApplicationType = 'listed';

/**
 * @description Notification of completion
 */
export type NotifyCompletionApplicationType = 'notifyCompletion';

/**
 * @description Planning obligation
 */
type Obligation = 'obligation';

/**
 * @description Discharge a planning obligation
 */
type ObligationDischarge = 'obligation.discharge';

/**
 * @description Modify a planning obligation
 */
type ObligationModify = 'obligation.modify';

export type ObligationApplicationType =
  | Obligation
  | ObligationDischarge
  | ObligationModify;

/**
 * @description Onshore extraction of oil and gas
 */
type OnshoreExtractionOilAndGas = 'onshoreExtractionOilAndGas';

/**
 * @description Onshore extraction of oil and gas - Other
 */
type OnshoreExtractionOilAndGasOther = 'onshoreExtractionOilAndGas.other';

/**
 * @description Onshore extraction of oil and gas - Full planning permission for an extension to an existing site including associated development
 */
type OnshoreExtractionOilAndGasPPExtension =
  'onshoreExtractionOilAndGas.pp.extension';

/**
 * @description Onshore extraction of oil and gas - Full planning permission for waste development
 */
type OnshoreExtractionOilAndGasPPWaste = 'onshoreExtractionOilAndGas.pp.waste';

/**
 * @description Onshore extraction of oil and gas - Full planning permission for oil and gas working including exploratory, appraisal and production phases
 */
type OnshoreExtractionOilAndGasPPWorking =
  'onshoreExtractionOilAndGas.pp.working';

/**
 * @description Onshore extraction of oil and gas - Review of conditions applying to Mineral Permissions (ROMPs)
 */
type OnshoreExtractionOilAndGasReview = 'onshoreExtractionOilAndGas.review';

/**
 * @description Onshore extraction of oil and gas - Variation of conditions
 */
type OnshoreExtractionOilAndGasVariation =
  'onshoreExtractionOilAndGas.variation';

export type OnshoreExtractionOilAndGasApplicationType =
  | OnshoreExtractionOilAndGas
  | OnshoreExtractionOilAndGasOther
  | OnshoreExtractionOilAndGasPPExtension
  | OnshoreExtractionOilAndGasPPWaste
  | OnshoreExtractionOilAndGasPPWorking
  | OnshoreExtractionOilAndGasReview
  | OnshoreExtractionOilAndGasVariation;

/**
 * @description Prior Approval
 */
type PA = 'pa';

/**
 * @description Prior Approval - Larger extension to a house
 */
type PAPart1ClassA = 'pa.part1.classA';

/**
 * @description Prior Approval - Adding storeys to a house
 */
type PAPart1ClassAA = 'pa.part1.classAA';

/**
 * @description Prior Approval - Convert a commercial building to mixed use
 */
type PAPart3ClassG = 'pa.part3.classG';

/**
 * @description Prior Approval - Convert a mixed use building into a home
 */
type PAPart3ClassM = 'pa.part3.classM';

/**
 * @description Prior Approval - Convert a commercial building into a home or homes
 */
type PAPart3ClassMA = 'pa.part3.classMA';

/**
 * @description Prior Approval - Convert a casino or amusement arcade into a home or homes
 */
type PAPart3ClassN = 'pa.part3.classN';

/**
 * @description Prior Approval - Convert an agricultural building into a home
 */
type PAPart3ClassQ = 'pa.part3.classQ';

/**
 * @description Prior Approval - Convert an agricultural building to a commercial use
 */
type PAPart3ClassR = 'pa.part3.classR';

/**
 * @description Prior Approval - Convert an agricultural building to a school
 */
type PAPart3ClassS = 'pa.part3.classS';

/**
 * @description Prior Approval - Convert a commercial building to a school
 */
type PAPart3ClassT = 'pa.part3.classT';

/**
 * @description Prior Approval - Changes of use permitted under a permission granted on an application
 */
type PAPart3ClassV = 'pa.part3.classV';

/**
 * @description Prior Approval - Put up a temporary structure
 */
type PAPart4ClassBB = 'pa.part4.classBB';

/**
 * @description Prior Approval - Develop a temporary campsite
 */
type PAPart4ClassBC = 'pa.part4.classBC';

/**
 * @description Prior Approval - Put temporary school buildings on vacant commercial land
 */
type PAPart4ClassCA = 'pa.part4.classCA';

/**
 * @description Prior Approval - Use a building or land to shoot a film
 */
type PAPart4ClassE = 'pa.part4.classE';

/**
 * @description Prior Approval - Alter or add new buildings to agricultural or forestry sites
 */
type PAPart6 = 'pa.part6';

/**
 * @description Prior Approval - Build new agricultural buildings on a unit of 5 hectares or more
 */
type PAPart6ClassA = 'pa.part6.classA';

/**
 * @description Prior Approval - Build new agricultural buildings on a unit of less than 5 hectares
 */
type PAPart6ClassB = 'pa.part6.classB';

/**
 * @description Prior Approval - Build new forestry buildings
 */
type PAPart6ClassE = 'pa.part6.classE';

/**
 * @description Prior Approval - Install click and collect facilities
 */
type PAPart7ClassC = 'pa.part7.classC';

/**
 * @description Prior Approval - Extend a school, college, university, prison or hospital
 */
type PAPart7ClassM = 'pa.part7.classM';

/**
 * @description Prior Approval - Development of toll facilities
 */
type PAPart9ClassD = 'pa.part9.classD';

/**
 * @description Prior Approval - Demolish a building
 */
type PAPart11ClassB = 'pa.part11.classB';

/**
 * @description Prior Approval - Install or change solar equipment on domestic premises
 */
type PAPart14ClassA = 'pa.part14.classA';

/**
 * @description Prior Approval - Install or change stand-alone solar equipment on domestic premises
 */
type PAPart14ClassB = 'pa.part14.classB';

/**
 * @description Prior Approval - Install or change solar panels
 */
type PAPart14ClassJ = 'pa.part14.classJ';

/**
 * @description Prior Approval - Install or change stand-alone solar equipment on non-domestic premises
 */
type PAPart14ClassK = 'pa.part14.classK';

/**
 * @description Prior Approval - Installation of a solar canopy on non-domestic, off-street parking
 */
type PAPart14ClassOA = 'pa.part14.classOA';

/**
 * @description Prior Approval - Install telecommunications equipment
 */
type PAPart16ClassA = 'pa.part16.classA';

/**
 * @description Prior Approval - Coal mining
 */
type PAPart17 = 'pa.part17';

/**
 * @description Prior Approval - Other developments ancillary to mining operations
 */
type PAPart17ClassB = 'pa.part17.classB';

/**
 * @description Prior Approval - Developments for maintenance or safety
 */
type PAPart17ClassC = 'pa.part17.classC';

/**
 * @description Prior Approval - Coal mining development by the Coal Authority for maintenance or safety
 */
type PAPart17ClassG = 'pa.part17.classG';

/**
 * @description Prior Approval - Development under private acts or orders
 */
type PAPart18ClassA = 'pa.part18.classA';

/**
 * @description Prior Approval - Development on a closed defence site
 */
type PAPart19ClassTA = 'pa.part19.classTA';

/**
 * @description Prior Approval - Build homes on a detached blocks of flats
 */
type PAPart20ClassA = 'pa.part20.classA';

/**
 * @description Prior Approval - Build homes on a detached commercial building
 */
type PAPart20ClassAA = 'pa.part20.classAA';

/**
 * @description Prior Approval - Build homes on an adjoining commercial or mixed use building
 */
type PAPart20ClassAB = 'pa.part20.classAB';

/**
 * @description Prior Approval - Build homes on adjoining houses
 */
type PAPart20ClassAC = 'pa.part20.classAC';

/**
 * @description Prior Approval - Build homes on detached houses
 */
type PAPart20ClassAD = 'pa.part20.classAD';

/**
 * @description Prior Approval - Demolish buildings and build homes in their place
 */
type PAPart20ClassZA = 'pa.part20.classZA';

export type PAApplicationType =
  | PA
  | PAPart1ClassA
  | PAPart1ClassAA
  | PAPart3ClassG
  | PAPart3ClassM
  | PAPart3ClassMA
  | PAPart3ClassN
  | PAPart3ClassQ
  | PAPart3ClassR
  | PAPart3ClassS
  | PAPart3ClassT
  | PAPart3ClassV
  | PAPart4ClassBB
  | PAPart4ClassBC
  | PAPart4ClassCA
  | PAPart4ClassE
  | PAPart6
  | PAPart6ClassA
  | PAPart6ClassB
  | PAPart6ClassE
  | PAPart7ClassC
  | PAPart7ClassM
  | PAPart9ClassD
  | PAPart11ClassB
  | PAPart14ClassA
  | PAPart14ClassB
  | PAPart14ClassJ
  | PAPart14ClassK
  | PAPart14ClassOA
  | PAPart16ClassA
  | PAPart17
  | PAPart17ClassB
  | PAPart17ClassC
  | PAPart17ClassG
  | PAPart18ClassA
  | PAPart19ClassTA
  | PAPart20ClassA
  | PAPart20ClassAA
  | PAPart20ClassAB
  | PAPart20ClassAC
  | PAPart20ClassAD
  | PAPart20ClassZA;

/**
 * @description Planning Permission
 */
type PP = 'pp';

/**
 * @description Planning Permission for development, including all householder, minor, and major applications
 */
type PPFull = 'pp.full';

/**
 * @description Full Planning Permission and consent to display an advert
 */
type PPFullAdvertConsent = 'pp.full.advertConsent';

/**
 * @description Full Planning Permission including demolition in a Conservation Area
 */
type PPFullDemolition = 'pp.full.demolition';

/**
 * @description Full Planning Permission - Fast track for the purposes of Affordable Housing
 */
type PPFullFastTrackAffordable = 'pp.full.fastTrack.affordable';

/**
 * @description Planning Permission - Full householder
 */
type PPFullHouseholder = 'pp.full.householder';

/**
 * @description Planning Permission - Full householder with consent to do works to a Listed Building
 */
type PPFullHouseholderListed = 'pp.full.householder.listed';

/**
 * @description Planning Permission - Full householder retrospective
 */
type PPFullHouseholderRetro = 'pp.full.householder.retro';

/**
 * @description Planning Permission - Major application
 */
type PPFullMajor = 'pp.full.major';

/**
 * @description Planning Permission - Technical details consent for major development
 */
type PPFullMajorTechnicalDetails = 'pp.full.major.technicalDetails';

/**
 * @description Planning Permission - Technical details consent for waste development
 */
type PPFullMajorTechnicalDetailsWaste = 'pp.full.major.technicalDetails.waste';

/**
 * @description Planning Permission - Full planning permission for waste development
 */
type PPFullMajorWaste = 'pp.full.major.waste';

/**
 * @description Planning Permission - Minor application
 */
type PPFullMinor = 'pp.full.minor';

/**
 * @description Planning Permission - Minor application and consent to do works to a Listed Building
 */
type PPFullMinorListed = 'pp.full.minor.listed';

/**
 * @description Planning Permission - Technical details consent for minor development
 */
type PPFullMinorTechnicalDetails = 'pp.full.minor.technicalDetails';

/**
 * @description Planning Permission - Consent to extract minerals and related development, such as temporary buildings and roads
 */
type PPMineralExtraction = 'pp.mineralExtraction';

/**
 * @description Planning permission - Outline for proposed development
 */
type PPOutline = 'pp.outline';

/**
 * @description Outline Planning Permission - Consent for the principle of a project witholding all details
 */
type PPOutlineAll = 'pp.outline.all';

/**
 * @description Outline Planning Permission - Consent for the principle of a project specifying some details
 */
type PPOutlineSome = 'pp.outline.some';

/**
 * @description Planning permission - Outline for proposed development (minor)
 */
type PPOutlineMinor = 'pp.outline.minor';

/**
 * @description Outline Planning Permission - Consent for the principle of a project witholding all details (minor)
 */
type PPOutlineMinorAll = 'pp.outline.minor.all';

/**
 * @description Outline Planning Permission - Consent for the principle of a project specifying some details (minor)
 */
type PPOutlineMinorSome = 'pp.outline.minor.some';

/**
 * @description Planning permission - Outline for proposed development (major)
 */
type PPOutlineMajor = 'pp.outline.major';

/**
 * @description Outline Planning Permission - Consent for the principle of a project witholding all details (major)
 */
type PPOutlineMajorAll = 'pp.outline.major.all';

/**
 * @description Outline Planning Permission - Consent for the principle of waste development witholding all details
 */
type PPOutlineMajorAllWaste = 'pp.outline.major.all.waste';

/**
 * @description Outline Planning Permission - Consent for the principle of a project specifying some details (major)
 */
type PPOutlineMajorSome = 'pp.outline.major.some';

/**
 * @description Outline Planning Permission - Consent for the principle of waste development witholding all details
 */
type PPOutlineMajorSomeWaste = 'pp.outline.major.some.waste';

/**
 * @description Planning Permission in Principle - Consent for the principle of a project with less than 1000 square metres floor area on a site of less than 1 hectare
 */
type PPPip = 'pp.pip';

export type PPApplicationType =
  | PP
  | PPFull
  | PPFullAdvertConsent
  | PPFullDemolition
  | PPFullFastTrackAffordable
  | PPFullHouseholder
  | PPFullHouseholderListed
  | PPFullHouseholderRetro
  | PPFullMajor
  | PPFullMajorTechnicalDetails
  | PPFullMajorTechnicalDetailsWaste
  | PPFullMajorWaste
  | PPFullMinor
  | PPFullMinorListed
  | PPFullMinorTechnicalDetails
  | PPMineralExtraction
  | PPOutline
  | PPOutlineAll
  | PPOutlineSome
  | PPOutlineMinor
  | PPOutlineMinorAll
  | PPOutlineMinorSome
  | PPOutlineMajor
  | PPOutlineMajorAll
  | PPOutlineMajorAllWaste
  | PPOutlineMajorSome
  | PPOutlineMajorSomeWaste
  | PPPip;

/**
 * @description Rights of Way Order - Apply to move or close a path
 */
export type RightsOfWayOrderApplicationType = 'rightsOfWayOrder';

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
