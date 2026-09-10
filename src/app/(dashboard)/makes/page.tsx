function getMakes() {
  new Promise((resolve) => setTimeout(resolve, 1000));

  return ['Audi', 'BMW', 'BYD', 'Honda', 'Subaru'];
}

export default async function Makes() {
  const makes = await getMakes();

  return (
    <div>
      <h1 className="mb-4 font-extrabold text-4xl">Marcas</h1>
      <div className="grid grid-cols-5 gap-4">
        {makes.map((make) => (
          <div
            key={make}
            className="bg-zinc-900 border-zinc-700 border rounded-lg grid place-items-center h-80"
          >
            {make}
          </div>
        ))}
      </div>
    </div>
  );
}
