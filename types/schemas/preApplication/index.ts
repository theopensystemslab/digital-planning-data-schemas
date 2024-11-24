import {Metadata} from '../../shared/Metadata';
import {Responses} from '../../shared/Responses';
import {Applicant} from '../application/data/Applicant';
import {PreApplicationData} from './data/ApplicationData';
import {Property} from './data/Property';
import {Proposal} from './data/Proposal';
import {User} from './data/User';

/**
 * @title PreApplication
 * @description The root specification for a planning pre-application in England generated by a digital planning service
 */
export interface PreApplication {
  applicationType: 'preApp';
  data: {
    application: PreApplicationData;
    user: User;
    applicant: Applicant;
    property: Property;
    proposal: Proposal;
  };
  responses: Responses;
  files: File[];
  metadata: Metadata;
}
