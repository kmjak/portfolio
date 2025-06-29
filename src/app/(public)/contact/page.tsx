import { ContactCard } from "@/components/contact";
import { PageTitle, Text } from "@/components/ui";
import { contacts } from "@/config/contact";
import { Contact } from "@/types/contact";
import { JSX } from "react";

/**
 * @description 連絡先情報を一覧で表示するページです。
 *
 * @returns {JSX.Element} - ContactPageコンポーネント
 */
export default function ContactPage(): JSX.Element {
  return (
    <div className="min-h-screen w-full mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <PageTitle>Contact</PageTitle>
          <Text className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            GitHubやAtCoderなどの情報です。
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contacts.map((contact) => (
            <ContactCard key={contact.name} contact={contact} />
          ))}
        </div>
      </div>
    </div>
  );
}
