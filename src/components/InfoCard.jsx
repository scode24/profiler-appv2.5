import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faBuilding,
  faCube,
  faPhone,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function InfoCard(props) {
  const [isClosed, setIsClosed] = useState(false);
  const { title, rightTitle, data, renderPage } = props.config;

  const getIcon = (title) => {
    switch (renderPage) {
      case "company":
        return <FontAwesomeIcon icon={faBuilding} />;
      case "achievement":
        return <FontAwesomeIcon icon={faShield} />;
    }

    title = title.toLowerCase();
    switch (title) {
      case "address":
        return <FontAwesomeIcon icon={faAddressBook} />;

      case "phone number":
        return <FontAwesomeIcon icon={faPhone} />;

      case "github":
        return <FontAwesomeIcon icon={faGithub} />;

      case "facebook":
        return <FontAwesomeIcon icon={faFacebook} />;

      case "linkedin":
        return <FontAwesomeIcon icon={faLinkedin} />;

      case "twitter":
        return <FontAwesomeIcon icon={faTwitter} />;

      default:
        return <FontAwesomeIcon icon={faCube} />;
    }
  };

  const handleClick = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div className="flex flex-col cursor-pointer" onClick={() => handleClick()}>
      <div className="flex flex-row border-b p-2">
        <div className="flex flex-col justify-center items-center text-xl mr-3  sm:text-2xl">
          {getIcon(title)}
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex flex-row justify-between w-full">
            <span className="text-xl sm:text2xl">{title}</span>
            <span className="font-light text-xl sm:text2xl">
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
