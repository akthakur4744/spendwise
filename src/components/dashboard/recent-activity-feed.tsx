"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MOCK_TRANSACTIONS, getCategoryById, formatCurrency, formatDate } from '@/lib/data';
import { CategoryIcon } from '@/components/shared/category-icon';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function RecentActivityFeed() {
  const recentTransactions = MOCK_TRANSACTIONS.slice(0, 5); // Show top 5

  if (recentTransactions.length === 0) {
     return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
           <CardDescription>Your latest financial movements.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center h-[350px]">
          <p className="text-muted-foreground mb-2">No transactions yet.</p>
          <Button asChild variant="outline">
            <Link href="/transactions">Add Transaction</Link>
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
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest financial movements.</CardDescription>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/transactions">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px]"> {/* Adjust height as needed */}
          <div className="space-y-4">
            {recentTransactions.map((transaction) => {
              const category = getCategoryById(transaction.categoryId);
              return (
                <div key={transaction.id} className="flex items-center gap-3 p-2 rounded-md hover:bg-accent/50 dark:hover:bg-accent/10 transition-colors">
                  {category && <CategoryIcon categoryId={category.id} />}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground truncate">{transaction.description}</p>
                    <p className="text-xs text-muted-foreground">
                      {category?.name || 'Uncategorized'} &bull; {formatDate(transaction.date)}
                    </p>
                  </div>
                  <div className={`text-sm font-semibold ${transaction.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {transaction.type === 'income' ? '+' : '-'}
                    {formatCurrency(transaction.amount)}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
