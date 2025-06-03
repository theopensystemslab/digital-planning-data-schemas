type application = 'application';
type appeal = 'appeal';
type specialistComment = 'specialistComment';
type publicComment = 'publicComment';

/**
 * @id #PostSubmissionFileAssociation
 * @description Type of file association for a post-submission file.
 */
export type PostSubmissionFileAssociation =
  | application
  | appeal
  | specialistComment
  | publicComment;
