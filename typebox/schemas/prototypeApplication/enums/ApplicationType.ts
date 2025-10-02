import {Type, type Static} from '@sinclair/typebox';

type AdvertConsent = Static<typeof AdvertConsent>;
const AdvertConsent = Type.Literal('advertConsent', {
  description: 'Consent to display an advertisement',
});

type Amendment = Static<typeof Amendment>;
const Amendment = Type.Literal('amendment', {
  description:
    'Consent to make small changes to a project with Planning Permission',
});

type AmendmentMinorMaterial = Static<typeof AmendmentMinorMaterial>;
const AmendmentMinorMaterial = Type.Literal('amendment.minorMaterial', {
  description:
    'Consent to make small (minor material) changes to a project with Planning Permission',
});

type AmendmentNonMaterial = Static<typeof AmendmentNonMaterial>;
const AmendmentNonMaterial = Type.Literal('amendment.nonMaterial', {
  description: 'Consent to make small (non',
});

type Approval = Static<typeof Approval>;
const Approval = Type.Literal('approval', {description: 'Planning approval'});

type ApprovalConditions = Static<typeof ApprovalConditions>;
const ApprovalConditions = Type.Literal('approval.conditions', {
  description: 'Approval of details reserved by condition',
});

type ApprovalReservedMatters = Static<typeof ApprovalReservedMatters>;
const ApprovalReservedMatters = Type.Literal('approval.reservedMatters', {
  description: 'Approval of reserved matters',
});

type ComplianceConfirmation = Static<typeof ComplianceConfirmation>;
const ComplianceConfirmation = Type.Literal('complianceConfirmation', {
  description: 'Written confirmation of compliance with a planning condition',
});

type EnvironmentalImpact = Static<typeof EnvironmentalImpact>;
const EnvironmentalImpact = Type.Literal('environmentalImpact', {
  description: 'Environmental Impact Decision',
});

type EnvironmentalImpactScoping = Static<typeof EnvironmentalImpactScoping>;
const EnvironmentalImpactScoping = Type.Literal('environmentalImpact.scoping', {
  description: 'Environmental Impact Decision',
});

type EnvironmentalImpactScreening = Static<typeof EnvironmentalImpactScreening>;
const EnvironmentalImpactScreening = Type.Literal(
  'environmentalImpact.screening',
  {description: 'Environmental Impact Decision'},
);

type HazardousSubstanceConsent = Static<typeof HazardousSubstanceConsent>;
const HazardousSubstanceConsent = Type.Literal('hazardousSubstanceConsent', {
  description: 'Consent to move and dispose of hazardous substances',
});

type HedgerowRemovalNotice = Static<typeof HedgerowRemovalNotice>;
const HedgerowRemovalNotice = Type.Literal('hedgerowRemovalNotice', {
  description: 'Notice to remove a hedge',
});

type LandDrainageConsent = Static<typeof LandDrainageConsent>;
const LandDrainageConsent = Type.Literal('landDrainageConsent', {
  description:
    'Consent to do works affecting ordinary watercourses or land drainage',
});

type LDC = Static<typeof LDC>;
const LDC = Type.Literal('ldc', {
  description: 'Lawful Development Certificate',
});

type LDCBreachOfCondition = Static<typeof LDCBreachOfCondition>;
const LDCBreachOfCondition = Type.Literal('ldc.breachOfCondition', {
  description: 'Lawful Development Certificate',
});

type LDCExisting = Static<typeof LDCExisting>;
const LDCExisting = Type.Literal('ldc.existing', {
  description: 'Lawful Development Certificate',
});

type LDCListedBuildingWorks = Static<typeof LDCListedBuildingWorks>;
const LDCListedBuildingWorks = Type.Literal('ldc.listedBuildingWorks', {
  description: 'Lawful Development Certificate',
});

type LDCProposed = Static<typeof LDCProposed>;
const LDCProposed = Type.Literal('ldc.proposed', {
  description: 'Lawful Development Certificate',
});

type Listed = Static<typeof Listed>;
const Listed = Type.Literal('listed', {
  description: 'Consent to do works to a Listed Building',
});

type NotifyCompletion = Static<typeof NotifyCompletion>;
const NotifyCompletion = Type.Literal('notifyCompletion', {
  description: 'Notification of completion',
});

