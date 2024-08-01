/**
 * @description Alter a building
 */
type Alter = 'alter';

/**
 * @description Add or alter a balcony
 */
type AlterBalcony = 'alter.balcony';

/**
 * @description Add or remove a bay window
 */
type AlterBayWindow = 'alter.bayWindow';

/**
 * @description Add a bay window
 */
type AlterBayWindowAdd = 'alter.bayWindow.add';

/**
 * @description Add a bay window to the rear of the building
 */
type AlterBayWindowRear = 'alter.bayWindow.rear';

/**
 * @description Remove a bay window
 */
type AlterBayWindowRemove = 'alter.bayWindow.remove';

/**
 * @description Changes to a fence, wall or gate
 */
type AlterBoundary = 'alter.boundary';

/**
 * @description Add a new fence, wall or gate
 */
type AlterBoundaryAdd = 'alter.boundary.add';

/**
 * @description Add a new fence
 */
type AlterBoundaryAddFence = 'alter.boundary.add.fence';

/**
 * @description Add a new gate
 */
type AlterBoundaryAddGate = 'alter.boundary.add.gate';

/**
 * @description Add a new boundary wall
 */
type AlterBoundaryAddWall = 'alter.boundary.add.wall';

/**
 * @description Change a fence, wall or gate
 */
type AlterBoundaryAlter = 'alter.boundary.alter';

/**
 * @description Remove a fence, wall, or gate
 */
type AlterBoundaryRemove = 'alter.boundary.remove';

/**
 * @description Repair a fence, wall or gate
 */
type AlterBoundaryRepair = 'alter.boundary.repair';

/**
 * @description Repair a fence
 */
type AlterBoundaryRepairFence = 'alter.boundary.repair.fence';

/**
 * @description Repair a gate
 */
type AlterBoundaryRepairGate = 'alter.boundary.repair.gate';

/**
 * @description Repair a wall
 */
type AlterBoundaryRepairWall = 'alter.boundary.repair.wall';

/**
 * @description Replace a fence, wall or gate
 */
type AlterBoundaryReplace = 'alter.boundary.replace';

/**
 * @description Replace a fence
 */
type AlterBoundaryReplaceFence = 'alter.boundary.replace.fence';

/**
 * @description Replace a gate
 */
type AlterBoundaryReplaceGate = 'alter.boundary.replace.gate';

/**
 * @description Replace a wall
 */
type AlterBoundaryReplaceWall = 'alter.boundary.replace.wall';

/**
 * @description Install underground cables
 */
type AlterCables = 'alter.cables';

/**
 * @description Change the material of a fence, wall or gate
 */
type AlterChangeOfMaterialsBoundary = 'alter.changeOfMaterials.boundary';

/**
 * @description Change the material of chimneys
 */
type AlterChangeOfMaterialsChimney = 'alter.changeOfMaterials.chimney';

/**
 * @description Change the material of external doors
 */
type AlterChangeOfMaterialsExternalDoors =
  'alter.changeOfMaterials.externalDoors';

/**
 * @description Change the material of external walls
 */
type AlterChangeOfMaterialsExternalWalls =
  'alter.changeOfMaterials.externalWalls';

/**
 * @description Change the material of floors
 */
type AlterChangeOfMaterialsFloors = 'alter.changeOfMaterials.floors';

/**
 * @description Change the material of vehicle access or hardstanding
 */
type AlterChangeOfMaterialsHardstanding =
  'alter.changeOfMaterials.hardstanding';

/**
 * @description Change the material of internal doors
 */
type AlterChangeOfMaterialsInternalDoors =
  'alter.changeOfMaterials.internalDoors';

/**
 * @description Change the material of internal walls
 */
type AlterChangeOfMaterialsInternalWalls =
  'alter.changeOfMaterials.internalWalls';

/**
 * @description Change the material of something else
 */
type AlterChangeOfMaterialsOther = 'alter.changeOfMaterials.other';

/**
 * @description Change the material of rainwater goods
 */
type AlterChangeOfMaterialsRainwaterGoods =
  'alter.changeOfMaterials.rainwaterGoods';

/**
 * @description Change the material of roof coverings
 */
type AlterChangeOfMaterialsRoofCovering =
  'alter.changeOfMaterials.roofCovering';

/**
 * @description Change the material of windows
 */
type AlterChangeOfMaterialsWindows = 'alter.changeOfMaterials.windows';

/**
 * @description Change chimneys
 */
type AlterChimneys = 'alter.chimneys';

/**
 * @description Add a chimney
 */
type AlterChimneysAdd = 'alter.chimneys.add';

/**
 * @description Replace a chimney
 */
type AlterChimneysReplace = 'alter.chimneys.replace';

/**
 * @description Add a verandah or deck
 */
type AlterDecks = 'alter.decks';

/**
 * @description Add a high verandah or deck
 */
type AlterDecksHigh = 'alter.decksHigh';

/**
 * @description Work on drains
 */
type AlterDrains = 'alter.drains';

/**
 * @description Install equipment
 */
type AlterEquipment = 'alter.equipment';

/**
 * @description Install an air conditioning unit
 */
type AlterEquipmentAirConditioning = 'alter.equipment.airConditioning';

/**
 * @description Install a security alarm
 */
type AlterEquipmentAlarm = 'alter.equipment.alarm';

/**
 * @description Install a satellite dish or aerial
 */
type AlterEquipmentAntennae = 'alter.equipment.antennae';

/**
 * @description Install an aerial antennae
 */
type AlterEquipmentAntennaeAerial = 'alter.equipment.antennae.aerial';

/**
 * @description Install a satellite dish
 */
type AlterEquipmentAntennaeDish = 'alter.equipment.antennae.dish';

/**
 * @description Install a barbecue
 */
type AlterEquipmentBbq = 'alter.equipment.bbq';

