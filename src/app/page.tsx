import { PageTitle } from '@/components/shared/page-title';
import { OverviewStats } from '@/components/dashboard/overview-stats';
import { SpendingBreakdownChart } from '@/components/dashboard/spending-breakdown-chart';
import { BudgetStatusList } from '@/components/dashboard/budget-status-list';
import { RecentActivityFeed } from '@/components/dashboard/recent-activity-feed';
import { AiFinancialAdvisor } from '@/components/dashboard/ai-financial-advisor';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      <PageTitle 
        title="Dashboard" 
        description="Welcome back! Here's an overview of your finances."
        actions={
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add Transaction
          </Button>
        }
      />

      <OverviewStats />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SpendingBreakdownChart />
        </div>
        <div className="lg:col-span-1">
          <BudgetStatusList />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentActivityFeed />
        </div>
        <div className="lg:col-span-1">
          <AiFinancialAdvisor />
        </div>
      </div>
    </div>
  );
}