type Obligation = Static<typeof Obligation>;
const Obligation = Type.Literal('obligation', {
  description: 'Planning obligation',
});

type ObligationDischarge = Static<typeof ObligationDischarge>;
const ObligationDischarge = Type.Literal('obligation.discharge', {
  description: 'Discharge a planning obligation',
});

type ObligationModify = Static<typeof ObligationModify>;
const ObligationModify = Type.Literal('obligation.modify', {
  description: 'Modify a planning obligation',
});

type OnshoreExtractionOilAndGas = Static<typeof OnshoreExtractionOilAndGas>;
const OnshoreExtractionOilAndGas = Type.Literal('onshoreExtractionOilAndGas', {
  description: 'Onshore extraction of oil and gas',
});

type OnshoreExtractionOilAndGasOther = Static<
  typeof OnshoreExtractionOilAndGasOther
>;
const OnshoreExtractionOilAndGasOther = Type.Literal(
  'onshoreExtractionOilAndGas.other',
  {description: 'Onshore extraction of oil and gas'},
);

type OnshoreExtractionOilAndGasPPExtension = Static<
  typeof OnshoreExtractionOilAndGasPPExtension
>;
const OnshoreExtractionOilAndGasPPExtension = Type.Literal(
  'onshoreExtractionOilAndGas.pp.extension',
  {description: 'Onshore extraction of oil and gas'},
);

type OnshoreExtractionOilAndGasPPWaste = Static<
  typeof OnshoreExtractionOilAndGasPPWaste
>;
const OnshoreExtractionOilAndGasPPWaste = Type.Literal(
  'onshoreExtractionOilAndGas.pp.waste',
  {description: 'Onshore extraction of oil and gas'},
);

type OnshoreExtractionOilAndGasPPWorking = Static<
  typeof OnshoreExtractionOilAndGasPPWorking
>;
const OnshoreExtractionOilAndGasPPWorking = Type.Literal(
  'onshoreExtractionOilAndGas.pp.working',
  {description: 'Onshore extraction of oil and gas'},
);

type OnshoreExtractionOilAndGasReview = Static<
  typeof OnshoreExtractionOilAndGasReview
>;
const OnshoreExtractionOilAndGasReview = Type.Literal(
  'onshoreExtractionOilAndGas.review',
  {description: 'Onshore extraction of oil and gas'},
);

type OnshoreExtractionOilAndGasVariation = Static<
  typeof OnshoreExtractionOilAndGasVariation
>;
const OnshoreExtractionOilAndGasVariation = Type.Literal(
  'onshoreExtractionOilAndGas.variation',
  {description: 'Onshore extraction of oil and gas'},
);

type PA = Static<typeof PA>;
const PA = Type.Literal('pa', {description: 'Prior Approval'});

type PAPart1ClassA = Static<typeof PAPart1ClassA>;
const PAPart1ClassA = Type.Literal('pa.part1.classA', {
  description: 'Prior Approval',
});

type PAPart1ClassAA = Static<typeof PAPart1ClassAA>;
const PAPart1ClassAA = Type.Literal('pa.part1.classAA', {
  description: 'Prior Approval',
});

type PAPart3ClassG = Static<typeof PAPart3ClassG>;
const PAPart3ClassG = Type.Literal('pa.part3.classG', {
  description: 'Prior Approval',
});

type PAPart3ClassM = Static<typeof PAPart3ClassM>;
const PAPart3ClassM = Type.Literal('pa.part3.classM', {
  description: 'Prior Approval',
});

type PAPart3ClassMA = Static<typeof PAPart3ClassMA>;
const PAPart3ClassMA = Type.Literal('pa.part3.classMA', {
  description: 'Prior Approval',
});

type PAPart3ClassN = Static<typeof PAPart3ClassN>;
const PAPart3ClassN = Type.Literal('pa.part3.classN', {
  description: 'Prior Approval',
});

type PAPart3ClassQ = Static<typeof PAPart3ClassQ>;
const PAPart3ClassQ = Type.Literal('pa.part3.classQ', {
  description: 'Prior Approval',
});

