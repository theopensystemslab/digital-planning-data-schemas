import {Email} from '../../utils';

/**
 * @id Applicant
 */
export interface Applicant {
  type: 'individual' | 'company' | 'charity' | 'public' | 'parishCouncil';
  title?: string;
  name: {
    first: string;
    last: string;
  };
  provideApplicantsEmail?: boolean; // seen on agent/proxy path only
  email?: Email; // optional if provideApplicantsEmail is false
  provideApplicantsPhone?: boolean; // seen on agent/proxy path only
  phone?: {
    // optional if provideApplicantsPhone is false
    primary?: string;
  };
  company?: {
    name?: string;
  };
  address: ApplicantAddress;
  resident: boolean; // same as `address.sameAsSiteAddress` ??
  agent?: {
    // require if User.role in ["agent", "proxy"]
    title?: string;
    name: {
      first: string;
      last: string;
    };
    phone: {
      primary: string;
    };
    email: Email;
    address: ApplicantAddress;
  };
  // siteContact: "applicant" | "agent" | "proxy" | "other";
  siteContact: {
    role: 'applicant' | 'agent' | 'proxy' | 'other'; // type as User.role | "other" ??
    name?: string;
    email?: string;
    telephone?: string;
  };
}

export interface Contact {
  title?: string;
  name: {
    first: string;
    last: string;
  };
  email: Email;
  phone: {
    primary: string;
  };
  company?: {
    name?: string;
  };
}

export interface ApplicantAddress {
  line1?: string; // require if sameAsSiteAddress is false
  line2?: string;
  town?: string;
  county?: string;
  postcode?: string;
  country?: string;
  sameAsSiteAddress: boolean; // "Yes" | "No" in content; same as `sameAddress.form` ??
}
