async function getVehicles() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return ['RS5', 'M2', 'M3', 'RS6'];
}

const vehicles = await getVehicles();

export async function ListVehicles() {
  return (
    <ul>
      {vehicles.map((vehicle) => (
        <li key={vehicle}> {vehicle}</li>
      ))}
    </ul>
  );
}