/**
 * @description Install a flue with a biomass burner
 */
type AlterEquipmentBiomass = 'alter.equipment.biomass';

/**
 * @description Install CCTV cameras
 */
type AlterEquipmentCctv = 'alter.equipment.cctv';

/**
 * @description Install a car charging point
 */
type AlterEquipmentCharging = 'alter.equipment.charging';

/**
 * @description Install a heat pump
 */
type AlterEquipmentHeatPump = 'alter.equipment.heatPump';

/**
 * @description Install an air heat pump
 */
type AlterEquipmentHeatPumpAir = 'alter.equipment.heatPump.air';

/**
 * @description Install a ground heat pump
 */
type AlterEquipmentHeatPumpGround = 'alter.equipment.heatPump.ground';

/**
 * @description Install a water heat pump
 */
type AlterEquipmentHeatPumpWater = 'alter.equipment.heatPump.water';

/**
 * @description Install industrial equipment
 */
type AlterEquipmentIndustrial = 'alter.equipment.industrial';

/**
 * @description Install outdoor lights
 */
type AlterEquipmentLighting = 'alter.equipment.lighting';

/**
 * @description Install machinery
 */
type AlterEquipmentMachinery = 'alter.equipment.machinery';

/**
 * @description Install solar panels
 */
type AlterEquipmentSolar = 'alter.equipment.solar';

/**
 * @description Install solar photovoltaics (PV)
 */
type AlterEquipmentSolarPV = 'alter.equipment.solar.pv';

/**
 * @description Install solar thermal equipment
 */
type AlterEquipmentSolarThermal = 'alter.equipment.solar.thermal';

/**
 * @description Install an outdoor tank (for example a water tank)
 */
type AlterEquipmentTank = 'alter.equipment.tank';

/**
 * @description Install ventilation
 */
type AlterEquipmentVentilation = 'alter.equipment.ventilation';

/**
 * @description Install internet equipment
 */
type AlterEquipmentWifi = 'alter.equipment.wifi';

/**
 * @description Install a wind turbine
 */
type AlterEquipmentWind = 'alter.equipment.wind';

/**
 * @description Change the material or colour of the external walls
 */
type AlterFacades = 'alter.facades';

/**
 * @description Change the insulation of the facade
 */
type AlterFacadesInsulation = 'alter.facades.insulation';

/**
 * @description Paint the facade
 */
type AlterFacadesPaint = 'alter.facades.paint';

/**
 * @description Change the material or colour of the external walls to the rear of the building
 */
type AlterFacadesRear = 'alter.facades.rear';

/**
 * @description Change the cladding of the facade
 */
type AlterFacadesReclad = 'alter.facades.reclad';

/**
 * @description Repair the facade
 */
type AlterFacadesRepair = 'alter.facades.repair';

/**
 * @description Changes to a public road, pavement or path (including drop kerb)
 */
type AlterHighways = 'alter.highways';

/**
 * @description Create a point of access to a highway
 */
type AlterHighwaysAccess = 'alter.highways.access';

/**
 * @description Create a point of access to an unclassified road
 */
type AlterHighwaysAccessUnclassified = 'alter.highways.access.unclassified';

/**
 * @description Changes to a dropped kerb
 */
type AlterHighwaysDropKerb = 'alter.highways.dropKerb';

/**
 * @description Changes to a dropped kerb
 */
type AlterHighwaysDroppedKerb = 'alter.highways.droppedKerb';

/**
 * @description Add a dropped kerb
 */
type AlterHighwaysDroppedKerbAdd = 'alter.highways.droppedKerb.add';

/**
 * @description Remove a dropped kerb
 */
type AlterHighwaysDroppedKerbRemove = 'alter.highways.droppedKerb.remove';

/**
 * @description Changes to a road
 */
type AlterHighwaysRoad = 'alter.highways.road';

/**
 * @description Add a road
 */
type AlterHighwaysRoadAdd = 'alter.highways.road.add';

/**
 * @description Remove a road
 */
type AlterHighwaysRoadRemove = 'alter.highways.road.remove';

/**
 * @description Install plant equipment or machinery
 */
type AlterIndustrialPlant = 'alter.industrial.plant';

/**
 * @description Changes to internal walls or layout
 */
type AlterInternal = 'alter.internal';

/**
 * @description Landscaping works
 */
type AlterLandscape = 'alter.landscape';

/**
 * @description Add or remove a residential lawn or garden
 */
type AlterLandscapeGardens = 'alter.landscape.gardens';

/**
 * @description Add or remove a pond
 */
type AlterLandscapePonds = 'alter.landscape.ponds';

/**
 * @description Change a door or window opening
 */
type AlterOpenings = 'alter.openings';

/**
 * @description Add a door or window opening
 */
type AlterOpeningsAdd = 'alter.openings.add';

/**
 * @description Add one or more new doorways
 */
type AlterOpeningsAddDoor = 'alter.openings.add.door';

/**
 * @description Add new doorways to the front of the building
 */
type AlterOpeningsAddDoorFront = 'alter.openings.add.door.front';

/**
 * @description Add new doorways to the rear of the building
 */
type AlterOpeningsAddDoorRear = 'alter.openings.add.door.rear';

/**
 * @description Add new doorways to the side of the building
 */
type AlterOpeningsAddDoorSide = 'alter.openings.add.door.side';

/**
 * @description Add one or more new windows
 */
type AlterOpeningsAddWindow = 'alter.openings.add.window';

/**
 * @description Add one or more new windows
 */
type AlterOpeningsAddWindows = 'alter.openings.add.windows';

/**
 * @description Add new windows to the front of the building
 */
type AlterOpeningsAddWindowsFront = 'alter.openings.add.windows.front';

/**
 * @description Add new windows 1.7m up or higher
 */