type PAPart3ClassR = Static<typeof PAPart3ClassR>;
const PAPart3ClassR = Type.Literal('pa.part3.classR', {
  description: 'Prior Approval',
});

type PAPart3ClassS = Static<typeof PAPart3ClassS>;
const PAPart3ClassS = Type.Literal('pa.part3.classS', {
  description: 'Prior Approval',
});

type PAPart3ClassT = Static<typeof PAPart3ClassT>;
const PAPart3ClassT = Type.Literal('pa.part3.classT', {
  description: 'Prior Approval',
});

type PAPart3ClassV = Static<typeof PAPart3ClassV>;
const PAPart3ClassV = Type.Literal('pa.part3.classV', {
  description: 'Prior Approval',
});

type PAPart4ClassBB = Static<typeof PAPart4ClassBB>;
const PAPart4ClassBB = Type.Literal('pa.part4.classBB', {
  description: 'Prior Approval',
});

type PAPart4ClassBC = Static<typeof PAPart4ClassBC>;
const PAPart4ClassBC = Type.Literal('pa.part4.classBC', {
  description: 'Prior Approval',
});

type PAPart4ClassCA = Static<typeof PAPart4ClassCA>;
const PAPart4ClassCA = Type.Literal('pa.part4.classCA', {
  description: 'Prior Approval',
});

type PAPart4ClassE = Static<typeof PAPart4ClassE>;
const PAPart4ClassE = Type.Literal('pa.part4.classE', {
  description: 'Prior Approval',
});

type PAPart6 = Static<typeof PAPart6>;
const PAPart6 = Type.Literal('pa.part6', {description: 'Prior Approval'});

type PAPart6ClassA = Static<typeof PAPart6ClassA>;
const PAPart6ClassA = Type.Literal('pa.part6.classA', {
  description: 'Prior Approval',
});

type PAPart6ClassB = Static<typeof PAPart6ClassB>;
const PAPart6ClassB = Type.Literal('pa.part6.classB', {
  description: 'Prior Approval',
});

type PAPart6ClassE = Static<typeof PAPart6ClassE>;
const PAPart6ClassE = Type.Literal('pa.part6.classE', {
  description: 'Prior Approval',
});

type PAPart7ClassC = Static<typeof PAPart7ClassC>;
const PAPart7ClassC = Type.Literal('pa.part7.classC', {
  description: 'Prior Approval',
});

type PAPart7ClassM = Static<typeof PAPart7ClassM>;
const PAPart7ClassM = Type.Literal('pa.part7.classM', {
  description: 'Prior Approval',
});

type PAPart9ClassD = Static<typeof PAPart9ClassD>;
const PAPart9ClassD = Type.Literal('pa.part9.classD', {
  description: 'Prior Approval',
});

type PAPart11ClassB = Static<typeof PAPart11ClassB>;
const PAPart11ClassB = Type.Literal('pa.part11.classB', {
  description: 'Prior Approval',
});

type PAPart14ClassA = Static<typeof PAPart14ClassA>;
const PAPart14ClassA = Type.Literal('pa.part14.classA', {
  description: 'Prior Approval',
});

type PAPart14ClassB = Static<typeof PAPart14ClassB>;
const PAPart14ClassB = Type.Literal('pa.part14.classB', {
  description: 'Prior Approval',
});

type PAPart14ClassJ = Static<typeof PAPart14ClassJ>;
const PAPart14ClassJ = Type.Literal('pa.part14.classJ', {
  description: 'Prior Approval',
});

type PAPart14ClassK = Static<typeof PAPart14ClassK>;
const PAPart14ClassK = Type.Literal('pa.part14.classK', {
  description: 'Prior Approval',
});

type PAPart14ClassOA = Static<typeof PAPart14ClassOA>;
const PAPart14ClassOA = Type.Literal('pa.part14.classOA', {
  description: 'Prior Approval',
});

type PAPart16ClassA = Static<typeof PAPart16ClassA>;
const PAPart16ClassA = Type.Literal('pa.part16.classA', {
  description: 'Prior Approval',
});

type PAPart17 = Static<typeof PAPart17>;
const PAPart17 = Type.Literal('pa.part17', {description: 'Prior Approval'});

