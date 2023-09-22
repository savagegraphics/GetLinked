import React from 'react'
import Image from 'next/image';
import LogoImg from '../assets/FOUR.png'

type Props = {}

const Rules = (props: Props) => {
      return (
        <div className="bg-[#150E28] px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:ml-8">
        <div className='lg:ml-12'>
          <Image
                  className="object-contain w-full h-56 rounded shadow-lg sm:h-96"
                  src={LogoImg}
                  alt=""
                />
          </div>
          <div className="lg:pr-10 lg:mt-20">
            <div className="lg:mr-20 ml-4">
            <div className="mb-4"><span className="text-white lg:text-3xl text-2xl whitespace-nowrap font-bold font-[Clash Display]">Introduction to getlinked<br/></span><span className="text-fuchsia-500 lg:text-3xl text-2xl font-bold font-[Clash Display]">tech Hackathon 1.0</span></div>   
         <p className="text-white text-[12px] font-normal font-[Montserrat] leading-5 text-left">Our tech hackathon is a melting pot of visionaries, and its purpose is as
        clear as day: to shape the future. Whether you're a coding genius, a 
        design maverick, or a concept wizard, you'll have the chance to transform 
        your ideas into reality. Solving real-world problems, pushing the boundaries
        of technology, and creating solutions that can change the world,
        that's what we're all about!</p>
          </div>
          </div>
        </div>
      </div>
      );
    };

export default Rules