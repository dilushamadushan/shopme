import { useEffect, useState } from "react";
import removeIcon from "../assets/cart_cross_icon.png";

function AllProduct() {
  const [product, setProduct] = useState([]);

  // Fetch all products
  const allProduct = async () => {
    try {
      const res = await fetch("http://localhost:3000/allproduct");
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  // Remove product
  const removeProduct = async (id) => {
    try {
      await fetch(`http://localhost:3000/removeproduct/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      allProduct();
    } catch (err) {
      console.error("Error removing product:", err);
    }
  };

    useEffect(() => {
    allProduct();
  }, []);


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">All Products</h2>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-6 bg-gray-100 text-gray-700 font-semibold py-3 px-4">
          <p>Image</p>
          <p>Product Name</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p className="text-center">Remove</p>
        </div>
        <hr />

        {/* Table Body */}
        <div>
          {product.map((pro, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-6 items-center border-b py-3 px-4 hover:bg-gray-50 transition"
              >
                <img
                  src={pro.image}
                  alt={pro.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <p className="text-gray-800 font-medium">{pro.name}</p>
                <p className="text-gray-500 line-through">{pro.old_price} $</p>
                <p className="text-green-600 font-bold">{pro.new_price} $</p>
                <p className="capitalize text-gray-700">{pro.category}</p>
                <div className="flex justify-center">
                  <button
                    onClick={() => removeProduct(pro.id)}
                    className="p-2 rounded-full hover:bg-red-100"
                  >
                    <img src={removeIcon} alt="remove" className="w-6 h-6" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AllProduct;
