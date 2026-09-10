'use client';
import { ReactNode, useState } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-10 p-2">
      <h1 className="bg-blue-400 p-2 rounded-xl">Page</h1>
      <div className="bg-red-400 p-2 rounded-xl">{children}</div>
      <button
        className="bg-blue-700 hover:bg-blue-500 rounded-2xl"
        onClick={() => setCount(() => count + 1)}
      >
        Contador: {count}
      </button>
    </div>
  );
}
