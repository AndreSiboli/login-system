import { deleteCookie } from "@/utils/cookies";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await deleteCookie("auth_token");
  await deleteCookie("auth_refresh_token");
  return NextResponse.redirect(new URL("/sign-in", req.url));
}
