"use client";

import { usePathname } from "next/navigation";
import SideBar from "@/layout/SideBar";

const hideSidebarRoutes = ["/" ,"/404", "/not-found"]; // Paths where sidebar shouldn't show

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const showSidebar = !hideSidebarRoutes.includes(pathname);

  return (
    <>{showSidebar?
      showSidebar &&  <SideBar > {children}</SideBar>:
  children}
    </>
  );
}
