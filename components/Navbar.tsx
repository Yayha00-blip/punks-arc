export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-6 container">
      <h1 className="text-xl font-bold tracking-[6px]">
        PXL PUNKS
      </h1>

      <div className="flex gap-4">
        <button className="btn">Discord</button>
        <button className="btn btn-primary">Connect</button>
      </div>
    </div>
  );
}
