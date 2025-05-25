import type { Category, Transaction, BudgetGoal } from '@/lib/types';
import { Utensils, Car, Film, Home, Lightbulb, HeartPulse, ShoppingBag, Shirt, Briefcase, Gift, Activity } from 'lucide-react';

export const CATEGORIES: Category[] = [
  { id: 'food', name: 'Food & Dining', icon: Utensils, color: '#FF6384' },
  { id: 'transport', name: 'Transportation', icon: Car, color: '#36A2EB' },
  { id: 'entertainment', name: 'Entertainment', icon: Film, color: '#FFCE56' },
  { id: 'housing', name: 'Housing', icon: Home, color: '#4BC0C0' },
  { id: 'utilities', name: 'Utilities', icon: Lightbulb, color: '#9966FF' },
  { id: 'health', name: 'Healthcare', icon: HeartPulse, color: '#FF9F40' },
  { id: 'shopping', name: 'Shopping', icon: ShoppingBag, color: '#83AF7A' },
  { id: 'clothing', name: 'Clothing', icon: Shirt, color: '#A47A6F' },
  { id: 'income', name: 'Income', icon: Briefcase, color: '#5CB85C'},
  { id: 'gifts', name: 'Gifts', icon: Gift, color: '#F08080'},
  { id: 'other', name: 'Other', icon: Activity, color: '#778899'},
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 't1', date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), description: 'Groceries from SuperMart', amount: 75.50, categoryId: 'food', type: 'expense' },
  { id: 't2', date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), description: 'Monthly Salary', amount: 3500, categoryId: 'income', type: 'income' },
  { id: 't3', date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), description: 'Gasoline for Car', amount: 40.00, categoryId: 'transport', type: 'expense' },
  { id: 't4', date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), description: 'Movie Tickets', amount: 30.00, categoryId: 'entertainment', type: 'expense' },
  { id: 't5', date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), description: 'Rent Payment', amount: 1200.00, categoryId: 'housing', type: 'expense' },
  { id: 't6', date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), description: 'Electricity Bill', amount: 65.00, categoryId: 'utilities', type: 'expense' },
  { id: 't7', date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(), description: 'Dinner at Italian Place', amount: 55.00, categoryId: 'food', type: 'expense' },
  { id: 't8', date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), description: 'New T-shirt', amount: 25.00, categoryId: 'clothing', type: 'expense' },
];

export const MOCK_BUDGET_GOALS: BudgetGoal[] = [
  { id: 'b1', categoryId: 'food', amount: 400, spentAmount: 130.50, period: 'monthly' },
  { id: 'b2', categoryId: 'transport', amount: 150, spentAmount: 40.00, period: 'monthly' },
  { id: 'b3', categoryId: 'entertainment', amount: 100, spentAmount: 30.00, period: 'monthly' },
  { id: 'b4', categoryId: 'shopping', amount: 200, spentAmount: 0, period: 'monthly' },
];

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find(cat => cat.id === id);
}

export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
