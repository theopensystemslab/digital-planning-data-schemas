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
 */
export type DateTime = string;

/**
 * @format date
 */
export type Date = string;

/**
 * @id #GeoJSON
 */
export type GeoJSON = Record<string, any>;

/**
 * @id #Area
 */
export type Area = {
  squareMetres: number;
  hectares?: number;
};
