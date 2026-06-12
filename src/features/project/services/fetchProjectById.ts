import { getBackendUrl } from "@/shared/config/api";
import { customFetch } from "@/shared/utils/fetch";
import { projectDetailedSchema, type ProjectDetailed } from "../types/Project";

export async function fetchProjectById(id: string): Promise<ProjectDetailed | null> {
  try {
    const backendUrl = getBackendUrl();
    const data = await customFetch<ProjectDetailed>({
      schema: projectDetailedSchema,
      url: `${backendUrl}/projects/${id}`,
    });

    return data;
  } catch {
    return null;
  }
}
