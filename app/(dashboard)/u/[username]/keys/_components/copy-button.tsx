'use client';

import { Button } from '@/components/ui/button';
import { CheckCheck, Copy } from 'lucide-react';
import { useState } from 'react';

interface CopyButtonProps {
  value: string | null;
}

export const CopyButton = ({ value }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    if (!value) {
      return;
    }

    setCopied(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const Icon = copied ? CheckCheck : Copy;

  return (
    <Button
      size='sm'
      onClick={onCopy}
      disabled={!value || copied}
      variant='ghost'
    >
      <Icon className='h-4 w-4' />
    </Button>
  );
};
