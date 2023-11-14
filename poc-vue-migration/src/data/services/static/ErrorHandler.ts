import FetchResult from '@/data/classes/FetchResult';

export default class ErrorHandler {
  /* Do not display error: When the session expired, the View chunk
  can't be loaded. The reload will take the user to the login */
  public static api(res: FetchResult<null>, method: string = ''): void {



    if (res.status === 401) {
      window.location.reload();
    } else {
      console.error('ErrorHandler', res, method);
    }
  }

  // private parseByStatus(){
  //   let message = ''
  //   // Status messages
  //   switch (res.status) {
  //     case 500:
  //       message = SL.lang.translate('apiMessages.500');// Internal Server Error
  //       break;
  //     case 501:
  //       message = SL.lang.translate('apiMessages.501');// Not Implemented server error
  //       break;
  //     case 502:
  //       message = SL.lang.translate('apiMessages.502');// Bad gateway
  //       break;
  //     case 401:
  //       message = SL.lang.translate('apiMessages.401');// Authentication
  //       break;
  //   }
  //   const title = `${APIDescription}: ${res.status}`
  //   SL.nav.toastPush('danger', message, ,);
  // }
}
