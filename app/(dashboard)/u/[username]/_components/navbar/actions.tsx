import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

export const Actions = async () => {
  return (
    <div className='flex items-center justify-end gap-x-2'>
      <Button
        variant='ghost'
        size='sm'
        asChild
        className='text-muted-foreground hover:text-primary'
      >
        <Link href='/'>
          <LogOut className='h-5 w-5 mr-2' />
          Exit
        </Link>
      </Button>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};
