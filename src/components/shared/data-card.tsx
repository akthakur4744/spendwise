import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface DataCardProps {
  title: string;
  value: string | ReactNode;
  icon?: LucideIcon;
  description?: string | ReactNode;
  footer?: ReactNode;
  className?: string;
  valueClassName?: string;
}

export function DataCard({ title, value, icon: Icon, description, footer, className, valueClassName }: DataCardProps) {
  return (
    <Card className={cn("shadow-sm hover:shadow-md transition-shadow duration-200", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {Icon && <Icon className="h-5 w-5 text-muted-foreground" />}
      </CardHeader>
      <CardContent>
        <div className={cn("text-2xl font-bold text-foreground", valueClassName)}>{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground pt-1">
            {description}
          </p>
        )}
      </CardContent>
      {footer && <CardFooter className="text-sm text-muted-foreground">{footer}</CardFooter>}
    </Card>
  );
}
