import {Schema} from '../../types/Schema';

export const validResponses: Schema['responses'] = [
  {
    metadata: {
      section_name: 'The property',
      auto_answered: true,
    },
    question: 'Is the property in London Borough of Southwark?',
    responses: [
      {
        value: 'Yes',
      },
    ],
  },
  {
    metadata: {
      policy_refs: [
        {
          text: 'Town and Country Planning Act 1990, Part 7, Section 191 &amp; Section 192',
        },
      ],
      section_name: 'About the project',
    },
    question: 'What are you applying about?',
    responses: [
      {
        value: 'Proposed changes I want to make in the future',
      },
    ],
  },
];
