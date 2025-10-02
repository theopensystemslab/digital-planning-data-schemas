import {Type, type Static} from '@sinclair/typebox';
import {
  PostSubmissionApplicationsSortBy,
  PostSubmissionPublishedApplicationsSortBy,
} from './data/ApplicationsSortBy';
import {
  PostSubmissionApplicationsOrderBy,
  PostSubmissionPublishedApplicationsOrderBy,
} from './data/ApplicationsOrderBy';
import {
  PostSubmissionDocumentsSortBy,
  PostSubmissionPublishedDocumentsSortBy,
} from './data/DocumentsSortBy';
import {
  PostSubmissionDocumentsOrderBy,
  PostSubmissionPublishedDocumentsOrderBy,
} from './data/DocumentsOrderBy';
import {FileType} from '../enums/FileType';
import {
  PublicCommentSentiment,
  SpecialistCommentSentiment,
} from '../enums/CommentSentiment';
import {PublicCommentTopic} from '../enums/PublicCommentTopic';
import {
  PostSubmissionPublicCommentsSortBy,
  PostSubmissionPublishedPublicCommentsSortBy,
} from './data/PublicCommentsSortBy';
import {
  PostSubmissionPublicCommentsOrderBy,
  PostSubmissionPublishedPublicCommentsOrderBy,
} from './data/PublicCommentsOrderBy';
import {
  PostSubmissionPublishedSpecialistCommentsSortBy,
  PostSubmissionSpecialistCommentsSortBy,
} from './data/SpecialistCommentsSortBy';
import {
  PostSubmissionPublishedSpecialistCommentsOrderBy,
  PostSubmissionSpecialistCommentsOrderBy,
} from './data/SpecialistCommentsOrderBy';
import {PostSubmissionApplication} from '..';
import {ApiResponse} from './ApiResponse';
import {PostSubmissionPublishedApplication} from '../../postSubmissionPublishedApplication';
import {PostSubmissionFile, PostSubmissionFileRedacted} from '../data/File';
import {
  PublicComments,
  PublicCommentsRedacted,
  SpecialistComments,
  SpecialistCommentsRedacted,
} from '../data/Comment';
import {PublicComment, PublicCommentRedacted} from '../data/PublicComment';
import {SpecialistComment, SpecialistRedacted} from '../data/SpecialistComment';

// -----------------------------------------------------------------------------
// Url Params
// -----------------------------------------------------------------------------

const BaseApplicationUrlParams = Type.Object({
  applicationId: Type.String(),
});

// -----------------------------------------------------------------------------
// Query Params
// -----------------------------------------------------------------------------

const BaseQueryParams = Type.Object({
  page: Type.Number({default: 1}),
  resultsPerPage: Type.Number({default: 10}),
});

// -----------------------------------------------------------------------------

