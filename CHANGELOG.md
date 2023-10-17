# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

**Note:** Version 0 of Semantic Versioning is handled differently from version 1 and above.
The minor version will be incremented upon a breaking change and the patch version will be
incremented for features.

## [0.1.1] - 2023-10-17

### Changed
- Adjusted shape of `data.property.constraints.planning` and added a `PlanningConstraint` definition ([#50](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/50))
- Added more granular values to the `ProjectType` definition ([#55](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/55/files))
- Improved examples, especially `data.proposal.details` ([#54](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/54))
- Minor naming and organisational adjustments throughout based on early feedback

### Fixed
- Corrected usage of JSON Schema `Date` format ([#52](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/52))

### Removed 
- Dropped `metadata.service.publishedFlowId`, as this will always be inferrable from `flowId` and the session's dates ([#57](https://github.com/theopensystemslab/digital-planning-data-schemas/pull/57))

## [0.1.0] - 2023-10-04

### Added
- Released our first full working draft :tada:
