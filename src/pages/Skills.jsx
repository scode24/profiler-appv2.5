import React, { useEffect } from "react";
import DataContainer from "../components/DataContainer";
import InfoCard from "../components/InfoCard";
import useStarterCaptionManagementStore from "../stores/useStarterCaptionManagementStore";
import useUserInfoStore from "../stores/useUserInfoStore";

function Skills() {
  const { userInfo } = useUserInfoStore();
  const { setCaptionFlag } = useStarterCaptionManagementStore();

  useEffect(() => {
    setCaptionFlag(false);
  }, [userInfo]);

  const getSkills = () => {
    if (userInfo !== undefined) {
      const skills = userInfo.skills;
      if (skills.length > 0) {
        return skills.map((item, index) => {
          return (
            <InfoCard
              key={index}
              config={{
                title: item.skillName,
                isDescClosed: true,
              }}
            />
          );
        });
      }
    }

    return <></>;
  };

  return (
    <DataContainer
      config={{
        title: "Skills",
        topics: [
          {
            name: "Tech Stack",
            data: getSkills(),
          },
        ],
      }}
    />
  );
}

export default Skills;
