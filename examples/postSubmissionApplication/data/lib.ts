import {
  PublicComments,
  SpecialistComments,
} from '../../../types/schemas/postSubmissionApplication/data/Comment';

/**
 * Helper to generate sensible dates for events to happen in the application process
 */
export const realisticDates = {
  application: {withdrawnAt: '2024-02-20T15:54:31.021Z'},
  submission: {submittedAt: '2024-02-18T15:54:30.821Z'},
  validation: {
    receivedAt: '2024-02-18T15:54:31.021Z',
    validatedAt: '2024-02-19T15:54:31.021Z',
  },
  publishedAt: '2024-02-19T15:54:31.221Z',
  consultation: {
    startAt: '2024-02-19T15:54:31.021Z',
    endAt: '2024-03-11T15:54:31.021Z',
  },
  assessment: {
    councilDecisionAt: '2024-03-21T15:54:31.021Z',
    committeeSentAt: '2024-03-22T15:54:31.021Z',
    committeeDecisionAt: '2024-04-01T14:54:31.021Z',
  },
  appeal: {
    lodgedAt: '2024-05-01T14:54:31.021Z',
    validatedAt: '2024-05-02T14:54:31.021Z',
    startedAt: '2024-05-02T14:54:31.221Z',
    decidedAt: '2024-05-07T14:54:31.221Z',
    withdrawnAt: '2024-05-02T14:54:31.021Z',
  },
};

/**
 * Utility function to convert a date string to a YYYY-MM-DD formatted date string
 * @param dateString
 * @returns YYYY-MM-DD formatted date string
 */
export const formatDateToYYYYMMDD = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const publicComments: PublicComments = {
  summary: {
    totalComments: 4,
    sentiment: {
      supportive: 1,
      objection: 2,
      neutral: 1,
    },
  },
  comments: [
    {
      sentiment: 'supportive',
      comment: [
        {
          topic: 'design',
          question:
            'Comment on the design, size or height of new buildings or extensions',
          comment: 'lalala',
        },
        {
          topic: 'use',
          question:
            'Comment on the use and function of the proposed development',
          comment: 'lalala',
        },
        {
          topic: 'light',
          question: 'Comment on impacts on natural light',
          comment: 'lalala',
        },
        {
          topic: 'privacy',
          question: 'Comment on impacts to the privacy of neighbours',
          comment: 'lalala',
        },
        {
          topic: 'access',
          question: "Comment on impacts on disabled persons' access",
          comment: 'lalala',
        },
        {
          topic: 'noise',
          question: 'Comment on any noise from new uses',
          comment: 'lalala',
        },
        {
          topic: 'traffic',
          question: 'Comment on impacts to traffic, parking or road safety',
          comment: 'lalala',
        },
        {
          topic: 'other',
          question: 'Comment on other things',
          comment: 'lalala',
        },
      ],
      author: {
        name: {
          singleLine: 'John Doe',
        },
      },
      metadata: {
        submittedAt: '2024-02-20T15:54:31.021Z',
        publishedAt: '2024-02-21T15:54:31.021Z',
        validAt: '2024-02-21T15:54:31.021Z',
      },
    },
    {
      sentiment: 'objection',
      comment: [
        {
          topic: 'design',
          question:
            'Comment on the design, size or height of new buildings or extensions',
          comment: 'lalala',
        },
        {
          topic: 'use',
          question:
            'Comment on the use and function of the proposed development',
          comment: 'lalala',
        },
        {
          topic: 'light',
          question: 'Comment on impacts on natural light',
          comment: 'lalala',
        },
        {
          topic: 'privacy',
          question: 'Comment on impacts to the privacy of neighbours',
          comment: 'lalala',
        },
        {
          topic: 'access',
          question: "Comment on impacts on disabled persons' access",
          comment: 'lalala',
        },
        {
          topic: 'noise',
          question: 'Comment on any noise from new uses',
          comment: 'lalala',
        },
        {
          topic: 'traffic',
          question: 'Comment on impacts to traffic, parking or road safety',
          comment: 'lalala',
        },
        {
          topic: 'other',
          question: 'Comment on other things',
          comment: 'lalala',
        },
      ],
      author: {
        name: {
          singleLine: 'John Doe',
        },
      },
      metadata: {
        submittedAt: '2024-02-20T15:54:31.021Z',
        publishedAt: '2024-02-21T15:54:31.021Z',
        validAt: '2024-02-21T15:54:31.021Z',
      },
    },
    {
      sentiment: 'objection',
      comment: [
        {
          topic: 'design',
          question:
            'Comment on the design, size or height of new buildings or extensions',
          comment: 'lalala',
        },
        {
          topic: 'use',
          question:
            'Comment on the use and function of the proposed development',
          comment: 'lalala',
        },
        {
          topic: 'light',
          question: 'Comment on impacts on natural light',
          comment: 'lalala',
        },
        {
          topic: 'privacy',
          question: 'Comment on impacts to the privacy of neighbours',
          comment: 'lalala',
        },
        {
          topic: 'access',
          question: "Comment on impacts on disabled persons' access",
          comment: 'lalala',
        },
        {
          topic: 'noise',
          question: 'Comment on any noise from new uses',
          comment: 'lalala',
        },
        {
          topic: 'traffic',
          question: 'Comment on impacts to traffic, parking or road safety',
          comment: 'lalala',
        },
        {
          topic: 'other',
          question: 'Comment on other things',
          comment: 'lalala',
        },
      ],
      author: {
        name: {
          singleLine: 'John Doe',
        },
      },
      metadata: {
        submittedAt: '2024-02-20T15:54:31.021Z',
        publishedAt: '2024-02-21T15:54:31.021Z',
        validAt: '2024-02-21T15:54:31.021Z',
      },
    },
    {
      sentiment: 'neutral',
      comment: [
        {
          topic: 'design',
          question:
            'Comment on the design, size or height of new buildings or extensions',
          comment: 'lalala',
        },
        {
          topic: 'use',
          question:
            'Comment on the use and function of the proposed development',
          comment: 'lalala',
        },
        {
          topic: 'light',
          question: 'Comment on impacts on natural light',
          comment: 'lalala',
        },
        {
          topic: 'privacy',
          question: 'Comment on impacts to the privacy of neighbours',
          comment: 'lalala',
        },
        {
          topic: 'access',
          question: "Comment on impacts on disabled persons' access",
          comment: 'lalala',
        },
        {
          topic: 'noise',
          question: 'Comment on any noise from new uses',
          comment: 'lalala',
        },
        {
          topic: 'traffic',
          question: 'Comment on impacts to traffic, parking or road safety',
          comment: 'lalala',
        },
        {
          topic: 'other',
          question: 'Comment on other things',
          comment: 'lalala',
        },
      ],
      author: {
        name: {
          singleLine: 'John Doe',
        },
      },
      metadata: {
        submittedAt: '2024-02-20T15:54:31.021Z',
        publishedAt: '2024-02-21T15:54:31.021Z',
        validAt: '2024-02-21T15:54:31.021Z',
      },
    },
  ],
};

