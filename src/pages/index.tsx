import React from 'react'
import 'tailwindcss/tailwind.css';
import HeroSection from '@/components/Hero'
import Rules from './Rules';
import Intro from './Intro'
import Judging from './Judging'
import FAQ1 from './FAQ1';
import Privacy from './Privacy';
import Prices from './Prices';
import Partners from './Partners'
import Timeline from './Timeline';
import Footer from '@/components/Footer';


type Props = {}

const index = (props: Props) => {
  return (
    <div className='bg-[rgb(21,14,40)] h-screen'>
  <HeroSection/>
  <Intro/>
  <hr className="border-gray-800 w-full" />
  <Rules/>
  <hr className="border-gray-800 w-full" />
  <Judging/>
  <hr className="border-gray-800 w-full" />
  <FAQ1/>
  <hr className="border-gray-800 w-full" />
  <Timeline/>
  <hr className="border-gray-800 w-full" />
  <Prices/>
  <hr className="border-gray-800 w-full" />
  <Partners/>
  <hr className="border-gray-800 w-full" />
  <Privacy/>
  <hr className="border-gray-800 w-full" />
  <Footer/>
  {/* <Partners/> */}
    </div>
  )
}

export default index