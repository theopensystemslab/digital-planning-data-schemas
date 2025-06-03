# API implementation guidelines

One of the aims of this specification is to make data interopable between systems. JSON schema allows us to do this with the data structure but the implementation of API's will also need to have standard implementations in order for applications to use the data efficiently.

## Formatting data

##### Dates

- The format for date only values is `YYYY-MM-DD`. Date keys should have the suffix `Date`.
- The format for datetime values should be ISO 8601 in UTC. DateTime keys should have the suffix `At`.

```typescript
interface Example {
  receivedDate: Date; // Date-only (YYYY-MM-DD)
  createdAt: DateTime; // Datetime (ISO 8601 with UTC, e.g., 2024-01-01T10:30:00Z)
}
```

## API response structure

```ts
export interface ApiResponse<T> {
  data: T | null;
  pagination?: Pagination | CursorPagination;
  status?: {
    code: number;
    message: string;
    detail?: string;
  };
}
```

This structure includes:

- `data`: The actual data being returned.
- `pagination`: Optional pagination data, which could be either offset or cursor-based.
- `status`: Contains the HTTP status code, a message, and optional details.

## Pagination

To maintain consistency, it is _recommended_ to use **offset pagination** as the recommended approach. However, datasets won't always be small so API's can also support cursor-based pagination as an optional alternative for handling large datasets efficiently.

- **Offset pagination** as the default method of pagination
- **Cursor-based pagination** as an optional, advanced method

### Offset pagination

```ts
export interface Pagination {
  /**
   * Number of results per page eg 10
   */
  resultsPerPage: number;
  /**
   * Current page number eg 1
   */
  currentPage: number;
  /**
   * Total number of pages eg 10
   */
  totalPages: number;
  /**
   * Represents the total number of results returned by current query
   */
  totalResults: number;
  /**
   * Represents the total number of items available in the database (#nofilter)
   */
  totalAvailableItems?: number;
}
```

##### Parameters

> | name             | required | type   | default | options | description                            |
> | ---------------- | -------- | ------ | ------- | ------- | -------------------------------------- |
> | `resultsPerPage` | No       | number | `10`    |         | Control the number of results per page |
> | `page`           | No       | number | `0`     |         | Current page (Zero indexed)            |

## Cursor-based pagination

```ts
export interface CursorPagination {
  /**
   * Number of results per page eg 10
   */
  resultsPerPage: number;
  /**
   * Cursor to the next page
   */
  nextCursor: string | null;
  /**
   * Cursor to the previous page
   */
  prevCursor: string | null;
  /**
   * Represents the total number of results returned by current query
   */
  totalResults: number;
  /**
   * Represents the total number of items available in the database (#nofilter)
   */
  totalAvailableItems?: number;
}
```

##### Parameters

> | name             | required | type   | default  | options | description                            |
> | ---------------- | -------- | ------ | -------- | ------- | -------------------------------------- |
> | `resultsPerPage` | No       | number | `10`     |         | Control the number of results per page |
> | `cursor`         | No       | string | `abc123` |         | Current page (Zero indexed)            |

## Filter based searching

Some endpoints support `AND` and `OR` filtering, depending on the syntax used depends on the outcome.

`GET /items?options=option1&options=option2`

- `SELECT * FROM items WHERE option1 = true AND option2 = true;`
- Only items that have both option1 and option2 set to true will be returned

`GET /items?options=option1,option2`

- `SELECT * FROM items WHERE option1 = true OR option2 = true;`
- Only items that have `option1` OR `option2` OR both set true will be returned

`GET /items?options=option1&options=option2&reference=123`

- `SELECT * FROM items WHERE option1 = true AND option2 = true AND reference = 123;`
- Only items that have both option1 AND option2 set to true AND belong to reference 123 will be returned

`GET /items?options=option1,option2&reference=123`

- `SELECT * FROM items WHERE (option1 = true OR option2 = true) AND reference = 123;`
- As long as `reference` is 123:
  - Items that have `option1` OR `option2` OR both set to true will be returned
  - Items that have neither option set to true will **not** be returned
- Items that have `option1` OR `option2` OR both set to true but have a different reference will not be returned

## Date based searching

