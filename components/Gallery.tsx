export default function Gallery() {
  const punks = [
    "/assets/punks/1.png",
    "/assets/punks/2.png",
    "/assets/punks/3.png",
    "/assets/punks/4.png",
  ];

  return (
    <div className="container mt-24">

      <h2 className="mb-6">COLLECTION</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">

        {punks.map((img, i) => (
          <div key={i} className="card">
            <img src={img} className="w-full aspect-square object-cover" />
          </div>
        ))}

      </div>

    </div>
  );
}
