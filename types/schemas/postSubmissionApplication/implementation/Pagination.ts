/**
 * @description #OffsetPagination
 */
export interface OffsetPagination {
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
   * Represents the total number of results returned by current query
   */
  totalResults: number;
  /**
   * Represents the total number of items available in the database (#nofilter)
   */
  totalAvailableItems?: number;
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
   * Represents the total number of results returned by current query
   */
  totalResults: number;
  /**
   * Represents the total number of items available in the database (#nofilter)
   */
  totalAvailableItems?: number;
}
