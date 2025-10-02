import {Type} from '@sinclair/typebox';
import type {Static} from '@sinclair/typebox';

export type User = Static<typeof User>;
export const User = Type.Object(
  {
    role: Type.Union([
      Type.Literal('applicant'),
      Type.Literal('agent'),
      Type.Literal('proxy'),
    ]),
  },
  {
    title: 'User',
    description: 'The role of the user who completed the application',
  },
);
