import type { LucideIcon } from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string; // hex color for charts/UI
}

export interface Transaction {
  id: string;
  date: string; // ISO string date
  description: string;
  amount: number;
  categoryId: string;
  type: 'income' | 'expense';
}

export interface BudgetGoal {
  id: string;
  categoryId: string;
  amount: number;
  spentAmount: number; // current amount spent in this category for the budget period
  period: 'monthly' | 'yearly'; // Or specific month 'YYYY-MM'
}

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  disabled?: boolean;
}
