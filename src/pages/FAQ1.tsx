import React, { useState } from 'react';
import Image from 'next/image';
import Images from '../assets/SEVEN.png'

type Props = {};

const FAQ1 = (props: Props) => {

  const faqData = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "It's up to the judges."
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer: "It's up to the judges."
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer: "It's up to the judges."
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer: "It's up to the judges."
    },
    {
      question: "What happens after the hackathon ends",
      answer: "It's up to the judges."
    },
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "It's up to the judges."
    },
    // Add more FAQ items here
  ];
  

  // Use state to track the open/closed state of each accordion item
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean[]>([
    false, // This array should have one entry for each accordion item
    false,
    false,
    false,
    false,
  ]);

  // Function to toggle the open/closed state of a specific accordion item
  const toggleAccordion = (index: number) => {
    const updatedAccordionState = [...isAccordionOpen];
    updatedAccordionState[index] = !updatedAccordionState[index];
    setIsAccordionOpen(updatedAccordionState);
  };

  return (
    <div className="bg-[#150E28] max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-5 gap-10 m-4">

        {/* Accordion items */}
        <div className="md:col-span-2 md:ml-16">
        <div className="FrequentlyAskQuestion"><span className="text-white text-3xl font-bold font-['Clash Display']">Frequently Ask<br/></span><span className="text-fuchsia-500 text-3xl font-bold font-['Clash Display']">Question</span></div>
        <div className="WeGotAnswersToTheQuestionsThatYouMightWantToAskAboutGetlinkedHackathon10"><span className="text-white text-sm font-normal font-['Montserrat'] leading-7">We got answers to the questions that you might<br/>want to ask about </span><span className="text-white text-sm font-bold font-['Montserrat'] leading-7">getlinked Hackathon 1.0</span></div>
       <div className="hs-accordion-group divide-y divide-[#D434FE]">
            {faqData.map((faq, index) => (
              <div
                className={`hs-accordion pb-3 ${
                  isAccordionOpen[index] ? 'active' : ''
                }`}
                key={index}
                id={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
              >
                <button
                  className="hs-accordion-toggle group pb-2 pt-4 inline-flex items-center justify-between gap-x-3 w-full lg:text-[12px] text-[10px] font-normal text-left text-white transition hover:text-gray-500"
                  aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  {/* Toggle icon */}
                  <svg
                    className={`${
                      isAccordionOpen[index] ? 'hidden' : 'block'
                    } w-3 h-3 text-gray-600 group-hover:text-gray-500`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                   <path
        d="M4.78 10V6.2H0.96V4.32H4.78V0.559999H6.58V4.32H10.4V6.2H6.58V10H4.78Z"
        fill="#D434FE"
      />
                  </svg>
                  <svg
                    className={`${
                      isAccordionOpen[index] ? 'block' : 'hidden'
                    } w-3 h-3 text-gray-600 group-hover:text-gray-500`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                   <path
        d="M4.78 10V6.2H0.96V4.32H4.78V0.559999H6.58V4.32H10.4V6.2H6.58V10H4.78Z"
        fill="#D434FE"
      />
                  </svg>
                </button>
                <div
                  id={`hs-basic-with-title-and-arrow-stretched-collapse-${index}`}
                  className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${
                    isAccordionOpen[index] ? 'block' : 'hidden'
                  }`}
                  aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${index}`}
                >
                  <p className="text-white lg:text-[12px] text-[10px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-3 flex items-center justify-center">
        <Image
                  className="object-contain w-full h-56 rounded shadow-lg sm:h-96"
                  src={Images}
                  alt=""
                />
        </div>
      </div>
    </div>
  );
};

export default FAQ1;