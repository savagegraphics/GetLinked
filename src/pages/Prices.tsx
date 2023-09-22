import Image from "next/image";
import React from "react";
import BackG from '../assets/premium.png'

const Prices = () => {
  const backgroundImageUrl = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSVj8y0wZUMpUur_ADjEtK4qT6xc3QXc6Bn_gw4Kv6MvhLyH2-j';

  const sectionStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover', // You can adjust this as needed
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };
  

  return (
    <section style={sectionStyle}>
      <div className="relative px-10 md:px-32 lg:grid grid-cols-2 py-20 items-center bg-center bg-cover">
        <div>
          <Image
            src="/trophy.svg"
            alt="Vercel Logo"
            width={548}
            height={718}
            priority
          />
        </div>
        <div className="space-y-14">
          <div className="pl-16 space-y-4">
            <div className="pl-14 text-white">
            <div className="PrizesAndRewards"><span className="text-white text-3xl font-bold font-['Clash Display']">Prizes and <br/></span><span className="text-fuchsia-500 text-3xl font-bold font-['Clash Display']">Rewards</span></div>
              <p className="max-w-[330px]">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
          </div>
          <div className="min-w-[45vw]">
            <Image
              src="/medals.svg"
              alt="Vercel Logo"
              width={664}
              height={563}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices