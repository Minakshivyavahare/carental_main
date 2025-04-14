const Stats = () => {
  const stats = [
    { value: "45+", label: "Global Branches" },
    { value: "29K", label: "Destination Collaboration" },
    { value: "20+", label: "Years Experience" },
    { value: "168K", label: "Happy Customers" },
    { value: "15M", label: "User Account" },
  ];

  return (
    <section className="py-12 px-6 md:px-16 lg:px-24 text-white">
      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <h3 className="text-4xl sm:text-5xl font-bold font-family-urbanist">
              {stat.value}
            </h3>
            <p className="text-base sm:text-lg mt-3 font-bold font-family-urbanist text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