const endpoints = {
  applications: {
    private: {
      /**
       * /api/@next/applications
       * /api/@next/applications/{applicationId}
       */
      applications: {
        method: 'GET',
        path: '/api/@next/applications',
        prefix: 'PostSubmissionApplications',
        urlParams: undefined,
        queryParams: Type.Composite([
          BaseQueryParams,
          Type.Object({
            query: Type.Optional(Type.String()),
            sortBy: Type.Optional(PostSubmissionApplicationsSortBy),
            orderBy: Type.Optional(PostSubmissionApplicationsOrderBy),
            reference: Type.Optional(Type.String()),
          }),
        ]),
        data: Type.Array(PostSubmissionApplication),
        response: ApiResponse(Type.Array(PostSubmissionApplication)),
      },
      application: {
        method: 'GET',
        path: '/api/@next/applications/{applicationId}',
        prefix: 'PostSubmissionApplication',
        urlParams: BaseApplicationUrlParams,
        queryParams: undefined,
        data: PostSubmissionApplication,
        response: ApiResponse(
          Type.Union([PostSubmissionApplication, Type.Null()]),
        ),
      },
    },
    public: {
      /**
       * /api/@next/public/applications
       * /api/@next/public/applications/{applicationId}
       */
      applications: {
        method: 'GET',
        path: '/api/@next/public/applications',
        prefix: 'PostSubmissionPublishedApplications',
        urlParams: undefined,
        queryParams: Type.Composite(
          [
            BaseQueryParams,
            Type.Object({
              query: Type.Optional(Type.String()),
              sortBy: Type.Optional(PostSubmissionPublishedApplicationsSortBy),
              orderBy: Type.Optional(
                PostSubmissionPublishedApplicationsOrderBy,
              ),
              reference: Type.Optional(Type.String()),
            }),
          ],
          {
            description: 'Query parameters for applications',
            detail: {description: 'Query parameters for applications'},
          },
        ),
        data: Type.Array(PostSubmissionPublishedApplication),
        response: ApiResponse(Type.Array(PostSubmissionPublishedApplication), {
          description: 'Public applications endpoint response',
        }),
      },
      application: {
        method: 'GET',
        path: '/api/@next/public/applications/{applicationId}',
        prefix: 'PostSubmissionPublishedApplication',
        urlParams: BaseApplicationUrlParams,
        queryParams: undefined,
        data: PostSubmissionPublishedApplication,
        response: ApiResponse(
          Type.Union([PostSubmissionPublishedApplication, Type.Null()]),
        ),
      },
    },
  },
  documents: {
    private: {
      /**
       * /api/@next/applications/{applicationId}/documents
       * /api/@next/applications/{applicationId}/documents/{documentId}
       */
      documents: {
        method: 'GET',
        path: '/api/@next/applications/{applicationId}/documents',
        prefix: 'PostSubmissionDocuments',
        urlParams: BaseApplicationUrlParams,
        queryParams: Type.Composite([
          BaseQueryParams,
          Type.Object({
            sortBy: Type.Optional(PostSubmissionDocumentsSortBy),
            orderBy: Type.Optional(PostSubmissionDocumentsOrderBy),
            name: Type.Optional(Type.String()),
            type: Type.Optional(FileType),
            publishedAtFrom: Type.Optional(Type.String()),
            publishedAtTo: Type.Optional(Type.String()),
          }),
        ]),
        data: Type.Array(PostSubmissionFile),
        response: ApiResponse(Type.Array(PostSubmissionFile)),
      },
      document: {
        method: 'GET',
        path: '/api/@next/applications/{applicationId}/documents/{documentId}',
        prefix: 'PostSubmissionDocument',
        urlParams: Type.Composite([
          BaseApplicationUrlParams,
          Type.Object({documentId: Type.Number()}),
        ]),
        queryParams: undefined,
        data: PostSubmissionFile,
        response: ApiResponse(Type.Union([PostSubmissionFile, Type.Null()])),
      },
    },
    public: {
      /**
       * /api/@next/public/applications/{applicationId}/documents
       * /api/@next/public/applications/{applicationId}/documents/{documentId}
       */
      documents: {
        method: 'GET',
        path: '/api/@next/public/applications/{applicationId}/documents',
        prefix: 'PostSubmissionPublishedDocuments',
        urlParams: BaseApplicationUrlParams,
        queryParams: Type.Composite([
          BaseQueryParams,
          Type.Object({
            sortBy: Type.Optional(PostSubmissionPublishedDocumentsSortBy),
            orderBy: Type.Optional(PostSubmissionPublishedDocumentsOrderBy),
            name: Type.Optional(Type.String()),
            type: Type.Optional(FileType),
            publishedAtFrom: Type.Optional(Type.String()),
            publishedAtTo: Type.Optional(Type.String()),
          }),
        ]),
        data: Type.Array(PostSubmissionFileRedacted),
        response: ApiResponse(Type.Array(PostSubmissionFileRedacted)),
      },
      document: {
        method: 'GET',
        path: '/api/@next/public/applications/{applicationId}/documents/{documentId}',
        prefix: 'PostSubmissionPublishedDocument',
        urlParams: Type.Composite([
          BaseApplicationUrlParams,
          Type.Object({documentId: Type.Number()}),
        ]),
        queryParams: undefined,
        data: PostSubmissionFileRedacted,
        response: ApiResponse(
          Type.Union([PostSubmissionFileRedacted, Type.Null()]),
        ),
      },
    },
  },
  publicComments: {
    private: {
      /**
       * /api/@next/applications/{applicationId}/publicComments
       * /api/@next/applications/{applicationId}/publicComments/{publicCommentId}
       */
      publicComments: {
        method: 'GET',
        path: '/api/@next/applications/{applicationId}/publicComments',
        urlParams: BaseApplicationUrlParams,
        queryParams: Type.Composite([
          BaseQueryParams,
          Type.Object({
            query: Type.Optional(Type.String()),
            sentiment: Type.Optional(PublicCommentSentiment),
            topic: Type.Optional(PublicCommentTopic),
            publishedAtFrom: Type.Optional(Type.String()),
            publishedAtTo: Type.Optional(Type.String()),
            sortBy: Type.Optional(PostSubmissionPublicCommentsSortBy),
            orderBy: Type.Optional(PostSubmissionPublicCommentsOrderBy),
          }),
        ]),
        data: PublicComments,
        response: ApiResponse(Type.Union([PublicComments, Type.Null()])),
      },
      publicComment: {
        method: 'GET',
        path: '/api/@next/applications/{applicationId}/publicComments/{publicCommentId}',
        urlParams: Type.Composite([
          BaseApplicationUrlParams,
          Type.Object({publicCommentId: Type.String()}),
        ]),
        queryParams: undefined,
        data: PublicComment,
        response: ApiResponse(Type.Union([PublicComment, Type.Null()])),
      },
      publicCommentPost: {
        method: 'POST',
        path: '/api/@next/applications/{applicationId}/publicComments',
        prefix: 'PostSubmissionPublicCommentPost',
        urlParams: BaseApplicationUrlParams,
        queryParams: undefined,
        body: Type.Omit(PublicComment, ['id', 'metadata']),
        data: undefined,
        response: undefined,
      },
    },
    public: {
      /**
       * /api/@next/public/applications/{applicationId}/publicComments
       * /api/@next/public/applications/{applicationId}/publicComments/{publicCommentId}
       */
      publicComments: {
        method: 'GET',
        path: '/api/@next/public/applications/{applicationId}/publicComments',
        urlParams: BaseApplicationUrlParams,
        queryParams: Type.Composite([
          BaseQueryParams,
          Type.Object({
            query: Type.Optional(Type.String()),
            sentiment: Type.Optional(PublicCommentSentiment),
            topic: Type.Optional(PublicCommentTopic),
            publishedAtFrom: Type.Optional(Type.String()),
            publishedAtTo: Type.Optional(Type.String()),
            sortBy: Type.Optional(PostSubmissionPublishedPublicCommentsSortBy),
            orderBy: Type.Optional(
              PostSubmissionPublishedPublicCommentsOrderBy,
            ),
          }),
        ]),
        data: PublicCommentsRedacted,
        response: ApiResponse(
          Type.Union([PublicCommentsRedacted, Type.Null()]),
        ),
      },
      publicComment: {
        method: 'GET',
        path: '/api/@next/public/applications/{applicationId}/publicComments/{publicCommentId}',
        urlParams: Type.Composite([
          BaseApplicationUrlParams,
          Type.Object({publicCommentId: Type.String()}),
        ]),
        queryParams: undefined,
        data: PublicCommentRedacted,
        response: ApiResponse(Type.Union([PublicCommentRedacted, Type.Null()])),
      },
    },
  },
  specialistComments: {
    private: {
      /**
       * /api/@next/applications/{applicationId}/specialistComments
       * /api/@next/applications/{applicationId}/specialistComments/{specialistCommentId}
       */
      specialists: {
        method: 'GET',
        path: '/api/@next/applications/{applicationId}/specialistComments',
        urlParams: BaseApplicationUrlParams,
        queryParams: Type.Composite([
          BaseQueryParams,
          Type.Object({
            query: Type.Optional(Type.String()),
            sentiment: Type.Optional(SpecialistCommentSentiment),
            publishedAtFrom: Type.Optional(Type.String()),
            publishedAtTo: Type.Optional(Type.String()),
            sortBy: Type.Optional(PostSubmissionSpecialistCommentsSortBy),
            orderBy: Type.Optional(PostSubmissionSpecialistCommentsOrderBy),
          }),
        ]),
        data: SpecialistComments,
        response: ApiResponse(Type.Union([SpecialistComments, Type.Null()])),
      },
      specialist: {
        method: 'GET',
        path: '/api/@next/applications/{applicationId}/specialistComments/{specialistCommentId}',
        urlParams: Type.Composite([
          BaseApplicationUrlParams,
          Type.Object({specialistId: Type.String()}),
        ]),
        queryParams: undefined,
        data: SpecialistComment,
        response: ApiResponse(Type.Union([SpecialistComment, Type.Null()])),
      },
    },
    public: {
      /**
       * /api/@next/public/applications/{applicationId}/specialistComments
       * /api/@next/public/applications/{applicationId}/specialistComments/{specialistId}
       */
      specialists: {
        method: 'GET',
        path: '/api/@next/public/applications/{applicationId}/specialistComments',
        urlParams: BaseApplicationUrlParams,
        queryParams: Type.Composite([
          BaseQueryParams,
          Type.Object({
            query: Type.Optional(Type.String()),
            sentiment: Type.Optional(SpecialistCommentSentiment),
            publishedAtFrom: Type.Optional(Type.String()),
            publishedAtTo: Type.Optional(Type.String()),
            sortBy: Type.Optional(
              PostSubmissionPublishedSpecialistCommentsSortBy,
            ),
            orderBy: Type.Optional(
              PostSubmissionPublishedSpecialistCommentsOrderBy,
            ),
          }),
        ]),
        data: SpecialistCommentsRedacted,
        response: ApiResponse(
          Type.Union([SpecialistCommentsRedacted, Type.Null()]),
        ),
      },
      specialist: {
        method: 'GET',
        path: '/api/@next/public/applications/{applicationId}/specialistComments/{specialistId}',
        urlParams: Type.Composite([
          BaseApplicationUrlParams,
          Type.Object({specialistId: Type.String()}),
        ]),
        queryParams: BaseQueryParams,
        data: SpecialistRedacted,
        response: ApiResponse(Type.Union([SpecialistRedacted, Type.Null()])),
      },
    },
  },
};

