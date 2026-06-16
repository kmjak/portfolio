import { getBackendUrl } from "@/shared/config/api";
import { customFetch } from "@/shared/utils/fetch";
import { backgroundSchema, type Background } from "../types/Background";

export async function fetchBackgroundById(id: string): Promise<Background | null> {
  try {
    const backendUrl = getBackendUrl();
    const data = await customFetch<Background>({
      schema: backgroundSchema,
      url: `${backendUrl}/backgrounds/${id}`,
    });

    return data;
  } catch (error) {
    console.error(`Failed to fetch background by id ${id}:`, error);
    return null;
  }
}
