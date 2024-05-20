"use client";

import { usePathname } from "next/navigation";
import { AsideHomeItems, AsideHomeLink } from "./components";
import { checkPathname } from "@/components/lib/check-pathname";
import {
  BarChartBig,
  Image,
  Layout,
  MessageSquare,
  Settings,
} from "lucide-react";

const GroupLink = () => {
  const pathname = usePathname();

  return (
    <AsideHomeItems>
      <AsideHomeLink active={pathname === "/home/layouts"} href="/home/layouts">
        <Layout />
        Layout
      </AsideHomeLink>
      <AsideHomeLink
        active={checkPathname(pathname, "/home/analytics")}
        href="/home/analytics"
      >
        <BarChartBig /> Estatísticas
      </AsideHomeLink>
      <AsideHomeLink
        active={checkPathname(pathname, "/home/images")}
        href="/home/images"
      >
        <Image /> Imagens
      </AsideHomeLink>
      <AsideHomeLink
        active={checkPathname(pathname, "/home/support")}
        href="/home/support"
      >
        <MessageSquare /> Suporte
      </AsideHomeLink>
      <AsideHomeLink
        active={checkPathname(pathname, "/home/settings")}
        href="/home/settings"
      >
        <Settings /> Configurações
      </AsideHomeLink>
    </AsideHomeItems>
  );
};

export default GroupLink;
