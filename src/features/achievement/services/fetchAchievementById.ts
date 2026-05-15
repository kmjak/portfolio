import { getBackendUrl } from "@/shared/config/api";
import { customFetch } from "@/shared/utils/fetch";
import { achievementSchema, type Achievement } from "../types/Achievement";

export async function fetchAchievementById(id: string): Promise<Achievement | null> {
  try {
    const backendUrl = getBackendUrl();
    const data = await customFetch<Achievement>({
      schema: achievementSchema,
      url: `${backendUrl}/achievements/${id}`,
    });

    return data;
  } catch {
    return null;
  }
}
