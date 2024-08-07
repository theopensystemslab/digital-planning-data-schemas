import {OpenSpaceDesignation} from '../enums/OpenSpace';

export interface ProposalBase {
  nature?: {
    openSpaces?: {
      designation: OpenSpaceDesignation;
    };
  };
}
