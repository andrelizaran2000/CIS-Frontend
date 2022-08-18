// Modules
import { useMutation } from '@tanstack/react-query';

// Api
import { getNewsApi } from '../api/general';

export default function useAllRequests () {

  function useGetNewsMutation () { 
    return useMutation (getNewsApi);
  }

  return {
    useGetNewsMutation
  }
  
}

