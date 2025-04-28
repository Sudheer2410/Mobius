function ContactPage() {
  return (
    <div
      className="max-w-[1500px] w-full flex justify-center"
      style={{ padding: "0rem 2.5rem" }}
    >
      <div
        className="flex flex-col md:flex-row items-center justify-between bg-blue-600 text-white rounded-2xl p-6 h-40 w-full max-w-4xl"
        style={{ padding: "1rem" }}
      >
        <p className="text-lg font-medium uppercase">
          Still have <br /> doubts?
        </p>
        <p className="text-4xl font-semibold">Contact us</p>
        <button className="w-14 h-14 rounded-full bg-white text-[#0649E7] flex items-center justify-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="text-3xl"
          >
            <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ContactPage;
