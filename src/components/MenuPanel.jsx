import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircularButton from "./CircularButton";

function MenuPanel() {
  const [selectedButton, setSelectedButton] = useState("about");
  const navigator = useNavigate();

  const handleMenuSelection = (tag) => {
    setSelectedButton(tag);
    navigator(tag);
  };

  return (
    <div className="absolute bottom-0 z-10 w-full h-[70px] border-t-[1px] bg-white md:h-[120px]">
      <div className="relative top-[-30px] flex flex-row justify-center sm:top-[-35px]">
        <CircularButton
          config={{
            title: "About Me",
            tag: "about",
            isSelected: selectedButton === "about",
            handleMenuSelectionFn: handleMenuSelection,
          }}
        />

        <CircularButton
          config={{
            title: "Experiences",
            tag: "experiences",
            isSelected: selectedButton === "experiences",
            handleMenuSelectionFn: handleMenuSelection,
          }}
        />

        <CircularButton
          config={{
            title: "Skills",
            tag: "skills",
            isSelected: selectedButton === "skills",
            handleMenuSelectionFn: handleMenuSelection,
          }}
        />

        <CircularButton
          config={{
            title: "Projects",
            tag: "projects",
            isSelected: selectedButton === "projects",
            handleMenuSelectionFn: handleMenuSelection,
          }}
        />
      </div>
    </div>
  );
}

export default MenuPanel;
