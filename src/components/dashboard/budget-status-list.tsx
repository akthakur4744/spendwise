"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { MOCK_BUDGET_GOALS, getCategoryById, formatCurrency } from '@/lib/data';
import { CategoryIcon } from '@/components/shared/category-icon';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function BudgetStatusList() {
  if (MOCK_BUDGET_GOALS.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Budget Status</CardTitle>
           <CardDescription>Track your monthly budget goals.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center h-[350px]">
          <p className="text-muted-foreground mb-2">No budgets set yet.</p>
          <Button asChild variant="outline">
            <Link href="/budgets">Set Budgets</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Budget Status</CardTitle>
            <CardDescription>Your progress on monthly goals.</CardDescription>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/budgets">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
        {MOCK_BUDGET_GOALS.map((goal) => {
          const category = getCategoryById(goal.categoryId);
          const progress = Math.min((goal.spentAmount / goal.amount) * 100, 100);
          const isOverBudget = goal.spentAmount > goal.amount;

          return (
            <div key={goal.id} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  {category && <CategoryIcon categoryId={category.id} className="h-6 w-6" />}
                  <span className="font-medium text-foreground">{category?.name || 'Unknown Category'}</span>
                </div>
                <span className={`font-medium ${isOverBudget ? 'text-destructive' : 'text-muted-foreground'}`}>
                  {formatCurrency(goal.spentAmount)} / {formatCurrency(goal.amount)}
                </span>
              </div>
              <Progress value={progress} aria-label={`${category?.name} budget progress`} className={isOverBudget ? "[&>div]:bg-destructive" : ""} />
              {isOverBudget && (
                <p className="text-xs text-destructive text-right">
                  Over budget by {formatCurrency(goal.spentAmount - goal.amount)}
                </p>
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
