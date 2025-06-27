import { Button, PageTitle, Text } from "@/components/ui";
import Link from "next/link";

/**
 * @description ホームページのコンポーネント
 *
 * @returns JSX.Element
 */
export default function Home() {
  return (
    <div className="h-fit">
      <div className="w-full mx-auto px-4 mt-28 md:mt-40">
        <div className="text-center">
          <div className="mb-4 md:mb-8 space-y-4">
            <PageTitle className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl font-bold">
              Maoto Okumura
            </PageTitle>
            <Text className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
              Engineer Portfolio
            </Text>
          </div>

          <div className="max-w-2xl mx-auto mb-8 md:mb-12">
            <Text className="text-gray-400 leading-relaxed">
              Next.jsを用いたWebアプリケーションの開発に取り組んでいます。モダンでセキュアな技術スタックを使用して、ユーザー体験を重視したWebサービスの構築を行っています。
            </Text>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 py-4 bg-blue-700 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
              <Link href="/projects">プロジェクトを見る</Link>
            </Button>
            <Button className="px-8 py-4 bg-gray-800 backdrop-blur-sm font-semibold rounded-lg border border-gray-700 shadow-sm hover:shadow-md hover:bg-gray-700 transition-all duration-200">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
