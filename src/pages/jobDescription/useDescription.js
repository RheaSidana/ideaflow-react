import useOpenRoles from "../assets/openRoles/useOpenRoles";
import React from "react";
import { Typography } from "@mui/material";

const useDescription = ({ opening }) => {
  const { aboutCompany, weOffer, Additionals, Role } = useOpenRoles();
  const useAboutCompany = () => {
    return (
      <>
        <Typography variant="h5" sx={{ color: "white" }}>
          {aboutCompany.Topic}
        </Typography>
        <Typography variant="body1">{aboutCompany.Description}</Typography>
      </>
    );
  };

  const useRole = () => {
    return (
      <>
        <Typography variant="h5" sx={{ color: "white" }}>
          {Role.Topic}
        </Typography>
        <Typography variant="body1">{Role.Description}</Typography>
      </>
    );
  };

  const useList = (topic, list) => {
    return (
      <>
        <Typography variant="h5" sx={{ color: "white" }}>
          {topic}
        </Typography>

        {list.map((item, index) => (
          <Typography
            variant="body1"
            key={index}
            style={{
              textAlign: "justify",
              padding: item.charAt(0) === "-" ? "0em 1.5em" : "1em 0em",
            }}
          >
            {item.charAt(0) === "-" ? "* " + item.substring(1) : item}
          </Typography>
        ))}
      </>
    );
  };

  const useResponsibility = () => {
    return (
      <>
        {useList(
          opening.DetailedDescription.Responsibility.Topic,
          opening.DetailedDescription.Responsibility.Description
        )}
      </>
    );
  };

  const useRequirements = () => {
    return (
      <>
        {useList(
          opening.DetailedDescription.Requirements.Topic,
          opening.DetailedDescription.Requirements.Description
        )}
      </>
    );
  };

  const useAdditionals = () => {
    return <>{useList(Additionals.Topic, Additionals.Description)}</>;
  };

  const useWeOffer = () => {
    return <>{useList(weOffer.Topic, weOffer.Description)}</>;
  };
  return {
    aboutCompany: useAboutCompany,
    role: useRole,
    responsibility: useResponsibility,
    requirement: useRequirements,
    additional: useAdditionals,
    weOffer: useWeOffer,
  };
};

export default useDescription;
