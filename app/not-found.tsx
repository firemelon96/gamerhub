import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='flex h-full flex-col gap-y-4 items-center justify-center text-muted-foreground'>
      <h1 className='text-4xl'>404</h1>
      <p>We couldn&apos;t find the user you were looking for.</p>
      <Button variant='secondary' asChild>
        <Link href='/'>Go back</Link>
      </Button>
    </div>
  );
};

export default NotFound;
