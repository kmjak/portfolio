import Image from "next/image";
import { JSX } from "react";
import { Text } from "@/components/ui";

interface ProjectImageProps {
  title: string;
  imageUrl?: string;
}

/**
 * @description
 * プロジェクトの画像を表示するコンポーネント
 * 画像がない場合はプレースホルダーを表示
 *
 * @param {ProjectImageProps} props - ProjectImageを表示するためのプロパティ
 * @returns {JSX.Element} - プロジェクト画像コンポーネント
 */
export default function ProjectImage({ title, imageUrl }: ProjectImageProps): JSX.Element {
  return (
    <>
      {imageUrl ? (
        <div className="max-w-full rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            className="max-h-full object-contain rounded-lg group-hover:opacity-90 transition-opacity duration-300 p-4 bg-gray-800 border-2 border-gray-700 group-hover:border-gray-600"
            height={192}
            width={384}
            priority
          />
        </div>
      ) : (
        <div className="w-full max-w-96 aspect-[5/3] mx-auto bg-gray-800 rounded-lg mb-4 flex items-center justify-center border-2 border-gray-700 group-hover:border-gray-600">
          <Text className="text-gray-500">{title}</Text>
        </div>
      )}
    </>
  );
}
