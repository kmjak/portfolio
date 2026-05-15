import { getBackendUrl } from "@/shared/config/api";
import { customFetch } from "@/shared/utils/fetch";
import { backgroundsSchema, type Backgrounds } from "../types/Background";

export async function fetchBackgrounds(): Promise<Backgrounds> {
  try {
    const backendUrl = getBackendUrl();
    const data = await customFetch<Backgrounds>({
      schema: backgroundsSchema,
      url: `${backendUrl}/backgrounds`,
    });

    return data;
  } catch {
    return Promise.resolve([]);
  }
}
