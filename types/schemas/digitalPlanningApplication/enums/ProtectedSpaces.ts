export const GLAProtectedSpaceDesignations = {
  boroughGradeOne: 'Site of Borough Grade 1 Importance',
  boroughGradeTwo: 'Site of Borough Grade 2 Importance',
  local: 'Site of Local Importance',
  localReserve: 'Local Nature Reserve',
  metropolitan: 'Site of Metropolitan Importance',
  none: 'Not designated',
  SSSI: 'Sites of Special Scientific Interest',
};

type ProtectedSpaceDesignationKeys = keyof typeof GLAProtectedSpaceDesignations;

type GenericProtectedSpaceDesignation<
  TKey extends ProtectedSpaceDesignationKeys,
> = {
  value: TKey;
  description: (typeof GLAProtectedSpaceDesignations)[TKey];
};

type ProtectedSpaceDesignationMap = {
  [K in ProtectedSpaceDesignationKeys]: GenericProtectedSpaceDesignation<K>;
};

/**
 * @id #ProtectedSpaceDesignation
 * @description Designations of natural protected spaces
 */
export type ProtectedSpaceDesignation =
  ProtectedSpaceDesignationMap[keyof ProtectedSpaceDesignationMap];
