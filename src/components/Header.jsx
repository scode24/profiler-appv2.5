import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigator = useNavigate();

  return (
    <div className="flex flex-row justify-between p-3">
      <div
        className="flex flex-col justify-center cursor-pointer"
        onClick={() => navigator("/")}
      >
        <FontAwesomeIcon icon={faTerminal} />
      </div>
      <div className="flex flex-col justify-center cursor-pointer">
        <FontAwesomeIcon
          icon={faGithub}
          onClick={() => window.open(process.env.REACT_APP_GITHUB_SOURCE)}
        />
      </div>
    </div>
  );
}

export default Header;
