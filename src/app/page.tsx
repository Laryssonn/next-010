import { Button } from './Button';

async function getVehicles() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return ['RS5', 'M2', 'M3', 'RS6'];
}

export default async function Home() {
  console.log(
    'Client components are rendered on the server and client, this console is displayed in both the terminal and the browser',
  );

  const vehicles = await getVehicles();
  return (
    <>
      {vehicles}
      <Button />
    </>
  );
}
