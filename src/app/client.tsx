"use client";

import GlobalLoader from "@/components/loader/loader";
import { useLoader } from "@/contexts/loader";
import { Main } from "./styles";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading } = useLoader();

  return (
    <>
      <GlobalLoader />
      <Main $hidden={loading}>{children}</Main>
    </>
  );
}
