import { Contact } from "@/types/contact";
import Link from "next/link";
import { JSX } from "react";
import { PageSubTitle, Text } from "@/components/ui";

interface ContactCardProps {
  contact: Contact;
}

/**
 * @description ContactCardコンポーネントは、連絡先情報を表示するカードです。
 *
 * @param {ContactCardProps} props - ContactCardコンポーネントのプロパティ
 * @returns {JSX.Element} - ContactCardコンポーネント
 */
export default function ContactCard({ contact }: ContactCardProps): JSX.Element {
  return (
    <Link
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-gray-900 backdrop-blur-sm border-2 border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-blue-500 transition-all duration-300 group"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-1">
          <PageSubTitle className="text-xl font-semibold mb-2 text-blue-400">
            {contact.name}
          </PageSubTitle>
          <Text className="text-gray-300 mb-2 font-mono text-sm break-all">{contact.value}</Text>
          <Text className="text-gray-400 text-sm">{contact.description}</Text>
        </div>
      </div>
    </Link>
  );
}
