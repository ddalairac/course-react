import FetchResult from '@/data/classes/FetchResult';
import { iSession } from '@/data/types/iSession';
import ErrorHandler from '@/data/services/static/ErrorHandler';
import RestHandler from '@/data/services/static/RestHandler';

// extends Service
export default class SessionService {

  public async getSessionData(): Promise<FetchResult<iSession | null>> {
    // const udsURI = import.meta.env.VITE_UDS_URI;
    const udsURI = import.meta.env.VITE_PERCEPTYX_URL;
    const url = `${udsURI}/session`;
    let res: FetchResult<iSession | null>;
    try {
      res = await RestHandler.get<iSession>(url);
      if (res.ok && res.data) {
        // this.data = res.data
      }
    } catch (error) {
      // const apiDesc = SL.lang.translate('apiDescription.getSession')
      // ErrorHandler.api(error as FetchResult<null>, apiDesc);
      ErrorHandler.api(error as FetchResult<null>, 'session');
      res = error as FetchResult<null>;
      // } finally {
      //   this.isLoading = false;
    }
    console.log('res session', res)
    return res;
  }

}
