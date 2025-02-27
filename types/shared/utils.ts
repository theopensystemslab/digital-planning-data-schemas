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
 * @pattern ^([0-9]+)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])[Tt]([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60)(\.[0-9]+)?(([Zz])|([\+|\-]([01][0-9]|2[0-3]):[0-5][0-9]))$
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

// /**
//  * @format integer
//  */
export type Integer = number;
