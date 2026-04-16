export default function Mint() {
  return (
    <div className="container mt-24 text-center">

      <h2>FREE MINT</h2>

      <p className="mt-3">Connect wallet to mint your punk</p>

      <div className="card max-w-md mx-auto mt-6">

        <input
          placeholder="0x wallet..."
          className="w-full p-3 bg-black border border-gray-700"
        />

        <button className="btn btn-primary w-full mt-4">
          MINT
        </button>

      </div>

    </div>
  );
}
