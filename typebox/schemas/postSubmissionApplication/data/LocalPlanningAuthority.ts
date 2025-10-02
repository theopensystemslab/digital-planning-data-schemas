import {Type} from '@sinclair/typebox';
import type {Static, TSchema} from '@sinclair/typebox';

type LocalPlanningAuthorityBase = Static<typeof LocalPlanningAuthorityBase>;
const LocalPlanningAuthorityBase = Type.Object({
  publicCommentsAcceptedUntilDecision: Type.Boolean(),
});

type LocalPlanningAuthorityVariants = Static<
  typeof LocalPlanningAuthorityVariants
>;
const LocalPlanningAuthorityVariants = Type.Object({});

export type LocalPlanningAuthority<T extends TSchema> = Static<
  ReturnType<typeof LocalPlanningAuthority<T>>
>;
export const LocalPlanningAuthority = <T extends TSchema>(T: T) =>
  Type.Extends(
    T,
    Type.KeyOf(LocalPlanningAuthorityVariants),
    Type.Index(LocalPlanningAuthorityVariants, T),
    LocalPlanningAuthorityBase,
  );
