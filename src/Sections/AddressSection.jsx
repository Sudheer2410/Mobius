import Gruop21 from "../assets/Group 21.png";

function FooterPage() {
  return (
    <div className="max-w-[1500px] w-full" style={{ padding: "3rem 2.5rem" }}>
      <div className="flex flex-col gap-4">
        <img src={Gruop21} alt="MobiusEngine Logo" className="w-16" />
        <p className="text-[#155DFC]">MobuisEngine</p>
        <hr className="w-52 border-[#D5D5D5]" />
      </div>
      <div
        className="flex items-start justify-between w-full max-w-7xl mx-auto p-8"
        style={{ marginTop: "1rem" }}
      >
        <div className="flex flex-wrap items-center gap-20">
          <div className="flex flex-col gap-1 text-blue-600 text-sm">
            <h4 className="font-semibold">Address</h4>
            <p>
              1875 Mission St Ste 103 #450
              <br />
              San Francisco, CA 94003
            </p>
          </div>
          <div className="flex flex-col gap-1 text-blue-600 text-sm">
            <h4 className="font-semibold">Email</h4>
            <a
              href="mailto:finance@mobiusengine.ai"
              className="hover:underline"
            >
              finance@mobiusengine.ai
            </a>
          </div>
          <div className="flex flex-col gap-1 text-blue-600 text-sm">
            <h4 className="font-semibold">Telephone</h4>
            <a href="tel:650-889-6026" className="hover:underline">
              650-889-6026
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-blue-600 text-sm items-end">
          <h4 className="font-semibold">Socials</h4>
          <div className="flex gap-2">
            <div className="h-8 w-8 border border-[#155DFC] rounded-full flex items-center justify-around text-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"
                ></path>
              </svg>
            </div>
            <div className="h-8 w-8 border border-[#155DFC] rounded-full flex items-center justify-around text-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
