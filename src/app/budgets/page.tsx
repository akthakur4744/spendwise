import { PageTitle } from '@/components/shared/page-title';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, Target } from 'lucide-react';

export default function BudgetsPage() {
  return (
    <div className="space-y-6">
      <PageTitle 
        title="Budgets" 
        icon={Target}
        description="Set and track your spending goals for different categories."
        actions={
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Create New Budget
          </Button>
        }
      />
      <Card>
        <CardHeader>
          <CardTitle>Your Budgets</CardTitle>
          <CardDescription>
            Manage your monthly or yearly budgets to stay on top of your finances.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Placeholder for budget list or cards */}
          <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">Budget management interface will be here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
