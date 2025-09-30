import { Link } from "react-router-dom";
import { FaRegHeart, FaGift } from "react-icons/fa";
import { RiHomeSmileFill, RiShoppingBag4Fill } from "react-icons/ri";
import FeaturesSec from "../Components/FeaturesSec";
import FeaturePro from "../Components/FeaturePro";
import PromoSec from "../Components/PromoSec";
import FeedbackCard from "../Components/FeedbackCard";

function Home() {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('./bg1.jpg')",
        }}
      >
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-green-400">SHOPME</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover the latest fashion trends for Men, Women, and Kids.
          </p>
          <Link
            to="/shop"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Explore Now
          </Link>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
          <FeaturesSec
            icon={FaRegHeart}
            title="Imagine & Create"
            description="Unlock your creativity with unique designs and endless possibilities."
          />

          <FeaturesSec
            icon={FaGift}
            title="Remarkable Style"
            description="Stand out with trendy, modern, and premium-quality products."
          />

          <FeaturesSec
            icon={RiShoppingBag4Fill}
            title="Supreme Blogging"
            description="Share your style journey, tips, and inspirations with the world."
          />

          <FeaturesSec
            icon={RiHomeSmileFill}
            title="Easy & Fun"
            description="Enjoy a smooth shopping experience that’s simple and fun."
          />
        </div>
      </div>

      <div className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeaturePro img="./bg.jpg" name="Men's Jacket" price="45.66" />
          <FeaturePro img="./bg.jpg" name="Women's Dress" price="45.66" />
          <FeaturePro img="./bg.jpg" name="Kids' Shoes" price="45.66" />
        </div>
      </div>

      <div className="w-full bg-gray-50 mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="ml-50">
          <h3 className="uppercase font-bold text-gray-700 mb-2">
            Upgrade Your Style
          </h3>
          <h2 className="text-4xl font-bold mb-4">Men’s</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Elevate your wardrobe with our men’s essentials — from casual wear
            to formal attire. Designed with quality craftsmanship, our
            collection ensures you look sharp and feel great wherever you go.
          </p>
          <button className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
            Shop Now
          </button>
        </div>

        <div className="relative ml-10">
          <img
            src="./product_18.png"
            alt="Stylish Man"
            className="rounded-lg shadow-lg w-100"
          />
          <img
            src="./product_20.png"
            alt="Another Look"
            className="absolute top-40 left-40 w-80 rounded-lg shadow-xl"
          />
        </div>
      </div>

      <div className="w-full bg-gray-50 mb-10 mx-auto px-6 py-26 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative ml-40">
          <img
            src="./product_1.png"
            alt="Stylish Woman"
            className="rounded-lg shadow-lg w-100"
          />
          <img
            src="./p1_product_i2.png"
            alt="Another Look"
            className="absolute top-40 left-40 w-80 rounded-lg shadow-xl"
          />
        </div>

        <div className="mr-50">
          <h3 className="uppercase font-bold text-gray-700 mb-2">
            Complete Your Look
          </h3>
          <h2 className="text-4xl font-bold mb-4">Women’s</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Discover our latest women’s collection featuring premium fabrics,
            modern designs, and timeless pieces. Perfect for any occasion, our
            outfits are made to keep you stylish, confident, and comfortable all
            day long.
          </p>
          <button className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-600 transition">
            Explore Collection
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8">
        <PromoSec
          img="./christopher-campbell-kFCdfLbu6zA-unsplash.jpg"
          title="Seasonal Style"
          des="Discover Latest in Fashion"
        />
        <PromoSec
          img="./ruslan-mingazhov-UluBTIW95fY-unsplash.jpg"
          title="New Collection"
          des="Discover Style in T-shirt"
        />
      </div>

      {/* Feedback Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          <p className="text-gray-600 mt-2">
            Real reviews from our happy clients
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <FeedbackCard
            msg={`"The quality is amazing! I always get compliments on my outfits."`}
            name="Sophia D."
            status="Verified Buyer"
          />
          <FeedbackCard
            msg={`"Fast shipping and premium fabric. I’ll definitely order again!"`}
            name="Liam R."
            status="Verified Buyer"
          />
          <FeedbackCard
            msg={`"Customer support was excellent, and the styles are so trendy!"`}
            name="Emma W."
            status="Verified Buyer"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
