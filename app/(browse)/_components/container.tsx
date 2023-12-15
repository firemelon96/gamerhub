'use client';
import { useMediaQuery } from 'usehooks-ts';
import { useEffect } from 'react';

import { cn } from '@/lib/utils';
import { useSidebar } from '@/store/use-sidebar';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  const matches = useMediaQuery('(max-width: 1024px)');
  const { collapsed, onCollapsed, onExpand } = useSidebar((state) => state);

  useEffect(() => {
    if (matches) {
      onCollapsed();
    } else {
      onExpand();
    }
  }, [matches, onExpand, onCollapsed]);

  return (
    <div
      className={cn('flex-1', collapsed ? 'ml-[70px]' : 'ml-[70px] lg:ml-60')}
    >
      {children}
    </div>
  );
};
