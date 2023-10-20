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
  request<TResponse>(
    url: string,
    options: Options<Data> = { method: METHOD.GET },
    timeout = 5000,
  ): Promise<TResponse> {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.timeout = timeout;
      xhr.setRequestHeader('Content-Type', 'text/plain');

      xhr.onload = () => {
        resolve(xhr.response);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }

  get: HTTPMethod<Data> = (url, options = {}) => this.request(
    `${url}${queryStringify(options.data)}`,
    { ...options, method: METHOD.GET },
    options.timeout,
  );

  post: HTTPMethod<Data> = (url, options = {}) => this.request(
    url,
    { ...options, method: METHOD.POST },
    options.timeout,
  );

  put: HTTPMethod<Data> = (url, options = {}) => this.request(
    url,
    { ...options, method: METHOD.PUT },
    options.timeout,
  );

  delete: HTTPMethod<Data> = (url, options = {}) => this.request(
    url,
    { ...options, method: METHOD.DELETE },
    options.timeout,
  );
}
