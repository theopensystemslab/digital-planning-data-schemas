export interface UserBase {
  /**
   * @description The role of the user who completed the application
   */
  role: UserRoles;
}

export type UserRoles = 'applicant' | 'agent' | 'proxy';
