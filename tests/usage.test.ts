import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import {Validator} from 'jsonschema';
import {describe, expect, test} from 'vitest';

import {validLDCE} from '../examples/data/ldcE';
import {validLDCP} from '../examples/data/ldcP';
import {validPlanningPermission} from '../examples/data/planningPermission';
import {validPriorApproval} from '../examples/data/priorApproval';
import generatedSchema from '../schema/schema.json';

const examplesToTest = [
  validLDCE,
  validLDCP,
  validPriorApproval,
  validPlanningPermission,
];

describe("parsing using the 'jsonschema' library", () => {
  examplesToTest.forEach(example => {
    test(`accepts a valid example: ${example.data.application.type.description}`, () => {
      const validator = new Validator();
      const result = validator.validate(example, generatedSchema, {
        disableFormat: true,
      });

      expect(result.errors).toHaveLength(0);
    });
  });

  test('rejects an invalid example', () => {
    const validator = new Validator();
    const invalidExample = {foo: 'bar'};
    const result = validator.validate(invalidExample, generatedSchema, {
      disableFormat: true,
    });

    expect(result.errors).not.toHaveLength(0);
  });
});

describe("parsing using the 'ajv' library", () => {
  examplesToTest.forEach(example => {
    test(`accepts a valid example: ${example.data.application.type.description}`, () => {
      // addFormats() is required for types UUID, email, datetime etc
      const ajv = addFormats(new Ajv({allowUnionTypes: true}));
      const validate = ajv.compile(generatedSchema);
      const isValid = validate(example);

      expect(validate.errors).toBeNull();
      expect(isValid).toBe(true);
    });
  });

  test('rejects an invalid example', () => {
    const invalidExample = {foo: 'bar'};

    const ajv = addFormats(new Ajv());
    const validate = ajv.compile(generatedSchema);
    const isValid = validate(invalidExample);

    expect(validate.errors).not.toBeNull();
    expect(isValid).toBe(false);
  });
});
