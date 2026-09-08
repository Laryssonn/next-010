'use client';

export function Button() {
  return (
    <button
      className="border border-white rounded-2xl w-200 bg-blue-700 hover:bg-blue-400"
      onClick={() => alert('Click')}
    >
      Click
    </button>
  );
}
