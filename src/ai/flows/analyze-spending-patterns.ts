// src/ai/flows/analyze-spending-patterns.ts
'use server';
/**
 * @fileOverview Analyzes user spending patterns to identify saving opportunities.
 *
 * - analyzeSpending - Analyzes spending data and identifies saving opportunities.
 * - AnalyzeSpendingInput - The input type for the analyzeSpending function.
 * - AnalyzeSpendingOutput - The return type for the analyzeSpending function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeSpendingInputSchema = z.object({
  spendingData: z
    .string()
    .describe(
      'A JSON string containing the user\s spending data, including categories, amounts, and dates.'
    ),
  budgetGoals: z
    .string()
    .describe(
      'A JSON string containing the user\s budget goals for each spending category.'
    ),
});
export type AnalyzeSpendingInput = z.infer<typeof AnalyzeSpendingInputSchema>;

const AnalyzeSpendingOutputSchema = z.object({
  insights: z
    .string()
    .describe(
      'A summary of spending patterns and potential saving opportunities.'
    ),
  recommendations: z
    .string()
    .describe(
      'Specific recommendations for adjusting the budget to optimize savings.'
    ),
});
export type AnalyzeSpendingOutput = z.infer<typeof AnalyzeSpendingOutputSchema>;

export async function analyzeSpending(input: AnalyzeSpendingInput): Promise<
  AnalyzeSpendingOutput
> {
  return analyzeSpendingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeSpendingPrompt',
  input: {schema: AnalyzeSpendingInputSchema},
  output: {schema: AnalyzeSpendingOutputSchema},
  prompt: `You are a personal finance advisor. Analyze the user\'s spending data and budget goals to identify potential saving opportunities and provide recommendations.

Spending Data: {{{spendingData}}}
Budget Goals: {{{budgetGoals}}}

Provide a summary of spending patterns in the insights field and specific recommendations for adjusting the budget in the recommendations field. Focus on actionable advice to help the user optimize their budget and achieve their financial goals.`,
});

const analyzeSpendingFlow = ai.defineFlow(
  {
    name: 'analyzeSpendingFlow',
    inputSchema: AnalyzeSpendingInputSchema,
    outputSchema: AnalyzeSpendingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
