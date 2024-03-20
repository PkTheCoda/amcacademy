import React from "react";
import { InlineWidget } from "react-calendly";

const Book = () => {
  return (
    <div className="py-20 flex flex-col gap-y-6 font-quicksand">
      <InlineWidget url="https://calendly.com/amcacademy/30min"/>
      <a className="three-title text-center font-medium"
        href="https://calendly.com/amcacademy/30min"
        target="_blank"
      >
        Having Trouble with the link? <span className="text-blue-700 hover:underline">Click here</span>
      </a>
    </div>
  );
};

export default Book;