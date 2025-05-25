import { PageTitle } from '@/components/shared/page-title';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, BarChartHorizontalBig } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <PageTitle 
        title="Reports"
        icon={BarChartHorizontalBig}
        description="Generate and view detailed financial reports."
        actions={
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Download Summary
          </Button>
        }
      />
      <Card>
        <CardHeader>
          <CardTitle>Financial Reports</CardTitle>
          <CardDescription>
            Visualize your spending patterns, income vs. expenses, and more.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Placeholder for reports and charts */}
          <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">Financial reports and charts will appear here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
