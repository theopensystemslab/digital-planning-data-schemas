import {FileType} from './enums/FileTypes';

/**
 * @id #File
 * @description File uploaded and labeled by the user to support the application
 */
export interface File {
  name: string;
  type: FileType[];
  description?: string;
}
