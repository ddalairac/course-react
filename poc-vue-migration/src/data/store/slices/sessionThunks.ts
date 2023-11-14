import * as slices from './'
import SL from '@/data/services/ServiceLocator';


export const getThunksSessionData = () => {
  return async (dispatch) => {
    dispatch(slices.setSessionIsloading(true));
    const res = await SL.SessionService.getSessionData();
    if(res.ok) dispatch(slices.setSessionData(res.data));
    dispatch(slices.setSessionIsloading(false));
  }
}