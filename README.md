# Digital Planning Data schemas
This repository contains data specifications to describe Digital Planning services developed by [Open Digital Planning](https://opendigitalplanning.org/). Each specification is communicated via a [JSON Schema](https://json-schema.org/) document.

Our initial specification defines data structures, rules, and validation logic for **planning applications** - including Lawful Development Certificate, Prior Approval, and Planning Permission services - that are being designed and submitted via [PlanX](https://www.planx.uk/). 

Digital Planning Data schemas aim to encourage more interoperability and consistency between systems by offering a central, version controlled specification for documenting and validating planning data. 

Going forward, we hope that this repository will expand beyond applications to further describe planning reference numbers, site notices, consultations, and more.

## Usage
There's two main options for integrating with Digital Planning Data schemas:

1. Reference a hosted schema file directly:

   `https://theopensystemslab.github.io/digital-planning-data-schemas/<VERSION>/schemas/<SCHEMA>.json` 

1. Clone this repository and reference the local schema files programmatically in your own code using tools that support JSON Schema validation

For more detailed info on integrating and validating schemas, please refer to the examples and tests in this repo.

## Repository structure

`/examples`: Examples of valid payloads for each application type supported by the specifications encoded in this repository.

`/schemas`: The main JSON Schema files. The `main` branch of this repo will reflect the `@next` version, while historic versions are documented and released on the `dist` branch.

`/types`: TypeScript interfaces used to generate the JSON Schemas.

`/tests`: Test suites to ensure that the generated schema and example payloads are valid, accurate, and capable of handling different scenarios.

## Installation

Assumes [PNPM](https://pnpm.io/) is available globally.

```shell
pnpm i
```

## Developing
The JSON Schemas are defined using TypeScript interfaces and then generated using the `ts-json-schema-generator` library.

To make changes, update `/types` and then run `pnpm build` to automatically generate the output JSON file under `/schemas`.

Types should be annotated using JSDocs, which will then be read during schema generation. 

Please see the [JSON schema docs](https://json-schema.org/understanding-json-schema/reference/) for a full list of references for various types.

## Adding examples and testing

Add a TypeScript file to `/examples/<SCHEMA>/data` with at least one exported variable representing an example payload definition.

Run `pnpm build-json-examples` to automatically generate a corresponding JSON file per example payload in the root of `/examples`.

Run `pnpm test` to confirm your example payload can be successfully validated against the Digital Planning Data schema.

## Publishing
To publish a new version, open a pull request against `main` which increments the `package.json` version.

On merge, the [publish.yml](https://github.com/theopensystemslab/digital-planning-data-schemas/blob/main/.github/workflows/publish.yml) GitHub Action will update the `dist` branch, create a release, and publish the new version via GitHub pages at `http://theopensystemslab.github.io/digital-planning-data-schemas/<VERSION>/schemas/<SCHEMA>.json`

## Contributing
We welcome feedback, bug reports, and contributions to help improve and grow the Digital Planning Data schemas via GitHub Issues and Pull Requests.

## License
Distributed under the Mozilla Public License Version 2.0. See `LICENSE.txt` for more information.
