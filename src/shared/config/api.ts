const getBackendUrl = (): string => {
  const url: string | undefined = import.meta.env.BACKEND_URL;

  if (!url) {
    throw new Error("環境変数のBACKEND_URLが設定されていません。");
  }

  const regex = /^https?:\/\/.+/;
  if (!regex.test(url)) {
    throw new Error("BACKEND_URLが無効なURL形式です。");
  }

  return url;
};

export { getBackendUrl };
