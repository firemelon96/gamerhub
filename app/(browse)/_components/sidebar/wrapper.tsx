'use client';
import { cn } from '@/lib/utils';
import { useIsClient } from 'usehooks-ts';
import { useSidebar } from '@/store/use-sidebar';
import { ToggleSkeleton } from './toggle';
import { RecommendedSkeleton } from './recommended';

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebar((state) => state);
  const isClient = useIsClient();

  if (!isClient) {
    return (
      <aside className='fixed left-0 w-[70px] lg:w-60 bg-background flex flex-col h-full border-r border-[#2D2E35] z-50'>
        <ToggleSkeleton />
        <RecommendedSkeleton />
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        'fixed left-0 w-60 bg-background flex flex-col h-full border-r border-[#2D2E35] z-50',
        collapsed && 'w-[70px]'
      )}
    >
      {children}
    </aside>
  );
};
