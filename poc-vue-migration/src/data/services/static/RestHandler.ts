import FetchResult from '@/data/classes/FetchResult';


export default class RestHandler {
  public static calls = 0

  public static async get<R>(url: string): Promise<FetchResult<R>> {
    return this._executeCall<null, R>('GET', url);
  }

  public static async post<D, R>(url: string, dto: D): Promise<FetchResult<R>> {
    return this._executeCall<D, R>('POST', url, dto);
  }

  public static async put<D, R>(url: string, dto: D): Promise<FetchResult<R>> {
    return this._executeCall<D, R>('PUT', url, dto);
  }

  public static async patch<D, R>(url: string, dto: D): Promise<FetchResult<R>>{
    return this._executeCall<D, R>('PATCH', url, dto);
  }

  public static async delete<R>(url: string): Promise<FetchResult<R>> {
    return this._executeCall<null, R>('DELETE', url);
  }

  private static async _executeCall<D, R>(method: string, url: string, dto?: D)
    : Promise<FetchResult<R>> {
    RestHandler.calls += 1;
    return new Promise<FetchResult<R>>((resolve, reject) => {
      let ok: boolean;
      let status: number;

      const req: RequestInit = {
          method: method,
          credentials: 'include', // to include UDS cookie
        };

      let dtoString: string;
      if (dto) {
        if (typeof dto !== 'string') {
          dtoString = JSON.stringify(dto);
        } else {
          dtoString = dto;
        }
        req.body = dtoString;
      }

      fetch(url, req)
        .then(async (response: Response) => {
          ok = response.ok;
          status = response.status;
          const data: Promise<R> = response.json();
          return data;
        })
        .then((data = null as R) => {
          let res: FetchResult<R>;
          if (ok || (status >= 200 && status < 300)) {
            res = new FetchResult<R>(ok, status, 'ok', data);
            resolve(res);
          } else {
            res = new FetchResult<R>(
              ok,
              status,
              `Error in ${method} to ${url}`,
              data
            );
            reject(res);
          }
        })
        .catch((error) => {
          let res: FetchResult<R | null>;
          if (ok || (status >= 200 && status < 300)) {
            /** This error occurs because the API response isn't a valid JSON.
             * So response.json() gives an error */
            res = new FetchResult<R>(
              ok,
              status,
              `${method} response it's not a valid json.`,
              null
            );
            console.warn(res.message);
            resolve(res as FetchResult<R>);
          } else {
            res = new FetchResult<null>(ok, status, error.message);
            reject(res);
          }
        })
    });
  }
}
