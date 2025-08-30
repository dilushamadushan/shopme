import { useState } from "react";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    new_price: "",
    old_price: "",
    image: "",
  });

  const [img,setImage] = useState(false);

  const imagehandleChange = (e) => {
    setImage(e.target.files[0]);
  }

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFormData({
      ...formData,
      [name] : value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!img) {
    alert("Please select an image");
    return;
  }

  try {
    // Upload image
    const uploadData = new FormData();
    uploadData.append("product", img);

    const uploadRes = await fetch("http://localhost:3000/upload", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: uploadData,
    });

    const uploadJson = await uploadRes.json();

    if (!uploadJson.success) {
      alert("Image upload failed");
      return;
    }

    // Add product
    const productData = { ...formData, image: uploadJson.image };
    console.log(productData);
    const addRes = await fetch("http://localhost:3000/addproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    const addJson = await addRes.json();
    addJson.success ? alert("Product added") : alert("Failed to add product");
    window.location.reload();
  } catch (error) {
    console.error(error);
    alert("An error occurred. Check console.");
  }
};



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Add New Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter product name"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
            >
              <option value="">Select option</option>
              <option value="kids">Kids</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* New Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Price
            </label>
            <input
              type="number"
              name="new_price"
              value={formData.new_price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter new price"
            />
          </div>

          {/* Old Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Old Price
            </label>
            <input
              type="number"
              name="old_price"
              value={formData.old_price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter old price"
            />
          </div>

          {/* Product Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Image
            </label>
            <input
              type="file"
              name="image"
              onChange={imagehandleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-green-600 file:text-white hover:file:bg-green-700"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
