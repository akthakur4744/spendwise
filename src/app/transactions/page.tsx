import { PageTitle } from '@/components/shared/page-title';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <PageTitle 
        title="Transactions" 
        description="View and manage all your financial transactions."
        actions={
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add New Transaction
          </Button>
        }
      />
      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
          <CardDescription>
            A detailed list of your income and expenses. You can filter, sort, and search your transactions here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Placeholder for transaction table or list */}
          <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">Transaction table will be displayed here.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
