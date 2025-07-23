import { SignJWT, jwtVerify, decodeJwt as jwtDecoded } from "jose";

interface SignUpType {
  email: string;
  username: string;
}

export async function createJWT(
  payload: SignUpType,
  secret: string,
  expiredIn: number
) {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + expiredIn;

  return new SignJWT({ ...payload })
    .setProtectedHeader({
      alg: "HS256",
      typ: "JWT",
    })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(secret));
}

export function decodeJWT(jwtToken: string) {
  return jwtDecoded(jwtToken);
}

export async function verifyJWT(jwtToken: string, secret: string) {
  try {
    const { payload } = await jwtVerify(
      jwtToken,
      new TextEncoder().encode(secret)
    );
    return payload;
  } catch (_err) {
    return null;
  }
}
