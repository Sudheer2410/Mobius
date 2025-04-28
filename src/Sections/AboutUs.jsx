import maleImg from "../assets/ashwin.png";
import femaleImg from "../assets/nicole.png";
const team = [
  {
    name: "Ashwin",
    title: "Founder of MobiusEngine",
    description:
      "Ashwin is an accomplished entrepreneur with a track record of success. With over a decade of international experience across APAC, Ashwin has led products and GTM efforts. He holds a degree from New York University.",
    descriptionTwo:
      "Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.",
    linkedin: "#", // put actual LinkedIn link
    image: maleImg, // put actual image path
  },
  {
    name: "Nicole",
    title: "Executive Coach",
    description:
      "Nicole is an Executive coach at Mobius specializing in resume builds and career advisory. ",
    descriptionTwo:
      "With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.",
    linkedin: "#",
    image: femaleImg,
  },
];

const AboutUs = () => {
  return (
    <div
      className="max-w-[1500px] w-full flex justify-center about-container"
      style={{ padding: "5rem 2.5rem" }}
    >
      <div className="sm:w-full md:max-w-4xl">
        <h2
          className="text-2xl text-white font-semibold"
          style={{ marginBottom: "2rem" }}
        >
          About Us
        </h2>
        <div className="flex flex-col items-center">
          <div className="text-white w-full max-w-2xl">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-center gap-8"
                style={{ marginBottom: "2.5rem" }}
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 object-contain bg-[#FEFEFE] rounded-full"
                    style={{ paddingTop: "5px" }}
                  />
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 right-0 bg-white/35 border border-white w-8 h-8 flex items-center justify-center rounded-full text-white"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                    </svg>
                  </a>
                </div>

                <div className="flex-1/2">
                  <p className="text-xs text-center md:text-left">
                    <span className="font-bold">{member.name}</span>{" "}
                    {member.description}
                  </p>
                  <p
                    className="text-xs text-center md:text-left"
                    style={{ marginTop: "10px" }}
                  >
                    Ashwin's vision with Mobius is to give job seekers a
                    significant advantage in securing the roles of their dreams.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-xs text-white">
            <p
              className="text-center md:text-left"
              style={{ marginBottom: "10px" }}
            >
              <a href="#" className="hover:underline flex items-center">
                Learn more about our Board of Advisors{" "}
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
            </p>
            <p className="flex items-center justify-center sm:justify-start">
              <a href="#" className="hover:underline flex items-center">
                Follow us on our LinkedIn page{" "}
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;