interface Frontmatter {
  title: string;
  pubDate: Date;
  description: string;
  icon: string;
}

interface BlogPost {
  frontmatter: Frontmatter;
  url: string;
}

export type { BlogPost, Frontmatter };
