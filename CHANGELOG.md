# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

**Note:** Version 0 of Semantic Versioning is handled differently from version 1 and above.
The minor version will be incremented upon a breaking change and the patch version will be
incremented for features.

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