type PAPart17ClassB = Static<typeof PAPart17ClassB>;
const PAPart17ClassB = Type.Literal('pa.part17.classB', {
  description: 'Prior Approval',
});

type PAPart17ClassC = Static<typeof PAPart17ClassC>;
const PAPart17ClassC = Type.Literal('pa.part17.classC', {
  description: 'Prior Approval',
});

type PAPart17ClassG = Static<typeof PAPart17ClassG>;
const PAPart17ClassG = Type.Literal('pa.part17.classG', {
  description: 'Prior Approval',
});

type PAPart18ClassA = Static<typeof PAPart18ClassA>;
const PAPart18ClassA = Type.Literal('pa.part18.classA', {
  description: 'Prior Approval',
});

type PAPart19ClassTA = Static<typeof PAPart19ClassTA>;
const PAPart19ClassTA = Type.Literal('pa.part19.classTA', {
  description: 'Prior Approval',
});

type PAPart20ClassA = Static<typeof PAPart20ClassA>;
const PAPart20ClassA = Type.Literal('pa.part20.classA', {
  description: 'Prior Approval',
});

type PAPart20ClassAA = Static<typeof PAPart20ClassAA>;
const PAPart20ClassAA = Type.Literal('pa.part20.classAA', {
  description: 'Prior Approval',
});

type PAPart20ClassAB = Static<typeof PAPart20ClassAB>;
const PAPart20ClassAB = Type.Literal('pa.part20.classAB', {
  description: 'Prior Approval',
});

type PAPart20ClassAC = Static<typeof PAPart20ClassAC>;
const PAPart20ClassAC = Type.Literal('pa.part20.classAC', {
  description: 'Prior Approval',
});

type PAPart20ClassAD = Static<typeof PAPart20ClassAD>;
const PAPart20ClassAD = Type.Literal('pa.part20.classAD', {
  description: 'Prior Approval',
});

type PAPart20ClassZA = Static<typeof PAPart20ClassZA>;
const PAPart20ClassZA = Type.Literal('pa.part20.classZA', {
  description: 'Prior Approval',
});

type PP = Static<typeof PP>;
const PP = Type.Literal('pp', {description: 'Planning Permission'});

type PPFull = Static<typeof PPFull>;
const PPFull = Type.Literal('pp.full', {
  description:
    'Planning Permission for development, including all householder, minor, and major applications',
});

type PPFullAdvertConsent = Static<typeof PPFullAdvertConsent>;
const PPFullAdvertConsent = Type.Literal('pp.full.advertConsent', {
  description: 'Full Planning Permission and consent to display an advert',
});

type PPFullDemolition = Static<typeof PPFullDemolition>;
const PPFullDemolition = Type.Literal('pp.full.demolition', {
  description:
    'Full Planning Permission including demolition in a Conservation Area',
});

type PPFullFastTrackAffordable = Static<typeof PPFullFastTrackAffordable>;
const PPFullFastTrackAffordable = Type.Literal('pp.full.fastTrack.affordable', {
  description: 'Full Planning Permission',
});

type PPFullHouseholder = Static<typeof PPFullHouseholder>;
const PPFullHouseholder = Type.Literal('pp.full.householder', {
  description: 'Planning Permission',
});

type PPFullHouseholderListed = Static<typeof PPFullHouseholderListed>;
const PPFullHouseholderListed = Type.Literal('pp.full.householder.listed', {
  description: 'Planning Permission',
});

type PPFullHouseholderRetro = Static<typeof PPFullHouseholderRetro>;
const PPFullHouseholderRetro = Type.Literal('pp.full.householder.retro', {
  description: 'Planning Permission',
});

type PPFullMajor = Static<typeof PPFullMajor>;
const PPFullMajor = Type.Literal('pp.full.major', {
  description: 'Planning Permission',
});

type PPFullMajorTechnicalDetails = Static<typeof PPFullMajorTechnicalDetails>;
const PPFullMajorTechnicalDetails = Type.Literal(
  'pp.full.major.technicalDetails',
  {description: 'Planning Permission'},
);

type PPFullMajorTechnicalDetailsWaste = Static<
  typeof PPFullMajorTechnicalDetailsWaste
