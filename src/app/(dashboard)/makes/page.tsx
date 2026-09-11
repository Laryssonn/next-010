import { Metadata } from 'next';
import Link from 'next/link';

async function getMakes() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return ['Audi', 'BMW', 'BYD', 'Honda', 'Subaru'];
}

export const metadata: Metadata = {
  title: 'Marcas | LN Cars 🚗',
};

export default async function Makes() {
  const makes = await getMakes();

  return (
    <div>
      <h1 className="mb-4 font-extrabold text-4xl">Marcas</h1>
      <div className="grid grid-cols-5 gap-4">
        {makes.map((make) => (
          <Link href={`/makes/${make}`} key={make}>
            <div
              key={make}
              className="bg-zinc-900 border-zinc-700 border rounded-lg grid place-items-center h-80"
            >
              {make}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
