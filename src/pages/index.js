'use client';

import Sidebar from '../components/misc/Sidebar';

export default function Home() {
  const contentClassnames = [
    'flex',
    'justify-center',
    'items-center',
    'h-full',
    'w-full',
    'text-2xl',
    'bg-gray-200',
    'border',
    'border-gray-400',
    'rounded-md',
    'dark:bg-slate-800',
    'dark:border-slate-600',
  ];

  return (
    <main className="flex-1 w-full">
      <div className="flex flex-col self-center gap-4 w-full h-full p-5 md:flex-row">
        <Sidebar />

        <div className={contentClassnames.join(' ')}>Coming Soon!</div>
      </div>
    </main>
  );
}
