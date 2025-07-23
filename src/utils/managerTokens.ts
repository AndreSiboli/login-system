import { configToken } from "@/config/token";
import { createCookie } from "./cookies";
import { createJWT } from "./jwt";

export async function createAndStoreTokens(payload: {
  id: string;
  email: string;
  username: string;
}) {
  const newToken = await createJWT(
    { ...payload },
    configToken.JWT_SECRET,
    configToken.JWT_EXPIRES_IN
  );
  const newRefreshToken = await createJWT(
    { ...payload },
    configToken.REFRESH_JWT_SECRET,
    configToken.REFRESH_JWT_EXPIRES_IN
  );

  await createCookie("auth_token", newToken, {
    maxAge: configToken.JWT_EXPIRES_IN,
  });
  await createCookie("auth_refresh_token", newRefreshToken, {
    maxAge: configToken.REFRESH_JWT_EXPIRES_IN,
  });
}
