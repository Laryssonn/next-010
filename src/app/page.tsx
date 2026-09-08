import { Checkout } from './Checkout';
import { ListVehicles } from './ListVehicles';

export default async function Home() {
  console.log(
    'Client components are rendered on the server and client, this console is displayed in both the terminal and the browser',
  );
  return (
    <>
      <Checkout listVehicles={<ListVehicles />} />
    </>
  );
}
