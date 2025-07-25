import axios, { AxiosError } from "axios";
import { Router } from "next/router";

interface UserDataType {
  email: string;
  password: string;
}

const baseURL = "/api";

export async function requestSignIn({ email, password }: UserDataType) {
  const data = { email, password };
  const config = {};

  try {
    return await axios.post(`${baseURL}/sign-in`, data, config);
  } catch (err) {
    const error = err as AxiosError;
    return { message: "An error has ocurred.", status: error?.status || 500 };
  }
}

export async function requestSignUp({ email, password }: UserDataType) {
  const data = { email, password };
  const config = {};

  try {
    const response = await axios.post("/", data, config);
    return response.data;
  } catch (err) {}
}

export async function logoutSession() {
  axios.post(`${baseURL}/logout`, {}, { withCredentials: true }).finally(() => {
    window.location.assign("/sign-in");
  });
}
