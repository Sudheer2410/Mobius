import layer from "../assets/Layer 1.png";
import profile from "../assets/Profile 1.png";
import star from "../assets/Star 1.png";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: layer,
      title: "Tried, Tested, Trusted",
      description:
        "Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back.",
    },
    {
      icon: profile,
      title: "Real People, Real Help",
      description:
        "A hands-on team that actually cares — guiding you through every twist in your career path.",
    },
    {
      icon: star,
      title: "Beat the Line",
      description:
        "We search, shortlist, and apply for you, so your name shows up first — every single day.",
    },
  ];

  return (
    <div
      className="max-w-[1500px] w-full flex justify-center"
      style={{ padding: "3rem 2.5rem" }}
    >
      <div
        className="sm:w-full md:max-w-4xl bg-blue-50 rounded-2xl"
        style={{ padding: "3rem" }}
      >
        <h2
          className="text-2xl font-semibold text-blue-900 mb-12 text-left"
          style={{ marginBottom: "2rem" }}
        >
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-[#022183] rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition"
              style={{ padding: "1rem" }}
            >
              <div
                className="flex justify-start text-blue-800 mb-4"
                style={{ marginBottom: "2rem" }}
              >
                <img src={benefit.icon} alt="icon" />
              </div>
              <h3
                className="font-semibold text-blue-900 mb-2"
                style={{ marginBottom: "1rem" }}
              >
                {benefit.title}
              </h3>
              <p className="text-sm text-[#022183]">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
