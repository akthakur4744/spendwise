"use client";

import * as React from 'react';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { SidebarHeaderContent } from './sidebar-header-content';
import { SidebarNav } from './sidebar-nav';
import { MainHeader } from './main-header';

export function AppLayout({ children }: { children: React.ReactNode }) {
  // Retrieve sidebar state from cookie or default to true (expanded)
  const [defaultOpen, setDefaultOpen] = React.useState(true);

  React.useEffect(() => {
    const storedState = document.cookie
      .split('; ')
      .find(row => row.startsWith('sidebar_state='))
      ?.split('=')[1];
    if (storedState) {
      setDefaultOpen(storedState === 'true');
    }
  }, []);
  
  return (
    <SidebarProvider defaultOpen={defaultOpen} collapsible="icon">
      <Sidebar className="border-r bg-card">
        <SidebarHeaderContent />
        <SidebarNav />
      </Sidebar>
      <SidebarInset className="flex flex-col">
        <MainHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-background">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
