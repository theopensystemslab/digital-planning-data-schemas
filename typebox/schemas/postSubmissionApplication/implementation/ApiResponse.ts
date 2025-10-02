import {Type} from '@sinclair/typebox';
import type {Static, TSchema} from '@sinclair/typebox';
import {CursorPagination, Pagination} from './Pagination';

/**
 * API response schema.
 * This schema defines the structure of the API response.
 * ApiResponseSchema can't be used on its own, it requires DataSchema to be passed to it
 *
 * @template T - The type of the data in the response.
 *
 * interface ApiResponse<T> {
 *  data: T | null; // The data returned by the API, can be null
 *  status?: {
 *    code: number;
 *    message: string;
 *    detail?: string;
 *  };
 * }
 *
 * @param DataSchema
 * @returns
 */
export type ApiResponse<T extends TSchema> = Static<
  ReturnType<typeof ApiResponse<T>>
>;
export const ApiResponse = <T extends TSchema>(
  T: T,
  options?: Parameters<typeof Type.Object>[1],
) =>
  Type.Object(
    {
      // data: Type.Union([T, Type.Null()]),
      data: T,
      pagination: Type.Optional(Type.Union([Pagination, CursorPagination])),
      status: Type.Optional(ApiResponseStatus),
    },
    options ? options : {description: '#ApiResponse'},
  );

export const ApiResponseStatus = Type.Object(
  {
    code: Type.Number(),
    message: Type.String(),
    detail: Type.Optional(Type.String()),
  },
  {
    description: '#ApiResponseStatus',
    examples: [
      {
        code: 200,
        message: 'OK',
      },
    ],
  },
);
export type ApiResponseStatus = Static<typeof ApiResponseStatus>;

/**
 *
 * @param T
 * @param options
 * @returns
 */
export const ApiResponseNoPagination = <T extends TSchema>(
  T: T,
  options?: Parameters<typeof Type.Object>[1],
) =>
  Type.Object(
    {
      data: T,
      status: Type.Optional(ApiResponseStatus),
    },
    options ? options : {description: '#ApiResponseNoPagination'},
  );

export type ApiResponseNoPagination<T extends TSchema> = Static<
  ReturnType<typeof ApiResponseNoPagination<T>>
>;