// -----------------------------------------------------------------------------
// Applications
// -----------------------------------------------------------------------------

// PostSubmissionApplications
// export const PostSubmissionApplicationsUrlParams =
//   endpoints.applications.private.applications.urlParams
// export type PostSubmissionApplicationsUrlParams = Static<
//   typeof PostSubmissionApplicationsUrlParams
// >

export const PostSubmissionApplicationsQueryParams =
  endpoints.applications.private.applications.queryParams;
export type PostSubmissionApplicationsQueryParams = Static<
  typeof PostSubmissionApplicationsQueryParams
>;

export const PostSubmissionApplicationsData =
  endpoints.applications.private.applications.data;
export type PostSubmissionApplicationsData = Static<
  typeof PostSubmissionApplicationsData
>;

export const PostSubmissionApplicationsResponse =
  endpoints.applications.private.applications.response;
export type PostSubmissionApplicationsResponse = Static<
  typeof PostSubmissionApplicationsResponse
>;

// PostSubmissionApplication
export const PostSubmissionApplicationUrlParams =
  endpoints.applications.private.application.urlParams;
export type PostSubmissionApplicationUrlParams = Static<
  typeof PostSubmissionApplicationUrlParams
>;

// export const PostSubmissionApplicationQueryParams =
//   endpoints.applications.private.application.queryParams
// export type PostSubmissionApplicationQueryParams = Static<
//   typeof PostSubmissionApplicationQueryParams
// >

