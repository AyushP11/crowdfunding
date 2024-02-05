import React from "react";

const HighlightText = ({text}) => {
  return (
    // <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
    <span className="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent font-bold">
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;