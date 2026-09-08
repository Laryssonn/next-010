'use client';

export function Checkout({ listVehicles }: { listVehicles?: React.ReactNode }) {
  return (
    <div className="pt-2 pb-2 border-2 border-red-400">
      {listVehicles}
      <button
        className="border border-white rounded-2xl w-200 bg-blue-700 hover:bg-blue-400"
        onClick={() => alert('Click')}
      >
        Click
      </button>
    </div>
  );
}
