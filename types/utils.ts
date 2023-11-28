/** see available @format types here https://json-schema.org/understanding-json-schema/reference/string.html#built-in-formats */

/**
 * @format uuid
 */
export type UUID = string;

/**
 * @format email
 */
export type Email = string;

/**
 * @format uri
 * @pattern ^https?://
 */
export type URL = string;

/**
 * @format date-time
 * @pattern ^[0-9]{4}-((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01])|(0[469]|11)-(0[1-9]|[12][0-9]|30)|(02)-(0[1-9]|[12][0-9]))T(0[0-9]|1[0-9]|2[0-3]):(0[0-9]|[1-5][0-9]):(0[0-9]|[1-5][0-9])\.[0-9]{3}Z$
 * @description Regex-based implementation of iso-date-time until available in ajv-formats@3.0.0
 */
export type DateTime = string;

/**
 * @format date
 */
export type Date = string;

/**
 * @id #Area
 */
export type Area = {
  squareMetres: number;
  hectares?: number;
};
