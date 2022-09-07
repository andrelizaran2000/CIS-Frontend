// Modules
import { useMutation, useQuery } from '@tanstack/react-query';

// Api
import { 
  getEventsApi, 
  getNewsApi, 
  getSchoolsAndCareersApi, 
  getSubeventInformationApi, 
  submitRecommendationApi, 
  submitRegisterToSubevent
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

  function useSubmitRegisterSubeventMutation (onSuccessCallback: () => void) {
    return useMutation(submitRegisterToSubevent, {
      onSuccess: () => {
        alert("Te has registrado al evento, te llegará más información al correo entregado")
        onSuccessCallback()
      },
      onError: () => {
        alert("Hubo un error registrándote al evento, inténtalo más tarde");
      }
    })
  }

  function useGetSchoolsAndCareersQuery () {
    return useQuery(['get-schools-and-careers'], getSchoolsAndCareersApi);
  }

  return {
    useGetNewsMutation,
    useGetEventsQuery,
    useGetSubeventInformationMutation,
    useSubmitRecommendationMutation,
    useSubmitRegisterSubeventMutation,
    useGetSchoolsAndCareersQuery
  }
  
}