type AlterOpeningsAddWindowsHigh = 'alter.openings.add.windows.high';

/**
 * @description Add new windows to the rear of the building
 */
type AlterOpeningsAddWindowsRear = 'alter.openings.add.windows.rear';

/**
 * @description Add new shutters to windows
 */
type AlterOpeningsAddWindowsShutters = 'alter.openings.add.windows.shutters';

/**
 * @description Add new windows to the side of the building
 */
type AlterOpeningsAddWindowsSide = 'alter.openings.add.windows.side';

/**
 * @description Change the size of doorways or windows
 */
type AlterOpeningsAlter = 'alter.openings.alter';

/**
 * @description Convert a doorway into a window
 */
type AlterOpeningsAlterConvertDoorToWindow =
  'alter.openings.alter.convert.doorToWindow';

/**
 * @description Convert a window into a doorway
 */
type AlterOpeningsAlterConvertWindowToDoor =
  'alter.openings.alter.convert.windowToDoor';

/**
 * @description Enlarge a door opening
 */
type AlterOpeningsAlterEnlargeDoor = 'alter.openings.alter.enlarge.door';

/**
 * @description Enlarge a window opening
 */
type AlterOpeningsAlterEnlargeWindow = 'alter.openings.alter.enlarge.window';

/**
 * @description Enlarge a window opening on the front of a building
 */
type AlterOpeningsAlterEnlargeWindowFront =
  'alter.openings.alter.enlarge.window.front';

/**
 * @description Enlarge a window opening on the rear of a building
 */
type AlterOpeningsAlterEnlargeWindowRear =
  'alter.openings.alter.enlarge.window.rear';

/**
 * @description Enlarge a window opening on the side of a building
 */
type AlterOpeningsAlterEnlargeWindowSide =
  'alter.openings.alter.enlarge.window.side';

/**
 * @description Reduce the size of a door opening
 */
type AlterOpeningsAlterReduceDoor = 'alter.openings.alter.reduce.door';

/**
 * @description Reduce the size of a window opening
 */
type AlterOpeningsAlterReduceWindow = 'alter.openings.alter.reduce.window';

/**
 * @description Reduce the size of a window opening on the front of a building
 */
type AlterOpeningsAlterReduceWindowFront =
  'alter.openings.alter.reduce.window.front';

/**
 * @description Reduce the size of a window opening on the rear of a building
 */
type AlterOpeningsAlterReduceWindowRear =
  'alter.openings.alter.reduce.window.rear';

/**
 * @description Reduce the size of a window opening on the side of a building
 */
type AlterOpeningsAlterReduceWindowSide =
  'alter.openings.alter.reduce.window.side';

/**
 * @description Block up doorways or windows
 */
type AlterOpeningsRemove = 'alter.openings.remove';

/**
 * @description Block up doorways
 */
type AlterOpeningsRemoveDoor = 'alter.openings.remove.door';

/**
 * @description Block up windows
 */
type AlterOpeningsRemoveWindow = 'alter.openings.remove.window';

/**
 * @description Install pipes
 */
type AlterPipes = 'alter.pipes';

/**
 * @description Remove part of a building (such as a decorative feature)
 */
type AlterRemove = 'alter.remove';

/**
 * @description Remove a chimney
 */
type AlterRemoveChimney = 'alter.remove.chimney';

/**
 * @description Remove a deck
 */
type AlterRemoveDeck = 'alter.remove.deck';

/**
 * @description Remove a drain
 */
type AlterRemoveDrain = 'alter.remove.drain';

/**
 * @description Remove energy equipment
 */
type AlterRemoveEquipment = 'alter.remove.equipment';

/**
 * @description Remove part of a facade
 */
type AlterRemoveFacade = 'alter.remove.facade';

/**
 * @description Remove a soil pipe
 */
type AlterRemoveSoilPipe = 'alter.remove.soilPipe';

/**
 * @description Remove a hard surface
 */
type AlterRemoveSurface = 'alter.remove.surface';

/**
 * @description Repair windows or doors
 */
type AlterRepair = 'alter.repair';

/**
 * @description Repair doors
 */
type AlterRepairDoors = 'alter.repair.doors';

/**
 * @description Repair windows
 */
type AlterRepairWindows = 'alter.repair.windows';

/**
 * @description Replace windows or doors
 */
type AlterReplace = 'alter.replace';

/**
 * @description Replace door with door
 */
type AlterReplaceDoorsToDoors = 'alter.replace.doorsToDoors';

/**
 * @description Replace door with door on the front of a building
 */
type AlterReplaceDoorsToDoorsFront = 'alter.replace.doorsToDoors.front';

/**
 * @description Replace door with door on the rear of a building
 */
type AlterReplaceDoorsToDoorsRear = 'alter.replace.doorsToDoors.rear';

/**
 * @description Replace door with door on the side of a building
 */
type AlterReplaceDoorsToDoorsSide = 'alter.replace.doorsToDoors.side';

/**
 * @description Replace door with window
 */
type AlterReplaceDoorsToWindows = 'alter.replace.doorsToWindows';

/**
 * @description Replace door with window on the front of a building
 */
type AlterReplaceDoorsToWindowsFront = 'alter.replace.doorsToWindows.front';

/**
 * @description Replace door with window on the rear of a building
 */
type AlterReplaceDoorsToWindowsRear = 'alter.replace.doorsToWindows.rear';

/**
 * @description Replace door with window on the side of a building
 */
type AlterReplaceDoorsToWindowsSide = 'alter.replace.doorsToWindows.side';

/**
 * @description Replace window with door
 */
type AlterReplaceWindowsToDoors = 'alter.replace.windowsToDoors';

/**
 * @description Replace window with door on the front of a building
 */
type AlterReplaceWindowsToDoorsFront = 'alter.replace.windowsToDoors.front';

/**
 * @description Replace window with door on the rear of a building
 */
