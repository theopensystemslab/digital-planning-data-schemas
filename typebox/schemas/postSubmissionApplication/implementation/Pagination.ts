import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';

export type Pagination = Static<typeof Pagination>;
export const Pagination = Type.Object(
  {
    resultsPerPage: Type.Number(),
    currentPage: Type.Number(),
    totalPages: Type.Number(),
    totalResults: Type.Number(),
    totalAvailableItems: Type.Optional(Type.Number()),
  },
  {description: '#Pagination'},
);

export type CursorPagination = Static<typeof CursorPagination>;
export const CursorPagination = Type.Object(
  {
    resultsPerPage: Type.Number(),
    nextCursor: Type.Union([Type.String(), Type.Null()]),
    prevCursor: Type.Union([Type.String(), Type.Null()]),
    totalResults: Type.Number(),
    totalAvailableItems: Type.Optional(Type.Number()),
  },
  {description: '#CursorPagination'},
);
