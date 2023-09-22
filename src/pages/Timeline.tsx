import Image from "next/image";
import React from "react";

const Timeline = () => {
  return (
    <section>
      <div className="bg-[#150E28] px-10 md:px-36 flex flex-col justify-center items-center pb-10 text-center space-y-20 py-16">
        <div className="space-y-2">
		<div className="Timeline text-white text-3xl font-bold font-['Clash Display']">Timeline</div>
		<div className="HereIsTheBreakdownOfTheTimeWeAnticipateUsingForTheUpcomingEvent text-center text-white text-sm font-normal font-['Montserrat'] leading-normal">Here is the breakdown of the time we anticipate <br/>using for the upcoming event.</div>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/Timeline.svg"
            alt="Vercel Logo"
            width={1233}
            height={1084}
          />
        </div>
        <div className=" lg:hidden">
          <Image
            src="/mobile-timeline.svg"
            alt="Vercel Logo"
            width={933}
            height={1084}
          />
        </div>
      </div>
    </section>
  );
};

export default Timeline;