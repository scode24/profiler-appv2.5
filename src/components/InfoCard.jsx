import React, { useState } from "react";
import { getIcons, getSkillIcons } from "../icons/IconsSource";

function InfoCard(props) {
  const { title, rightTitle, data, renderPage } = props.config;
  const [isClosed, setIsClosed] = useState(false);

  const getContentIcon = (title) => {
    if (renderPage === "achievement") return getIcons("achievement");
    if (renderPage === "office") return getIcons("office");
    if (renderPage === "skill") return getSkillIcons(title);
    return getIcons(title);
  };

  const handleClick = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div className="flex flex-col cursor-pointer" onClick={() => handleClick()}>
      <div className="flex flex-row border-b p-2">
        <div className="flex flex-col justify-center items-center text-xl mr-3  sm:text-2xl">
          {getContentIcon(title)}
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-col justify-between w-full sm:flex-row sm:justify-between">
            <span className="text-lg sm:text2xl">{title}</span>
            <span className="font-light text-md sm:text2xl">
              {rightTitle !== undefined ? rightTitle : ""}
            </span>
          </div>
        </div>
      </div>
      {isClosed === false ? (
        <span className="p-3 text-justify">{data}</span>
      ) : (
        <></>
      )}
    </div>
  );
}

export default InfoCard;
