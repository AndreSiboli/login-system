import { NextRequest, NextResponse } from "next/server";
import { verifyJWT } from "./utils/jwt";
import { configToken } from "./config/token";

function isAuthRoute(pathname: string) {
  const authRoutes = ["/sign-in", "/sign-up"];
  return authRoutes.some((route) => pathname.startsWith(route));
}

function isPrivateRoute(pathname: string) {
  const privateRoutes = ["/dashboard", "/profile"];
  return privateRoutes.some((route) => pathname.startsWith(route));
}

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("auth_token")?.value;
  const pathname = req.nextUrl.pathname;
  const verifiedToken = token
    ? await verifyJWT(token, configToken.JWT_SECRET)
    : null;
  const isPrivate = isPrivateRoute(pathname);
  const isAuth = isAuthRoute(pathname);

  if (!verifiedToken && isPrivate) {
    return NextResponse.redirect(
      new URL(`/api/refresh-token?redirect=${pathname}`, req.url)
    );
  }

  if (verifiedToken && isAuth) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/sign-in", "/sign-up"],
};