export const PostSubmissionApplicationData =
  endpoints.applications.private.application.data;
export type PostSubmissionApplicationData = Static<
  typeof PostSubmissionApplicationData
>;

export const PostSubmissionApplicationResponse =
  endpoints.applications.private.application.response;
export type PostSubmissionApplicationResponse = Static<
  typeof PostSubmissionApplicationResponse
>;

// PostSubmissionPublishedApplications
// export const PostSubmissionPublishedApplicationsUrlParams =
//   endpoints.applications.public.applications.urlParams
// export type PostSubmissionPublishedApplicationsUrlParams = Static<
//   typeof PostSubmissionPublishedApplicationsUrlParams
// >

export const PostSubmissionPublishedApplicationsQueryParams =
  endpoints.applications.public.applications.queryParams;
export type PostSubmissionPublishedApplicationsQueryParams = Static<
  typeof PostSubmissionPublishedApplicationsQueryParams
>;

export const PostSubmissionPublishedApplicationsData =
  endpoints.applications.public.applications.data;
export type PostSubmissionPublishedApplicationsData = Static<
  typeof PostSubmissionPublishedApplicationsData
>;

export const PostSubmissionPublishedApplicationsResponse =
  endpoints.applications.public.applications.response;
export type PostSubmissionPublishedApplicationsResponse = Static<
  typeof PostSubmissionPublishedApplicationsResponse
