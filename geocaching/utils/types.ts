// export interface APIConfiguration {
//   apiKey: string;
//   tenantOrgId?: string;
//   debug?: boolean;
//   protocol?: string;
//   host?: string;
//   apiBaseUrl?: string;
//   basePath?: string;
//   requestTimeout?: number;
//   xApiClient?: string;
//   additionalHeaders?: any;
//   httpHeaders?: any;
// }

export interface APIConfiguration {
  apiKey: string;
  tenantOrgId?: string;
  debug?: boolean;
  protocol: string;
  host: string;
  apiBaseUrl: string;
  basePath: string;
  requestTimeout: number;
  xApiClient: string;
  additionalHeaders?: any;
  httpHeaders?: any;
}

export type UrlOptions = {
  url: string;
  body?: any;
  path_params: any[];
  query_params: any[];
};

export type Pagination<T, J = {}> = J & {
  totalCount: number;
  items: Array<ApiResource<T>>;
};

interface ResponseSuccessData<T> {
  result: T;
  messages?: Array<{
    id: string;
    date: string;
    interface: string;
  }>;
}

interface ResponseErrorData {
  code: number;
  message: string;
  developerMessage: string;
}

export interface ResponseEnvelope<T> {
  requestId: string;
  status: 'SUCCESS' | 'ERROR';
  data: ResponseSuccessData<T> | ResponseErrorData;
}

export interface ResourceId {
  id: string;
}

export type ApiResource<T> = T & {
  id: string;
  name?: string;
  description?: string;
  createdAt?: string;
  customData?: string;
};

interface CustomDataT {
  customData?: string;
  createdAt?: string;
}

export type List<T, J = {}> = (
  limit?: number,
  offset?: number,
  sort?: string,
  filter?: any
) => Promise<Pagination<ApiResource<T>, J>>;

export type Create2<TParam, TResult> = (data: TParam) => Promise<ApiResource<TResult>>;
export type Create<T> = (data: T) => Promise<ApiResource<T>>;
export type OptionalCreate<T> = (data?: T) => Promise<ApiResource<T>>;
export type Details<T> = () => Promise<ApiResource<T>>;
export type Delete<T> = () => Promise<T>;
export type CustomData = () => Promise<CustomDataT>;

export interface HttpClient {
  get<T>(configuration: APIConfiguration, url: string, fetchMethod?: any): Promise<T>;
  post<T, J>(configuration: APIConfiguration, url: string, object?: J, fetchMethod?: any): Promise<T>;
  put<T, J>(configuration: APIConfiguration, url: string, object?: J, fetchMethod?: any): Promise<T>;
  delete_<T>(configuration: APIConfiguration, url: string, fetchMethod?: any): Promise<T>;
}

// export interface GeocachingDetails {
//   createdAt: string;
//   modifiedAt: string;
// }

export interface DeleteResult extends ResourceId {}
