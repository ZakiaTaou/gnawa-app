import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export const useArtistById = (id) => {
  return useQuery({
    queryKey: ["artist", id],
    queryFn: () => api.get(`/artists/${id}`).then((res) => res.data),
    enabled: !!id,
  });
};