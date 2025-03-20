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
   * Total number of items eg 100
   */
  totalItems: number;
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
   * Total number of items eg 100
   */
  totalItems: number;
}

/**
 * @description #ApiResponse
 */
export interface ApiResponse<T> {
  data: T | null;
  pagination?: Pagination | CursorPagination;
  status?: {
    code: number;
    message: string;
    detail?: string;
  };
}
