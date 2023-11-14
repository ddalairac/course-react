export default class FetchResult<T> {
  ok: boolean;
  status: number;
  message: string;
  data: T;

  constructor(ok: boolean, status: number, message:string, data: T = null) {
    this.ok = ok;
    this.status = status;
    this.message = message;
    this.data = data;
  }
}
