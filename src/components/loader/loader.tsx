"use client";

import { useLoader } from "@/contexts/loader";
import { Portal } from "./styles";

export default function GlobalLoader() {
  const { loading } = useLoader();

  if (!loading) return null;

  return <Portal />;
}
