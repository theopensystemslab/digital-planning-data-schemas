/**
 * @description #Pagination
 */
export interface Pagination {
  /**
   * Number of results per page eg 10
   */
  resultsPerPage: number;
  /**
   * Current page number eg 1
   */
  currentPage: number;
  /**
   * Total number of pages eg 10
   */
  totalPages: number;
  /**
   * Represents the total number of items returned by the current query
   */
  totalResults: number;
  /**
   * Represents the total number of items in the database (unfiltered)
   */
  totalItems?: number;
}

/**
 * @description #CursorPagination
 */
export interface CursorPagination {
  /**
   * Number of results per page eg 10
   */
  resultsPerPage: number;
  /**
   * Cursor to the next page
   */
  nextCursor: string | null;
  /**
   * Cursor to the previous page
   */
  prevCursor: string | null;
  /**
   * Represents the total number of items returned by the current query
   */
  totalResults: number;
  /**
   * Represents the total number of items in the database (unfiltered)
   */
  totalItems?: number;
}
