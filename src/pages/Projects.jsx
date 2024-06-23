import React, { useEffect } from "react";
import DataContainer from "../components/DataContainer";
import ProjectDataContainer from "../components/ProjectDataContainer";
import useStarterCaptionManagementStore from "../stores/useStarterCaptionManagementStore";
import useUserInfoStore from "../stores/useUserInfoStore";

function Projects() {
  const { userInfo } = useUserInfoStore();
  const { setCaptionFlag } = useStarterCaptionManagementStore();

  useEffect(() => {
    setCaptionFlag(false);
  }, [userInfo]);

  return (
    <DataContainer
      config={{
        title: "Projects",
        topics: [
          {
            name: "Project View",
            data: <ProjectDataContainer />,
          },
        ],
      }}
    />
  );
}

export default Projects;
