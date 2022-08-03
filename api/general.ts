// Modules
import { NewBody } from "../types/general";
import { axiosInstance } from "../utils/axiosInstance";

export function getNewsApi (tab:number) {
  return axiosInstance.get<{ news:NewBody[] }>(`/api/news.php?tab=${tab}`)
}