
"use client";

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MOCK_TRANSACTIONS, CATEGORIES, formatCurrency } from '@/lib/data';
import { ChartContainer, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';

export function SpendingBreakdownChart() {
  const chartData = React.useMemo(() => {
    const spendingByCat: { [key: string]: number } = {};
    MOCK_TRANSACTIONS.filter(t => t.type === 'expense').forEach(t => {
      spendingByCat[t.categoryId] = (spendingByCat[t.categoryId] || 0) + t.amount;
    });

    return CATEGORIES
      .filter(cat => cat.id !== 'income' && spendingByCat[cat.id] > 0) // Exclude income and categories with no spending
      .map(cat => ({
        name: cat.name,
        spending: spendingByCat[cat.id] || 0,
        fill: `hsl(var(--chart-${CATEGORIES.indexOf(cat) % 5 + 1}))`, // Use theme colors
      }))
      .sort((a, b) => b.spending - a.spending) // Sort by spending desc
      .slice(0, 5); // Top 5 categories
  }, []);

  const chartConfig = React.useMemo(() => {
    const config: ChartConfig = {};
    chartData.forEach((item, index) => {
      config[item.name] = {
        label: item.name,
        color: `hsl(var(--chart-${index % 5 + 1}))`,
      };
    });
    // Add a default config for the 'spending' datakey if not covered by specific category names
    if (!config.spending) {
        config.spending = {
            label: "Spending",
            color: "hsl(var(--chart-1))",
        };
    }
    return config;
  }, [chartData]);


  if (chartData.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Spending Breakdown</CardTitle>
          <CardDescription>Your top spending categories this month.</CardDescription>
        </CardHeader>
        <CardContent className="h-[350px] flex items-center justify-center">
          <p className="text-muted-foreground">Not enough data to display chart.</p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Spending Breakdown</CardTitle>
        <CardDescription>Your top spending categories this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData} layout="vertical" margin={{ right: 30 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tickFormatter={(value) => formatCurrency(value, 'USD').replace('$', '')} />
              <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 12 }} />
              <Tooltip
                cursor={{ fill: 'hsl(var(--accent))', opacity: 0.3 }}
                content={<ChartTooltipContent formatter={(value) => formatCurrency(Number(value))} />}
              />
              <Legend />
              <Bar dataKey="spending" name="Spending" barSize={20} radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

