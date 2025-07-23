import interceptor from "@/services/token";

export async function getUser() {
  try {
    const res = await interceptor.get(`/user`);
    return res;
  } catch (_err) {
    return null;
  }
}
