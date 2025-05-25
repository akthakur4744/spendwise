"use client"

import { DataCard } from '@/components/shared/data-card';
import { MOCK_TRANSACTIONS, MOCK_BUDGET_GOALS, formatCurrency } from '@/lib/data';
import { ArrowDownRight, ArrowUpRight, DollarSign, Target } from 'lucide-react';
import { useMemo } from 'react';

export function OverviewStats() {
  const stats = useMemo(() => {
    const totalIncome = MOCK_TRANSACTIONS.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
    const totalExpenses = MOCK_TRANSACTIONS.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
    const netBalance = totalIncome - totalExpenses;
    const budgetsTracked = MOCK_BUDGET_GOALS.length;
    
    return { totalIncome, totalExpenses, netBalance, budgetsTracked };
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <DataCard
        title="Total Income"
        value={formatCurrency(stats.totalIncome)}
        icon={ArrowUpRight}
        description="+20.1% from last month"
        valueClassName="text-green-600 dark:text-green-400"
      />
      <DataCard
        title="Total Expenses"
        value={formatCurrency(stats.totalExpenses)}
        icon={ArrowDownRight}
        description="+12.5% from last month"
        valueClassName="text-red-600 dark:text-red-400"
      />
      <DataCard
        title="Net Balance"
        value={formatCurrency(stats.netBalance)}
        icon={DollarSign}
        description={stats.netBalance >= 0 ? "You're in the green!" : "You're in the red."}
        valueClassName={stats.netBalance >= 0 ? "text-primary" : "text-destructive"}
      />
      <DataCard
        title="Budgets Tracked"
        value={stats.budgetsTracked.toString()}
        icon={Target}
        description="Active monthly goals"
      />
    </div>
  );
}
