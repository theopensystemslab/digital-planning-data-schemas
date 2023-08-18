# Digital Planning Data Schemas
Welcome to the Digital Planning Data Schemas repository! Here, we are creating and maintaining comprehensive JSON schemas that define the structure and format of Digital Planning services. Our goal is to provide a standardized and consistent way of representing data in the realm of digital planning, enabling seamless integration, efficient data exchange, and improved collaboration among various tools and platforms.

## Installation
```shell
npm install -g pnpm@8.6.6
pnpm i
```

## Repository Structure
Here's an overview of the main directories:

`/schema`: This directory contains the JSON schema files for different aspects of Digital Planning. Each schema is documented and versioned to ensure consistency and traceability.

`/examples`: Here, you'll find real-world examples illustrating how to use the schemas in various scenarios. These examples provide practical guidance on implementing the schemas in your projects. (TODO)

`/types`: This directory holds the TypeScript interfaces which are used to generate the JSON schema.

`/tests`: This houses test suites and cases to ensure that the schemas are valid, accurate, and capable of handling a variety of scenarios.

## Usage
Integrating our Digital Planning data schemas into your projects is straightforward. You can either directly reference the schema files from this repository or integrate them programmatically using tools that support JSON schema validation.

To reference a schema directly, you can use URLs like the following:

`http://theopensystemslab.github.io/digital-planning-data-schemas/<VERSION>/schema.json`

Alternatively, you can clone the repository to your local environment and use the schema files programmatically in your code.

For more detailed information on integrating and validating schemas, please refer to our examples.

## Developing
The JSON schema is defined using TypeScript interfaces and then generated using the `ts-json-schema-generator` library.

To make changes, update source types and then run `pnpm build` to generate the output JSON file.

We use JSDocs to annotate our types, which is also used as part of the schema generation. At a minimum, please try to add the following annotation to all types - 

```ts
/**
 * @id Unique identifier
 * @title A helpful title - usually the interface name
 * @description A helpful description of this interface
 */
```

Many additional properties can be provided, such as 

```ts
/**
 * @format e.g. "email", "uuid" - see https://json-schema.org/understanding-json-schema/reference/string.html#built-in-formats
 * @minmum Min length
 * @maximum Max length
 * @pattern Regex - see https://json-schema.org/understanding-json-schema/reference/regular_expressions.html#regular-expressions
 */
```

Please see the [JSON schema docs](https://json-schema.org/understanding-json-schema/reference/) for a full list of references for various types

## Publishing
To publish a new version, commit a change to `main` which increments `package.json` version. 

GitHub actions will then checkout the `dist` branch and commit your change, and they'll be published via GitHub pages at `http://theopensystemslab.github.io/digital-planning-data-schemas/<VERSION>/schema.json`

For more details, take a look at [publish.yml](https://github.com/theopensystemslab/digital-planning-data-schemas/blob/main/.github/workflows/publish.yml)

## Contributing
We welcome contributions from the community to help us improve and expand our Digital Planning data schemas. Whether you find a bug, want to propose an enhancement, or have created a new schema that you believe would benefit others, we encourage you to get involved by opening an issue.

## License
Distributed under the Mozilla Public License Version 2.0. See `LICENSE.txt` for more information.

## Feedback
If you have any suggestions, questions, or concerns related to our Digital Planning data schemas or the repository itself, please open an Issue on GitHub.