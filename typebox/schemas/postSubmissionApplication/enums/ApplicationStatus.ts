import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';

type returned = Static<typeof returned>;
const returned = Type.Literal('returned', {description: 'returned'});

type withdrawn = Static<typeof withdrawn>;
const withdrawn = Type.Literal('withdrawn', {description: 'withdrawn'});

type determined = Static<typeof determined>;
const determined = Type.Literal('determined', {description: 'determined'});

type undetermined = Static<typeof undetermined>;
const undetermined = Type.Literal('undetermined', {
  description: 'undetermined',
});

export type ApplicationStatus = Static<typeof ApplicationStatus>;
export const ApplicationStatus = Type.Union(
  [returned, withdrawn, determined, undetermined],
  {
    id: '#ApplicationStatus',
    description: 'Stages of the planning application process',
  },
);