type AlterReplaceWindowsToDoorsRear = 'alter.replace.windowsToDoors.rear';

/**
 * @description Replace window with door on the side of a building
 */
type AlterReplaceWindowsToDoorsSide = 'alter.replace.windowsToDoors.side';

/**
 * @description Replace window with window
 */
type AlterReplaceWindowsToWindows = 'alter.replace.windowsToWindows';

/**
 * @description Replace window with window on the front ofa building
 */
type AlterReplaceWindowsToWindowsFront = 'alter.replace.windowsToWindows.front';

/**
 * @description Replace window with window on the rear of a building
 */
type AlterReplaceWindowsToWindowsRear = 'alter.replace.windowsToWindows.rear';

/**
 * @description Replace window with window on the side of a building
 */
type AlterReplaceWindowsToWindowsSide = 'alter.replace.windowsToWindows.side';

/**
 * @description Change the roof
 */
type AlterRoof = 'alter.roof';

/**
 * @description Replace or change the roof materials
 */
type AlterRoofMaterials = 'alter.roof.materials';

/**
 * @description Add or change a roof parapet
 */
type AlterRoofParapet = 'alter.roof.parapet';

/**
 * @description Add a roof terrace
 */
type AlterRoofRoofTerrace = 'alter.roof.roofTerrace';

/**
 * @description Change the shape of a roof
 */
type AlterRoofShape = 'alter.roof.shape';

/**
 * @description Add skylights to an existing roof
 */
type AlterRooflight = 'alter.rooflight';

/**
 * @description Add secondary glazing to a window
 */
type AlterSecondaryGlazing = 'alter.secondaryGlazing';

/**
 * @description Add or alter shop fronts
 */
type AlterShopfronts = 'alter.shopfronts';

/**
 * @description Add or alter shutters
 */
type AlterShutters = 'alter.shutters';

/**
 * @description Add an advert or sign
 */
type AlterSign = 'alter.sign';

/**
 * @description Add or replace a soil pipe
 */
type AlterSoilPipes = 'alter.soilPipes';

/**
 * @description Add or change an external staircase
 */
type AlterStaircase = 'alter.staircase';

/**
 * @description Add a low surface
 */
type AlterSurfaceLow = 'alter.surfaceLow';

/**
 * @description Add a decked area or patio
 */
type AlterSurfaces = 'alter.surfaces';

/**
 * @description Add a decked area
 */
type AlterSurfacesDeck = 'alter.surfaces.deck';

/**
 * @description Add a driveway or parking area
 */
type AlterSurfacesParking = 'alter.surfaces.parking';

/**
 * @description Extend a driveway or parking area
 */
type AlterSurfacesParkingExtend = 'alter.surfaces.parking.extend';

/**
 * @description Add a new driveway or parking area
 */
type AlterSurfacesParkingNew = 'alter.surfaces.parking.new';

/**
 * @description Replace a driveway or parking area
 */
type AlterSurfacesParkingReplace = 'alter.surfaces.parking.replace';

/**
 * @description Add a patio
 */
type AlterSurfacesPatio = 'alter.surfaces.patio';

/**
 * @description Extend a patio
 */
type AlterSurfacesPatioExtend = 'alter.surfaces.patio.extend';

/**
 * @description Add a new patio
 */
type AlterSurfacesPatioNew = 'alter.surfaces.patio.new';

/**
 * @description Replace a patio
 */
type AlterSurfacesPatioReplace = 'alter.surfaces.patio.replace';

/**
 * @description Install a swimming pool
 */
type AlterSwimmingPool = 'alter.swimmingPool';

/**
 * @description Install an indoor swimming pool
 */
type AlterSwimmingPoolIndoor = 'alter.swimmingPool.indoor';

/**
 * @description Install an outdoor swimming pool
 */
type AlterSwimmingPoolOutdoor = 'alter.swimmingPool.outdoor';

/**
 * @description Changes to trees or hedges
 */
type AlterTrees = 'alter.trees';

/**
 * @description Changes to hedges
 */
type AlterTreesHedge = 'alter.trees.hedge';

/**
 * @description Let hedges grow
 */
type AlterTreesHedgeLetGrow = 'alter.trees.hedge.letGrow';

/**
 * @description New hedges
 */
type AlterTreesHedgeNew = 'alter.trees.hedge.new';

/**
 * @description Prune hedges
 */
type AlterTreesHedgePrune = 'alter.trees.hedge.prune';

/**
 * @description Remove hedges
 */
type AlterTreesHedgeRemove = 'alter.trees.hedge.remove';

/**
 * @description Changes to trees
 */
type AlterTreesTree = 'alter.trees.tree';

/**
 * @description New trees
 */
type AlterTreesTreeNew = 'alter.trees.tree.new';

/**
 * @description Prune trees
 */
type AlterTreesTreePrune = 'alter.trees.tree.prune';

/**
 * @description Remove trees
 */
type AlterTreesTreeRemove = 'alter.trees.tree.remove';

/**
 * @description Change the use of a building
 */
type ChangeOfUse = 'changeOfUse';

/**
 * @description Convert part of the property into a  granny flat (residential annexe)
 */
type ChangeOfUseAnnexe = 'changeOfUse.annexe';

/**
 * @description Use a caravan or mobile home on the property
 */
type ChangeOfUseCaravans = 'changeOfUse.caravans';

/**
 * @description Convert an extension
 */
type ChangeOfUseExtension = 'changeOfUse.extension';

/**
 * @description Convert a garage
 */
type ChangeOfUseGarage = 'changeOfUse.garage';

/**
 * @description Change the use of land
 */
type ChangeOfUseLand = 'changeOfUse.land';

/**
 * @description Let a part of the property
 */
type ChangeOfUseLetPart = 'changeOfUse.let.part';

