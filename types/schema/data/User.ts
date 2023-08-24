/**
 * @id User
 * @description The user who completed the service. They could have completed it for themselves, or on behalf of another.
 */
export type User = ApplicantUser | AgentUser;

export type Role = 'applicant' | 'agent';

export interface BasePerson<TRole extends Role> {
  name: string;
  role: TRole;
}

export interface ApplicantUser extends BasePerson<'applicant'> {
  applicantAddress: string[];
}

export interface AgentUser extends BasePerson<'agent'> {
  agentNumber: number;
}

export const testApplicant: ApplicantUser = {
  name: 'daf',
  role: 'applicant',
  applicantAddress: [],
};

export const testAgent: AgentUser = {
  name: 'daf',
  role: 'agent',
  agentNumber: 123,
};
