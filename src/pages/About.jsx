import React from "react";
import DataContainer from "../components/DataContainer";
import InfoCard from "../components/InfoCard";
import useUserInfoStore from "../stores/useUserInfoStore";

function About() {
  const { userInfo } = useUserInfoStore();

  const getOverview = () => {
    if (userInfo !== undefined) {
      const user = userInfo.user;
      return (
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex flex-col justify-center w-[100px] h-[100px] items-center mx-auto md:w-[120px] md:h-[120px]">
              <img
                className="rounded-full"
                src={user.imageUrl}
                alt="user-pic"
              />
            </div>
            <div className="flex flex-col justify-center items-center mt-3 sm:mt-5">
              <span className="text-xl font-bold sm:text-2xl">{user.name}</span>
              <span className="text-sm">{user.email}</span>
            </div>
          </div>
          <p className="text-justify mt-5 sm:mt-7">{user.about}</p>
        </div>
      );
    }
    return <></>;
  };

  const getSocialLinks = () => {
    if (userInfo !== undefined) {
      const user = userInfo.user;
      if (user.socialLinks.length > 0) {
        return user.socialLinks.map((item, index) => {
          return (
            <InfoCard
              key={index}
              config={{
                title: item.linkName,
                data: <a href={item.url}>{item.url}</a>,
              }}
            />
          );
        });
      }
    }

    return <></>;
  };

  const getContacts = () => {
    if (userInfo !== undefined) {
      const user = userInfo.user;
      return (
        <div className="flex flex-col">
          {getSocialLinks()}
          <InfoCard
            config={{
              title: "Address",
              data: user.address,
            }}
          />
          <InfoCard
            config={{
              title: "Phone Number",
              data: user.phNo,
            }}
          />
        </div>
      );
    }
    return <></>;
  };

  return (
    <DataContainer
      config={{
        title: "About Me",
        topics: [
          {
            name: "Overview",
            data: getOverview(),
          },
          {
            name: "Contacts",
            data: getContacts(),
          },
        ],
      }}
    />
  );
}

export default About;
