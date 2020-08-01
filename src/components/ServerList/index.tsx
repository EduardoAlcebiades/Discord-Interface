import React from "react";

import ServerButton from "../ServerButton";

import {
  Container,
  Separator,
  AddIcon,
  CompassIcon,
  DownloadIcon,
} from "./styles";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton initials="" isHome />

      <Separator />

      <ServerButton initials="H" />
      <ServerButton initials="DBD" hasNotifications />
      <ServerButton initials="CL" />
      <ServerButton initials="ID" selected />
      <ServerButton initials="ME" />
      <ServerButton initials="P" mentions={120} />
      <ServerButton initials="A" hasNotifications />
      <ServerButton initials="DP" />
      <ServerButton initials="N" hasNotifications mentions={4} />
      <ServerButton initials="LA" />
      <ServerButton initials="IF" />
      <ServerButton initials="" type="option" children={<AddIcon />} />
      <ServerButton initials="" type="option" children={<CompassIcon />} />
      
      <Separator />

      <ServerButton initials="" type="option" children={<DownloadIcon />} />
    </Container>
  );
};

export default ServerList;
