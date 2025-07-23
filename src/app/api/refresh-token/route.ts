import { configToken } from "@/config/token";
import { verifyJWT } from "@/utils/jwt";
import { createAndStoreTokens } from "@/utils/managerTokens";
import { NextRequest, NextResponse } from "next/server";

//Later, add refresh to db
export async function GET(req: NextRequest) {
  const refreshToken = req.cookies.get("auth_refresh_token")?.value;

  if (!refreshToken) return NextResponse.redirect(new URL("/sign-in", req.url));

  const payload = await verifyJWT(refreshToken, configToken.REFRESH_JWT_SECRET);

  if (!payload) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  const { username, email, id } = payload;

  if (
    typeof id !== "string" ||
    typeof email !== "string" ||
    typeof username !== "string"
  ) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  await createAndStoreTokens({ id, username, email } as {
    username: string;
    email: string;
    id: string;
  });

  return NextResponse.redirect(
    new URL(`${req.nextUrl.searchParams.get("redirect") || "/"}`, req.url)
  );
}
