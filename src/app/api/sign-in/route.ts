import { createAndStoreTokens } from "@/utils/managerTokens";
import { NextRequest, NextResponse } from "next/server";

const mockUser = {
  id: "HSI23JS265K544",
  email: "email@test.com",
  password: "Test123@",
  username: "UserTest",
};

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  //Db logic...

  if (email !== mockUser.email || password !== mockUser.password)
    return NextResponse.json(
      { message: "The email or password is incorrect!" },
      { status: 401 }
    );

  await createAndStoreTokens({
    id: mockUser.id,
    email: mockUser.email,
    username: mockUser.username,
  });

  return NextResponse.json({ message: "Sucess" }, { status: 200 });
}
