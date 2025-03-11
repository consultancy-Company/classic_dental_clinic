import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Tqa = {
  question: string;
  answer: string;
};

type TFaq = {
  faqs: Tqa[];
  title: string;
  classes?: string;
};

const FAQComponent = ({ title, faqs, classes }: TFaq) => {
  return (
    <div className="max-w-7xl mx-auto px-3 flex justify-center items-center flex-col lg:flex-row py-32 ">
      {/* Left Section */}
      <div className="lg:w-1/2 lg:pr-8 md:pl-10 my-5 md:my-0">
        <h2 className={`text-5xl font-bold text-classic_yellow ${classes}`}>{title}</h2>
        <p className="my-10 text-lg">
          More questions? We’re ready to help. Give us a call at {" "} 
          <a href={`tel: 720 730-9140`}> 
          (720) 730-9140{" "} </a>
        </p>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem
              value={faq.question}
              key={index}
              className="border my-3 px-3 border-black"
            >
              <AccordionTrigger className="text-lg bold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-md text-justify">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQComponent;
