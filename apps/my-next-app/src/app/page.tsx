'use client';

import { useEffect } from 'react';

import { Button } from '@myworkspace/ui';

import { GlobalButton } from '../components/button';
import { LocalButton } from './_components/button';

export default function Home() {
  useEffect(() => {
    console.log('rs');
  }, []);

  return (
    <div className='flex max-h-dvh items-center justify-center bg-slate-400 text-3xl text-gray-100'>
      <GlobalButton />
      <LocalButton />
      <Button variant='ghost'>Click me</Button>
    </div>
  );
}