/**
 * @description Let the property
 */
type ChangeOfUseLetWhole = 'changeOfUse.let.whole';

/**
 * @description Convert or change the use of an outbuilding (such as a shed, garage or barn)
 */
type ChangeOfUseOutbuilding = 'changeOfUse.outbuilding';

/**
 * @description Convert or change the use of part of a building
 */
type ChangeOfUsePart = 'changeOfUse.part';

/**
 * @description Change the use of a property
 */
type ChangeOfUseProperty = 'changeOfUse.property';

/**
 * @description Convert or change the use of a whole building
 */
type ChangeOfUseWhole = 'changeOfUse.whole';

/**
 * @description Convert a home to bedsits or a shared home
 */
type ChangeOfUseWholeHomeToHMO = 'changeOfUse.whole.homeToHMO';

/**
 * @description Work from home
 */
type ChangeOfUseWorkFromHome = 'changeOfUse.workFromHome';

/**
 * @description Demolish a building
 */
type Demolish = 'demolish';

/**
 * @description Demolish a fence, gate or boundary wall
 */
type DemolishBoundary = 'demolish.boundary';

/**
 * @description Total demolition of a building
 */
type DemolishFull = 'demolish.full';

/**
 * @description Demolish internal walls
 */
type DemolishInternal = 'demolish.internal';

/**
 * @description Demolish a listed building
 */
type DemolishListed = 'demolish.listed';

/**
 * @description Total demolition of a listed building
 */
type DemolishListedFull = 'demolish.listed.full';

/**
 * @description Demolish part of a listed building
 */
type DemolishListedPart = 'demolish.listed.part';

/**
 * @description Demolish an outbuilding (such as a garage or barn)
 */
type DemolishOutbuilding = 'demolish.outbuilding';

/**
 * @description Total demolition of an outbuilding (such as a garage or barn)
 */
type DemolishOutbuildingFull = 'demolish.outbuilding.full';

/**
 * @description Demolish part of an outbuilding (such as a garage or barn)
 */
type DemolishOutbuildingPart = 'demolish.outbuilding.part';

/**
 * @description Demolish part of a building (such as an extension)
 */
type DemolishPart = 'demolish.part';

/**
 * @description Demolish part of a conservatory
 */
type DemolishPartConservatory = 'demolish.part.conservatory';

/**
 * @description Demolish a building and build homes in its place
 */
type DemolishReplace = 'demolish.replace';

/**
 * @description Extend a building or add an outbuilding
 */
type Extend = 'extend';

/**
 * @description Enlarge a balcony
 */
type ExtendBalcony = 'extend.balcony';

/**
 * @description Add a basement extension
 */
type ExtendBasement = 'extend.basement';

/**
 * @description Enlarge a basement
 */
type ExtendBasementExtend = 'extend.basement.extend';

/**
 * @description Add a lightwell
 */
type ExtendBasementLightwell = 'extend.basement.lightwell';

/**
 * @description Add a new basement extension
 */
type ExtendBasementNew = 'extend.basement.new';

/**
 * @description Add a front extension
 */
type ExtendFront = 'extend.front';

/**
 * @description Add an outbuilding (such as a shed, garage or garden office)
 */
type ExtendOutbuilding = 'extend.outbuilding';

/**
 * @description Add an outbuilding - animal enclosure, aviary or beehive
 */
type ExtendOutbuildingAnimals = 'extend.outbuilding.animals';

/**
 * @description Add an outbuilding - residential (or "granny") annexe
 */
type ExtendOutbuildingAnnexe = 'extend.outbuilding.annexe';

/**
 * @description Add an outbuilding - bedroom or guest room
 */
type ExtendOutbuildingBedroom = 'extend.outbuilding.bedroom';

/**
 * @description Add an outbuilding - games room
 */
type ExtendOutbuildingGames = 'extend.outbuilding.games';

/**
 * @description Add an outbuilding - garage
 */
type ExtendOutbuildingGarage = 'extend.outbuilding.garage';

/**
 * @description Add an outbuilding - greenhouse
 */
type ExtendOutbuildingGreenhouse = 'extend.outbuilding.greenhouse';

/**
 * @description Add an outbuilding - gym
 */
type ExtendOutbuildingGym = 'extend.outbuilding.gym';

/**
 * @description Add an outbuilding - office
 */
type ExtendOutbuildingOffice = 'extend.outbuilding.office';

/**
 * @description Add an outbuilding - something else
 */
type ExtendOutbuildingOther = 'extend.outbuilding.other';

/**
 * @description Add an outbuilding - play house
 */
type ExtendOutbuildingPlay = 'extend.outbuilding.play';

/**
 * @description Add an outbuilding - sauna
 */
type ExtendOutbuildingSauna = 'extend.outbuilding.sauna';

/**
 * @description Add an outbuilding - shed
 */
type ExtendOutbuildingShed = 'extend.outbuilding.shed';

/**
 * @description Add an outbuilding - car parking or smoking shelter
 */
type ExtendOutbuildingShelter = 'extend.outbuilding.shelter';

/**
 * @description Add an outbuilding - storage
 */
type ExtendOutbuildingStore = 'extend.outbuilding.store';

/**
 * @description Add an outbuilding - studio
 */
type ExtendOutbuildingStudio = 'extend.outbuilding.studio';

/**
 * @description Add an outbuilding - summer house
 */
type ExtendOutbuildingSummerHouse = 'extend.outbuilding.summerHouse';

/**
 * @description Add an outbuilding - swimming pool
 */
type ExtendOutbuildingSwimmingPool = 'extend.outbuilding.swimmingPool';

/**
 * @description Add an outbuilding - tank
 */
type ExtendOutbuildingTank = 'extend.outbuilding.tank';

/**
 * @description Add an outbuilding - workshop
 */
type ExtendOutbuildingWorkshop = 'extend.outbuilding.workshop';

