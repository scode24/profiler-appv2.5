import React from "react";

function BoxButton(props) {
  const { tag, icon, text, handleOptionClickFn } = props.config;
  return (
    <div
      className="flex flex-col justify-center items-center p-2 w-[50px] cursor-pointer sm:border-l sm:w-[80px] hover:text-blue-700"
      onClick={() => handleOptionClickFn(tag)}
    >
      <div className="flex flex-col justify-center p-2">{icon}</div>
      <span className="text-xs">{text}</span>
    </div>
  );
}

export default BoxButton;
