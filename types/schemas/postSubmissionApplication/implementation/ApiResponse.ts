import {CursorPagination, OffsetPagination} from './Pagination';

/**
 * @description #ApiResponse
 */
export interface ApiResponse<T> {
  data: T | null;
  pagination?: OffsetPagination | CursorPagination;
  status?: {
    code: number;
    message: string;
    detail?: string;
  };
}

/**
 * @description #ApiResponseNoPagination
 */
export interface ApiResponseNoPagination<T> {
  data: T | null;
  status?: {
    code: number;
    message: string;
    detail?: string;
  };
}
