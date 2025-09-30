import { useEffect, useState } from "react";

function Banner() {

    const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 20,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ml-30 mt-10 mr-30 bg-gradient-to-r from-pink-100 to-white py-10 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between rounded-lg ">
      <div className="text-center md:text-left space-y-4 ml-20">
        <h2 className="text-5xl font-bold text-red-600">FLAT 50% OFF</h2>
        <p className="text-xl font-semibold text-gray-700">
          {timeLeft.hours} Hours {timeLeft.minutes} Mins {timeLeft.seconds} Secs
        </p>
        <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
          Explore Now
        </button>
      </div>

      <div className="mt-6 md:mt-0">
        <img
          src="./exclusive_image.png" 
          alt="Offer Product"
          className="w-64 md:w-60 object-contain"
        />
      </div>
    </div>
  );
  
}

export default Banner