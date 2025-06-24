import {CommentSentiment} from '../enums/CommentSentiment';
import {CommentTopic} from '../enums/CommentTopic';
import {CommentMetaData} from './Comment';

/**
 * @internal All the required fields for a public or private public comment
 */
interface PublicCommentBase {
  /**
   * Unique identifier for the comment
   */
  id: string;
  /**
   * What is the sentiment of the comment?
   */
  sentiment: CommentSentiment;
  /**
   * The author of the comment
   */
  author: PublicCommentAuthor;
  /**
   * Further information about the comment
   */
  metadata: CommentMetaData;
}

/**
 * @id #PublicComment
 * @description A public comment and any associated metadata, including sensitive information
 */
export interface PublicComment extends PublicCommentBase {
  /**
   * The comment itself, either a single comment or a list of comments divided by topic
   */
  comment: TopicAndComments[] | string;
  /**
   * The redacted version of the comment, either a single comment or a list of comments divided by topic
   */
  commentRedacted?: TopicAndComments[] | string;
}

/**
 * @id #PublicCommentRedacted
 * @description A public comment and any associated metadata, excluding sensitive information
 */
export interface PublicCommentRedacted extends PublicCommentBase {
  /**
   * The redacted version of the comment, either a single comment or a list of comments divided by topic
   */
  commentRedacted: TopicAndComments[] | string;
  /**
   * All metadata fields are required in the redacted version
   */
  metadata: Required<CommentMetaData>;
}

/**
 * @id #PublicCommentAuthor
 * @description The author of a public comment
 */
export interface PublicCommentAuthor {
  /**
   * The author of the comment
   */
  name: {
    /**
     * The name of the author of the comment in the format 'First Last'
     */
    singleLine: string;
  };
}

/**
 * @id #TopicAndComments
 * @description A comment on an application, divided by topic
 */
export interface TopicAndComments {
  /**
   * The topic of the comment
   */
  topic: CommentTopic;
  /**
   * What question was asked
   * Follows convention of Responses
   */
  question: string;
  /**
   * The comment about the topic
   */
  comment: string;
}
