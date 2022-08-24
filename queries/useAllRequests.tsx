// Modules
import { useMutation, useQuery } from '@tanstack/react-query';

// Api
import { getEventsApi, getNewsApi, getSubeventInformationApi } from '../api/general';

export default function useAllRequests () {

  function useGetNewsMutation () { 
    return useMutation (getNewsApi);
  }

  function useGetEventsQuery () {
    return useQuery(['get-events'], getEventsApi);
  }

  function useGetSubeventInformationMutation () {
    return useMutation(getSubeventInformationApi);
  }

  return {
    useGetNewsMutation,
    useGetEventsQuery,
    useGetSubeventInformationMutation
  }
  
}

