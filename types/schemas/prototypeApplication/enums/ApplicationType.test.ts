import {describe, expect, it} from 'vitest';
import {
  applicationTypeMap,
  applicationType,
  primaryApplicationType,
  ApplicationType,
  PrimaryApplicationType,
} from './ApplicationType';

describe('applicationType', () => {
  it('should only include submittable types (not service descriptors)', () => {
    for (const key in applicationTypeMap) {
      const entry = applicationTypeMap[key as keyof typeof applicationTypeMap];
      if (!entry.isServiceDescriptor) {
        expect(applicationType).toHaveProperty(key, entry.label);
      } else {
        expect(applicationType).not.toHaveProperty(key);
      }
    }
  });

  it('should have correct labels for submittable types', () => {
    for (const key in applicationType) {
      expect(applicationType[key as ApplicationType]).toBe(
        applicationTypeMap[key as keyof typeof applicationTypeMap].label,
      );
    }
  });
});

describe('primaryApplicationType', () => {
  it('should only include primary keys', () => {
    const expectedPrimaryKeys = new Set(
      Object.keys(applicationTypeMap)
        .filter(
          key =>
            !applicationTypeMap[key as keyof typeof applicationTypeMap]
              .isServiceDescriptor,
        )
        .map(key => key.split('.')[0]),
    );
    for (const key in primaryApplicationType) {
      expect(expectedPrimaryKeys.has(key)).toBe(true);
    }
  });

  it('should only have keys that do not contain a dot', () => {
    for (const key in primaryApplicationType) {
      expect(key.includes('.')).toBe(false);
    }
  });

  it('should have correct labels for primary keys (first occurrence wins)', () => {
    const seen = new Set<string>();
    for (const key in applicationTypeMap) {
      const entry = applicationTypeMap[key as keyof typeof applicationTypeMap];
      const primaryKey = key.split('.')[0];
      if (!seen.has(primaryKey)) {
        expect(
          primaryApplicationType[primaryKey as PrimaryApplicationType],
        ).toBe(entry.label);
        seen.add(primaryKey);
      }
    }
  });
});
