import { cn } from '@/utils/style.util';

interface ListItemProps {
  children: React.ReactNode;
  selected?: boolean;
}

export default function ListItem({
  children,
  selected = false,
}: ListItemProps) {
  return (
    <li
      className={cn(
        'w-full cursor-pointer flex flex-col text-left items-start border-l-4 border-transparent',
        selected ? 'border-blue-500 bg-blue-100' : 'hover:bg-gray-100',
      )}
    >
      {children}
    </li>
  );
}
