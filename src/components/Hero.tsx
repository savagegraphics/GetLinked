import React, { useState } from 'react';
import HeroImg from '../assets/SIX.png'
import HeroImg1 from '../assets/FIVE.png'
import Chain from '../assets/chain.png'
import Fire from '../assets/1f4a5 (1).png'
import Globe from '../assets/Creative 1.png'
import Star from '../assets/star (1).png'
import Starr from '../assets/star.png'
import Image from 'next/image';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative bg-[#150E28]">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a href="#" >
		  <svg width="120" height="32" viewBox="0 0 170 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.144 22.984C3.744 22.984 0.72 19.888 0.72 14.704C0.72 9.592 3.96 6.496 9.324 6.496C12.996 6.496 15.444 7.972 15.948 11.104H16.308V6.856H22.644V21.94C22.644 28.42 18.792 31.48 11.808 31.48C5.472 31.48 1.8 28.816 1.8 24.064H8.568C8.568 25.54 8.748 25.9 12.276 25.9C15.192 25.9 15.876 25.468 15.876 22.408V18.592H15.516C15.048 21.22 13.14 22.984 9.144 22.984ZM7.56 14.704C7.56 16.504 8.424 17.188 11.592 17.188C14.616 17.188 15.876 16.828 15.876 14.92V14.668C15.876 12.724 14.616 12.328 11.592 12.328C8.424 12.328 7.56 12.94 7.56 14.704ZM34.9265 25.36C28.7705 25.36 24.4505 22.732 24.4505 15.928C24.4505 10.024 28.7345 6.496 34.7825 6.496C41.0465 6.496 45.0425 9.628 45.0425 15.46C45.0425 16.072 45.0065 16.54 44.9345 17.188H30.7145C30.8225 19.384 31.7945 19.996 34.6745 19.996C37.4105 19.996 38.1305 19.528 38.1305 18.448V18.052H44.8985V18.484C44.8985 22.516 41.0465 25.36 34.9265 25.36ZM34.6385 11.68C32.1545 11.68 31.1105 12.22 30.8225 13.768H38.4905C38.2385 12.22 37.1585 11.68 34.6385 11.68ZM60.4254 25H55.6734C51.1374 25 48.4374 22.804 48.4374 18.088V12.4H45.7734V6.856H48.4374V3.724H55.2054V6.856H60.4254V12.4H55.2054V17.116C55.2054 18.556 55.6374 18.916 57.1854 18.916H60.4254V25Z" fill="white"/>
<path d="M68.8089 25H62.0409V0.879999H68.8089V25ZM77.7386 5.2H70.9706V0.879999H77.7386V5.2ZM77.7386 25H70.9706V6.856H77.7386V25ZM86.6683 25H79.9003V6.856H86.2363V12.364H86.5963C86.9923 9.34 88.9723 6.496 93.8323 6.496C98.7283 6.496 101.032 9.448 101.032 13.372V25H94.2643V15.856C94.2643 13.336 93.3283 12.544 90.3763 12.544C87.3883 12.544 86.6683 13.3 86.6683 15.64V25ZM109.801 25H103.033V0.879999H109.801V13.156H113.005L117.001 6.856H124.993L118.549 15.676L124.885 25H116.893L113.077 19.204H109.801V25ZM135.825 25.36C129.669 25.36 125.349 22.732 125.349 15.928C125.349 10.024 129.633 6.496 135.681 6.496C141.945 6.496 145.941 9.628 145.941 15.46C145.941 16.072 145.905 16.54 145.833 17.188H131.613C131.721 19.384 132.693 19.996 135.573 19.996C138.309 19.996 139.029 19.528 139.029 18.448V18.052H145.797V18.484C145.797 22.516 141.945 25.36 135.825 25.36ZM135.537 11.68C133.053 11.68 132.009 12.22 131.721 13.768H139.389C139.137 12.22 138.057 11.68 135.537 11.68ZM155.996 25.36C150.452 25.36 147.392 21.796 147.392 15.928C147.392 10.024 150.38 6.496 155.708 6.496C159.992 6.496 162.008 8.512 162.548 11.536H162.908V0.879999H169.676V25H163.34V20.104H162.98C162.404 23.704 160.244 25.36 155.996 25.36ZM154.232 15.928C154.232 18.34 155.312 19.168 158.444 19.168C161.468 19.168 162.908 18.592 162.908 15.964V15.712C162.908 13.156 161.468 12.652 158.444 12.652C155.312 12.652 154.232 13.516 154.232 15.928Z" fill="#D434FE"/>
</svg>
          </a>

          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className='text-white hover:text-gray-400'
			  aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
<path d="M1.35714 0H8.14286C8.50279 0 8.84799 0.1475 9.1025 0.410051C9.35701 0.672601 9.5 1.0287 9.5 1.4C9.5 1.7713 9.35701 2.1274 9.1025 2.38995C8.84799 2.6525 8.50279 2.8 8.14286 2.8H1.35714C0.997206 2.8 0.652012 2.6525 0.397498 2.38995C0.142984 2.1274 0 1.7713 0 1.4C0 1.0287 0.142984 0.672601 0.397498 0.410051C0.652012 0.1475 0.997206 0 1.35714 0ZM10.8571 11.2H17.6429C18.0028 11.2 18.348 11.3475 18.6025 11.6101C18.857 11.8726 19 12.2287 19 12.6C19 12.9713 18.857 13.3274 18.6025 13.5899C18.348 13.8525 18.0028 14 17.6429 14H10.8571C10.4972 14 10.152 13.8525 9.8975 13.5899C9.64298 13.3274 9.5 12.9713 9.5 12.6C9.5 12.2287 9.64298 11.8726 9.8975 11.6101C10.152 11.3475 10.4972 11.2 10.8571 11.2ZM1.35714 5.6H17.6429C18.0028 5.6 18.348 5.7475 18.6025 6.01005C18.857 6.2726 19 6.6287 19 7C19 7.3713 18.857 7.7274 18.6025 7.98995C18.348 8.2525 18.0028 8.4 17.6429 8.4H1.35714C0.997206 8.4 0.652012 8.2525 0.397498 7.98995C0.142984 7.7274 0 7.3713 0 7C0 6.6287 0.142984 6.2726 0.397498 6.01005C0.652012 5.7475 0.997206 5.6 1.35714 5.6Z" fill="white"/>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`${
            isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-[#150E28] md:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <a
              className="my-2 text-white text-base font-normal font-[Montserrat] md:mx-4 md:my-0"
              href="#"
            >
              Home
            </a>
            <a
              className="my-2 text-white text-base font-normal font-[Montserrat] md:mx-4 md:my-0"
              href="#"
            >
              Shop
            </a>
            <a
              className="my-2 text-white text-base font-normal font-[Montserrat] md:mx-4 md:my-0"
              href="#"
            >
              Contact
            </a>
            <a
              className="my-2 text-white text-base font-normal font-[Montserrat] md:mx-4 md:my-0"
              href="#"
            >
              About
            </a>
          </div>

          <div className="flex justify-center md:block ml-0 lg:ml-24">
		  <button type="button" className="px-6 py-1 font-semibold rounded bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 text-white">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <header className="bg-[#150E28]">
      <Navbar />
      <hr className="border-gray-800 w-full" />


    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-2">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
        <div className="lg:max-w-lg">
  <div className="relative">
  <Image
    className="w-[16px] h-[16px] lg:w-[23px] lg:h-[26px] absolute top-[-50px] left-[50px] lg:top-[-150px] lg:left-[50px]"
    src={Star}
    alt="Overlay Image 2"
    style={{ flex: 'none' }}
  />
</div>
<div className="relative">
  <Image
    className="w-[16px] h-[16px] lg:w-[23px] lg:h-[26px] absolute top-[-50px] right-[50px] lg:top-[-100px] lg:right-[-80px]"
    src={Starr}
    alt="Overlay Image 2"
    style={{ flex: 'none' }}
  />
</div>
<div className="relative">
  <Image
    className="w-[36px] h-[36px] lg:w-[53px] lg:h-[66px] absolute bottom-8 right-28"
    src={Globe}
    alt="Overlay Image"
    style={{ flex: 'none' }}
  />
  <h1 className="text-3xl font-bold font-[Clash Display] text-white lg:text-[3rem]">
    getlinked Tech
  </h1>
</div>

	<div className="flex items-center">
  <h1 className="text-3xl font-bold font-[Clash Display] text-white lg:text-[3rem]">
    Hackathon{' '}
    <span className="text-[#D434FE]">1.0 </span>
  </h1>
  <div className="flex items-center space-x-2"> {/* Added a flex container */}
    <Image
      className="w-[36px] h-[36px] lg:w-[66px] lg:h-[76px]"
      src={Chain}
      alt="Overlay Image"
      style={{ flex: 'none' }} 
    />
    <Image
      className="w-[36px] h-[36px] lg:w-[66px] lg:h-[76px]"
      src={Fire}
      alt="Overlay Image"
      style={{ flex: 'none' }} // Prevents the image from growing
    />
  </div>
</div>

    <p className="mt-3 lg:mt-1 text-sm text-white mb-4">
      Participate in getlinked tech Hackathon 2023 stand <br/>
      a chance to win a Big prize
    </p>
    <button type="button" className="px-6 py-2 font-semibold rounded bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 text-white">Register</button>
  
    <div className={`mt-6 text-white font-unica-one mx-auto lg:mx-0 w-fit flex space-x-3`}>
            <div className={`flex items-baseline`}>
              <h2 className={`text-5xl`}>
                00
              </h2>
              <p className={`text-base`}>H</p>
            </div>

            <div className={`flex items-baseline`}>
              <h2 className={`text-5xl`}>
                00
              </h2>
              <p className={`text-base`}>M</p>
            </div>

            <div className={`flex items-baseline`}>
              <h2 className={`text-5xl`}>
                00
              </h2>
              <p className={`text-base`}>S</p>
            </div>
          </div>
  </div>
        </div>
        <div>
        <h1 className={`lg:text-xl text-base text-white italic font-bold w-full text-right relative lg:px-14 px-4 py-5`}>
        Igniting a Revolution in HR Innovation
        <Image
          src='/curve.svg'
          alt="Curve"
          width={253}
          height={253}
          className={`absolute w-[135px] top-[70%] lg:right-14 right-4`}
        />
      </h1><br />
      <div className="relative flex items-center justify-center w-full mt-6 lg:mt-0">
    <Image
      className="w-full h-full"
      src={HeroImg}
      alt="Catalogue-pana.svg"
    />

    {/* Image to be positioned on top */}
    <Image
      className="absolute top-0 left-0 lg:w-[28rem] w-80 h-auto"
      src={HeroImg1}
      alt="Overlay Image"
    />
  </div>
        </div>
      </div>
      <hr className="border-gray-800 w-full" />
    </div>
    </header>
  );
};

export default HeroSection;
