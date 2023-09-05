import {FileTypes} from '../enums/FileTypes';

/**
 * @id #File
 * @description Files uploaded by the user to support this application
 */
export interface File {
  name: string;
  type: FileType[];
  description?: string;
}

type FileTypeKeys = keyof typeof FileTypes;

type GenericFileType<TKey extends FileTypeKeys> = {
  value: TKey;
  description: (typeof FileTypes)[TKey];
};

type FileTypeMap = {
  [K in FileTypeKeys]: GenericFileType<K>;
};

/**
 * @id #FileType
 * @description Types of planning documents and drawings
 */
export type FileType = FileTypeMap[keyof FileTypeMap];
