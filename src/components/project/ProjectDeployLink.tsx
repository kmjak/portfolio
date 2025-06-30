import Link from "next/link";
import { JSX } from "react";
import { GrDeploy } from "react-icons/gr";

interface ProjectDeployLinkProps {
  liveUrl?: string;
}

/**
 * @description プロジェクトのデプロイリンクを表示するコンポーネント
 *
 * @param {ProjectDeployLinkProps} props - デプロイリンクを表示するためのプロパティ
 * @returns {JSX.Element} - デプロイリンクコンポーネント
 */
export default function ProjectDeployLink({ liveUrl }: ProjectDeployLinkProps): JSX.Element {
  return (
    <>
      {liveUrl && (
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 bg-blue-700 hover:bg-blue-600 text-white text-sm rounded-md transition-all duration-200"
        >
          <GrDeploy className="text-base" />
          デモを見る
        </Link>
      )}
    </>
  );
}
