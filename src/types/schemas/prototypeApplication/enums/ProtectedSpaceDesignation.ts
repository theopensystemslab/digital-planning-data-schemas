/**
 * @description Site of Borough Grade 1 Importance
 */
type BoroughGradeOne = 'boroughGradeOne';

/**
 * @description Site of Borough Grade 2 Importance
 */
type BoroughGradeTwo = 'boroughGradeTwo';

/**
 * @description Site of Local Importance
 */
type Local = 'local';

/**
 * @description Local Nature Reserve
 */
type LocalReserve = 'localReserve';

/**
 * @description Site of Metropolitan Importance
 */
type Metropolitan = 'metropolitan';

/**
 * @description Not designated
 */
type None = 'none';

/**
 * @description Sites of Special Scientific Interest
 */
type SSSI = 'SSSI';

/**
 * @id #ProtectedSpaceDesignation
 * @description Designations of natural protected spaces
 */
export type ProtectedSpaceDesignation =
  | BoroughGradeOne
  | BoroughGradeTwo
  | Local
  | LocalReserve
  | Metropolitan
  | None
  | SSSI;
