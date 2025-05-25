"use client";

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Sparkles, AlertCircle } from 'lucide-react';
import { analyzeSpending, type AnalyzeSpendingInput, type AnalyzeSpendingOutput } from '@/ai/flows/analyze-spending-patterns';
import { MOCK_TRANSACTIONS, MOCK_BUDGET_GOALS } from '@/lib/data';
import { Skeleton } from '@/components/ui/skeleton';

export function AiFinancialAdvisor() {
  const [insights, setInsights] = React.useState<AnalyzeSpendingOutput | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchInsights = async () => {
    setIsLoading(true);
    setError(null);
    setInsights(null);

    try {
      // Prepare data for the AI flow
      const spendingData = JSON.stringify(
        MOCK_TRANSACTIONS.map(({ id, date, description, amount, categoryId, type }) => ({
          id, date, description, amount, categoryId, type
        }))
      );
      const budgetGoals = JSON.stringify(
        MOCK_BUDGET_GOALS.map(({ categoryId, amount, period }) => ({
          categoryId, amount, period
        }))
      );

      const input: AnalyzeSpendingInput = { spendingData, budgetGoals };
      const result = await analyzeSpending(input);
      setInsights(result);
    } catch (e) {
      console.error("Error fetching AI insights:", e);
      setError("Failed to load financial insights. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  
  // Fetch insights on component mount for initial display
  React.useEffect(() => {
    fetchInsights();
  }, []);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <CardTitle>Smart Insights</CardTitle>
          </div>
          <Button variant="ghost" size="sm" onClick={fetchInsights} disabled={isLoading}>
            {isLoading ? "Refreshing..." : "Refresh"}
          </Button>
        </div>
        <CardDescription>AI-powered analysis of your spending habits.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 min-h-[250px]">
        {isLoading && (
          <div className="space-y-3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-5/6" />
             <Skeleton className="h-4 w-2/3 mt-4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        )}
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {!isLoading && !error && insights && (
          <>
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle className="font-semibold">Spending Patterns</AlertTitle>
              <AlertDescription className="text-sm">
                {insights.insights || "No specific patterns identified currently."}
              </AlertDescription>
            </Alert>
            <Alert variant="default" className="border-accent bg-accent/10">
               <Sparkles className="h-4 w-4 text-accent" />
              <AlertTitle className="font-semibold text-accent">Recommendations</AlertTitle>
              <AlertDescription className="text-sm">
                {insights.recommendations || "No specific recommendations at this time. Keep up the good work!"}
              </AlertDescription>
            </Alert>
          </>
        )}
        {!isLoading && !error && !insights && (
          <div className="text-center text-muted-foreground py-8">
            <p>Click "Refresh" to generate insights.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
