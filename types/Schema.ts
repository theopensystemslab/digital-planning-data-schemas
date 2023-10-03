import {Result} from './schema/Result';
import {Metadata} from './schema/Metadata';
import {Responses} from './schema/Responses';
import {Applicant} from './schema/data/Applicant';
import {Application} from './schema/data/Application';
import {Property} from './schema/data/Property';
import {Proposal} from './schema/data/Proposal';
import {User} from './schema/data/User';
import {File} from './schema/File';

/**
 * @title Digital Planning Data Schema
 * @description Root of PlanX's Digital Planning Schema
 */
export interface Schema {
  data: {
    application: Application;
    user: User;
    applicant: Applicant;
    property: Property;
    proposal: Proposal;
  };
  result: Result;
  metadata: Metadata;
  responses: Responses;
  files: File[];
}