>;

// PostSubmissionPublishedApplication
export const PostSubmissionPublishedApplicationUrlParams =
  endpoints.applications.public.application.urlParams;
export type PostSubmissionPublishedApplicationUrlParams = Static<
  typeof PostSubmissionPublishedApplicationUrlParams
>;

// export const PostSubmissionPublishedApplicationQueryParams =
//   endpoints.applications.public.application.queryParams
// export type PostSubmissionPublishedApplicationQueryParams = Static<
//   typeof PostSubmissionPublishedApplicationQueryParams
// >

export const PostSubmissionPublishedApplicationData =
  endpoints.applications.public.application.data;
export type PostSubmissionPublishedApplicationData = Static<
  typeof PostSubmissionPublishedApplicationData
>;

export const PostSubmissionPublishedApplicationResponse =
  endpoints.applications.public.application.response;
export type PostSubmissionPublishedApplicationResponse = Static<
  typeof PostSubmissionPublishedApplicationResponse
>;

// -----------------------------------------------------------------------------
// Documents
// -----------------------------------------------------------------------------

// PostSubmissionDocuments
export const PostSubmissionDocumentsUrlParams =
  endpoints.documents.private.documents.urlParams;
export type PostSubmissionDocumentsUrlParams = Static<
  typeof PostSubmissionDocumentsUrlParams
>;

export const PostSubmissionDocumentsQueryParams =
  endpoints.documents.private.documents.queryParams;
export type PostSubmissionDocumentsQueryParams = Static<
  typeof PostSubmissionDocumentsQueryParams
>;

export const PostSubmissionDocumentsData =
  endpoints.documents.private.documents.data;
export type PostSubmissionDocumentsData = Static<
  typeof PostSubmissionDocumentsData
>;

export const PostSubmissionDocumentsResponse =
  endpoints.documents.private.documents.response;
export type PostSubmissionDocumentsResponse = Static<
  typeof PostSubmissionDocumentsResponse
>;

// PostSubmissionDocument
export const PostSubmissionDocumentUrlParams =
  endpoints.documents.private.document.urlParams;
