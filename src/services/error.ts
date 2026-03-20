import axios, { AxiosError } from "axios";

export function handleRequestError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    const err = error as AxiosError<unknown>;

    console.error("API Error:", {
      status: err.response?.status,
      data: err.response?.data,
      url: err.config?.url,
    });
  } else if (error instanceof Error) {
    console.error("Generic Error:", error.message);
  } else {
    console.error("Unknown Error:", error);
  }

  throw error;
}
