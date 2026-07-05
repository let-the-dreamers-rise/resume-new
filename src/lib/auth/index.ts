import { NextRequest } from "next/server";

export interface User {
  id: string;
  email: string | null;
  name: string | null;
  avatarUrl: string | null;
}

export type AuthResult =
  | { ok: true; user: User }
  | { ok: false; response: Response };

export function requireAuth(_request: NextRequest): AuthResult {
  return {
    ok: true,
    user: {
      id: "anonymous",
      email: "guest@example.com",
      name: "Guest User",
      avatarUrl: null,
    },
  };
}
