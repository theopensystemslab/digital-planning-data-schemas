import {BaseMetadata} from '../../shared/Metadata';
import {DateTime} from '../../shared/utils';
import {PrototypePlanXMetadata} from '../prototypeApplication/Metadata';

type PostSubmissionMetadataBase = {
  /**
   * This is the date this application was published to the public
   */
  publishedAt: DateTime;
};

type PostSubmissionBaseMetadata = BaseMetadata & PostSubmissionMetadataBase;
type PostSubmissionPrototypePlanXMetadata = PrototypePlanXMetadata &
  PostSubmissionMetadataBase;

export type PostSubmissionMetadata =
  | PostSubmissionBaseMetadata
  | PostSubmissionPrototypePlanXMetadata;
