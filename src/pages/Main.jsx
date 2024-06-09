import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import MenuPanel from "../components/MenuPanel";
import useFetchUserInfo from "../hooks/useFetchUserInfo";
import useStarterCaptionManagementStore from "../stores/useStarterCaptionManagementStore";
import useUserInfoStore from "../stores/useUserInfoStore";

function Main() {
  const param = useParams();
  const { userInfoData, error, loading } = useFetchUserInfo(param.username);
  const { userInfo, setUserInfo } = useUserInfoStore();
  const { isCaptionVisible } = useStarterCaptionManagementStore();

  useEffect(() => {
    if (userInfoData !== undefined || userInfoData !== null) {
      setUserInfo(userInfoData?.userInfo);
    }
  }, [userInfoData]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-[90vh]">
        Loading profile ...
      </div>
    );
  }

  const getMainCaption = () => {
    if (userInfo !== undefined && userInfo != null) {
      const user = userInfo.user;
      return (
        <motion.div
          className="flex flex-col font-light w-3/4 sm:w-1/3 sm:text-xl"
          initial={{ y: "70%" }}
          animate={{ y: 20 }}
          transition={{ type: "spring", duration: "2s", stiffness: 70 }}
        >
          <span>Hi, this is</span>
          <span className="text-2xl font-bold sm:text-3xl">{user.name}</span>
          <span className="mt-3">
            Thank you for visiting my profile. Please use the menu below to
            access more information.
          </span>
        </motion.div>
      );
    }
  };

  if (error) {
    return <div className="p-3 text-red-700">Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      {isCaptionVisible ? getMainCaption() : <></>}
      <div className="flex flex-row justify-center mx-auto lg:w-2/4">
        <Outlet />
      </div>
      <MenuPanel />
    </div>
  );
}

export default Main;
