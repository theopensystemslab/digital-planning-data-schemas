import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import {Validator} from 'jsonschema';
import {describe, expect, test} from 'vitest';

import {lawfulDevelopmentCertificateExisting} from '../examples/data/lawfulDevelopmentCertificate/existing';
import {lawfulDevelopmentCertificateProposed} from '../examples/data/lawfulDevelopmentCertificate/proposed';
import {listedBuildingConsent} from '../examples/data/listedBuildingConsent';
import {planningPermissionFullHouseholder} from '../examples/data/planningPermission/fullHouseholder';
import {planningPermissionMajor} from '../examples/data/planningPermission/major';
import {planningPermissionMinor} from '../examples/data/planningPermission/minor';
import {priorApprovalBuildHomes} from '../examples/data/priorApproval/buildHomes';
import {priorApprovalConvertCommercialToHome} from '../examples/data/priorApproval/convertCommercialToHome';
import {priorApprovalExtendUniversity} from '../examples/data/priorApproval/extendUniversity';
import {priorApprovalSolarPanels} from '../examples/data/priorApproval/solarPanels';
import generatedSchema from '../schema/schema.json';

const examplesToTest = [
  lawfulDevelopmentCertificateExisting,
  lawfulDevelopmentCertificateProposed,
  listedBuildingConsent,
  planningPermissionFullHouseholder,
  planningPermissionMajor,
  planningPermissionMinor,
  priorApprovalExtendUniversity,
  priorApprovalSolarPanels,
  priorApprovalBuildHomes,
  priorApprovalConvertCommercialToHome,
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
