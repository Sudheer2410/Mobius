import Button from "../components/PrimaryButton";
// import layer from "../assets/Layer 1.png";
// import profile from "../assets/Profile 1.png";
// import star from "../assets/Star 1.png";

const ServicePlans = () => {
  const plans = [
    {
      title: "April Promo",
      price: "$35",
      period: "/week",
      features: [
        "Curated jobs from 1M+ listings, refreshed every 48 hours",
        "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
        "Need more? Add extra apps for just $1.5 each",
        "Your own dedicated application analyst",
        "Personalized with up to 10 filters & 5 job titles",
      ],
      popular: false,
    },
    {
      title: "Starter",
      price: "$50",
      period: "/week",
      features: [
        "All the perks of the Promo Plan, plus:",
        "Resume review & story-focused feedback",
        "Dedicated search specialist",
        "Up to 50 job apps/week",
        "Extra apps at $1.5 each",
        "Analyst support within 6 hours (SLA/PST hours)",
      ],
      popular: true,
    },
    {
      title: "Plus",
      price: "$100",
      period: "/week",
      features: [
        "Everything in Starter, with more muscle:",
        "Up to 75 apps/week",
        "Apply to 15 job titles",
        "Analyst + full application team on Pacific hours",
      ],
      popular: false,
    },
  ];

  const advance = {
    title: "Advance",
    price: "$150",
    period: "/week",
    features: [
      "Everything in Plus",
      "Custom Resumes & Cover Letters",
      "20 fully customized applications/week",
      "Help with complex job searches",
      "Access to senior resume experts, Founder & Exec Coaches",
    ],
  };

  return (
    <div
      className="max-w-[1500px] w-full flex justify-center"
      style={{ padding: "3rem 2.5rem" }}
    >
      <div
        className="sm:w-full md:max-w-4xl rounded-2xl"
        style={{ padding: "3rem" }}
      >
        <h2
          className="text-2xl font-semibold text-[#0649E7] text-left mb-12"
          style={{ marginBottom: "2.5rem" }}
        >
          Job Application Service Plans
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 px-4 md:px-0"
          style={{ marginBottom: "1.5rem" }}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative border border-[#0649E7] rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition"
              style={{
                padding: "1rem",
                backgroundColor: plan.popular ? "#f8faff" : "",
              }}
            >
              {plan.popular && (
                <span
                  className="absolute top-5 right-4 text-xs border border-[#0649E7] bg-blue-100 text-[#0649E7] font-semibold px-2 py-1 rounded-full"
                  style={{ padding: "0.3rem 1rem" }}
                >
                  Popular
                </span>
              )}
              <div>
                <h3
                  className="text-xl font-semibold text-[#0649E7] mb-4"
                  style={{ marginBottom: "1rem" }}
                >
                  {plan.title}
                </h3>
                <div
                  className="text-[#0649E7] font-bold text-4xl mb-2"
                  style={{ marginBottom: "1.5rem" }}
                >
                  {plan.price}
                  <span className="text-base font-medium">{plan.period}</span>
                </div>
                <hr className="border-[#D5D5D5]" />
                <ul
                  className="mt-6 text-[#0649E7] text-sm"
                  style={{ marginTop: "1.5rem" }}
                >
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start mb-2">
                      <span className="text-white bg-green-500 rounded-full p-1 mr-2 mt-1">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          version="1.2"
                          baseProfile="tiny"
                          viewBox="0 0 24 24"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}
                className="mt-8 self-start bg-[#0649E7] text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-800 transition"
              >
                Get Started →
              </button>
            </div>
          ))}
        </div>
        <div
          className="bg-[#064ae7] w-full rounded-2xl p-8 text-white flex flex-col md:flex-row justify-between items-start"
          style={{ padding: "2rem" }}
        >
          <div className="mb-6 md:mb-0 w-full md:w-2/3">
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 className="text-2xl font-semibold mb-4">{advance.title}</h3>
              <p className="text-xs">
                Top-tier support for serious job hunters
              </p>
            </div>
            <hr className="w-full md:w-96 border-[#D5D5D5]" />
            <div
              className="mt-8 mb-4 text-sm flex flex-col md:flex-wrap md:flex-row md:gap-5"
              style={{ marginTop: "2rem", marginBottom: "1rem" }}
            >
              {advance.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center mb-2 md:mb-0 md:w-1/3"
                >
                  <span
                    className="text-white bg-green-500 rounded-full flex justify-center items-center mr-2"
                    style={{ marginTop: "0px", marginRight: "10px" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                    </svg>
                  </span>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-fit flex flex-col items-center gap-4 justify-between md:self-stretch text-center mt-8 md:mt-0">
            <div className="text-4xl font-bold mb-4 md:mb-2">
              {advance.price}
              <span className="text-base font-medium">{advance.period}</span>
            </div>
            <div>
              <Button />
            </div>
          </div>
        </div>

        <hr style={{ margin: "3rem 0rem", backgroundColor: "#fefefe" }} />
        <h2 className="text-2xl font-semibold text-[#0649E7] text-left mb-12">
          Resume Building & Coaching
        </h2>
        <p className="text-[#0649E7] text-sm">
          Let's talk about where you're headed — and how your resume can get you
          there.
        </p>
        <p className="text-[#0649E7] text-sm font-bold">
          Schedule a call to get started.
        </p>
        <div
          className="flex flex-col md:flex-row items-center md:items-stretch md:flex justify-center gap-8 mb-16"
          style={{ marginBottom: "2rem", padding: "2.5rem 0rem" }}
        >
          <div
            className="border border-[#0649E7] rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition w-xs"
            style={{ padding: "1rem" }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#0649e7] mb-2">
                Resume Rebuild
              </h3>
              <p
                className="text-[#0649e7]  text-sm mb-6"
                style={{ marginBottom: "1.5rem" }}
              >
                Crafted for senior to VP-level professionals ready for their
                next big step.
              </p>
              <div
                className="text-[#0649e7] font-bold text-4xl mb-2"
                style={{ marginBottom: "1.5rem" }}
              >
                $1000 <span className="text-base font-medium">one time</span>
              </div>
              <hr className="my-6 border-[#D5D5D5]" />
              <ul
                className="space-y-3 text-blue-700 text-sm flex flex-col gap-2"
                style={{ marginTop: "1rem" }}
              >
                <li className="flex items-start">
                  <span
                    className="text-white bg-green-500 rounded-full"
                    style={{ marginTop: "0px", marginRight: "10px" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                    </svg>
                  </span>
                  3× 30-min coaching
                </li>
                <li className="flex items-start">
                  <span
                    className="text-white bg-green-500 rounded-full"
                    style={{ marginTop: "0px", marginRight: "10px" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                    </svg>
                  </span>
                  Focused on storytelling, not just formatting
                </li>
                <li className="flex items-start">
                  <span
                    className="text-white bg-green-500 rounded-full"
                    style={{ marginTop: "0px", marginRight: "10px" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                    </svg>
                  </span>
                  Analyst + full application team on Pacific hours
                </li>
                <li className="flex items-start">
                  <span
                    className="text-white bg-green-500 rounded-full"
                    style={{ marginTop: "0px", marginRight: "10px" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                    </svg>
                  </span>
                  Tailored to your target industry, company, or role
                </li>
                <li className="flex items-start">
                  <span
                    className="text-white bg-green-500 rounded-full"
                    style={{ marginTop: "0px", marginRight: "10px" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                    </svg>
                  </span>
                  work with our co-founder (ex-Google, JP Morgan)
                </li>
                <li className="flex items-start">
                  <span
                    className="text-white bg-green-500 rounded-full"
                    style={{ marginTop: "0px", marginRight: "10px" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                    </svg>
                  </span>
                  Executive coaching from UC Berkeley alum with 10+ yrs
                  experience
                </li>
                <li className="flex items-start">
                  <span
                    className="text-white bg-green-500 rounded-full"
                    style={{ marginTop: "0px", marginRight: "10px" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                    </svg>
                  </span>
                  Rebuild portfolio available upon request
                </li>
              </ul>
            </div>
            <button
              style={{ marginTop: "2rem", padding: "0.5rem 1rem" }}
              className="self-start mt-8 bg-blue-700 text-white py-2 rounded-full font-semibold hover:bg-blue-800 transition"
            >
              Get Started →
            </button>
          </div>
          <div
            className="relative border border-[#0649E7] rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition w-xs"
            style={{ padding: "1rem" }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-[#0649e7] mb-2">
                Interview Prep
              </h3>
              <p
                className="text-[#0649e7]  text-sm mb-6"
                style={{ marginBottom: "2rem" }}
              >
                Two sessions to sharpen your story, confidence, and clarity —
                fast.
              </p>
              <div
                className="text-[#0649e7] font-bold text-4xl mb-2"
                style={{ marginBottom: "1.5rem" }}
              >
                $500 <span className="text-base font-medium">one time</span>
              </div>
              <hr className="my-6 border-[#D5D5D5]" />
              <ul
                className="space-y-3 text-blue-700 text-sm flex flex-col gap-2"
                style={{ marginTop: "1rem" }}
              >
                <li className="flex items-start">
                  <span
                    className="text-white bg-green-500 rounded-full"
                    style={{ marginTop: "0px", marginRight: "10px" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                    </svg>
                  </span>
                  live coaching with our co-founder
                </li>
                <li className="flex items-start">
                  <span
                    className="text-white bg-green-500 rounded-full"
                    style={{ marginTop: "0px", marginRight: "10px" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                    </svg>
                  </span>
                  Real-time, practical feedback
                </li>
                <li className="flex items-start">
                  <span
                    className="text-white bg-green-500 rounded-full"
                    style={{ marginTop: "0px", marginRight: "10px" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                    </svg>
                  </span>
                  clarity, empathy & executive presence
                </li>
                <li className="flex items-start">
                  <span
                    className="text-white bg-green-500 rounded-full"
                    style={{ marginTop: "0px", marginRight: "10px" }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.2"
                      baseProfile="tiny"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                    </svg>
                  </span>
                  and leadership roles — technical & non-technical
                </li>
              </ul>
            </div>

            <button
              style={{ marginTop: "2rem", padding: "0.5rem 1rem" }}
              className="self-start bg-blue-700 text-white py-2 rounded-full font-semibold hover:bg-blue-800 transition"
            >
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePlans;
