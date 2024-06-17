import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { getIcons } from "../icons/IconsSource";

function DataContainer(props) {
  const { title, topics } = props.config;
  const [currentContent, setCurrentContent] = useState(topics[0].data);
  const [hasScrollbar, setHasScrollbar] = useState(false);
  const contentRef = useRef(null);

  const handleSubmenuSelection = (index) => {
    setCurrentContent(topics[index].data);
  };

  useEffect(() => {
    const checkForScrollbar = () => {
      if (contentRef.current) {
        const { scrollHeight, clientHeight } = contentRef.current;
        setHasScrollbar(scrollHeight > clientHeight);
      }
    };

    // Initial check
    checkForScrollbar();

    // Check for scrollbar when window is resized
    window.addEventListener("resize", checkForScrollbar);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkForScrollbar);
    };
  }, []);

  return (
    <motion.div
      className="flex flex-col rounded-2xl border-[1px] bg-white shadow-lg p-5 w-full h-[90vh]"
      initial={{ y: "70%" }}
      animate={{ y: 20 }}
      transition={{ type: "spring", duration: "2s", stiffness: 70 }}
    >
      <div className="flex flex-row text-2xl sm:text-3xl">
        <div className="flex flex-col justify-center mr-3 text-2xl text-blue-700">
          {getIcons(title)}
        </div>
        <div className="flex flex-col justify-center">
          <span>{title}</span>
        </div>
      </div>
      <div className="flex flex-row py-5 w-full overflow-auto sm:py-7">
        {topics.map((item, index) => {
          return item.name != "" ? (
            <button
              className="text-nowrap text-xs px-2 py-1 rounded-3xl border-[1px] mr-2 w-[120px] hover:border-blue-700 hover:border-[2px] sm:text-sm"
              key={index}
              onClick={() => handleSubmenuSelection(index)}
            >
              {item.name}
            </button>
          ) : (
            <></>
          );
        })}
      </div>
      <div
        ref={contentRef}
        className="text-xs h-[70%] overflow-auto sm:text-sm sm:px-[10px]"
      >
        {currentContent}
      </div>

      {hasScrollbar ? (
        <div className="flex flex-row justify-center text-sm border-t text-gray-500 py-3">
          <span>Scroll down for more information</span>
        </div>
      ) : (
        <></>
      )}
    </motion.div>
  );
}

export default DataContainer;
