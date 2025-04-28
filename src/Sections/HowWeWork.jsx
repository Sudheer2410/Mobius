const steps = [
  {
    number: "1",
    text: "Submit Intake Form",
  },
  {
    number: "2",
    text: "We do the search and curation for list of jobs",
  },
  {
    number: "3",
    text: "You approve, we do the tedious part (applying)",
  },
  {
    number: "4",
    text: "You get the interviews",
  },
];

function ServicePage() {
  return (
    <div
      className="max-w-[1500px] w-full flex justify-center"
      style={{ padding: "3rem 2.5rem" }}
    >
      <div className="sm:w-full md:max-w-4xl gap-32 ">
        <h1 className="text-[#0649e7] text-lg">How we work?</h1>
        <div
          className="grid grid-cols-2 items-center md:grid-cols-4 gap-8"
          style={{ marginTop: "1.5rem" }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-wrap flex-col gap-3 items-start"
            >
              <div className="w-12 h-12 flex items-center justify-center border-1 border-[#022183] rounded-full text-black text-lg font-semibold">
                {step.number}
              </div>
              <div className="w-full h-0.5 bg-blue-600 mt-4 mb-6"></div>
              <p className="text-sm text-blue-800 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
