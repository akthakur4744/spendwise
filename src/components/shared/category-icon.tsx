import { CATEGORIES } from '@/lib/data';
import { Package } from 'lucide-react'; // Default icon

interface CategoryIconProps {
  categoryId: string;
  className?: string;
}

export function CategoryIcon({ categoryId, className }: CategoryIconProps) {
  const category = CATEGORIES.find(cat => cat.id === categoryId);
  const IconComponent = category ? category.icon : Package;
  const color = category ? category.color : '#778899';

  return (
    <div 
      className={`flex items-center justify-center h-8 w-8 rounded-full ${className}`}
      style={{ backgroundColor: `${color}33` }} // Use category color with some transparency
    >
      <IconComponent className="h-4 w-4" style={{ color: color }} />
    </div>
  );
}
