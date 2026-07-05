import { getResolvedLocale } from "@/i18n";

/**
 * Fetch wrapper that adds locale headers.
 */
export async function request(
  input: RequestInfo | URL,
  init: RequestInit = {},
): Promise<Response> {
  return fetch(input, {
    ...init,
    headers: {
      ...init.headers,
      "x-app-locale": getResolvedLocale(),
    },
  });
}
