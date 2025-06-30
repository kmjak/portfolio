import Link from "next/link";
import { JSX } from "react";
import { FaGithub } from "react-icons/fa";

interface ProjectGithubLinkProps {
  githubUrl?: string;
}

/**
 * @description プロジェクトのGitHubリンクを表示するコンポーネント
 *
 * @param {ProjectGithubLinkProps} props - GitHubリンクを表示するためのプロパティ
 * @returns {JSX.Element} - GitHubリンクコンポーネント
 */
export default function ProjectGithubLink({ githubUrl }: ProjectGithubLinkProps): JSX.Element {
  return (
    <>
      {githubUrl && (
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-sm rounded-md transition-all duration-200 border border-gray-700 hover:border-gray-600"
        >
          <FaGithub className="text-xl" />
          GitHub
        </Link>
      )}
    </>
  );
}
