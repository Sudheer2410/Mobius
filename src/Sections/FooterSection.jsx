import React from "react";

function EndFooter() {
  return (
    <div
      className="flex flex-col md:flex-row gap-3 items-center justify-between bg-blue-600 text-white text-xs px-8 py-3 w-full"
      style={{ padding: "1rem 2rem" }}
    >
      <p>© 2023 Mobiusservices LLC</p>
      <div className="flex gap-6">
        <a href="#" className="hover:underline">
          Terms & Conditions
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default EndFooter;