export type PostSubmissionDocumentUrlParams = Static<
  typeof PostSubmissionDocumentUrlParams
>;

// export const PostSubmissionDocumentQueryParams =
//   endpoints.documents.private.document.queryParams
// export type PostSubmissionDocumentQueryParams = Static<
//   typeof PostSubmissionDocumentQueryParams
// >

export const PostSubmissionDocumentData =
  endpoints.documents.private.document.data;
export type PostSubmissionDocumentData = Static<
  typeof PostSubmissionDocumentData
>;

export const PostSubmissionDocumentResponse =
  endpoints.documents.private.document.response;
export type PostSubmissionDocumentResponse = Static<
  typeof PostSubmissionDocumentResponse
>;

// PostSubmissionPublishedDocuments
export const PostSubmissionPublishedDocumentsUrlParams =
  endpoints.documents.public.documents.urlParams;
export type PostSubmissionPublishedDocumentsUrlParams = Static<
  typeof PostSubmissionPublishedDocumentsUrlParams
>;

export const PostSubmissionPublishedDocumentsQueryParams =
  endpoints.documents.public.documents.queryParams;
export type PostSubmissionPublishedDocumentsQueryParams = Static<
  typeof PostSubmissionPublishedDocumentsQueryParams
>;

export const PostSubmissionPublishedDocumentsData =
  endpoints.documents.public.documents.data;
export type PostSubmissionPublishedDocumentsData = Static<
  typeof PostSubmissionPublishedDocumentsData
>;

export const PostSubmissionPublishedDocumentsResponse =
  endpoints.documents.public.documents.response;
export type PostSubmissionPublishedDocumentsResponse = Static<
  typeof PostSubmissionPublishedDocumentsResponse
>;

// PostSubmissionPublishedDocument
export const PostSubmissionPublishedDocumentUrlParams =
  endpoints.documents.public.document.urlParams;
export type PostSubmissionPublishedDocumentUrlParams = Static<
  typeof PostSubmissionPublishedDocumentUrlParams
>;

// export const PostSubmissionPublishedDocumentQueryParams =
//   endpoints.documents.public.document.queryParams
// export type PostSubmissionPublishedDocumentQueryParams = Static<
//   typeof PostSubmissionPublishedDocumentQueryParams
// >

export const PostSubmissionPublishedDocumentData =
  endpoints.documents.public.document.data;
export type PostSubmissionPublishedDocumentData = Static<
  typeof PostSubmissionPublishedDocumentData
>;

export const PostSubmissionPublishedDocumentResponse =
  endpoints.documents.public.document.response;
export type PostSubmissionPublishedDocumentResponse = Static<
  typeof PostSubmissionPublishedDocumentResponse
>;

// -----------------------------------------------------------------------------
// PublicComments
// -----------------------------------------------------------------------------

// PostSubmissionPublicComments
export const PostSubmissionPublicCommentsUrlParams =
  endpoints.publicComments.private.publicComments.urlParams;
export type PostSubmissionPublicCommentsUrlParams = Static<
  typeof PostSubmissionPublicCommentsUrlParams
>;

export const PostSubmissionPublicCommentsQueryParams =
  endpoints.publicComments.private.publicComments.queryParams;
export type PostSubmissionPublicCommentsQueryParams = Static<
  typeof PostSubmissionPublicCommentsQueryParams
>;

export const PostSubmissionPublicCommentsData =
  endpoints.publicComments.private.publicComments.data;
export type PostSubmissionPublicCommentsData = Static<
  typeof PostSubmissionPublicCommentsData
>;

export const PostSubmissionPublicCommentsResponse =
  endpoints.publicComments.private.publicComments.response;
export type PostSubmissionPublicCommentsResponse = Static<
  typeof PostSubmissionPublicCommentsResponse
>;

