import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-10 p-2">
      <h1 className="bg-blue-400 p-2 rounded-xl">Page</h1>
      <div className="bg-red-400 p-2 rounded-xl">{children}</div>
    </div>
  );
}
