import {CursorPagination, Pagination} from './Pagination';

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
