import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faArrowRight,
  faGlobe,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import useUserInfoStore from "../stores/useUserInfoStore";
import BoxButton from "./BoxButton";

function ProjectDataContainer() {
  const { userInfo } = useUserInfoStore();
  const [selectedOption, setSelectedOption] = useState("image");
  const [projectIndex, setProjectIndex] = useState(0);

  useEffect(() => {}, [userInfo]);

  const handleOptionClick = (option) => {
    let index = projectIndex;
    if (option === "next") {
      setProjectIndex(++index);
      setSelectedOption("image");
    } else if (option === "prev") {
      let index = projectIndex;
      setProjectIndex(--index);
      setSelectedOption("image");
    } else if (option === "live") {
      window.open(userInfo.projects[projectIndex].liveUrl);
    } else if (option === "github") {
      window.open(userInfo.projects[projectIndex].githubLink);
    } else {
      setSelectedOption(option);
    }
  };

  const getOptionContent = () => {
    if (selectedOption === "image")
      return userInfo.projects[projectIndex].captionUrl !== "" ? (
        <img
          className="w-full" //h-[130px] sm:h-[135px] md:h-[260px] lg:h-[170px] xl:h-[250px]
          src={userInfo.projects[projectIndex].captionUrl}
          alt="project-caption"
        />
      ) : (
        <></>
      );

    if (selectedOption === "demo")
      return (
        <video
          className="mx-auto"
          controls
          width="90%"
          src={userInfo.projects[projectIndex].demoUrl}
        />
      );
  };

  const getOptions = () => {
    return (
      <>
        {projectIndex > 0 ? (
          <BoxButton
            config={{
              tag: "prev",
              icon: <FontAwesomeIcon icon={faArrowLeft} />,
              text: "Previous",
              handleOptionClickFn: handleOptionClick,
            }}
          />
        ) : (
          <></>
        )}

        {projectIndex < userInfo.projects.length - 1 ? (
          <BoxButton
            config={{
              tag: "next",
              icon: <FontAwesomeIcon icon={faArrowRight} />,
              text: "Next",
              handleOptionClickFn: handleOptionClick,
            }}
          />
        ) : (
          <></>
        )}

        {userInfo.projects[projectIndex].demoUrl !== "" ? (
          <BoxButton
            config={{
              tag: "demo",
              icon: <FontAwesomeIcon icon={faVideo} />,
              text: "Demo",
              handleOptionClickFn: handleOptionClick,
            }}
          />
        ) : (
          <></>
        )}

        {userInfo.projects[projectIndex].liveUrl !== "" ? (
          <BoxButton
            config={{
              tag: "live",
              icon: <FontAwesomeIcon icon={faGlobe} />,
              text: "Live",
              handleOptionClickFn: handleOptionClick,
            }}
          />
        ) : (
          <></>
        )}

        {userInfo.projects[projectIndex].githubLink !== "" ? (
          <BoxButton
            config={{
              tag: "github",
              icon: <FontAwesomeIcon icon={faGithub} />,
              text: "GitHub",
              handleOptionClickFn: handleOptionClick,
            }}
          />
        ) : (
          <></>
        )}
      </>
    );
  };

  return userInfo !== undefined ? (
    <div className="flex flex-col shadow-inner">
      <div className="flex flex-col border px-2 sm:flex-row sm:justify-between">
        <div className="flex flex-col justify-center font-bold p-2 sm:border-none">
          {userInfo.projects[projectIndex].projectName}
        </div>
        <div className="flex flex-row justify-center">{getOptions()}</div>
      </div>

      <div className="flex flex-col border-x border-b">
        <div>{getOptionContent()}</div>

        <p className="p-3 text-justify">
          {userInfo.projects[projectIndex].about}
        </p>

        <div className="flex flexp-3 border-t">
          <div className="flex flex-row justify-center p-2">
            <div className="flex flex-col justify-center min-w-fit mr-3">
              <span>Technology Used</span>
            </div>
            <div className="flex flex-row overflow-auto w-full">
              {userInfo.projects[projectIndex].techStackList.map(
                (item, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col justify-center text-xs rounded-md min-w-fit p-1 mx-1 bg-gray-200 sm:text-sm"
                    >
                      {item}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default ProjectDataContainer;
