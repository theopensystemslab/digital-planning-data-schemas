import * as fs from 'fs';
import * as path from 'path';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import {Schema, Validator} from 'jsonschema';
import {describe, expect, test} from 'vitest';
import applicationSchema from '../schemas/application.json';
// import postSubmissionApplicationSchema from '../schemas/postSubmissionApplication.json';
// import postSubmissionPublishedApplicationSchema from '../schemas/postSubmissionPublishedApplication.json';
import preApplicationSchema from '../schemas/preApplication.json';
import prototypeApplicationSchema from '../schemas/prototypeApplication.json';
import enforcementSchema from '../schemas/enforcement.json';
import {Application} from '../types/schemas/application';
// import { PostSubmissionApplication } from '../types/schemas/postSubmissionApplication';
// import { PostSubmissionPublishedApplication } from '../types/schemas/postSubmissionPublishedApplication';
import {PreApplication} from '../types/schemas/preApplication';
import {PrototypeApplication} from '../types/schemas/prototypeApplication';
import {Enforcement} from '../types/schemas/enforcement';

/**
 * Helper function to walk /examples directory and collect generated JSON files
 */
const getJSONExamples = <T>(schemaPath: string): T[] => {
  const examples: T[] = [];

  const walkDirectory = (dir: string) => {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);

      if (fs.statSync(filePath).isDirectory()) {
        walkDirectory(filePath);
      } else if (path.extname(filePath) === '.json') {
        const example = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        examples.push(example);
      }
    }
  };

  const examplesDir = path.join(__dirname, `../examples/${schemaPath}`);
  walkDirectory(examplesDir);

  return examples;
};

const schemas = [
  {
    name: 'Application',
    schema: applicationSchema,
    examples: getJSONExamples<Application>('application'),
  },
  {
    name: 'PreApplication',
    schema: preApplicationSchema,
    examples: getJSONExamples<PreApplication>('preApplication'),
  },
  {
    name: 'PrototypeApplication',
    schema: prototypeApplicationSchema,
    examples: getJSONExamples<PrototypeApplication>('prototypeApplication'),
  },
  {
    name: 'Enforcement',
    schema: enforcementSchema,
    examples: getJSONExamples<Enforcement>('enforcement'),
  },
  // {
  //   name: 'PostSubmissionApplication',
  //   schema: postSubmissionApplicationSchema,
  //   examples: getJSONExamples<PostSubmissionApplication>(
  //     'postSubmissionApplication',
  //   ),
  // },
  // {
  //   name: 'PostSubmissionPublishedApplication',
  //   schema: postSubmissionPublishedApplicationSchema,
  //   examples: getJSONExamples<PostSubmissionPublishedApplication>(
  //     'postSubmissionPublishedApplication',
  //   ),
  // },
];

describe.each(schemas)('$name', ({schema, examples}) => {
  const validator = new Validator();

  describe("parsing using the 'jsonschema' library", () => {
    describe.each<
      Application | PreApplication | PrototypeApplication | Enforcement
    >(examples)(
      '$data.application.type.description || $applicationType',
      example => {
        test('accepts a valid example', async () => {
          const result = validator.validate(example, schema as Schema);

          expect(result.errors).toHaveLength(0);
        });

        test('rejects an invalid example', () => {
          const invalidExample = {foo: 'bar'};
          const result = validator.validate(invalidExample, schema as Schema);

          expect(result.errors).not.toHaveLength(0);
        });
      },
    );
  });

  describe("parsing using the 'ajv' library", () => {
    // addFormats() is required for types UUID, email, datetime etc
    const ajv = addFormats(new Ajv({allowUnionTypes: true}));
    const validate = ajv.compile(schema);

    describe.each<
      Application | PreApplication | PrototypeApplication | Enforcement
    >(examples)(
      '$data.application.type.description || $applicationType',
      example => {
        test('accepts a valid example', async () => {
          const isValid = validate(example);

          expect(validate.errors).toBeNull();
          expect(isValid).toBe(true);
        });

        test('rejects an invalid example', () => {
          const invalidExample = {foo: 'bar'};
          const isValid = validate(invalidExample);

          expect(validate.errors).not.toBeNull();
          expect(isValid).toBe(false);
        });
      },
    );
  });
});
