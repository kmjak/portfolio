import { z } from "zod";

type FetchProps<T> = {
  schema: z.ZodType<T>;
  url: string;
  options?: RequestInit;
  skipCache?: boolean;
};

const cache = new Map<string, { data: any; timestamp: number }>();
// キャッシュの有効期限 (5分)
const CACHE_TTL = 1000 * 60 * 5;

/**
 * 共通のフェッチ関数 (キャッシュ機能付き)
 * @param {object} props - 引数オブジェクト
 * @param {z.ZodType<T>} props.schema - Zodスキーマ
 * @param {string} props.url - APIエンドポイントのURL
 * @param {RequestInit} [props.options] - フェッチオプション
 * @param {boolean} [props.skipCache] - キャッシュをスキップするか
 * @returns {Promise<T>} - パースされたデータ
 * @throws {Error} - フェッチエラーまたはパースエラー
 */
export const customFetch = async <T>({
  schema,
  url,
  options = {},
  skipCache = false,
}: FetchProps<T>): Promise<T> => {
  const method = options.method?.toUpperCase() || "GET";
  const cached = method === "GET" && !skipCache ? cache.get(url) : null;

  if (cached) {
    const now = Date.now();
    if (now - cached.timestamp < CACHE_TTL) {
      return cached.data as T;
    }
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Status code: ${response.status}`);
    }

    const result = await response.json();
    const parsedData = schema.parse(result);

    if (method === "GET") {
      cache.set(url, {
        data: parsedData,
        timestamp: Date.now(),
      });
    }

    return parsedData;
  } catch (error) {
    if (cached) {
      return cached.data as T;
    }

    throw error;
  }
};
