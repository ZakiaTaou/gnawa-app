import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export const useArtists = () => {
  return useQuery({
    queryKey: ["artists"],
    queryFn: () => api.get("/artists").then((res) => res.data),
  });
};