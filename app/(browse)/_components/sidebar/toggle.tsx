'use client';
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useSidebar } from '@/store/use-sidebar';
import { Hint } from '@/components/hint';
import { Skeleton } from '@/components/ui/skeleton';

export const Toggle = () => {
  const { collapsed, onExpand, onCollapsed } = useSidebar((state) => state);

  const label = collapsed ? 'Expand' : 'Collapse';

  return (
    <>
      {collapsed && (
        <div className='hidden lg:flex w-full items-center justify-center mb-4 pt-4'>
          <Hint label={label} asChild side='right'>
            <Button variant='ghost' className='h-auto p-2' onClick={onExpand}>
              <ArrowRightFromLine className='h-4 w-4' />
            </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className='p-3 pl-6 flex items-center mb-2 w-full'>
          <p className='font-semibold text-primary  '>For you</p>
          <Hint side='right' label={label} asChild>
            <Button
              onClick={onCollapsed}
              variant='ghost'
              className='ml-auto h-auto p-2'
            >
              <ArrowLeftFromLine className='h-4 w-4' />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};

export const ToggleSkeleton = () => {
  return (
    <div className='p-3 pl-6 lg:flex items-center justify-between mb-2 hidden w-full '>
      <Skeleton className='h-6 w-[100px]' />
      <Skeleton className='h-6 w-6' />
    </div>
  );
};
