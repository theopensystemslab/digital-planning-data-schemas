import {CursorPagination, Pagination} from './Pagination';

export interface ApiResponse<T> {
  data: T | null;
  pagination?: Pagination | CursorPagination;
  status?: {
    code: number;
    message: string;
    detail?: string;
  };
}
