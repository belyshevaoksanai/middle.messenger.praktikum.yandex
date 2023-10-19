enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type Options = {
  method: string;
  data?: any;
  timeout?: number;
};

type OptionsWithoutMethod = Omit<Options, 'method'>;

function queryStringify(data: Record<string, any>) {
  if (!data) {
    return '';
  }

  return `?${Object
    .keys(data)
    .map((key) => `${key}=${data[key].toString()}`)
    .join('&')}`;
}

class HTTPTransport {
  request<TResponse>(
    url: string,
    options: Options = { method: METHOD.GET },
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

  get<TResponse>(url: string, options: OptionsWithoutMethod = {}): Promise<TResponse> {
    return this.request(
      `${url}${queryStringify(options.data)}`,
      { ...options, method: METHOD.GET },
      options.timeout,
    );
  }

  post<TResponse>(url: string, options: OptionsWithoutMethod = {}): Promise<TResponse> {
    return this.request(
      url,
      { ...options, method: METHOD.POST },
      options.timeout,
    );
  }

  put<TResponse>(url: string, options: OptionsWithoutMethod = {}): Promise<TResponse> {
    return this.request(
      url,
      { ...options, method: METHOD.PUT },
      options.timeout,
    );
  }

  delete<TResponse>(url: string, options: OptionsWithoutMethod = {}): Promise<TResponse> {
    return this.request(
      url,
      { ...options, method: METHOD.DELETE },
      options.timeout,
    );
  }
}
