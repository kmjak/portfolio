"use client";

import Link from "next/link";
import { PageTitle, Text } from "@/components/ui";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="mt-12 md:mt-32 h-full mx-auto px-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-8xl md:text-9xl font-bold mb-4 select-none">404</div>
        </div>

        <PageTitle className="text-3xl md:text-4xl lg:text-5xl mb-6">
          ページが見つかりません
        </PageTitle>

        <Text className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
          お探しのページは存在しないか、移動または削除された可能性があります。
          <br className="hidden sm:block" />
          URLをご確認いただくか、ホームページからお探しください。
        </Text>

        <div className="flex flex-col sm:flex-row gap-4 justify-center my-1">
          <Link
            href="/"
            className="px-8 py-4 bg-gray-800 backdrop-blur-sm font-semibold rounded-lg border border-gray-700 shadow-sm hover:shadow-md hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            ホームに戻る
          </Link>
          <button
            onClick={handleGoBack}
            className="px-8 py-4  bg-gray-800 backdrop-blur-sm font-semibold rounded-lg border border-gray-700 shadow-sm hover:shadow-md hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            前のページに戻る
          </button>
        </div>
      </div>
    </div>
  );
}
