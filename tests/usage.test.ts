import {expect, test} from 'vitest';
import {Validator} from 'jsonschema';
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
