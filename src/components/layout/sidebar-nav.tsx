"use client";

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { NAV_ITEMS } from '@/lib/navigation';
import { cn } from '@/lib/utils';

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarContent className="flex-1 overflow-y-auto">
      <SidebarMenu className="p-2 space-y-1">
        {NAV_ITEMS.map((item) => (
          <SidebarMenuItem key={item.label}>
            <Link href={item.href} passHref legacyBehavior>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))}
                tooltip={{ children: item.label, side: 'right', align: 'center' }}
                className={cn(
                  "justify-start",
                  (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)))
                    ? "bg-primary/10 text-primary hover:bg-primary/20"
                    : "hover:bg-accent/50 dark:hover:bg-accent/10"
                )}
              >
                <a> {/* <a> tag is needed for legacyBehavior with asChild pattern from shadcn example */}
                  <item.icon className="h-5 w-5" />
                  <span className="truncate">{item.label}</span>
                </a>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarContent>
  );
}
