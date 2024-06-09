import {
  faBriefcase,
  faCode,
  faCubes,
  faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import useUserInfoStore from "../stores/useUserInfoStore";

function CircularButton(props) {
  const { title, tag, isSelected, handleMenuSelectionFn } = props.config;
  const { userInfo } = useUserInfoStore();

  const getTheme = () => {
    return isSelected
      ? {
          borderColor: "rgb(29 78 216)",
          borderWidth: "2px",
          color: "rgb(29 78 216)",
        }
      : {};
  };

  const getIcon = (tag) => {
    switch (tag) {
      case "experiences":
        return <FontAwesomeIcon icon={faBriefcase} />;

      case "skills":
        return <FontAwesomeIcon icon={faCode} />;

      case "projects":
        return <FontAwesomeIcon icon={faDiagramProject} />;

      default:
        return <FontAwesomeIcon icon={faCubes} />;
    }
  };

  const getContent = () => {
    if (tag === "about" && userInfo !== undefined) {
      const user = userInfo.user;
      return (
        <img
          className="rounded-full w-[70px] h-[70px] sm:w-[90px] sm:h-[90px]"
          src={user.imageUrl}
          alt="user-pic"
        />
      );
    }
    return getIcon(tag);
  };

  return (
    <motion.div
      className="flex flex-col"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: "0.1s" }}
      onClick={() => handleMenuSelectionFn(tag)}
    >
      <div
        className="flex flex-col justify-center items-center rounded-full w-[60px] h-[60px] mx-3 p-1 bg-white text-gray-300 text-2xl border-[1px] cursor-pointer hover:text-black sm:w-[70px] sm:h-[70px] sm:p-1 sm:mx-5"
        style={getTheme()}
      >
        {getContent()}
      </div>
      <span className="text-xs mt-3 mx-auto sm:text-sm">{title}</span>
    </motion.div>
  );
}

export default CircularButton;
