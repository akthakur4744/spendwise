import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface PageTitleProps {
  title: string;
  icon?: LucideIcon;
  actions?: ReactNode;
  description?: string;
}

export function PageTitle({ title, icon: Icon, actions, description }: PageTitleProps) {
  return (
    <div className="mb-6 md:mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-3">
          {Icon && <Icon className="h-7 w-7 text-primary" />}
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl text-foreground">
            {title}
          </h1>
        </div>
        {actions && <div className="flex items-center gap-2 mt-2 sm:mt-0">{actions}</div>}
      </div>
      {description && (
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl">{description}</p>
      )}
    </div>
  );
}
