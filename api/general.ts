// Axios
import { axiosInstance } from "../utils/axiosInstance";

// Types
import { 
  EventDataRequest, 
  NewData, 
  RecommendationData, 
  RegisterSubeventData, 
  SubeventData 
} from "../types/general";

export function getNewsApi (tab:number) {
  return axiosInstance.get<{news:NewData[], areThereMoreNews:boolean}>(`/api/news.php?tab=${tab}`)
}

export function getEventsApi () {
  return axiosInstance.get<EventDataRequest>('/api/event.php');
}

export function getSubeventInformationApi (subeventId:number) {
  return axiosInstance.get<SubeventData>(`/api/subevent.php?id=${subeventId}`);
}

export function submitRecommendationApi (data:RecommendationData) {
  return axiosInstance.post('/api/contact-us.php', data);
}

export function submitRegisterToSubevent (data:RegisterSubeventData) {
  return axiosInstance.post(`/api/assistant.php?idSubevent=${data.id}`, data)
}