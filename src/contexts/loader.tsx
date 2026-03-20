"use client";

import { createContext, useContext, useRef, useState } from "react";

interface LoaderContextType {
  loading: boolean;
  show: () => void;
  hide: () => void;
}

const LoaderContext = createContext<LoaderContextType | null>(null);

const MIN_DURATION = 1000; // 1 segundo

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [requests, setRequests] = useState(0);
  const startTimeRef = useRef<number | null>(null);

  function show() {
    setRequests((prev) => {
      if (prev === 0) {
        startTimeRef.current = Date.now();
      }
      return prev + 1;
    });
  }

  function hide() {
    setRequests((prev) => {
      const next = Math.max(prev - 1, 0);

      if (next === 0 && startTimeRef.current) {
        const elapsed = Date.now() - startTimeRef.current;

        if (elapsed < MIN_DURATION) {
          setTimeout(() => {
            startTimeRef.current = null;
            setRequests(0);
          }, MIN_DURATION - elapsed);

          return prev;
        }

        startTimeRef.current = null;
      }

      return next;
    });
  }

  return (
    <LoaderContext.Provider
      value={{
        loading: requests > 0,
        show,
        hide,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const context = useContext(LoaderContext);
  if (!context) throw new Error("useLoader must be used within LoaderProvider");
  return context;
}
