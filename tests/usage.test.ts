import {expect, test} from 'vitest';
import {Validator} from 'jsonschema';
import addFormats from 'ajv-formats';
import Ajv from 'ajv';
import generatedSchema from '../schema/schema.json';
import {validExample} from '../examples/';
import {describe} from 'vitest';

describe("parsing using the 'jsonschema' library", () => {
  test('the schema accepts a valid example', () => {
    const validator = new Validator();
    const result = validator.validate(validExample, generatedSchema);

    expect(result.errors).toHaveLength(0);
  });

  test('the schema rejects an invalid example', () => {
    const validator = new Validator();
    const invalidExample = {foo: 'bar'};
    const result = validator.validate(invalidExample, generatedSchema);

    expect(result.errors).not.toHaveLength(0);
  });
});

describe("parsing using the 'ajv' library", () => {
  test('the schema accepts a valid example', () => {
    // addFormats() is required for types UUID, email, datetime etc
    const ajv = addFormats(new Ajv());
    const validate = ajv.compile(generatedSchema);
    const isValid = validate(validExample);

    expect(validate.errors).toBeNull();
    expect(isValid).toBe(true);
  });

  test('the schema rejects an invalid example', () => {
    const invalidExample = {foo: 'bar'};

    const ajv = addFormats(new Ajv());
    const validate = ajv.compile(generatedSchema);
    const isValid = validate(invalidExample);

    expect(validate.errors).not.toBeNull();
    expect(isValid).toBe(false);
  });
});
