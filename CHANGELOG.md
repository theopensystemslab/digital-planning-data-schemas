# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

**Note:** Version 0 of Semantic Versioning is handled differently from version 1 and above.
The minor version will be incremented upon a breaking change and the patch version will be
incremented for features.

## [0.7.2] - 2025-01-16

### Changed
- Updates `CommunityInfrastructureLevy` type to include "Not liable" path ([#282](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/282))
- Updates `Flags` enum values ([#285](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/285))
- Updates `PlanningDesignation` enum values ([#286](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/286))
- Updates `PropertyTypes` enum values ([#287](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/287))

### Added
- Adds a work-in-progress `PreApplication` schema, including example payloads ([#275](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/275))

## [0.7.1] - 2024-11-07

### Added
- Explicit support for address ranges ([#248](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/248))
- Additional application types synced to PlanX service development - notably `ldc.listedBuildingWorks` and `approval.conditions` ([#197](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/197))

## [0.7.0] - 2024-07-12

### Breaking
- Updated `ApplicationTypes`, `ProjectTypes` and `FileTypes` based on ODP Service development across whole planning application ecosystem ([#201](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/201), [#200](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/200), [#198](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/198), [#197](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/197), [#182](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/182), [#177](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/177), [#176](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/176))

### Added
- Added new example payloads and their associated types, now organised in subdirectories by application type ([#183](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/183)):
    - Minor planning permission ([#193](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/193))
    - Major planning permission ([#194](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/194))
    - Prior approvals (5 types) ([#195](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/195), [#186](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/186))
    - Land Drainage Consent ([#187](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/187))
- Added type definitions for Greater London Authority reporting requirements, like residential units etc ([#192](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/192), [#179](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/179), [#178](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/178))
- Added type definitions for "documents submitted as data" (not yet represented in example payloads) ([#180](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/180))

### Changed
- Tightened type defintion for planning desigation "entities" ([#196](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/196))
- Upgraded a number of technical dependencies via Dependabot

## [0.6.0] - 2024-05-03

### Breaking
- Updated `ApplicationTypes` related to Works to Trees (`wtt`) to reflect legal distinction of consent & notification ([#150](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/150))
- Updated `data.applicant.interest` to `data.applicant.ownership.interest` for better service alignment ([#168](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/168))
- Updated all `LondonProperty` subfields to be optional, as not all application types are subject to the extra Greater London Authority reporting requirements ([#164](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/164))
- Fixed a typo in the `ProtectedSpaceDesignation` type ([#155](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/155))

### Added
- Added a `validListedBuildingConsent` example payload ([#158](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/158))
- Added `data.application.fee.category` to communicate breakdown of total calculated fee by category of development ([#157](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/157/files), [#167](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/167))
- Added union type definition `ApplicationFeeNotApplicable` to signal when a specific application type or journey does not have any associated costs, rather than displaying `data.application.fee.payable = 0` ([#165](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/165))

### Changed
- Split Outline application types in Minor & Major to better align to legislation ([#151](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/151))
- Updated `ProjectTypes` to reflect Listed Building Consent and Minor & Major Planning Permission journeys ([#152](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/152), [#153](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/153))
- Updated `Ownership` type definition to capture more information about agricultural tenants and a discrete declaration of accuracy related to notifying any owners ([#159](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/159))
- Upgraded a number of technical dependencies via Dependabot

## [0.5.0] - 2024-03-28

### Breaking
- Updated `data.proposal.vehicleParking` to `data.property.parking` & `data.proposal.parking` to better align to Greater London Authority legislation for capturing existing count, proposed count, and difference in number of parking spaces per type of vehicle. Additionally drops `data.proposal.details` heirarchy, as this organisation wasn't meaningful in any policy context ([#136](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/136))

### Added
- Added change of use of land projects to supported `ProjectTypes` ([#142](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/142))

## [0.4.1] - 2024-03-15

### Added
- Added `service.metadata.fees` to communicate how the application fees were calculated, including policy references ([#124](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/124))
- Added a number of new `FileTypes` ([#137](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/137), [#133](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/133), [#128](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/128))
- Added type definitons to describe `CommunityInfrastructureLevy` planning charges on applicable applications ([#135](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/135))
- Added type definitions to describe existing & proposed `Materials` for applicable project types ([#134](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/134))

### Fixed
- Improved GitHub Action & CI workflows to ensure schema.json and examples are building as expected on `main` and in `dist` releases ([#132](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/132), [#131](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/131))
- Updated expired file URLs in example payloads ([#139](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/139))

## [0.4.0] - 2024-02-28

### Breaking
- Renamed two `PlanningDesignation` values that were previously incorrectly categorised as "designated land" ([#125](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/122))
- Removed duplicated "outbuildings" entries, now using singular "outbuilding" only, from `ProjectTypes` ([#123](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/123))
- Updated type `data.property.planning.designations.source` to include `text` & `url` ([#122](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/122))
- Updated `metadata.source` as requirement for any provider, not only PlanX ([#119](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/119))

### Fixed
- Adjusted build scripts so that generated examples in `/dist` have correct version numbers ([#114](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/114), [#115](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/115))

## [0.3.0] - 2024-02-08

### Breaking
- Renamed and added additional `FileTypes` ([#100](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/100), [#108](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/108), [#112](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/112))

### Added
- Added `service.metadata.files` to communicate all required, recommended, and optional files requested from the user based on their responses for reference during assessment ([#110](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/110))
- Added additional `PlanningDesignations` ([#106](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/106))

## [0.2.3] - 2024-01-29

### Added 
- Added additional `PlanningDesignations` ([#99](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/99))
- Added additional `ApplicationTypes`. Stay tuned for expanded example payloads in the next release! ([#98](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/98))

## [0.2.2] - 2023-12-15

### Added
- Added new optional text property `data.applicant.ownership.noticeReason` ([#89](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/89))

### Changed
- Added a number of additional supported `ProjectTypes` ([#88](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/88))
- Updated descriptions for `data.property.boundary` and `data.proposal.boundary` fields ([#89](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/89))

## [0.2.1] - 2023-11-28

### Changed
- `date-time` format is now supplemented by a regex pattern to restrict to the RFC3339 ISO format ([#75](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/75))

## [0.2.0] - 2023-11-17

### Breaking
- Renamed `result` to `preAssessment` and made optional, as applications from sources other than Planx are unlikely to provide this ([#66](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/66))

### Added
- Added `url` to `policyRefs` under `responses` ([#67](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/67))
- Added additional values to `ApplicationTypes` data dictionary ([#65](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/65), [#72](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/72))

### Changed
- Simplified `metadata` overall and updated `organisation` to align to Planning Data local authority reference codes ([#68](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/68), [#71](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/71))
- Adjusted shape of `data.property.planning` to better capture existing `designations` and their `sources`, and illustrate future scope including `conditions` and more ([#64](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/64), [#70](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/70))

## [0.1.2] - 2023-10-27

### Changed
- Updated GeoJSON type definition to use NPM's `@types/geojson` ([#59](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/59))
- Adjusted shape of `data.applicant` & `data.applicant.agent` contact details ([#62](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/62))
- Improved annotations and documentation throughout ([#60](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/60), [#61](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/61))

## [0.1.1] - 2023-10-17

### Changed
- Adjusted shape of `data.property.constraints.planning` and added a `PlanningConstraint` definition ([#50](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/50))
- Added more granular values to the `ProjectType` definition ([#55](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/55))
- Improved examples, especially `data.proposal.details` ([#54](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/54))
- Minor naming and organisational adjustments throughout based on early feedback

### Fixed
- Corrected usage of JSON Schema `Date` format ([#52](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/52))

### Removed 
- Dropped `metadata.service.publishedFlowId`, as this will always be inferrable from `flowId` and the session's dates ([#57](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/57))

## [0.1.0] - 2023-10-04

### Added
- Released our first full working draft :tada:
