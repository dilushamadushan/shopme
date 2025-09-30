import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function FeedbackCard({msg, name, status}) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4 text-green-500">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <p className="text-gray-600 mb-4">
        {msg}
      </p>
      <h4 className="font-bold">{name}</h4>
      <p className="text-sm text-gray-500">{status}</p>
    </div>
  );
}

export default FeedbackCard;
