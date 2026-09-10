import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className="h-20 border-b border-zinc-800 flex item-center">
        <div className="container px-10 items-center flex">
          <strong className="font-extrabold">LN Cars</strong>
        </div>
      </header>
      <div className="mt-10 container mx-auto px-10">{children}</div>
    </div>
  );
}
