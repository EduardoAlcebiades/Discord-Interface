import React from "react";

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  MicIcon,
  HeadsetIcon,
  SettingsIcon,
} from "./styles";

import Discord from '../../assets/Discord.png'

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar>
          <img src={Discord} alt="User"/>
        </Avatar>
        
        <UserData>
          <strong>Eduardo</strong>
          <span>#3812</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadsetIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
