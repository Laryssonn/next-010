import { Metadata } from 'next';

interface IMakeProps {
  params: Promise<{ make: string }>;
}

export async function generateMetadata({
  params,
}: IMakeProps): Promise<Metadata> {
  const { make } = await params;
  return {
    title: `${make} | LN Cars 🚙`,
  };
}
export default async function Make({ params }: IMakeProps) {
  const { make } = await params;
  return <div>Veiculos de {make}</div>;
}
