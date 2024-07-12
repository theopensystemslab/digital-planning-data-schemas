import {ResultFlag} from '../enums/Flags';

/**
 * @id #PreAssessment
 * @description The result of the application based on information provided by the applicant, prior to assessment by a planning officer. Results are determined by flags corresponding to responses; each application can have up to one result per flagset
 */
export type PreAssessment = ResultFlag[]; // @todo validate/restrict array to one result per flagset
