// Modules
import { useMutation, useQuery } from '@tanstack/react-query';

// Api
import { 
  getEventsApi, 
  getNewsApi, 
  getSubeventInformationApi, 
  submitRecommendationApi 
} from '../api/general';

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

  function useSubmitRecommendationMutation (onSuccessCallback: () => void) {
    return useMutation(submitRecommendationApi, {
      onSuccess: () => {
        alert("Se ha mandado tu correo correctamente");
        onSuccessCallback();
      },
      onError: () => {
        alert("Hubo un error enviando tu correo, inténtalo más tarde");
      }
    });
  }

  return {
    useGetNewsMutation,
    useGetEventsQuery,
    useGetSubeventInformationMutation,
    useSubmitRecommendationMutation
  }
  
}

