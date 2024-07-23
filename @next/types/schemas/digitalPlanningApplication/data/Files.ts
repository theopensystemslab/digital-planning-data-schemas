import {GeoBoundary} from './shared';

/**
 * @id #FilesAsData
 * @description File types that can optionally be provided by answering structured questions, rather than via document upload (see root `files` for uploads)
 */
export type FilesAsData = {
  designAndAccessStatement?: DesignAndAccessStatement;
  heritageStatement?: HeritageStatement;
  locationPlan?: GeoBoundary;
};

export interface DesignAndAccessStatement {
  propertyDescription: string;
  projectDescription: string;
  accessAndLayout: string;
  landscapingChanges: string;
}

export type HeritageStatementBase = {
  designationDescription: string;
  propertyDescription: string;
  projectDescpription: string;
  managedImpact: string;
  improvements: string;
};

export interface HeritageStatement {
  'designated.conservationArea'?: HeritageStatementBase;
  listed?: HeritageStatementBase;
  monument?: HeritageStatementBase;
  'designated.WHS'?: HeritageStatementBase;
}
