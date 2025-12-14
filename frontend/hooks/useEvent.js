import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export const useEvent = () => {
  return useQuery({
    queryKey: ["event"],
    queryFn: () => api.get("/event").then((res) => res.data),
  });
};