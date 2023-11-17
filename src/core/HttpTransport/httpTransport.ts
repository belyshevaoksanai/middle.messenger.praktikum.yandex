enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type Options<Data> = {
  method: string;
  data?: Data;
  timeout?: number;
  withCredentials?: boolean;
  responseType?: XMLHttpRequest['responseType'];
};

type OptionsWithoutMethod<Data> = Omit<Options<Data>, 'method'>;

type HTTPMethod<Data> = <TResponse>(
  url: string,
  options?: OptionsWithoutMethod<Data>,
) => Promise<TResponse>;

type DataType = Record<string, any>;

function queryStringify(data?: DataType) {
  if (!data) {
    return '';
  }

  return `?${Object
    .keys(data)
    .map((key) => `${key}=${data[key].toString()}`)
    .join('&')}`;
}

class HTTPTransport<Data extends DataType> {
  static API_URL = 'https://ya-praktikum.tech/api/v2';
  protected endpoint: string = '';

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  request<TResponse>(
    url: string,
    options: Options<Data> = { method: METHOD.GET },
  ): Promise<TResponse> {
    const {
      method, data, timeout = 5000, withCredentials = true, responseType = 'json',
    } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, this.endpoint + url);

      xhr.onload = () => {
        resolve(xhr.response);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      xhr.withCredentials = withCredentials;
      xhr.timeout = timeout;
      xhr.responseType = responseType;

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
      }
    });
  }

  get: HTTPMethod<Data> = (url, options = {}) => this.request(
    `${url}${queryStringify(options.data)}`,
    { ...options, method: METHOD.GET },
  );

  post: HTTPMethod<Data> = (url, options = {}) => this.request(
    url,
    { ...options, method: METHOD.POST },
  );

  patch: HTTPMethod<Data> = (url, options = {}) => this.request(
    url,
    { ...options, method: METHOD.PATCH },
  );

  put: HTTPMethod<Data> = (url, options = {}) => this.request(
    url,
    { ...options, method: METHOD.PUT },
  );

  delete: HTTPMethod<Data> = (url, options = {}) => this.request(
    url,
    { ...options, method: METHOD.DELETE },
  );
}

export default HTTPTransport;
