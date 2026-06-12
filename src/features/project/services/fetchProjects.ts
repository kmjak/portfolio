import { getBackendUrl } from "@/shared/config/api";
import { customFetch } from "@/shared/utils/fetch";
import { projectsSchema, type Projects } from "../types/Project";

export async function fetchProjects(): Promise<Projects> {
  try {
    const backendUrl = getBackendUrl();
    const data = await customFetch<Projects>({
      schema: projectsSchema,
      url: `${backendUrl}/projects`,
    });

    return data;
  } catch {
    return Promise.resolve([]);
  }
}