// PostSubmissionPublicComment
export const PostSubmissionPublicCommentUrlParams =
  endpoints.publicComments.private.publicComment.urlParams;
export type PostSubmissionPublicCommentUrlParams = Static<
  typeof PostSubmissionPublicCommentUrlParams
>;

// export const PostSubmissionPublicCommentQueryParams =
//   endpoints.publicComments.private.publicComment.queryParams
// export type PostSubmissionPublicCommentQueryParams = Static<
//   typeof PostSubmissionPublicCommentQueryParams
// >

export const PostSubmissionPublicCommentData =
  endpoints.publicComments.private.publicComment.data;
export type PostSubmissionPublicCommentData = Static<
  typeof PostSubmissionPublicCommentData
>;

export const PostSubmissionPublicCommentResponse =
  endpoints.publicComments.private.publicComment.response;
export type PostSubmissionPublicCommentResponse = Static<
  typeof PostSubmissionPublicCommentResponse
>;

// PostSubmissionPublicCommentPost

export const PostSubmissionPublicCommentPostUrlParams =
  endpoints.publicComments.private.publicCommentPost.urlParams;
export type PostSubmissionPublicCommentPostUrlParams = Static<
  typeof PostSubmissionPublicCommentPostUrlParams
>;

export const PostSubmissionPublicCommentPostBody =
  endpoints.publicComments.private.publicCommentPost.body;
export type PostSubmissionPublicCommentPostBody = Static<
  typeof PostSubmissionPublicCommentPostBody
>;

// PostSubmissionPublishedPublicComments
export const PostSubmissionPublishedPublicCommentsUrlParams =
  endpoints.publicComments.public.publicComments.urlParams;
export type PostSubmissionPublishedPublicCommentsUrlParams = Static<
  typeof PostSubmissionPublishedPublicCommentsUrlParams
>;

export const PostSubmissionPublishedPublicCommentsQueryParams =
  endpoints.publicComments.public.publicComments.queryParams;
export type PostSubmissionPublishedPublicCommentsQueryParams = Static<
  typeof PostSubmissionPublishedPublicCommentsQueryParams
>;

export const PostSubmissionPublishedPublicCommentsData =
  endpoints.publicComments.public.publicComments.data;
export type PostSubmissionPublishedPublicCommentsData = Static<
  typeof PostSubmissionPublishedPublicCommentsData
>;

export const PostSubmissionPublishedPublicCommentsResponse =
  endpoints.publicComments.public.publicComments.response;
export type PostSubmissionPublishedPublicCommentsResponse = Static<
  typeof PostSubmissionPublishedPublicCommentsResponse
>;

// PostSubmissionPublishedPublicComment
export const PostSubmissionPublishedPublicCommentUrlParams =
  endpoints.publicComments.public.publicComment.urlParams;
export type PostSubmissionPublishedPublicCommentUrlParams = Static<
  typeof PostSubmissionPublishedPublicCommentUrlParams
>;

// export const PostSubmissionPublishedPublicCommentQueryParams =
//   endpoints.publicComments.public.publicComment.queryParams
// export type PostSubmissionPublishedPublicCommentQueryParams = Static<
//   typeof PostSubmissionPublishedPublicCommentQueryParams
// >

export const PostSubmissionPublishedPublicCommentData =
  endpoints.publicComments.public.publicComment.data;
export type PostSubmissionPublishedPublicCommentData = Static<
  typeof PostSubmissionPublishedPublicCommentData
>;

export const PostSubmissionPublishedPublicCommentResponse =
  endpoints.publicComments.public.publicComment.response;
export type PostSubmissionPublishedPublicCommentResponse = Static<
  typeof PostSubmissionPublishedPublicCommentResponse
>;

// -----------------------------------------------------------------------------
// SpecialistComments
// -----------------------------------------------------------------------------

// PostSubmissionSpecialists
export const PostSubmissionSpecialistsUrlParams =
  endpoints.specialistComments.private.specialists.urlParams;
