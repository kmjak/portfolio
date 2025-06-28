"use client";

import { PageTitle, Text } from "@/components/ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { JSX } from "react";
import { BiError } from "react-icons/bi";

interface ErrorProps {
  error: Error & { digest?: string };
}

/**
 * @description エラー発生時のコンポーネント
 *
 * @param {ErrorProps} props - エラー情報を含むプロパティ
 * @returns JSX.Element
 */
export default function Error({ error }: ErrorProps): JSX.Element {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="mt-12 md:mt-32 h-full mx-auto px-4">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <BiError className="text-8xl text-red-500" />
        </div>

        <PageTitle className="text-3xl md:text-4xl lg:text-5xl mb-6">
          エラーが発生しました
        </PageTitle>

        <Text className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
          予期しないエラーが発生しました。
        </Text>

        {process.env.NODE_ENV === "development" && (
          <div className="mb-8 p-4 bg-gray-800 border border-gray-700 rounded-lg text-left max-w-2xl mx-auto">
            <Text className="text-sm text-red-400 font-mono break-words">{error.message}</Text>
            {error.digest && (
              <Text className="text-xs text-gray-500 mt-2">Error ID: {error.digest}</Text>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-gray-800 font-semibold rounded-lg border border-gray-700 shadow-sm hover:shadow-md hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            ホームに戻る
          </Link>
          <button
            onClick={handleGoBack}
            className="px-8 py-4 bg-gray-800 font-semibold rounded-lg border border-gray-700 shadow-sm hover:shadow-md hover:bg-gray-700 transition focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            前のページに戻る
          </button>
        </div>
      </div>
    </div>
  );
}
