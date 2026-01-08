const navigationRoutes: Record<
  "home" | "about" | "achievements" | "projects" | "blog" | "skills" | "contact",
  { path: string; title: string }
> = {
  home: {
    path: "/",
    title: "Home",
  },
  about: {
    path: "/about/",
    title: "About",
  },
  achievements: {
    path: "/achievements/",
    title: "実績",
  },
  projects: {
    path: "/projects/",
    title: "プロジェクト",
  },
  blog: {
    path: "/blog/",
    title: "ブログ",
  },
  skills: {
    path: "/skills/",
    title: "スキル",
  },
  contact: {
    path: "/contact/",
    title: "Contact",
  },
} as const;

export { navigationRoutes };