export type PostSubmissionSpecialistsUrlParams = Static<
  typeof PostSubmissionSpecialistsUrlParams
>;

export const PostSubmissionSpecialistsQueryParams =
  endpoints.specialistComments.private.specialists.queryParams;
export type PostSubmissionSpecialistsQueryParams = Static<
  typeof PostSubmissionSpecialistsQueryParams
>;

export const PostSubmissionSpecialistsData =
  endpoints.specialistComments.private.specialists.data;
export type PostSubmissionSpecialistsData = Static<
  typeof PostSubmissionSpecialistsData
>;

export const PostSubmissionSpecialistsResponse =
  endpoints.specialistComments.private.specialists.response;
export type PostSubmissionSpecialistsResponse = Static<
  typeof PostSubmissionSpecialistsResponse
>;

// PostSubmissionSpecialist
export const PostSubmissionSpecialistUrlParams =
  endpoints.specialistComments.private.specialist.urlParams;
export type PostSubmissionSpecialistUrlParams = Static<
  typeof PostSubmissionSpecialistUrlParams
>;

// export const PostSubmissionSpecialistQueryParams =
//   endpoints.specialistComments.private.specialist.queryParams
// export type PostSubmissionSpecialistQueryParams = Static<
//   typeof PostSubmissionSpecialistQueryParams
// >

export const PostSubmissionSpecialistData =
  endpoints.specialistComments.private.specialist.data;
export type PostSubmissionSpecialistData = Static<
  typeof PostSubmissionSpecialistData
>;

export const PostSubmissionSpecialistResponse =
  endpoints.specialistComments.private.specialist.response;
export type PostSubmissionSpecialistResponse = Static<
  typeof PostSubmissionSpecialistResponse
>;

// PostSubmissionPublishedSpecialists
export const PostSubmissionPublishedSpecialistsUrlParams =
  endpoints.specialistComments.public.specialists.urlParams;
export type PostSubmissionPublishedSpecialistsUrlParams = Static<
  typeof PostSubmissionPublishedSpecialistsUrlParams
>;

export const PostSubmissionPublishedSpecialistsQueryParams =
  endpoints.specialistComments.public.specialists.queryParams;
export type PostSubmissionPublishedSpecialistsQueryParams = Static<
  typeof PostSubmissionPublishedSpecialistsQueryParams
>;

export const PostSubmissionPublishedSpecialistsData =
  endpoints.specialistComments.public.specialists.data;
export type PostSubmissionPublishedSpecialistsData = Static<
  typeof PostSubmissionPublishedSpecialistsData
>;

export const PostSubmissionPublishedSpecialistsResponse =
  endpoints.specialistComments.public.specialists.response;
export type PostSubmissionPublishedSpecialistsResponse = Static<
  typeof PostSubmissionPublishedSpecialistsResponse
>;

// PostSubmissionPublishedSpecialist
export const PostSubmissionPublishedSpecialistUrlParams =
  endpoints.specialistComments.public.specialist.urlParams;
export type PostSubmissionPublishedSpecialistUrlParams = Static<
  typeof PostSubmissionPublishedSpecialistUrlParams
>;

export const PostSubmissionPublishedSpecialistQueryParams =
  endpoints.specialistComments.public.specialist.queryParams;
export type PostSubmissionPublishedSpecialistQueryParams = Static<
  typeof PostSubmissionPublishedSpecialistQueryParams
>;

export const PostSubmissionPublishedSpecialistData =
  endpoints.specialistComments.public.specialist.data;
export type PostSubmissionPublishedSpecialistData = Static<
  typeof PostSubmissionPublishedSpecialistData
>;

export const PostSubmissionPublishedSpecialistResponse =
  endpoints.specialistComments.public.specialist.response;
export type PostSubmissionPublishedSpecialistResponse = Static<
  typeof PostSubmissionPublishedSpecialistResponse
>;
