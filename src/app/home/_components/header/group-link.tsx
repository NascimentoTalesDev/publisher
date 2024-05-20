"use client"

import { usePathname } from "next/navigation";
import { HeaderHomeItems, HeaderHomeLink } from "./components";
import { checkPathname } from "@/components/lib/check-pathname";

const GroupLink = () => {
    const pathname = usePathname()

  return (
    <HeaderHomeItems>
      <HeaderHomeLink active={pathname === "/home"} href="/home">Dashboard</HeaderHomeLink>
      <HeaderHomeLink active={checkPathname(pathname, "/home/search")} href="/home/search">Buscar</HeaderHomeLink>
      <HeaderHomeLink active={checkPathname(pathname, "/home/publish")} href="/home/publish">Publicar</HeaderHomeLink>
    </HeaderHomeItems>
  );
};

export default GroupLink;
