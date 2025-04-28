import Button from "../components/PrimaryButton";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Holly",
      role: "senior executive",
      story: "got over 10 job interviews and an offer she accepted",
      videoLink: "#", 
    },
    {
      name: "Holly",
      role: "senior executive",
      story: "got over 10 job interviews and an offer she accepted",
      videoLink: "#",
    },
    {
      name: "Holly",
      role: "senior executive",
      story: "got over 10 job interviews and an offer she accepted",
      videoLink: "#",
    },
  ];

  return (
    <div
      className="max-w-[1500px] w-full flex justify-center"
      style={{ padding: "5rem 2.5rem" }}
    >
      <div className="sm:w-full md:max-w-4xl">
        <h2
          className="text-2xl font-semibold mb-12"
          style={{ marginBottom: "2.5rem" }}
        >
          What our clients have to say
        </h2>

        <div
          className="grid md:grid-cols-3 gap-8"
          style={{ marginBottom: "30px" }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="flex flex-col items-center justify-center bg-white h-48 relative">
                <a href={item.videoLink} className="text-blue-600">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="bg-blue-600 text-white p-4 h-28 rounded-b-2xl relative">
                <p className="text-sm leading-relaxed">
                  {item.name} is a{" "}
                  <span className="font-semibold">{item.role}</span> who{" "}
                  {item.story}
                </p>
                <div className="absolute bottom-4 right-4">
                  <div className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.5 4a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V4.5H7a.5.5 0 01-.5-.5z"
                        clip-rule="evenodd"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        d="M12.354 3.646a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="#"
            className="flex items-center gap-1 border border-blue-600 text-blue-600 px-6 py-2 text-xs md:text-sm rounded-full hover:bg-blue-600 hover:text-white transition"
            style={{ padding: "0.3rem 1.5rem" }}
          >
            More customer testimonials{" "}
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6.5 4a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V4.5H7a.5.5 0 01-.5-.5z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M12.354 3.646a.5.5 0 010 .708l-9 9a.5.5 0 01-.708-.708l9-9a.5.5 0 01.708 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="flex items-center gap-1"
            style={{ padding: "0.3rem 1.5rem" }}
          >
            <button
              style={{ padding: "0.5rem 1rem" }}
              className="mt-8 self-start bg-[#0649E7] text-white py-2 rounded-full font-semibold hover:bg-blue-800 transition"
            >
              Get Started →
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
