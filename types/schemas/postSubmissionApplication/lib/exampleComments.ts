import {
  PublicComments,
  PublicCommentsRedacted,
  SpecialistComments,
  SpecialistCommentsRedacted,
} from '../data/Comment';
import {TopicAndComments} from '../data/PublicComment';
import {
  SpecialistComment,
  SpecialistCommentRedacted,
} from '../data/SpecialistComment';

const publicCommentTopic: TopicAndComments[] = [
  {
    topic: 'design',
    question:
      'Comment on the design, size or height of new buildings or extensions',
    comment: 'lalala',
  },
  {
    topic: 'use',
    question: 'Comment on the use and function of the proposed development',
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
];

const publicCommentTopicRedacted: TopicAndComments[] = publicCommentTopic.map(
  topic => ({
    ...topic,
    question: `${topic.question} *********`,
  }),
);

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
      // This comment is published, validated and redacted for public view
      id: '1',
      sentiment: 'supportive',
      comment: publicCommentTopic,
      commentRedacted: publicCommentTopicRedacted,
      author: {
        name: {
          singleLine: 'John Doe',
        },
        address: {
          line1: '1 Some Street',
          town: 'Some Town',
          postcode: 'AA1 1AA',
        },
      },
      metadata: {
        submittedAt: '2024-02-20T15:54:31.021Z',
        validatedAt: '2024-02-21T15:54:31.021Z',
        publishedAt: '2024-02-21T15:54:31.021Z',
      },
    },
    {
      // This comment is published, validated and redacted for public view
      id: '2',
      sentiment: 'objection',
      comment: publicCommentTopic,
      commentRedacted: publicCommentTopicRedacted,
      author: {
        name: {
          singleLine: 'John Doe',
        },
        address: {
          line1: '1 Some Street',
          town: 'Some Town',
          postcode: 'AA1 1AA',
        },
      },
      metadata: {
        submittedAt: '2024-02-20T15:54:31.021Z',
        validatedAt: '2024-02-21T15:54:31.021Z',
        publishedAt: '2024-02-21T15:54:31.021Z',
      },
    },
    {
      // This comment is not published since it hasn't been validated
      id: '3',
      sentiment: 'objection',
      comment: publicCommentTopic,
      author: {
        name: {
          singleLine: 'John Doe',
        },
        address: {
          line1: '1 Some Street',
          town: 'Some Town',
          postcode: 'AA1 1AA',
        },
      },
      metadata: {
        submittedAt: '2024-02-20T15:54:31.021Z',
      },
    },
    {
      // This comment is not published, it has been validated but has no redacted version
      id: '4',
      sentiment: 'neutral',
      comment: publicCommentTopic,
      author: {
        name: {
          singleLine: 'John Doe',
        },
        address: {
          line1: '1 Some Street',
          town: 'Some Town',
          postcode: 'AA1 1AA',
        },
      },
      metadata: {
        submittedAt: '2024-02-20T15:54:31.021Z',
        validatedAt: '2024-02-21T15:54:31.021Z',
      },
    },
  ],
};

export const publicCommentsRedacted: PublicCommentsRedacted = {
  summary: {
    totalComments: 2,
    sentiment: {
      supportive: 1,
      objection: 1,
      neutral: 0,
    },
  },
  comments: [
    {
      // This comment is published, validated and redacted for public view
      id: '1',
      sentiment: 'supportive',
      commentRedacted: publicCommentTopicRedacted,
      author: {
        name: {
          singleLine: 'John Doe',
        },
      },
      metadata: {
        submittedAt: '2024-02-20T15:54:31.021Z',
        validatedAt: '2024-02-21T15:54:31.021Z',
        publishedAt: '2024-02-21T15:54:31.021Z',
      },
    },
    {
      // This comment is published, validated and redacted for public view
      id: '2',
      sentiment: 'objection',
      commentRedacted: publicCommentTopicRedacted,
      author: {
        name: {
          singleLine: 'John Doe',
        },
      },
      metadata: {
        submittedAt: '2024-02-20T15:54:31.021Z',
        validatedAt: '2024-02-21T15:54:31.021Z',
        publishedAt: '2024-02-21T15:54:31.021Z',
      },
    },
  ],
};