When searching with dates, follow the convention of FieldNameDate being a Date in `YYYY-MM-DD` format and FieldNameAt being a DateTime in `2024-03-10T23:59:59Z` format

`GET /items?from=2024-03-01&to=2024-03-10`

`GET /items?from=2024-03-01T00:00:00Z&to=2024-03-10T23:59:59Z`

## Location based searching

> [!WARNING]
> This section is still under development

Some endpoints support location based searching. There are two ways to search by location, single point and multipoint.

##### Single point

`GET /items?lat=51.519389&lng=-0.108128&radius=10000`

`radius` will always be defined in meters. to convert miles to meters use `meters * 0.000621371`

The default value for radius will depend on the kind of search,

- Small-scale searches (e.g., ATMs, cafes, petrol stations) → 500–1000 meters
- General local searches (e.g., restaurants, businesses, events) → 2000–5000 meters (2–5 km)
- City-wide searches (e.g., delivery zones, service providers) → 10,000–20,000 meters (10–20 km)
- Regional searches (e.g., hospitals, large service areas) → 50,000+ meters (50+ km)

##### Multi point

Using GeoJSON:

`GET /items?polygon={"type":"Polygon","coordinates":[[[-73.97, 40.77], [-73.98, 40.75], [-73.96, 40.74], [-73.97, 40.77]]]}`

- `Coordinates`: An array of coordinate pairs (`[longitude, latitude]`), with the first and last coordinate being the same to close the polygon.
- `Type`: "Polygon" to specify the type of geometry.

Simple Coordinate Pairs:

`GET /items?polygon=longitude1,latitude1,longitude2,latitude2,longitude3,latitude3,longitude4,latitude4`
`GET /items?polygon=-73.97,40.77,-73.98,40.75,-73.96,40.74,-73.97,40.77`

Pass the coordinates as a comma-separated string of longitude and latitude pairs

## List of all endpoints

| HTTP Method | Path                                                                     | Public | Pagination | Sort | Search |
| ----------- | ------------------------------------------------------------------------ | ------ | ---------- | ---- | ------ |
| GET         | `/api/@next/public/planning_application/search`                          | YES    | YES        | YES  | YES    |
| GET         | `/api/@next/public/planning_application/{reference}`                     | YES    | NO         | NO   | NO     |
| GET         | `/api/@next/public/planning_application/{reference}/documents`           | YES    | YES        | YES  | YES    |
| GET         | `/api/@next/public/planning_application/{reference}/comments/public`     | YES    | YES        | YES  | YES    |
| GET         | `/api/@next/public/planning_application/{reference}/comments/specialist` | YES    | YES        | YES  | YES    |
| POST        | `/api/@next/planning_application/{reference}/comments/public`            | NO     | n/a        | n/a  | n/a    |
| POST        | `/api/@next/planning_application/{reference}/comments/specialist`        | NO     | n/a        | n/a  | n/a    |

## Endpoints

#### Search

<details>
 <summary><code>GET</code> <code><b>/api/@next/public/planning_application/search</b></code></summary>

For listing, searching and filtering planning applications that are currently available to the public

##### Parameters

