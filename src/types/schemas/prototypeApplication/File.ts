import {PrototypeFileType as FileType} from './enums/FileType';

/**
 * @id #File
 * @description File uploaded and labeled by the user to support the application
 */
export interface File {
  name: string;
  type: FileType[];
  description?: string;
}
