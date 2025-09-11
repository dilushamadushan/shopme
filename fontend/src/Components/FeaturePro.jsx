function FeaturePro({img, name, price}) {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
        <img
          src={img}
          alt={name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-gray-600">$ {price}</p>
          <button className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default FeaturePro;