export const specialistComments: SpecialistComments = {
  summary: {
    totalConsulted: 4,
    totalComments: 1,
    sentiment: {
      supportive: 1,
      objection: 0,
      neutral: 0,
    },
  },
  comments: [
    {
      sentiment: 'supportive',
      constraints: [
        {
          value: 'monument',
          description: 'Site of a Scheduled Monument',
          intersects: true,
          entities: [
            {
              name: 'Rochester Castle',
              source: {
                text: 'Planning Data',
                url: 'https://www.planning.data.gov.uk/entity/13909855',
              },
            },
          ],
        },
      ],
      comment: 'lalala',
      author: {
        name: {
          singleLine: 'Jane Smith',
        },
        organisation: 'Historic England',
        specialism: 'Heritage Conservation',
        jobTitle: 'Heritage Conservation Officer',
      },
      consultedAt: '2025-01-27T12:50:49+0000',
      respondedAt: '2025-01-27T12:50:49+0000',
      responses: [
        {
          sentiment: 'supportive',
          comment: 'lalala',
          author: {
            name: {
              singleLine: 'Jane Smith',
            },
            organisation: 'Historic England',
            specialism: 'Heritage Conservation',
            jobTitle: 'Heritage Conservation Officer',
          },
          consultedAt: '2025-01-27T12:50:49+0000',
          respondedAt: '2025-01-27T12:50:49+0000',
          metadata: {
            submittedAt: '2025-01-27T12:50:49+0000',
            publishedAt: '2025-01-27T12:50:49+0000',
            validAt: '2025-01-27T12:50:49+0000',
          },
        },
      ],
      metadata: {
        submittedAt: '2025-01-27T12:50:49+0000',
        publishedAt: '2025-01-27T12:50:49+0000',
        validAt: '2025-01-27T12:50:49+0000',
      },
    },
  ],
};
