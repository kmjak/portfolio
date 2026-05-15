import { getBackendUrl } from "@/shared/config/api";
import { customFetch } from "@/shared/utils/fetch";
import { achievementsSchema, type Achievements } from "../types/Achievement";

export async function fetchAchievements(): Promise<Achievements> {
  try {
    const backendUrl = getBackendUrl();
    const data = await customFetch<Achievements>({
      schema: achievementsSchema,
      url: `${backendUrl}/achievements`,
    });

    return data;
  } catch {
    return Promise.resolve([]);
  }
}
