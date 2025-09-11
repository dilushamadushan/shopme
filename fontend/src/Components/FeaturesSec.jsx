function FeaturesSec({ icon: Icon, title, description }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-6 shadow-lg">
          <Icon className="text-2xl" />
        </div>
        <h3 className="text-lg font-bold uppercase mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </>
  );
}

export default FeaturesSec;
