'use client';

import { onUnblock } from '@/actions/block';
import { Button } from '@/components/ui/button';
import { useTransition } from 'react';
import { toast } from 'sonner';

interface UnblockButtonProps {
  userId: string;
}

export const UnblockButton = ({ userId }: UnblockButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const onClick = () => {
    startTransition(() => {
      onUnblock(userId)
        .then((data) =>
          toast.success(`Unblocked the user ${data.blocked.username}`)
        )
        .catch(() => toast.error('Something went wrong!'));
    });
  };
  return (
    <Button
      onClick={onClick}
      variant='link'
      disabled={isPending}
      size='sm'
      className='text-blue-500 w-full'
    >
      Unblock
    </Button>
  );
};
