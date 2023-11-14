import { 
  useAppSelector,
  useAppDispatch, 
} from '@/data/store/hooks';
import { useEffect } from 'react';
import { getThunksSessionData } from '@/data/store/slices/sessionThunks';


const SessionComp = () => {
  const { data, isLoading } = useAppSelector((state) => state.session);

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(getThunksSessionData())
  },[dispatch])


  // console.log('user_info', user_info)

  return (
    <>
    <pre>
    isLoading { isLoading ? 'true' : 'false' } <br/>
      { data?.user_info?.first_name || '$first_name' } <br/>
      { data?.user_info?.last_name || '$last_name' } 
    </pre>
    </>
  )
}

export default SessionComp;