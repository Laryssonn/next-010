'use client';

export default function Home() {
  console.log(
    'Client components are rendered on the server and client, this console is displayed in both the terminal and the browser',
  );
  return (
    <button
      className="border border-white rounded-2xl w-200 bg-blue-700 hover:bg-blue-400"
      onClick={() => alert('Click')}
    >
      Click
    </button>
  );
}
