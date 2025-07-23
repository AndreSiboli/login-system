import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export async function createCookie(
  name: string,
  token: string,
  options?: Partial<ResponseCookie>
) {
  (await cookies()).set(name, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
    path: "/",
    ...options,
  });
}

export async function readCookie(name: string) {
  return (await cookies()).get(name)?.value;
}

export async function deleteCookie(name: string) {
  (await cookies()).delete(name);
}
