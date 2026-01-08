import type { Contact } from "../types";

const contacts: Contact[] = [
  {
    value: "Email",
    icon: "mdi:email-edit-outline",
    link: "mailto:okumura.maoto.contact@gmail.com",
  },
  {
    value: "GitHub",
    icon: "mdi:github",
    link: "https://github.com/kmjak",
  },
] as const;

export { contacts };
