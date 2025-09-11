function PromoSec({img, title, des}) {
  return (
    <>
            <div className="relative rounded-lg overflow-hidden shadow-lg group">
          <img
            src={img}
            alt={title}
            className="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center p-6 text-white">
            <p className="text-sm mb-2">{title}</p>
            <h2 className="text-2xl font-bold mb-3">
              {des}
            </h2>
            <a href="#" className="underline font-medium hover:text-green-400">
              Shop Now
            </a>
          </div>
        </div>
    </>
  )
}

export default PromoSec