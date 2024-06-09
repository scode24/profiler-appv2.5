import React from "react";
import DataContainer from "../components/DataContainer";
import InfoCard from "../components/InfoCard";
import useUserInfoStore from "../stores/useUserInfoStore";

function Experiences() {
  const { userInfo } = useUserInfoStore();

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
                renderPage: "company",
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
        ],
      }}
    />
  );
}

export default Experiences;
