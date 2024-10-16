import React from "react";

const data = [
  ["Kind", "7.3", "73", "red"],
  ["Confident", "8.1", "81", "orange"],
  ["Professional", "5.0", "50", "purple"],
  ["Smart", "7.2", "72", "blue"],
  ["Competent", "6.3", "63", "green"],
];

const Header = () => {
  return (
    <header className="min-h-[50vh] bg-white w-full flex md:flex-row flex-col-reverse p-4 gap-8 lg:p-20">
      {/* <img
        src="/starsV.png"
        className="hidden lg:block absolute h-[500px] top-0 left-52 z-0"
        alt=""
      />
      <img
        src="/starsV.png"
        className="absolute h-[500px] bottom-0 left-[530px] z-0"
        alt=""
      /> */}
      <div className="w-full z-20 px-3 lg:px-40 flex justify-center">
        <div className="lg:w-[70%] p-5 bg-white flex flex-col gap-3 shadow-xl shadow-slate-300 rounded-3xl">
          <img src="/pic.png" className="rounded-xl w-full mx-auto" alt="" />
          <div className="w-full bg-slate-100 px-4 py-3 rounded-xl font-semibold flex items-center justify-center cursor-pointer">
            20 Votes
          </div>
          <div className="w-full flex flex-col gap-2">
            {data.map((el) => (
              <div className="w-full flex flex-col" key={el[0]}>
                <div className="bg-slate-100 relative py-[10px] rounded-full">
                  <div
                    style={{ width: `${el[2]}%` }} // Dynamic width
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${
                      el[3] === "red"
                        ? "from-red-300 to-red-600"
                        : el[3] === "orange"
                        ? "from-orange-300 to-orange-600"
                        : el[3] === "purple"
                        ? "from-purple-300 to-purple-600"
                        : el[3] === "blue"
                        ? "from-blue-300 to-blue-600"
                        : "from-green-300 to-green-600"
                    }`}
                  ></div>
                </div>
                <div className="w-full flex justify-between">
                  <span>{el[0]}</span>
                  <span>{el[1]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex-col px-4 flex gap-4">
        <h1 className="lg:text-6xl inline-block p-2 text-5xl text-center lg:text-left font-racha tracking-wide font-extrabold bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
          What are your photos saying about you?
        </h1>
        <h3 className="text-2xl text-center font-racha lg:text-left">
          Stop guessing, start testing. Choose your business, social, and dating
          photos with the world's #1 photo testing tool.
        </h3>
        <div className="text-3xl text-accent font-inter font-semibold">
          <h4 className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            How Does It Work?
          </h4>
          <ul className="my-2 flex flex-col gap-6 text-lg text-secondary font-inter font-semibold">
            <li className="w-full py-3 shadow-lg border border-comp items-center flex px-4 rounded-2xl">
              <span># Upload Your Photo – Simple as that. 📸</span>
            </li>
            <li className="w-full py-3 shadow-lg  border border-comp items-center flex px-4 rounded-2xl">
              <span>
                # Sit Back & Relax – Let the community share their honest
                feedback. 🛋️
              </span>
            </li>
            <li className="w-full py-3 shadow-lg  border border-comp items-center flex px-4 rounded-2xl">
              <span>
                # Out of Credits? No Problem – Review others’ photos to earn
                more! 🔄
              </span>
            </li>
            <li className="w-full py-3 shadow-lg border border-comp items-center flex px-4 rounded-2xl">
              <span>
                # Get Your Results – See what your photo says about you. 🎯
              </span>
            </li>
          </ul>
        </div>
        <button className="py-5 px-5 bg-gradient-to-r text-xl font-roboto font-semibold opacity-70 hover:opacity-100 transition-all duration-300 text-white rounded-xl from-orange-500 to-pink-500 w-56">
          Test My Photo
        </button>
      </div>
    </header>
  );
};

export default Header;
