/**
 * @description Specialist comment (consultee)
 */
type Specialist = 'specialist';

/**
 * @description Public comment (published)
 */
type Public = 'public';

/**
 * @id #CommentType
 * @description Types of comments
 */
export type CommentType = Specialist | Public;

/**
 * Export a record of comment types
 * @example
 * {
 *   specialist: 'Specialist',
 *   public: 'Public',
 * }
 */
export const commentType: Record<CommentType, string> = {
  specialist: 'Specialist',
  public: 'Public',
};
