import {DateTime} from '../../../shared/utils';
import {PrototypeFileType as FileType} from '../../prototypeApplication/enums/FileType';

/**
 * @id #PostSubmissionFile
 * @description File uploaded and labeled by the user to support the application
 */
export interface PostSubmissionFile {
  /**
   * Unique identifier for the file
   */
  id: number;
  /**
   * Filename or title of the file
   */
  name: string;
  /**
   * Which part of the application this file is associated with.
   */
  association: 'application' | 'appeal' | 'specialistComment' | 'publicComment';
  /**
   * Version of the file, used to track changes or updates
   */
  version?: number;
  /**
   * What type of file this is.
   * This is an array to allow for multiple types, as a file can be associated with more than one type.
   */
  type: FileType[];
  /**
   * URL where the file can be accessed
   */
  url: string;
  /**
   * URL to a thumbnail image of the file, if applicable
   */
  thumbnailUrl?: string;
  /**
   * Optional list of document references in the file.
   * Where documents contain multiple drawings, include the references here eg ["25A-V2", "25B-V2"]).
   */
  referencesInDocument?: string[];
  /**
   * Optional description of the file
   */
  description?: string;
  /**
   * Metadata for the file
   */
  metadata: PostSubmissionFileMetadata;
}

/**
 * @description Metadata about the file
 */
interface PostSubmissionFileMetadata {
  /**
   * file size in bytes, allows for more units in the future if needed
   */
  size: {
    bytes: number;
  };
  /**
   * MIME type of the file, e.g. 'image/png', 'application/pdf'
   */
  mimeType: string;
  /**
   * Date and time when the file itself was created
   */
  createdAt: DateTime;
  /**
   * Date and time the file was received by the system or uploaded.
   * This will usually match the submittedAt date of the application, but if the file is amended or uploaded later it will differ.
   */
  submittedAt: DateTime;
  /**
   * Date and time when the file was validated
   */
  validatedAt?: DateTime;
  /**
   * Date and time when the file was published
   */
  publishedAt?: DateTime;
}
