"use client";

import Image from "next/image";
import Input from "./component/Input";

const Home = () => {
  return (
    <div className="flex bg-cover bg-slate-300 h-screen">
      <div className="bg-slate-200 rounded-lg flex self-center m-auto w-11/12 h-5/6">
        {/* Left side */}
        <div className="rounded-lg bg-white w-2/7">
          <div className="flex flex-col p-6">
            <Input />
            <Image
              src="/assets/cloudy.png"
              width={200}
              height={200}
              alt="Picture of the author"
              className="mb-10 "
            />
            <h1>Temp</h1>
            <h1>Day</h1>
          </div>
        </div>
        {/* Right side */}
        <div></div>
      </div>
    </div>
  );
};

export default Home;