>;
const PPFullMajorTechnicalDetailsWaste = Type.Literal(
  'pp.full.major.technicalDetails.waste',
  {description: 'Planning Permission'},
);

type PPFullMajorWaste = Static<typeof PPFullMajorWaste>;
const PPFullMajorWaste = Type.Literal('pp.full.major.waste', {
  description: 'Planning Permission',
});

type PPFullMinor = Static<typeof PPFullMinor>;
const PPFullMinor = Type.Literal('pp.full.minor', {
  description: 'Planning Permission',
});

type PPFullMinorListed = Static<typeof PPFullMinorListed>;
const PPFullMinorListed = Type.Literal('pp.full.minor.listed', {
  description: 'Planning Permission',
});

type PPFullMinorTechnicalDetails = Static<typeof PPFullMinorTechnicalDetails>;
const PPFullMinorTechnicalDetails = Type.Literal(
  'pp.full.minor.technicalDetails',
  {description: 'Planning Permission'},
);

type PPMineralExtraction = Static<typeof PPMineralExtraction>;
const PPMineralExtraction = Type.Literal('pp.mineralExtraction', {
  description: 'Planning Permission',
});

type PPOutline = Static<typeof PPOutline>;
const PPOutline = Type.Literal('pp.outline', {
  description: 'Planning permission',
});

type PPOutlineAll = Static<typeof PPOutlineAll>;
const PPOutlineAll = Type.Literal('pp.outline.all', {
  description: 'Outline Planning Permission',
});

type PPOutlineSome = Static<typeof PPOutlineSome>;
const PPOutlineSome = Type.Literal('pp.outline.some', {
  description: 'Outline Planning Permission',
});

type PPOutlineMinor = Static<typeof PPOutlineMinor>;
const PPOutlineMinor = Type.Literal('pp.outline.minor', {
  description: 'Planning permission',
});

type PPOutlineMinorAll = Static<typeof PPOutlineMinorAll>;
const PPOutlineMinorAll = Type.Literal('pp.outline.minor.all', {
  description: 'Outline Planning Permission',
});

type PPOutlineMinorSome = Static<typeof PPOutlineMinorSome>;
const PPOutlineMinorSome = Type.Literal('pp.outline.minor.some', {
  description: 'Outline Planning Permission',
});

type PPOutlineMajor = Static<typeof PPOutlineMajor>;
const PPOutlineMajor = Type.Literal('pp.outline.major', {
  description: 'Planning permission',
});

type PPOutlineMajorAll = Static<typeof PPOutlineMajorAll>;
const PPOutlineMajorAll = Type.Literal('pp.outline.major.all', {
  description: 'Outline Planning Permission',
});

type PPOutlineMajorAllWaste = Static<typeof PPOutlineMajorAllWaste>;
const PPOutlineMajorAllWaste = Type.Literal('pp.outline.major.all.waste', {
  description: 'Outline Planning Permission',
});

type PPOutlineMajorSome = Static<typeof PPOutlineMajorSome>;
const PPOutlineMajorSome = Type.Literal('pp.outline.major.some', {
  description: 'Outline Planning Permission',
});

type PPOutlineMajorSomeWaste = Static<typeof PPOutlineMajorSomeWaste>;
const PPOutlineMajorSomeWaste = Type.Literal('pp.outline.major.some.waste', {
  description: 'Outline Planning Permission',
});

type PPPip = Static<typeof PPPip>;
const PPPip = Type.Literal('pp.pip', {
  description: 'Planning Permission in Principle',
});

type RightsOfWayOrder = Static<typeof RightsOfWayOrder>;
const RightsOfWayOrder = Type.Literal('rightsOfWayOrder', {
  description: 'Rights of Way Order',
});

type WTT = Static<typeof WTT>;
const WTT = Type.Literal('wtt', {description: 'Works to trees'});

type WTTConsent = Static<typeof WTTConsent>;
const WTTConsent = Type.Literal('wtt.consent', {
  description:
    'Consent to carry out works to a tree with a Tree Preservation Order',
});

type WTTNotice = Static<typeof WTTNotice>;
const WTTNotice = Type.Literal('wtt.notice', {
  description:
    'Notification of proposed works to a tree in a Conservation Area',
});

