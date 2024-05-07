# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

**Note:** Version 0 of Semantic Versioning is handled differently from version 1 and above.
The minor version will be incremented upon a breaking change and the patch version will be
incremented for features.

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