/**
 * @description Add a porch
 */
type ExtendPorch = 'extend.porch';

/**
 * @description Add a porch to the front of the building
 */
type ExtendPorchFront = 'extend.porch.front';

/**
 * @description Add a porch to the rear of the building
 */
type ExtendPorchRear = 'extend.porch.rear';

/**
 * @description Add a porch to the side of the building
 */
type ExtendPorchSide = 'extend.porch.side';

/**
 * @description Add a rear or side extension (or conservatory)
 */
type ExtendRear = 'extend.rear';

/**
 * @description Add a rear extension
 */
type ExtendRearRear = 'extend.rear.rear';

/**
 * @description Add a side extension
 */
type ExtendRearSide = 'extend.rear.side';

/**
 * @description Add a roof extension
 */
type ExtendRoof = 'extend.roof';

/**
 * @description Join two roofs
 */
type ExtendRoofConnect = 'extend.roof.connect';

/**
 * @description Add a roof dormer
 */
type ExtendRoofDormer = 'extend.roof.dormer';

/**
 * @description Add a roof dormer to the front of the building
 */
type ExtendRoofDormerFront = 'extend.roof.dormer.front';

/**
 * @description Add a roof dormer to the front and rear of the building
 */
type ExtendRoofDormerFrontAndRear = 'extend.roof.dormer.frontAndRear';

/**
 * @description Add a mansard roof
 */
type ExtendRoofDormerMansard = 'extend.roof.dormer.mansard';

/**
 * @description Add a roof dormer to the rear of the building
 */
type ExtendRoofDormerRear = 'extend.roof.dormer.rear';

/**
 * @description Add a roof dormer to the side of the building
 */
type ExtendRoofDormerSide = 'extend.roof.dormer.side';

/**
 * @description Convert a hip roof to a gable
 */
type ExtendRoofHiptogable = 'extend.roof.hiptogable';

/**
 * @description Convert a hip roof to a gable
 */
type ExtendRoofHipToGable = 'extend.roof.hipToGable';

/**
 * @description Convert to a mansard roof
 */
type ExtendRoofMansard = 'extend.roof.mansard';

/**
 * @description Add one or more new storeys
 */
type ExtendRoofNewstorey = 'extend.roof.newstorey';

/**
 * @description Add one or more new storeys
 */
type ExtendRoofNewStorey = 'extend.roof.newStorey';

/**
 * @description Convert to a sloping roof
 */
type ExtendRoofSlope = 'extend.roof.slope';

/**
 * @description Add a side extension
 */
type ExtendSide = 'extend.side';

/**
 * @description Add an upper storey extension
 */
type ExtendUpperStorey = 'extend.upperStorey';

/**
 * @description Internal building works, such as change the internal layout
 */
type Internal = 'internal';

/**
 * @description Alter internal doors
 */
type InternalDoorways = 'internal.doorways';

/**
 * @description Alter internal finishes
 */
type InternalFinishes = 'internal.finishes';

/**
 * @description Alter internal floors
 */
type InternalFloors = 'internal.floors';

/**
 * @description Convert a loft
 */
type InternalLoft = 'internal.loft';

/**
 * @description Add a mezzanine floor
 */
type InternalMezzanine = 'internal.mezzanine';

/**
 * @description Alter internal staircases
 */
type InternalStaircases = 'internal.staircases';

/**
 * @description Alter internal walls
 */
type InternalWalls = 'internal.walls';

/**
 * @description Alter internal window openings
 */
type InternalWindowsOpenings = 'internal.windows.openings';

/**
 * @description Maintenance of an existing structure
 */
type Maintain = 'maintain';

/**
 * @description Add a new separate building or self-contained units
 */
type New = 'new';

/**
 * @description New agricultural buildings
 */
type NewAgriculture = 'new.agriculture';

/**
 * @description New agricultural buildings - glasshouse
 */
type NewAgricultureGlasshouse = 'new.agriculture.glasshouse';

/**
 * @description New agricultural buildings - mining
 */
type NewAgricultureMining = 'new.agriculture.mining';

/**
 * @description New agricultural buildings - pigs
 */
type NewAgriculturePigs = 'new.agriculture.pigs';

/**
 * @description New agricultural buildings - poultry
 */
type NewAgriculturePoultry = 'new.agriculture.poultry';

/**
 * @description Install click and collect facilities
 */
type NewClickCollect = 'new.clickCollect';

/**
 * @description New, self-contained dwelling
 */
type NewDwelling = 'new.dwelling';

/**
 * @description New flats
 */
type NewDwellingFlat = 'new.dwelling.flat';

/**
 * @description New houses
 */
type NewDwellingHouse = 'new.dwelling.house';

/**
 * @description Build new forestry buildings
 */
type NewForestry = 'new.forestry';

/**
 * @description New industrial premises
 */
type NewIndustrial = 'new.industrial';

/**
 * @description New waste disposal facilities
 */
type NewIndustrialWaste = 'new.industrial.waste';

/**
 * @description New leisure premises
 */
type NewLeisure = 'new.leisure';

/**
 * @description New offices
 */
type NewOffice = 'new.office';

/**
 * @description Add another type of building - something else
 */
type NewOther = 'new.other';

/**
 * @description Build new homes
 */
type NewResidentialDwelling = 'new.residential.dwelling';

/**
 * @description New retail premises
 */
type NewRetail = 'new.retail';

/**
 * @description Install telecommunications equipment
 */
type NewTelecoms = 'new.telecoms';

/**
 * @description Build a temporary structure
 */
type NewTemporaryStructure = 'new.temporaryStructure';

/**
 * @description New storage or distribution premises
 */
type NewWarehouse = 'new.warehouse';

/**
 * @description Negate a project type
 */
type Not = 'not';

/**
 * @description Do not add or change windows or doors
 */
type NotAlterReplace = 'not.alter.replace';

/**
 * @description Do not add or change a rooflight
 */
type NotAlterRooflight = 'not.alter.rooflight';

/**
 * @description Do not add or change a dropped kerb
 */
type NotDropKerb = 'not.dropKerb';

/**
 * @description Repairs
 */
type Repair = 'repair';

/**
 * @description Repair the historic fabric
 */
type RepairHistoricFabric = 'repair.historicFabric';

/**
 * @description Other project type
 */
type Other = 'other';

/**
 * @description Change of units
 */
type Unit = 'unit';

/**
 * @description Convert two or more properties into one
 */
type UnitMerge = 'unit.merge';

/**
 * @description Convert a home or part of a home into flats
 */
type UnitSubdivide = 'unit.subdivide';

/**
 * @id #ProjectType
 * @description Planning project types
 */
export type ProjectType =
  | Alter
  | AlterBalcony
  | AlterBayWindow
  | AlterBayWindowAdd
  | AlterBayWindowRear
  | AlterBayWindowRemove
  | AlterBoundary
  | AlterBoundaryAdd
  | AlterBoundaryAddFence
  | AlterBoundaryAddGate
  | AlterBoundaryAddWall
  | AlterBoundaryAlter
  | AlterBoundaryRemove
  | AlterBoundaryRepair
  | AlterBoundaryRepairFence
  | AlterBoundaryRepairGate
  | AlterBoundaryRepairWall
  | AlterBoundaryReplace
  | AlterBoundaryReplaceFence
  | AlterBoundaryReplaceGate
  | AlterBoundaryReplaceWall
  | AlterCables
  | AlterChangeOfMaterialsBoundary
  | AlterChangeOfMaterialsChimney
  | AlterChangeOfMaterialsExternalDoors
  | AlterChangeOfMaterialsExternalWalls
  | AlterChangeOfMaterialsFloors
  | AlterChangeOfMaterialsHardstanding
  | AlterChangeOfMaterialsInternalDoors
  | AlterChangeOfMaterialsInternalWalls
  | AlterChangeOfMaterialsOther
  | AlterChangeOfMaterialsRainwaterGoods
  | AlterChangeOfMaterialsRoofCovering
  | AlterChangeOfMaterialsWindows
  | AlterChimneys
  | AlterChimneysAdd
  | AlterChimneysReplace
  | AlterDecks
  | AlterDecksHigh
  | AlterDrains
  | AlterEquipment
  | AlterEquipmentAirConditioning
  | AlterEquipmentAlarm
  | AlterEquipmentAntennae
  | AlterEquipmentAntennaeAerial
  | AlterEquipmentAntennaeDish
  | AlterEquipmentBbq
  | AlterEquipmentBiomass
  | AlterEquipmentCctv
  | AlterEquipmentCharging
  | AlterEquipmentHeatPump
  | AlterEquipmentHeatPumpAir
  | AlterEquipmentHeatPumpGround
  | AlterEquipmentHeatPumpWater
  | AlterEquipmentIndustrial
  | AlterEquipmentLighting
  | AlterEquipmentMachinery
  | AlterEquipmentSolar
  | AlterEquipmentSolarPV
  | AlterEquipmentSolarThermal
  | AlterEquipmentTank
  | AlterEquipmentVentilation
  | AlterEquipmentWifi
  | AlterEquipmentWind
  | AlterFacades
  | AlterFacadesInsulation
  | AlterFacadesPaint
  | AlterFacadesRear
  | AlterFacadesReclad
  | AlterFacadesRepair
  | AlterHighways
  | AlterHighwaysAccess
  | AlterHighwaysAccessUnclassified
  | AlterHighwaysDropKerb
  | AlterHighwaysDroppedKerb
  | AlterHighwaysDroppedKerbAdd
  | AlterHighwaysDroppedKerbRemove
  | AlterHighwaysRoad
  | AlterHighwaysRoadAdd
  | AlterHighwaysRoadRemove
  | AlterIndustrialPlant
  | AlterInternal
  | AlterLandscape
  | AlterLandscapeGardens
  | AlterLandscapePonds
  | AlterOpenings
  | AlterOpeningsAdd
  | AlterOpeningsAddDoor
  | AlterOpeningsAddDoorFront
  | AlterOpeningsAddDoorRear
  | AlterOpeningsAddDoorSide
  | AlterOpeningsAddWindow
  | AlterOpeningsAddWindows
  | AlterOpeningsAddWindowsFront
  | AlterOpeningsAddWindowsHigh
  | AlterOpeningsAddWindowsRear
  | AlterOpeningsAddWindowsShutters
  | AlterOpeningsAddWindowsSide
  | AlterOpeningsAlter
  | AlterOpeningsAlterConvertDoorToWindow
  | AlterOpeningsAlterConvertWindowToDoor
  | AlterOpeningsAlterEnlargeDoor
  | AlterOpeningsAlterEnlargeWindow
  | AlterOpeningsAlterEnlargeWindowFront
  | AlterOpeningsAlterEnlargeWindowRear
  | AlterOpeningsAlterEnlargeWindowSide
  | AlterOpeningsAlterReduceDoor
  | AlterOpeningsAlterReduceWindow
  | AlterOpeningsAlterReduceWindowFront
  | AlterOpeningsAlterReduceWindowRear
  | AlterOpeningsAlterReduceWindowSide
  | AlterOpeningsRemove
  | AlterOpeningsRemoveDoor
  | AlterOpeningsRemoveWindow
  | AlterPipes
  | AlterRemove
  | AlterRemoveChimney
  | AlterRemoveDeck
  | AlterRemoveDrain
  | AlterRemoveEquipment
  | AlterRemoveFacade
  | AlterRemoveSoilPipe
  | AlterRemoveSurface
  | AlterRepair
  | AlterRepairDoors
  | AlterRepairWindows
  | AlterReplace
  | AlterReplaceDoorsToDoors
  | AlterReplaceDoorsToDoorsFront
  | AlterReplaceDoorsToDoorsRear
  | AlterReplaceDoorsToDoorsSide
  | AlterReplaceDoorsToWindows
  | AlterReplaceDoorsToWindowsFront
  | AlterReplaceDoorsToWindowsRear
  | AlterReplaceDoorsToWindowsSide
  | AlterReplaceWindowsToDoors
  | AlterReplaceWindowsToDoorsFront
  | AlterReplaceWindowsToDoorsRear
  | AlterReplaceWindowsToDoorsSide
  | AlterReplaceWindowsToWindows
  | AlterReplaceWindowsToWindowsFront
  | AlterReplaceWindowsToWindowsRear
  | AlterReplaceWindowsToWindowsSide
  | AlterRoof
  | AlterRoofMaterials
  | AlterRoofParapet
  | AlterRoofRoofTerrace
  | AlterRoofShape
  | AlterRooflight
  | AlterSecondaryGlazing
  | AlterShopfronts
  | AlterShutters
  | AlterSign
  | AlterSoilPipes
  | AlterStaircase
  | AlterSurfaceLow
  | AlterSurfaces
  | AlterSurfacesDeck
  | AlterSurfacesParking
  | AlterSurfacesParkingExtend
  | AlterSurfacesParkingNew
  | AlterSurfacesParkingReplace
  | AlterSurfacesPatio
  | AlterSurfacesPatioExtend
  | AlterSurfacesPatioNew
  | AlterSurfacesPatioReplace
  | AlterSwimmingPool
  | AlterSwimmingPoolIndoor
  | AlterSwimmingPoolOutdoor
  | AlterTrees
  | AlterTreesHedge
  | AlterTreesHedgeLetGrow
  | AlterTreesHedgeNew
  | AlterTreesHedgePrune
  | AlterTreesHedgeRemove
  | AlterTreesTree
  | AlterTreesTreeNew
  | AlterTreesTreePrune
  | AlterTreesTreeRemove
  | ChangeOfUse
  | ChangeOfUseAnnexe
  | ChangeOfUseCaravans
  | ChangeOfUseExtension
  | ChangeOfUseGarage
  | ChangeOfUseLand
  | ChangeOfUseLetPart
  | ChangeOfUseLetWhole
  | ChangeOfUseOutbuilding
  | ChangeOfUsePart
  | ChangeOfUseProperty
  | ChangeOfUseWhole
  | ChangeOfUseWholeHomeToHMO
  | ChangeOfUseWorkFromHome
  | Demolish
  | DemolishBoundary
  | DemolishFull
  | DemolishInternal
  | DemolishListed
  | DemolishListedFull
  | DemolishListedPart
  | DemolishOutbuilding
  | DemolishOutbuildingFull
  | DemolishOutbuildingPart
  | DemolishPart
  | DemolishPartConservatory
  | DemolishReplace
  | Extend
  | ExtendBalcony
  | ExtendBasement
  | ExtendBasementExtend
  | ExtendBasementLightwell
  | ExtendBasementNew
  | ExtendFront
  | ExtendOutbuilding
  | ExtendOutbuildingAnimals
  | ExtendOutbuildingAnnexe
  | ExtendOutbuildingBedroom
  | ExtendOutbuildingGames
  | ExtendOutbuildingGarage
  | ExtendOutbuildingGreenhouse
  | ExtendOutbuildingGym
  | ExtendOutbuildingOffice
  | ExtendOutbuildingOther
  | ExtendOutbuildingPlay
  | ExtendOutbuildingSauna
  | ExtendOutbuildingShed
  | ExtendOutbuildingShelter
  | ExtendOutbuildingStore
  | ExtendOutbuildingStudio
  | ExtendOutbuildingSummerHouse
  | ExtendOutbuildingSwimmingPool
  | ExtendOutbuildingTank
  | ExtendOutbuildingWorkshop
  | ExtendPorch
  | ExtendPorchFront
  | ExtendPorchRear
  | ExtendPorchSide
  | ExtendRear
  | ExtendRearRear
  | ExtendRearSide
  | ExtendRoof
  | ExtendRoofConnect
  | ExtendRoofDormer
  | ExtendRoofDormerFront
  | ExtendRoofDormerFrontAndRear
  | ExtendRoofDormerMansard
  | ExtendRoofDormerRear
  | ExtendRoofDormerSide
  | ExtendRoofHiptogable
  | ExtendRoofHipToGable
  | ExtendRoofMansard
  | ExtendRoofNewstorey
  | ExtendRoofNewStorey
  | ExtendRoofSlope
  | ExtendSide
  | ExtendUpperStorey
  | Internal
  | InternalDoorways
  | InternalFinishes
  | InternalFloors
  | InternalLoft
  | InternalMezzanine
  | InternalStaircases
  | InternalWalls
  | InternalWindowsOpenings
  | Maintain
  | New
  | NewAgriculture
  | NewAgricultureGlasshouse
  | NewAgricultureMining
  | NewAgriculturePigs
  | NewAgriculturePoultry
  | NewClickCollect
  | NewDwelling
  | NewDwellingFlat
  | NewDwellingHouse
  | NewForestry
  | NewIndustrial
  | NewIndustrialWaste
  | NewLeisure
  | NewOffice
  | NewOther
  | NewResidentialDwelling
  | NewRetail
  | NewTelecoms
  | NewTemporaryStructure
  | NewWarehouse
  | Not
  | NotAlterReplace
  | NotAlterRooflight
  | NotDropKerb
  | Repair
  | RepairHistoricFabric
  | Other
  | Unit
  | UnitMerge
  | UnitSubdivide;