> | name                     | required | type                 | default      | options                      | description                                                                                                                                                                        |
> | ------------------------ | -------- | -------------------- | ------------ | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
> | `resultsPerPage`         |          | number               | `10`         |                              | Control the number of results per page                                                                                                                                             |
> | `page`                   |          | number               | `0`          |                              | Current page (Zero indexed)                                                                                                                                                        |
> | `sortBy`                 |          | string               | `receivedAt` | See **SortBy options** below | Set the sort type for the results                                                                                                                                                  |
> | `orderBy`                |          | string               | `desc`       | See **SortBy options** below | Set the sort order for the results                                                                                                                                                 |
> | `query`                  |          | string               |              |                              | Searches records by the text in the `data.application.reference`, `submission.proposal.description` and `submission.property.address` fields                                       |
> | `reference`              |          | string               |              |                              | `data.application.reference`                                                                                                                                                       |
> | `description`            |          | string               |              |                              | `submission.proposal.description`                                                                                                                                                  |
> | `applicationType`        |          | ApplicationType[]    |              |                              | Supports `AND` and `OR` filtering see [Filter based searching](#filter-based-searching)                                                                                            |
> | `stage`                  |          | ProcessStage[]       |              |                              | `data.application.stage` Supports `AND` and `OR` filtering see [Filter based searching](#filter-based-searching)                                                                   |
> | `status`                 |          | ApplicationStatus[]  |              |                              | `data.application.ApplicationStatus` Supports `AND` and `OR` filtering see [Filter based searching](#filter-based-searching)                                                       |
> | `councilDecision`        |          | AssessmentDecision[] |              |                              | `data.assessment.planningOfficerDecisionDate` \|\| `data.assessment.committeeDecisionDate` Supports `AND` and `OR` filtering see [Filter based searching](#filter-based-searching) |
> | `priorApprovalRequired`  |          | boolean              |              |                              | `data.assessment.priorApprovalRequired` only applicable on prior approval application type                                                                                         |
> | `appealDecision`         |          | AppealDecision[]     |              |                              | Supports `AND` and `OR` filtering see [Filter based searching](#filter-based-searching)                                                                                            |
> | `hasCouncilDecisionDate` |          | boolean              |              |                              | `data.assessment.planningOfficerDecisionDate` \|\| `data.assessment.committeeDecisionDate`                                                                                         |
> | `hasAppealLodgedDate`    |          | boolean              |              |                              | `data.appeal.lodgedDate`                                                                                                                                                           |
> | `hasAppealValidatedDate` |          | boolean              |              |                              | `data.appeal.validatedDate`                                                                                                                                                        |
> | `hasAppealStartedDate`   |          | boolean              |              |                              | `data.appeal.startedDate`                                                                                                                                                          |
> | `hasAppealDecisionDate`  |          | boolean              |              |                              | `data.appeal.decisionDate`                                                                                                                                                         |
> | `hasWithdrawnAt`         |          | boolean              |              |                              | `data.application.withdrawnAt`                                                                                                                                                     |

##### Date Parameters

For more information see [Date based searching](#date-based-searching)

> | name                      | required                           | type     | default | description                                                                                |
> | ------------------------- | ---------------------------------- | -------- | ------- | ------------------------------------------------------------------------------------------ |
> | `receivedAtFrom`          | Requires `receivedAtTo`            | datetime |         | `data.validation.receivedAt`                                                               |
> | `receivedAtTo`            | Requires `receivedAtFrom`          | datetime |         | `data.validation.receivedAt`                                                               |
> | `validatedAtFrom`         | Requires `validatedAtTo`           | datetime |         | `data.validation.validatedAt`                                                              |
> | `validatedAtTo`           | Requires `validatedAtFrom`         | datetime |         | `data.validation.validatedAt`                                                              |
> | `publishedAtFrom`         | Requires `publishedAtTo`           | datetime |         | `metadata.publishedAt`                                                                     |
> | `publishedAtTo`           | Requires `publishedAtFrom`         | datetime |         | `metadata.publishedAt`                                                                     |
> | `withdrawnAtFrom`         | Requires `withdrawnAtTo`           | datetime |         | `data.application.withdrawnAt`                                                             |
> | `withdrawnAtTo`           | Requires `withdrawnAtFrom`         | datetime |         | `data.application.withdrawnAt`                                                             |
> | `consultationEndDateFrom` | Requires `consultationEndDateTo`   | date     |         | `data.consultation.endDate`                                                                |
> | `consultationEndDateTo`   | Requires `consultationEndDateFrom` | date     |         | `data.consultation.endDate`                                                                |
> | `councilDecisionDateFrom` | Requires `councilDecisionDateTo`   | date     |         | `data.assessment.planningOfficerDecisionDate` \|\| `data.assessment.committeeDecisionDate` |
> | `councilDecisionDateTo`   | Requires `councilDecisionDateFrom` | date     |         | `data.assessment.planningOfficerDecisionDate` \|\| `data.assessment.committeeDecisionDate` |
> | `appealLodgedDateFrom`    | Requires `appealLodgedDateTo`      | date     |         | `data.appeal.lodgedDate`                                                                   |
> | `appealLodgedDateTo`      | Requires `appealLodgedDateFrom`    | date     |         | `data.appeal.lodgedDate`                                                                   |
> | `appealValidatedDateFrom` | Requires `appealValidatedDateTo`   | date     |         | `data.appeal.validatedDate`                                                                |
> | `appealValidatedDateTo`   | Requires `appealValidatedDateFrom` | date     |         | `data.appeal.validatedDate`                                                                |
> | `appealStartedDateFrom`   | Requires `appealStartedDateTo`     | date     |         | `data.appeal.startedDate`                                                                  |
> | `appealStartedDateTo`     | Requires `appealStartedDateFrom`   | date     |         | `data.appeal.startedDate`                                                                  |
> | `appealDecisionDateFrom`  | Requires `appealDecisionDateTo`    | date     |         | `data.appeal.decisionDate`                                                                 |
> | `appealDecisionDateTo`    | Requires `appealDecisionDateFrom`  | date     |         | `data.appeal.decisionDate`                                                                 |
> | `appealWithdrawnAtFrom`   | Requires `appealWithdrawnAtTo`     | datetime |         | `data.appeal.WithdrawnAt`                                                                  |
> | `appealWithdrawnAtTo`     | Requires `appealWithdrawnAtFrom`   | datetime |         | `data.appeal.WithdrawnAt`                                                                  |

##### Location Parameters

For more information see [Location based searching](#location-based-searching)

> | name           | required                                                  | type   | default | options | description                                                                |
> | -------------- | --------------------------------------------------------- | ------ | ------- | ------- | -------------------------------------------------------------------------- |
> | `loc_address`  | Requires `radius`                                         | string |         |         | Geocoded into lat/lng + radius `?lat=51.519389&lng=-0.108128&radius=10000` |
> | `loc_postcode` | Requires `radius`                                         | string |         |         | Geocoded into lat/lng + radius `?lat=51.519389&lng=-0.108128&radius=10000` |
> | `lat`          | Requires `lng` + `radius`                                 | float  |         |         | `submission.property.lat`                                                  |
> | `lng`          | Requires `lat` + `radius`                                 | float  |         |         | `submission.property.lng`                                                  |
> | `radius`       | Required with `lat`, `lng`, `loc_address`, `loc_postcode` | number | `10000` |         | In meters                                                                  |

##### Responses

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `200`     | `application/json` | `ApiResponse<PostSubmissionApplication>` |
> | `400`     | `application/json` | `{"code":"400","message":"Bad Request"}` |

##### SortBy options

> | SortBy                | Default OrderBy | OrderBy       | Description                                                                      |
> | --------------------- | --------------- | ------------- | -------------------------------------------------------------------------------- |
> | `receivedAt`          | `desc`          | `asc`, `desc` |                                                                                  |
> | `id`                  | `desc`          | `asc`, `desc` |                                                                                  |
> | `councilDecisionDate` | `desc`          | `asc`, `desc` | `assessment.planningOfficerDecisionDate` \|\| `assessment.committeeDecisionDate` |
> | `consultationEndDate` | `desc`          | `asc`, `desc` |                                                                                  |
> | `status`              | `desc`          | `asc`, `desc` | Most progressed to least progressed                                              |

##### Example cURL

> ```javascript
> curl -X GET -H "Content-Type: application/json" http://localhost:3000/api/@next/public/planning_application/search
>
> curl -X GET -H "Content-Type: application/json" http://localhost:3000/api/@next/public/planning_application/search?postcode=EC1N 8BA&radius=10000
>
> curl -X GET -H "Content-Type: application/json" http://localhost:3000/api/@next/public/planning_application/search?address=123 mushroom house&radius=10000
>
> curl -X GET -H "Content-Type: application/json" http://localhost:3000/api/@next/public/planning_application/search?lat=51.519389&lng=-0.108128&radius=10000
> ```

</details>

---

#### Show

<details>
 <summary><code>GET</code> <code><b>/api/@next/public/planning_application/{reference}</b></code></summary>

Returns the details of specific public planning application reference

##### Parameters

> | name        | required | type   | default | options | description                                   |
> | ----------- | -------- | ------ | ------- | ------- | --------------------------------------------- |
> | `reference` |          | string |         |         | Application reference number eg `ABC-123-XYZ` |

##### Responses

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `200`     | `application/json` | `ApiResponse<PostSubmissionApplication>` |
> | `400`     | `application/json` | `{"code":"400","message":"Bad Request"}` |

##### Example cURL

> ```javascript
> curl -X GET -H "Content-Type: application/json" http://localhost:3000/api/@next/public/planning_application/{reference}
> ```

</details>

---

#### Documents

<details>
 <summary><code>GET</code> <code><b>/api/@next/public/planning_application/{reference}/documents</b></code></summary>

For listing, searching and filtering documents related to the specific public planning application reference

##### Parameters

> | name             | required | type     | default     | options                      | description                                                                             |
> | ---------------- | -------- | -------- | ----------- | ---------------------------- | --------------------------------------------------------------------------------------- |
> | `resultsPerPage` |          | number   | `10`        |                              | Control the number of results per page                                                  |
> | `page`           |          | number   | `0`         |                              | Current page (Zero indexed)                                                             |
> | `sortBy`         |          | string   | `createdAt` | See **SortBy options** below | Set the sort type for the results                                                       |
> | `orderBy`        |          | string   | `desc`      | See **SortBy options** below | Set the sort order for the results                                                      |
> | `query`          |          | string   |             |                              | Search records by `name`, `type`, `description`                                         |
> | `name`           |          | string   |             |                              | `name`                                                                                  |
> | `type`           |          | FileType |             |                              | Supports `AND` and `OR` filtering see [Filter based searching](#filter-based-searching) |

##### Date Parameters

For more information see [Date based searching](#date-based-searching)

> | name              | required                   | type     | default | description            |
> | ----------------- | -------------------------- | -------- | ------- | ---------------------- |
> | `createdAtFrom`   | Requires `createdAtTo`     | datetime |         | `metadata.createdAt`   |
> | `createdAtTo`     | Requires `createdAtFrom`   | datetime |         | `metadata.createdAt`   |
> | `uploadedAtFrom`  | Requires `uploadedAtTo`    | datetime |         | `metadata.uploadedAt`  |
> | `uploadedAtTo`    | Requires `uploadedAtFrom`  | datetime |         | `metadata.uploadedAt`  |
> | `publishedAtFrom` | Requires `publishedAtTo`   | datetime |         | `metadata.publishedAt` |
> | `publishedAtTo`   | Requires `publishedAtFrom` | datetime |         | `metadata.publishedAt` |

##### Responses

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `200`     | `application/json` | `ApiResponse<PostSubmissionFile[]>`      |
> | `400`     | `application/json` | `{"code":"400","message":"Bad Request"}` |

##### SortBy options

> | SortBy        | Default OrderBy | OrderBy       | Description |
> | ------------- | --------------- | ------------- | ----------- |
> | `createdAt`   | `desc`          | `asc`, `desc` |             |
> | `uploadedAt`  | `desc`          | `asc`, `desc` |             |
> | `publishedAt` | `desc`          | `asc`, `desc` |             |
> | `name`        | `desc`          | `asc`, `desc` |             |
> | `id`          | `desc`          | `asc`, `desc` |             |

##### Example cURL

> ```javascript
> curl -X GET -H "Content-Type: application/json" http://localhost:3000/api/@next/public/planning_application/{reference}/documents
> ```

</details>

---

#### Comments

<details>
 <summary><code>GET</code> <code><b>/api/@next/public/planning_application/{reference}/comments/public</b></code></summary>

For listing, searching and filtering public (neighbour) comments related to the specific public planning application reference

##### Parameters

> | name             | required | type                                 | default       | options                      | description                                                                                                           |
> | ---------------- | -------- | ------------------------------------ | ------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------- |
> | `resultsPerPage` |          | number                               | `10`          |                              | Control the number of results per page                                                                                |
> | `page`           |          | number                               | `0`           |                              | Current page (Zero indexed)                                                                                           |
> | `sortBy`         |          | string                               | `publishedAt` | See **SortBy options** below | Set the sort type for the results                                                                                     |
> | `orderBy`        |          | string                               | `desc`        | See **SortBy options** below | Set the sort order for the results                                                                                    |
> | `query`          |          | TopicAndComments.question \|\|string |               |                              | Search records by `comment`                                                                                           |
> | `sentiment`      |          | CommentSentiment[]                   |               |                              | Search records by `sentiment` Supports `AND` and `OR` filtering see [Filter based searching](#filter-based-searching) |
> | `topic`          |          | TopicAndComments.topic[]             |               |                              | Search records by `topic` Supports `AND` and `OR` filtering see [Filter based searching](#filter-based-searching)     |

##### Date Parameters

For more information see [Date based searching](#date-based-searching)

> | name              | required                   | type     | default | description   |
> | ----------------- | -------------------------- | -------- | ------- | ------------- |
> | `submittedAtFrom` | Requires `submittedAtTo`   | datetime |         | `submittedAt` |
> | `submittedAtTo`   | Requires `submittedAtFrom` | datetime |         | `submittedAt` |
> | `validatedAtFrom` | Requires `validatedAtTo`   | datetime |         | `validatedAt` |
> | `validatedAtTo`   | Requires `validatedAtFrom` | datetime |         | `validatedAt` |
> | `publishedAtFrom` | Requires `publishedAtTo`   | datetime |         | `publishedAt` |
> | `publishedAtTo`   | Requires `publishedAtFrom` | datetime |         | `publishedAt` |

##### Responses

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `200`     | `application/json` | `ApiResponse<PublicComments>`            |
> | `400`     | `application/json` | `{"code":"400","message":"Bad Request"}` |

##### SortBy options

> | SortBy        | Default OrderBy | OrderBy       | Description |
> | ------------- | --------------- | ------------- | ----------- |
> | `submittedAt` | `desc`          | `asc`, `desc` |             |
> | `validatedAt` | `desc`          | `asc`, `desc` |             |
> | `publishedAt` | `desc`          | `asc`, `desc` |             |
> | `id`          | `desc`          | `asc`, `desc` |             |

##### Example cURL

> ```javascript
> curl -X GET -H "Content-Type: application/json" http://localhost:3000/api/@next/public/planning_application/{reference}/comments/public
> ```

</details>

<details>
 <summary><code>GET</code> <code><b>/api/@next/public/planning_application/{reference}/comments/specialist</b></code></summary>

For listing, searching and filtering specialist comments related to the specific public planning application reference

##### Parameters

> | name             | required | type                                 | default       | options                             | description                                                                                                               |
> | ---------------- | -------- | ------------------------------------ | ------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
> | `resultsPerPage` |          | number                               | `10`          |                                     | Control the number of results per page                                                                                    |
> | `page`           |          | number                               | `0`           |                                     | Current page (Zero indexed)                                                                                               |
> | `sortBy`         |          | string                               | `publishedAt` | See **SortBy options** below        | Set the sort type for the results based on the latest comment made by specialist                                          |
> | `orderBy`        |          | string                               | `desc`        | See **SortBy options** below        | Set the sort order for the results based on the latest comment made by specialist                                         |
> | `query`          |          | TopicAndComments.question \|\|string |               |                                     | Search records by `comment`                                                                                               |
> | `id`             |          | number                               |               |                                     | Search records by specialist `id` Supports `AND` and `OR` filtering see [Filter based searching](#filter-based-searching) |
> | `sentiment`      |          | SpecialistCommentSentiment[]         |               |                                     | Search records by `sentiment` Supports `AND` and `OR` filtering see [Filter based searching](#filter-based-searching)     |
> | `topic`          |          | TopicAndComments.topic[]             |               |                                     | Search records by `topic` Supports `AND` and `OR` filtering see [Filter based searching](#filter-based-searching)         |
> | `latestOnly`     |          | boolean                              |               |                                     | Only returns the latest comment for the specialist in the comments section                                                |
> | `commentSortBy`  |          | string                               | `publishedAt` | See **CommentSortBy options** below | Set the sort type for the specialists comments field                                                                      |
> | `commentOrderBy` |          | string                               | `desc`        | See **CommentSortBy options** below | Set the sort order for the specialists comments field                                                                     |

##### Date Parameters

For more information see [Date based searching](#date-based-searching)

> | name              | required                   | type     | default | description     |
> | ----------------- | -------------------------- | -------- | ------- | --------------- |
> | `submittedAtFrom` | Requires `submittedAtTo`   | datetime |         | `submittedAt`   |
> | `submittedAtTo`   | Requires `submittedAtFrom` | datetime |         | `submittedAt`   |
> | `validatedAtFrom` | Requires `validatedAtTo`   | datetime |         | `validatedAtAt` |
> | `validatedAtTo`   | Requires `validatedAtFrom` | datetime |         | `validatedAtAt` |
> | `publishedAtFrom` | Requires `publishedAtTo`   | datetime |         | `publishedAt`   |
> | `publishedAtTo`   | Requires `publishedAtFrom` | datetime |         | `publishedAt`   |

##### Responses

> | http code | content-type       | response                                 |
> | --------- | ------------------ | ---------------------------------------- |
> | `200`     | `application/json` | `ApiResponse<SpecialistComments>`        |
> | `400`     | `application/json` | `{"code":"400","message":"Bad Request"}` |

##### SortBy options

> | SortBy        | Default OrderBy | OrderBy       | Description                                                             |
> | ------------- | --------------- | ------------- | ----------------------------------------------------------------------- |
> | `submittedAt` | `desc`          | `asc`, `desc` | Sorts by the submittedAt field of the last comment made by a specialist |
> | `validatedAt` | `desc`          | `asc`, `desc` | Sorts by the validatedAt field of the last comment made by a specialist |
> | `publishedAt` | `desc`          | `asc`, `desc` | Sorts by the publishedAt field of the last comment made by a specialist |

##### CommentSortBy options

> | SortBy        | Default OrderBy | OrderBy       | Description                                              |
> | ------------- | --------------- | ------------- | -------------------------------------------------------- |
> | `submittedAt` | `desc`          | `asc`, `desc` | Sorts specialist comments field by the submittedAt field |
> | `validatedAt` | `desc`          | `asc`, `desc` | Sorts specialist comments field by the validatedAt field |
> | `publishedAt` | `desc`          | `asc`, `desc` | Sorts specialist comments field by the publishedAt field |
> | `id`          | `desc`          | `asc`, `desc` | Sorts specialist comments field by the id field          |

##### Example cURL

> ```javascript
> curl -X GET -H "Content-Type: application/json" http://localhost:3000/api/@next/public/planning_application/{reference}/comments/specialist
> ```

</details>

<details>
 <summary><code>POST</code> <code><b>/api/@next/planning_application/{reference}/comments/public</b></code></summary>

Allows submission of neighbour (public) comments

##### Parameters

> | name        | required | type   | default | options | description                                   |
> | ----------- | -------- | ------ | ------- | ------- | --------------------------------------------- |
> | `reference` |          | string |         |         | Application reference number eg `ABC-123-XYZ` |

##### Responses

> | http code | content-type       | response                                        |
> | --------- | ------------------ | ----------------------------------------------- |
> | `200`     | `application/json` | `{"code":"200","message":"Comment Successful"}` |
> | `400`     | `application/json` | `{"code":"400","message":"Bad Request"}`        |

##### Example cURL

> ```javascript
> curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:3000/api/@next/planning_application/{reference}/comments/public
> ```

</details>

<details>
 <summary><code>POST</code> <code><b>/api/@next/planning_application/{reference}/comments/specialist</b></code></summary>

Allows submission of specialist (consultee) comments

##### Parameters

> | name        | required | type   | default | options | description                                   |
> | ----------- | -------- | ------ | ------- | ------- | --------------------------------------------- |
> | `reference` |          | string |         |         | Application reference number eg `ABC-123-XYZ` |
> | `id`        |          | number |         |         | Specialist id number eg `1`                   |

##### Responses

> | http code | content-type       | response                                        |
> | --------- | ------------------ | ----------------------------------------------- |
> | `200`     | `application/json` | `{"code":"200","message":"Comment Successful"}` |
> | `400`     | `application/json` | `{"code":"400","message":"Bad Request"}`        |

##### Example cURL

> ```javascript
> curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:3000/api/@next/planning_application/{reference}/comments/specialist
> ```

</details>

## TODO

- [ ] What happens if priorApprovalRequired is requested for multiple application types - return error or only apply to the relevant application type?