export type ApplicationType = Static<typeof ApplicationType>;
export const ApplicationType = Type.Union(
  [
    AdvertConsent,
    Amendment,
    AmendmentMinorMaterial,
    AmendmentNonMaterial,
    Approval,
    ApprovalConditions,
    ApprovalReservedMatters,
    ComplianceConfirmation,
    EnvironmentalImpact,
    EnvironmentalImpactScoping,
    EnvironmentalImpactScreening,
    HazardousSubstanceConsent,
    HedgerowRemovalNotice,
    LandDrainageConsent,
    LDC,
    LDCBreachOfCondition,
    LDCExisting,
    LDCListedBuildingWorks,
    LDCProposed,
    Listed,
    NotifyCompletion,
    Obligation,
    ObligationDischarge,
    ObligationModify,
    OnshoreExtractionOilAndGas,
    OnshoreExtractionOilAndGasOther,
    OnshoreExtractionOilAndGasPPExtension,
    OnshoreExtractionOilAndGasPPWaste,
    OnshoreExtractionOilAndGasPPWorking,
    OnshoreExtractionOilAndGasReview,
    OnshoreExtractionOilAndGasVariation,
    PA,
    PAPart1ClassA,
    PAPart1ClassAA,
    PAPart3ClassG,
    PAPart3ClassM,
    PAPart3ClassMA,
    PAPart3ClassN,
    PAPart3ClassQ,
    PAPart3ClassR,
    PAPart3ClassS,
    PAPart3ClassT,
    PAPart3ClassV,
    PAPart4ClassBB,
    PAPart4ClassBC,
    PAPart4ClassCA,
    PAPart4ClassE,
    PAPart6,
    PAPart6ClassA,
    PAPart6ClassB,
    PAPart6ClassE,
    PAPart7ClassC,
    PAPart7ClassM,
    PAPart9ClassD,
    PAPart11ClassB,
    PAPart14ClassA,
    PAPart14ClassB,
    PAPart14ClassJ,
    PAPart14ClassK,
    PAPart14ClassOA,
    PAPart16ClassA,
    PAPart17,
    PAPart17ClassB,
    PAPart17ClassC,
    PAPart17ClassG,
    PAPart18ClassA,
    PAPart19ClassTA,
    PAPart20ClassA,
    PAPart20ClassAA,
    PAPart20ClassAB,
    PAPart20ClassAC,
    PAPart20ClassAD,
    PAPart20ClassZA,
    PP,
    PPFull,
    PPFullAdvertConsent,
    PPFullDemolition,
    PPFullFastTrackAffordable,
    PPFullHouseholder,
    PPFullHouseholderListed,
    PPFullHouseholderRetro,
    PPFullMajor,
    PPFullMajorTechnicalDetails,
    PPFullMajorTechnicalDetailsWaste,
    PPFullMajorWaste,
    PPFullMinor,
    PPFullMinorListed,
    PPFullMinorTechnicalDetails,
    PPMineralExtraction,
    PPOutline,
    PPOutlineAll,
    PPOutlineSome,
    PPOutlineMinor,
    PPOutlineMinorAll,
    PPOutlineMinorSome,
    PPOutlineMajor,
    PPOutlineMajorAll,
    PPOutlineMajorAllWaste,
    PPOutlineMajorSome,
    PPOutlineMajorSomeWaste,
    PPPip,
    RightsOfWayOrder,
    WTT,
    WTTConsent,
    WTTNotice,
  ],
  {id: '#ApplicationType', description: 'Planning application types'},
);

// Get all literal values from ApplicationType
const allValues: string[] = Array.isArray(ApplicationType.anyOf)
  ? ApplicationType.anyOf.map(type => type.const as string)
  : [];

// Extract primary keys (first segment before '.')
const primaryKeys: string[] = Array.from(
  new Set(
    allValues
      .map(v => (typeof v === 'string' ? v.split('.')[0] : undefined))
      .filter((k): k is string => !!k),
  ),
);

export type PrimaryApplicationType = Static<typeof PrimaryApplicationType>;
export const PrimaryApplicationType = Type.Union(
  primaryKeys.map(k => Type.Literal(k)),
  {
    title: 'Primary application type',
    description: 'The first segment of the application type hierarchical code',
  },
);
