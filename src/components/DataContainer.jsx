import {
  faBriefcase,
  faCode,
  faCubes,
  faDiagramProject,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";

function DataContainer(props) {
  const { title, topics } = props.config;
  const [currentContent, setCurrentContent] = useState(topics[0].data);

  const handleSubmenuSelection = (index) => {
    setCurrentContent(topics[index].data);
  };

  const getIcon = (title) => {
    switch (title) {
      case "About Me":
        return <FontAwesomeIcon icon={faUser} />;

      case "Experiences":
        return <FontAwesomeIcon icon={faBriefcase} />;

      case "Skills":
        return <FontAwesomeIcon icon={faCode} />;

      case "Projects":
        return <FontAwesomeIcon icon={faDiagramProject} />;

      default:
        return <FontAwesomeIcon icon={faCubes} />;
    }
  };

  return (
    <motion.div
      className="flex flex-col rounded-2xl border-[1px] bg-white shadow-lg p-5 w-full h-[90vh]"
      initial={{ y: "70%" }}
      animate={{ y: 20 }}
      transition={{ type: "spring", duration: "2s", stiffness: 70 }}
    >
      <div className="flex flex-row text-2xl sm:text-3xl">
        <div className="flex flex-col justify-center mr-3 text-2xl text-blue-700">
          {getIcon(title)}
        </div>
        <div className="flex flex-col justify-center">
          <span>{title}</span>
        </div>
      </div>

      <div className="flex flex-row py-5 w-full overflow-auto sm:py-7">
        {topics.map((item, index) => {
          return (
            <button
              className="text-nowrap text-xs px-2 py-1 rounded-3xl border-[1px] mr-2 w-[120px] hover:border-blue-700 hover:border-[2px] sm:text-sm"
              key={index}
              onClick={() => handleSubmenuSelection(index)}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      <div className="text-xs h-[65%] overflow-auto sm:text-sm sm:px-[10px]">
        {currentContent}
      </div>
    </motion.div>
  );
}

export default DataContainer;