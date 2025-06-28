import { PageTitle, Text } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

/**
 * @description ホームページのコンポーネント
 *
 * @returns JSX.Element
 */
export default function Home() {
  return (
    <div className="h-full">
      <div className="w-full mx-auto px-4 mt-6 md:mt-12">
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <Image
              src="/face.png"
              alt="Maoto Okumuraの顔写真"
              width={300}
              height={300}
              className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-full select-none"
              draggable={false}
              priority
            />
          </div>
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center my-1">
            <Link
              href="/projects"
              className="px-8 py-4 bg-blue-700 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              プロジェクトを見る
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-gray-800 backdrop-blur-sm font-semibold rounded-lg border border-gray-700 shadow-sm hover:shadow-md hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
