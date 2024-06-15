import React, { useEffect } from "react";
import DataContainer from "../components/DataContainer";
import InfoCard from "../components/InfoCard";
import useStarterCaptionManagementStore from "../stores/useStarterCaptionManagementStore";
import useUserInfoStore from "../stores/useUserInfoStore";

function Experiences() {
  const { userInfo } = useUserInfoStore();
  const { setCaptionFlag } = useStarterCaptionManagementStore();

  useEffect(() => {
    setCaptionFlag(false);
  }, [userInfo]);

  const getWorkHistory = () => {
    if (userInfo !== undefined) {
      const prevCompInfo = userInfo.previousCompaniesInfo;

      if (prevCompInfo.length > 0) {
        return prevCompInfo.map((item, index) => {
          return (
            <InfoCard
              key={index}
              config={{
                title: item.name,
                rightTitle: item.workingYears,
                data: item.experience,
                renderPage: "office",
              }}
            />
          );
        });
      }
    }
  };

  const getAchievements = () => {
    if (userInfo !== undefined) {
      const achievements = userInfo.achievements;

      if (achievements.length > 0) {
        return achievements.map((item, index) => {
          return (
            <InfoCard
              key={index}
              config={{
                title: item.name,
                rightTitle: item.issuingCompany + " | " + item.issuingYear,
                data: item.reason,
                renderPage: "achievement",
              }}
            />
          );
        });
      }
    }
  };

  return (
    <DataContainer
      config={{
        title: "Experiences",
        topics: [
          {
            name: "Work History",
            data: getWorkHistory(),
          },
          {
            name: "Achievements",
            data: getAchievements(),
          },
        ],
      }}
    />
  );
}

export default Experiences;
