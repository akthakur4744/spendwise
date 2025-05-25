"use client";

import *
as React from 'react';
import Link from 'next/link';
import { SidebarHeader, useSidebar } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Banknote, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { APP_NAME } from '@/lib/navigation';
import { cn } from '@/lib/utils';


export function SidebarHeaderContent() {
  const { state, toggleSidebar, isMobile } = useSidebar();

  return (
    <SidebarHeader className="flex h-16 items-center justify-between border-b px-3">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Banknote className="h-7 w-7 text-primary" />
        <span 
          className={cn(
            "text-lg font-semibold text-foreground whitespace-nowrap transition-opacity duration-300",
            state === 'collapsed' && !isMobile && "opacity-0 w-0 pointer-events-none"
          )}
        >
          {APP_NAME}
        </span>
      </Link>
      {!isMobile && (
         <Button variant="ghost" size="icon" onClick={toggleSidebar} className="hidden md:inline-flex">
          {state === 'expanded' ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeftOpen className="h-5 w-5" />}
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      )}
    </SidebarHeader>
  );
}
