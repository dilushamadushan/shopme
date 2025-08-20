import React, { useContext } from "react";
import remove_icon from "../assets/cart_cross_icon.png";
import { ProductContext } from "../Context/ProductContext";

function CartItem() {
  const { products, cartItems, removeFromCart } = useContext(ProductContext);

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 p-4">
      {/* Header */}
      <div className="grid grid-cols-6 gap-5 font-semibold text-gray-700 border-b pb-3">
        <p className="col-span-1">Product</p>
        <p className="col-span-1">Title</p>
        <p className="col-span-1">Price</p>
        <p className="col-span-1">Quantity</p>
        <p className="col-span-1">Total</p>
        <p className="col-span-1 ml-13">Remove</p>
      </div>

      {/* Items */}
      {products.map((e) =>
        cartItems[e.id] > 0 ? (
          <div
            key={e.id}
            className="grid grid-cols-6 gap-4 items-center py-4 border-b last:border-none"
          >
            {/* Product Image */}
            <div className="col-span-1 flex items-center">
              <img
                src={e.image}
                alt={e.name}
                className="w-16 h-16 object-contain "
              />
            </div>

            {/* Title */}
            <p className="col-span-1 font-medium text-gray-800">{e.name}</p>

            {/* Price */}
            <p className="col-span-1 text-gray-600 ml-2">{e.new_price} $</p>

            {/* Quantity */}
            <div className="col-span-1">
              <span className="px-3 py-1 bg-gray-100 border">
                {cartItems[e.id]}
              </span>
            </div>

            {/* Total */}
            <p className="col-span-1 font-semibold ml-2 text-gray-800">
               {e.new_price * cartItems[e.id]} $
            </p>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(e.id)}
              className="col-span-1 flex justify-center"
            >
              <img
                src={remove_icon}
                alt="Remove"
                className="w-5 h-5 hover:scale-110 transition-transform"
              />
            </button>
          </div>
        ) : null
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div>
            <div className="flex mt-8">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="flex-grow border rounded-l-md px-3 py-2 focus:outline-none"
                />
                <button className="px-5 bg-green-500 text-white font-semibold rounded-r-md hover:bg-green-600 transition">
                  Submit
                </button>
            </div>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Cart Totals</h2>

          <div className="flex justify-between mb-3 text-gray-700 py-2 border-b">
            <span>Subtotal</span>
            <span>$0</span>
          </div>

          <div className="flex justify-between mb-3 text-gray-700 py-2 border-b">
            <span>Shipping Fee</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>

          <div className="flex justify-between text-gray-900 py-2 font-bold">
            <span>Total</span>
            <span>$0</span>
          </div>

          {/* Checkout Button */}
          <button className="w-full mt-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
