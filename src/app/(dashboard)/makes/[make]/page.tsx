interface IMakeProps {
  params: Promise<{ make: string }>;
}
export default async function Make({ params }: IMakeProps) {
  const { make } = await params;
  return <div>Veiculos de {make}</div>;
}
