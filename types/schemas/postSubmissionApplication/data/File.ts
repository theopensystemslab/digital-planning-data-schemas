import {DateTime} from '../../../shared/utils';
import {PrototypeFileType as FileType} from '../../prototypeApplication/enums/FileType';

/**
 * @id #PostSubmissionFile
 * @description File uploaded and labeled by the user to support the application
 */
export interface PostSubmissionFile {
  name: string;
  type?: FileType[];
  description?: string;
  url: string;
  metadata: PostSubmissionFileMetadata;
}

/**
 * @description Metadata about the file
 */
interface PostSubmissionFileMetadata {
  byteSize: number;
  mimeType: string;
  createdAt: DateTime;
  uploadedAt: DateTime;
  publishedAt: DateTime;
}
