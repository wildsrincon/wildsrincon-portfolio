import { Suspense } from "react";
import type { SidebarProps } from "./ui/sidebar";
import { Sidebar, SidebarContent, SidebarRail } from "./ui/sidebar";
import ChatWrapper from "./chat/ChatWrapper";

// Sidebar data

export function AppSidebar(props: SidebarProps) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <Suspense fallback={<div>Loading...</div>}>
          {/* Sidebar content goes here */}
          <ChatWrapper />
        </Suspense>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
