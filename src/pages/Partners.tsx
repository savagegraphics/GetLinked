import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <section>
      <div className="bg-[#150E28] px-10 md:px-32 py-24">
        <div className="space-y-4 flex flex-col items-center justify-center">
          <div className="space-y-3 text-center">
          <div className="PartnersAndSponsors text-white text-3xl font-bold font-['Clash Display'] leading-7">Partners and Sponsors</div>
          <div className="GetlinkedHackathon10IsHonoredToHaveTheFollowingMajorCompaniesAsItsPartnersAndSponsors text-center text-white text-sm font-normal font-['Montserrat'] leading-7">Getlinked Hackathon 1.0 is honored to have the following major <br/>companies as its partners and sponsors</div>
          </div>

          <div className="min-w-[45vw]">
            <Image
              src="/sponsors.svg"
              alt="Vercel Logo"
              width={1255}
              height={603}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;