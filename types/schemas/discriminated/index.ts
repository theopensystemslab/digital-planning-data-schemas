import {
  ApplicationTypeKeys,
  PrimaryApplicationType,
} from '../digitalPlanningApplication/enums/ApplicationTypes';
import {ApplicationData} from './ApplicationData';
import {User} from './User';

/**
 * @internal
 * The generic base type for all applications
 * Takes a primary and granular application type which allows child properties to differ based on these inputs
 * Deriving `TPrimary` from `TGranular` is possible in TS, but not in a way which is currently compatible with ts-json-schema-generator
 */
interface ApplicationSpecification<
  TPrimary extends PrimaryApplicationType,
  TGranular extends ApplicationTypeKeys,
> {
  applicationType: TGranular;
  data: {
    user: User<TPrimary>;
    application: ApplicationData<TPrimary, TGranular>;
  };
}

export type PlanningPermissionApplication = ApplicationSpecification<
  'pp',
  'pp'
>;
// TODO: All granular types

export type PriorApprovalApplication = ApplicationSpecification<'pa', 'pa'>;
// TODO: All granular types

export type WorksToTreesApplications = BaseWTT | ConsentWTT | NoticeWTT;
export type BaseWTT = ApplicationSpecification<'wtt', 'wtt'>;
export type ConsentWTT = ApplicationSpecification<'wtt', 'wtt.consent'>;
export type NoticeWTT = ApplicationSpecification<'wtt', 'wtt.notice'>;

/**
 * @title App
 * @description
 * (Temporary name to not clash with the existing `Application` type)
 * The root specification for a planning application in England generated by a digital planning service
 */
export type App =
  | PlanningPermissionApplication
  | PriorApprovalApplication
  | WorksToTreesApplications;
// TODO: All the rest!

// const test: App = {
//   applicationType: 'wtt.consent',
//   data: {
//     user: {
//       role: 'agent',
//       wttSpecificProperty: true,
//     },
//     application: {
//       applicationType: 'wtt.consent',
//       wttSpecificProperty: 123,
//       somethingShared: 'abc',
//     },
//   },
// };
