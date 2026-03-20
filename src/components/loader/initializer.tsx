"use client";

import { useLoader } from "@/contexts/loader";
import { injectLoader } from "@/services/interceptor";
import { useEffect } from "react";

export default function LoaderInitializer() {
  const { show, hide } = useLoader();

  useEffect(() => {
    injectLoader({ show, hide });
  }, []);

  return null;
}
