import { PageSubTitle, PageTitle, Text } from "@/components/ui";
import { ProjectCard } from "@/components/project";
import { projects } from "@/config/project";
import { JSX } from "react";

/**
 * @description プロジェクトページのコンポーネント
 *
 * @returns JSX.Element
 */
export default function Projects(): JSX.Element {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="h-full mx-auto px-4 mt-6 md:mt-12">
      <div className="text-center mb-12">
        <PageTitle>Projects</PageTitle>
        <Text className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          これまでに開発したプロジェクトの一覧です。Webアプリケーションからモバイルアプリまで、様々な技術スタックを使用した開発実績をご紹介します。
        </Text>
      </div>

      {featuredProjects.length > 0 && (
        <section className="mb-16 max-w-7xl mx-auto">
          <PageSubTitle className="mb-6">注目プロジェクト</PageSubTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section className="mb-16 max-w-7xl mx-auto">
          <PageSubTitle className="mb-6">その他のプロジェクト</PageSubTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
