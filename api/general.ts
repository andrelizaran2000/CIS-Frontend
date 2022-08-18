// Axios
import { axiosInstance } from "../utils/axiosInstance";

// Types
import { NewData } from "../types/general";

export function getNewsApi (tab:number) {
  return axiosInstance.get<{ news:NewData[] }>(`/api/news.php?tab=${tab}`)
}