import { Project } from "@/types/project";
import { PageSubTitle, Text } from "@/components/ui";
import ProjectImage from "./ProjectImage";
import ProjectGithubLink from "./ProjectGithubLink";
import ProjectDeployLink from "./ProjectDeployLink";

interface ProjectCardProps {
  project: Project;
}

/**
 * @description プロジェクトカードコンポーネント
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-gray-900 backdrop-blur-sm border-2 border-gray-800 rounded-lg p-6 hover:border-gray-700 hover:bg-gray-900 transition-all duration-300 hover:scale-[102%] group">
      <ProjectImage title={project.title} imageUrl={project.imageUrl} />

      <div className="flex items-center justify-between mb-3">
        <PageSubTitle className="font-bold group-hover:text-blue-400 transition-colors">
          {project.title}
        </PageSubTitle>
      </div>

      <Text className="text-gray-400 mb-4 leading-relaxed">{project.description}</Text>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-auto">
        <ProjectGithubLink githubUrl={project.githubUrl} />
        <ProjectDeployLink liveUrl={project.liveUrl} />
      </div>
    </div>
  );
}
