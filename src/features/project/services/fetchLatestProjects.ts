import { getBackendUrl } from "@/shared/config/api";
import { customFetch } from "@/shared/utils/fetch";
import { projectsSchema, type Projects } from "../types/Project";

export async function fetchLatestProjects(limit: number = 3): Promise<Projects> {
  try {
    const backendUrl = getBackendUrl();
    const data = await customFetch<Projects>({
      schema: projectsSchema,
      url: `${backendUrl}/projects`,
    });

    return data.slice(0, limit);
  } catch {
    return [];
  }
}
