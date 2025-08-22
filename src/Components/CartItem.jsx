import React, { useContext } from "react";
import remove_icon from "../assets/cart_cross_icon.png";
import { ProductContext } from "../Context/ProductContext";

function CartItem() {
  const { products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ProductContext);

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 p-4">
      <div className="hidden md:grid grid-cols-6 gap-5 font-semibold text-gray-700 border-b pb-3">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {products.map(
        (e) =>
          cartItems[e.id] > 0 && (
            <div
              key={e.id}
              className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center py-4 border-b last:border-none"
            >
              <div className="flex items-center">
                <img
                  src={e.image}
                  alt={e.name}
                  className="w-20 h-20 object-contain mx-auto md:mx-0"
                />
              </div>

              <p className="font-medium text-gray-800 text-center md:text-left">
                {e.name}
              </p>

              <p className="text-gray-600 text-center md:text-left">
                {e.new_price} $
              </p>

              <div className="text-center md:text-left">
                <span className="px-3 py-1 bg-gray-100 border rounded-md">
                  {cartItems[e.id]}
                </span>
              </div>

              <p className="font-semibold text-gray-800 text-center md:text-left">
                {e.new_price * cartItems[e.id]} $
              </p>

              <button
                onClick={() => removeFromCart(e.id)}
                className="flex justify-center"
              >
                <img
                  src={remove_icon}
                  alt="Remove"
                  className="w-5 h-5 hover:scale-110 transition-transform"
                />
              </button>
            </div>
          )
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div>
          <div className="flex mt-4 flex-col sm:flex-row">
            <input
              type="text"
              placeholder="Promo code"
              className="flex-grow border rounded-t-md sm:rounded-l-md sm:rounded-t-none px-3 py-2 focus:outline-none"
            />
            <button className="px-5 bg-green-500 text-white font-semibold rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-green-600 transition">
              Submit
            </button>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Cart Totals</h2>

          <div className="flex justify-between mb-4 text-gray-700 py-2 border-b">
            <span>Subtotal</span>
            <span>$ {getTotalCartAmount()}</span>
          </div>

          <div className="flex justify-between mb-4 text-gray-700 py-2 border-b">
            <span>Shipping Fee</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>

          <div className="flex justify-between text-gray-900 py-2 font-bold">
            <span>Total</span>
            <span>${getTotalCartAmount()}</span>
          </div>

          <button className="w-full mt-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
