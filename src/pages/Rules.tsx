import React from 'react'
import Image from 'next/image';
import LogoImg from '../assets/TWO.png'

type Props = {}

const Rules = (props: Props) => {
      return (
        <div className="bg-[#150E28] px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10 mt-12">
            <div className="lg:ml-20 ml-4">
          <div className="mb-4"><span className="text-white lg:text-3xl text-2xl font-bold font-[Clash Display]">Rules and<br/></span><span className="text-fuchsia-500 lg:text-3xl text-2xl font-bold font-['Clash Display']">Guidelines</span></div>     
            <p className="text-white text-[12px] font-normal font-[Montserrat] leading-5 text-left">Our tech hackathon is a melting pot of visionaries, and its purpose is as
        clear as day: to shape the future. Whether you&apos;re a coding genius, a 
        design maverick, or a concept wizard, you&apos;ll have the chance to transform 
        your ideas into reality. Solving real-world problems, pushing the boundaries
        of technology, and creating solutions that can change the world,
        that&apos;s what we&apos;re all about!</p>
          </div>
          </div>
          <div>
          <Image
                  className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                  src={LogoImg}
                  alt=""
                />
          </div>
        </div>
      </div>
      );
    };

export default Rules