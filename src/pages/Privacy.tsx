import React from 'react'
import Image from 'next/image';
import KeyImg from '../assets/ONE.png'

type Props = {}

const Privacy = (props: Props) => {
        return (
          <section className='bg-[#150E28]'>
          <div className="bg-[#150E28] px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
           <div className="grid gap-10 lg:grid-cols-2">
           <div className="lg:mx-16 mx-6 lg:mb-16 mb-6">
              <div className=""><span className="text-white text-3xl font-bold font-['Clash Display']">Privacy Policy and <br/></span><span className="text-fuchsia-500 text-3xl font-bold font-['Clash Display']">Terms</span></div>
              <div className="mb-4 text-white text-opacity-75 text-sm font-normal font-['Montserrat'] leading-7">Last updated on September 12, 2023</div>
              <p className="mb-6 text-white text-[12px] font-normal font-[Montserrat] leading-5 text-left"> 
              Below are our privacy & policy, which outline a lot of goodies. <br/>
              it’s our aim to always take of our participant
                  </p>
              <div className="flex flex-col justify-between p-5 border sm:p-10">
                <div>
                  <p className="text-white mb-4 text-[12px] font-normal font-[Montserrat] leading-5 text-left"> At getlinked tech Hackathon 1.0, we value your privacy
                   and are committed to protecting your personal information.
                   This Privacy Policy outlines how we collect, use, disclose, 
                   and safeguard your data when you participate in our tech 
                   hackathon event. By participating in our event, you consent 
                   to the practices described in this policy.
                  </p>
                  <div className="LicensingPolicy text-fuchsia-500 text-base font-bold font-['Montserrat'] leading-9">Licensing Policy</div>
                  <div className="HereAreTermsOfOurStandardLicense text-white text-sm font-bold font-['Montserrat'] leading-loose">Here are terms of our Standard License:</div>
                 
                  <p className="flex mb-4 text-white text-[12px] font-normal font-[Montserrat] leading-5 text-left"> 
                  <svg className='mr-2' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100"/>
<path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2"/>
</svg>
 The Standard License grants you a non-exclusive right to
                   navigate and register for our event
                  </p>
                  <p className="flex mb-4 text-white text-[12px] font-normal font-[Montserrat] leading-5 text-left"> 
                  <svg className='mr-2' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100"/>
<path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2"/>
</svg>
 You are licensed to use the item available at any free source
                 sites, for your project developement
                  </p>
                  <button
  type="button"
  className="mx-auto block px-6 py-1 font-semibold rounded bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 text-white"
>
  Register
</button>

                </div>
                
              </div>
          </div>
          <div className='lg:mt-2 mt-4 lg:mb-48 mb-6 relative flex items-center'>
  <svg
    width="80%"
    height="auto"
    viewBox="0 0 530 648"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  ><path d="M530 294.545C530 458.018 416.933 610.887 265 648C113.067 610.887 0 458.018 0 294.545V117.818L265 0L530 117.818V294.545ZM265 589.091C375.417 559.636 471.111 428.269 471.111 301.025V156.109L265 64.2109L58.8889 156.109V301.025C58.8889 428.269 154.583 559.636 265 589.091ZM347.444 294.545V250.364C347.444 209.127 306.222 176.727 265 176.727C223.778 176.727 182.556 209.127 182.556 250.364V294.545C164.889 294.545 147.222 312.218 147.222 329.891V432.982C147.222 453.6 164.889 471.273 182.556 471.273H344.5C365.111 471.273 382.778 453.6 382.778 435.927V332.836C382.778 312.218 365.111 294.545 347.444 294.545ZM309.167 294.545H220.833V250.364C220.833 226.8 241.444 212.073 265 212.073C288.556 212.073 309.167 226.8 309.167 250.364V294.545Z" fill="url(#paint0_linear_110_134)" fill-opacity="0.14"/>
<defs>
<linearGradient id="paint0_linear_110_134" x1="265" y1="0" x2="265" y2="648" gradientUnits="userSpaceOnUse">
<stop stop-color="#903AFF"/>
<stop offset="1" stop-color="#FF26B9"/>
</linearGradient>
</defs>
</svg>
<Image
    className="object-contain w-full h-56 rounded shadow-lg sm:h-96 absolute lg:top-[18rem] top-[8rem] left-0"
    src={KeyImg}
    alt=""
  />
          </div>
          </div>
          </div>
          </section>
        );
      };

export default Privacy