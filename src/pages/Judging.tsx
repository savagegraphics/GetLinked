import React from 'react'
import Image from 'next/image';
import LogoImg from '../assets/EIGHT.png'

type Props = {}

const Rules = (props: Props) => {
      return (
        <div className="overflow-hidden bg-[#150E28] px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:ml-8">
        <div className='lg:ml-12 lg:mt-24'>
          <Image
                  className="object-contain w-full h-56 rounded shadow-lg sm:h-96"
                  src={LogoImg}
                  alt=""
                />
          </div>
          <div className="lg:pr-10">
            <div className="lg:mr-20  lg:mx-0 mx-6">
            <div className="mb-6"><span className="text-white text-3xl font-bold font-['Clash Display']">Judging Criteria<br/></span><span className="text-fuchsia-500 text-3xl font-bold font-['Clash Display']">Key attributes</span></div>
         <div className="">
           <span className="text-pink-500 text-base font-bold font-['Montserrat'] ">Innovation and Creativity <span className='text-white'>:</span>
                <span className="text-white text-[12px] font-normal font-['Montserrat'] ml-2">
                    Chase ball of string eat plants, meow, and throw up because I ate
                    plants going to catch the red dot today going to catch the red dot
                    today. I could pee on this if I had the energy.
                  </span>
                  </span>
                  </div>
                  <div className="">
                  <span className="text-pink-500 text-base font-bold font-['Montserrat'] ">Functionality <span className='text-white'>:</span>
                <span className="text-white text-[12px] font-normal font-['Montserrat'] ml-2">
                Assess how well the solution works. Does it peform it intended 
                functions effectively and without major issues? Judges would 
                consider the completeness and robustness of the solution.
                  </span>
                  </span>
                  </div>
                <div className=""> <span className="text-pink-500 text-base font-bold font-['Montserrat'] ">Impact and Relevance <span className='text-white'>:</span>
                <span className="text-white text-[12px] font-normal font-['Montserrat'] ml-2">
                Determine the potential impact of the solution<br/>in the real world. Does it address a significant problem, 
                and is it relevant to the target audience? Judges would assess the
                potential social, economic, or environmental benefits.
                  </span>
                  </span>
                  </div>
                 <div className=""><span className="text-pink-500 text-base font-bold font-['Montserrat'] ">Technical Complexity <span className='text-white'>:</span>
                <span className="text-white text-[12px] font-normal font-['Montserrat'] ml-2">
                 Evaluate the technical sophistication of the solution.
                 Judges would consider the complexity of the code, the use of advanced
                 technologies or algorithms, and the scalability of the solution.
                  </span>
                  </span>
                  </div> 
                <div className="">  <span className="text-pink-500 text-base font-bold font-['Montserrat'] ">Adherence to Hackathon Rules <span className='text-white'>:</span>
                <span className="text-white text-[12px] font-normal font-['Montserrat'] ml-2">
                Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines,
                 use of specific technologies or APIs, and any other competition-specific requirements.
                  </span>
                  </span>
                  </div>

            <button type="button" className="mt-4 px-6 py-1 font-semibold rounded bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 text-white">Register</button>

        </div>
          </div>
        </div>
      </div>
      );
    };

export default Rules