const specialistCommentsData: SpecialistComment[] = [
  {
    // this comment is not public
    id: '3',
    sentiment: 'amendmentsNeeded',
    comment: 'Actually I forgot to mention something',
    metadata: {
      submittedAt: '2024-02-20T15:54:31.021Z',
    },
  },
  {
    // this comment is not public, it has been validated but not redacted
    id: '2',
    sentiment: 'approved',
    comment: 'I approve of this application after amendments',
    metadata: {
      submittedAt: '2024-02-20T15:54:31.021Z',
      validatedAt: '2024-02-21T15:54:31.021Z',
    },
  },
  {
    // this is a published comment that has been validated and redacted
    id: '1',
    sentiment: 'amendmentsNeeded',
    comment: 'Please amend this application',
    commentRedacted: 'Please amend this application *********',
    metadata: {
      submittedAt: '2024-02-20T15:54:31.021Z',
      validatedAt: '2024-02-21T15:54:31.021Z',
      publishedAt: '2024-02-21T15:54:31.021Z',
    },
  },
];

const specialistCommentsDataRedacted: SpecialistCommentRedacted[] = [
  {
    // this is a published comment that has been validated and redacted
    id: '1',
    sentiment: 'amendmentsNeeded',
    commentRedacted: 'Please amend this application *********',
    metadata: {
      submittedAt: '2024-02-20T15:54:31.021Z',
      validatedAt: '2024-02-21T15:54:31.021Z',
      publishedAt: '2024-02-21T15:54:31.021Z',
    },
  },
];

export const specialistComments: SpecialistComments = {
  summary: {
    totalConsulted: 4,
    totalComments: 12,
    sentiment: {
      approved: 4,
      amendmentsNeeded: 8,
      objected: 0,
    },
  },
  comments: [
    {
      id: '1',
      organisationSpecialism: 'Historic England',
      reason: 'constraint',
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
      firstConsultedAt: '2024-02-20T15:54:31.021Z',
      comments: specialistCommentsData,
    },
    {
      id: '2',
      organisationSpecialism: 'Historic England',
      reason: 'constraint',
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
      firstConsultedAt: '2024-02-20T15:54:31.021Z',
      comments: specialistCommentsData,
    },
    {
      id: '3',
      organisationSpecialism: 'Historic England',
      reason: 'constraint',
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
      firstConsultedAt: '2024-02-20T15:54:31.021Z',
      comments: specialistCommentsData,
    },
    {
      id: '4',
      organisationSpecialism: 'Historic England',
      reason: 'constraint',
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
      firstConsultedAt: '2024-02-20T15:54:31.021Z',
      comments: specialistCommentsData,
    },
  ],
};

export const specialistCommentsRedacted: SpecialistCommentsRedacted = {
  summary: {
    totalConsulted: 4,
    totalComments: 4,
    sentiment: {
      approved: 0,
      amendmentsNeeded: 4,
      objected: 0,
    },
  },
  comments: [
    {
      id: '1',
      organisationSpecialism: 'Historic England',
      reason: 'constraint',
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
      firstConsultedAt: '2024-02-20T15:54:31.021Z',
      comments: specialistCommentsDataRedacted,
    },
    {
      id: '2',
      organisationSpecialism: 'Historic England',
      reason: 'constraint',
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
      firstConsultedAt: '2024-02-20T15:54:31.021Z',
      comments: specialistCommentsDataRedacted,
    },
    {
      id: '3',
      organisationSpecialism: 'Historic England',
      reason: 'constraint',
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
      firstConsultedAt: '2024-02-20T15:54:31.021Z',
      comments: specialistCommentsDataRedacted,
    },
    {
      id: '4',
      organisationSpecialism: 'Historic England',
      reason: 'constraint',
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
      firstConsultedAt: '2024-02-20T15:54:31.021Z',
      comments: specialistCommentsDataRedacted,
    },
  ],
};
