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

| HTTP Method | Path                                                                               | Public | Pagination   | Sort | Search |
| ----------- | ---------------------------------------------------------------------------------- | ------ | ------------ | ---- | ------ |
| GET         | `/api/@next/public/applications`                                                   | YES    | YES          | YES  | YES    |
| GET         | `/api/@next/public/applications/{applicationId}`                                   | YES    | NO           | NO   | NO     |
| GET         | `/api/@next/public/applications/{applicationId}/documents`                         | YES    | YES          | YES  | YES    |
| GET         | `/api/@next/public/applications/{applicationId}/documents/{documentId}`            | YES    | NO           | NO   | NO     |
| GET         | `/api/@next/public/applications/{applicationId}/publicComments`                    | YES    | YES          | YES  | YES    |
| GET         | `/api/@next/public/applications/{applicationId}/publicComments/{publicCommentId}`  | YES    | NO           | NO   | NO     |
| GET         | `/api/@next/public/applications/{applicationId}/specialistComments`                | YES    | YES          | YES  | YES    |
| GET         | `/api/@next/public/applications/{applicationId}/specialistComments/{specialistId}` | YES    | YES \*\*\*\* | YES  | YES    |
| GET         | `/api/@next/applications`                                                          | NO     | YES          | YES  | YES    |
| GET         | `/api/@next/applications/{applicationId}`                                          | NO     | NO           | NO   | NO     |
| GET         | `/api/@next/applications/{applicationId}/documents`                                | NO     | YES          | YES  | YES    |
| GET         | `/api/@next/applications/{applicationId}/documents/{documentId}`                   | NO     | NO           | NO   | NO     |
| GET         | `/api/@next/applications/{applicationId}/publicComments`                           | NO     | YES          | YES  | YES    |
| GET         | `/api/@next/applications/{applicationId}/publicComments/{publicCommentId}`         | NO     | NO           | NO   | NO     |
| GET         | `/api/@next/applications/{applicationId}/specialistComments`                       | NO     | YES          | YES  | YES    |
| GET         | `/api/@next/applications/{applicationId}/specialistComments/{specialistId}`        | NO     | YES          | YES  | YES    |
| POST        | `/api/@next/applications/{applicationId}/publicComments`                           | NO     | n/a          | n/a  | n/a    |
| POST        | `/api/@next/applications/{applicationId}/specialistComments`                       | NO     | n/a          | n/a  | n/a    |

## Endpoints
