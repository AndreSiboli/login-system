import { configToken } from "@/config/token";
import { readCookie } from "@/utils/cookies";
import { verifyJWT } from "@/utils/jwt";
import {  NextResponse } from "next/server";

const mockUser = {
  id: "HSI23JS265K544",
  email: "email@test.com",
  password: "Test123@",
  username: "UserTest",
};

export async function GET() {
  const token = await readCookie("auth_token");

  if (!token) {
    return NextResponse.json({ message: "No credentials." }, { status: 401 });
  }

  const verify = verifyJWT(token, configToken.JWT_SECRET);

  if (!verify) {
    return NextResponse.json({ message: "No credentials." }, { status: 401 });
  }

  return NextResponse.json(
    {
      user: {
        id: mockUser.id,
        username: mockUser.username,
        email: mockUser.email,
      },
    },
    { status: 200 }
  );
}
