import type { NavItem } from '@/lib/types';
import { LayoutDashboard, ListChecks, Target, BarChartHorizontalBig, Cog } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/transactions', label: 'Transactions', icon: ListChecks },
  { href: '/budgets', label: 'Budgets', icon: Target },
  { href: '/reports', label: 'Reports', icon: BarChartHorizontalBig },
  // { href: '/settings', label: 'Settings', icon: Cog }, // Example for future expansion
];

export const APP_NAME = "SpendWise";
