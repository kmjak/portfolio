import { getBackendUrl } from "@/shared/config/api";
import { customFetch } from "@/shared/utils/fetch";
import { skillsSchema, type Skills } from "../types/Skill";

export async function fetchSkills(): Promise<Skills> {
  try {
    const backendUrl = getBackendUrl();
    const data = await customFetch<Skills>({
      schema: skillsSchema,
      url: `${backendUrl}/projects/skills`,
    });

    return data;
  } catch {
    return [];
  }
}
