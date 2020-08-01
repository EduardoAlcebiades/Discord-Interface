import React from "react";
import Logo from "../../assets/Discord.png";

import {
  Container,
  Channel,
  HashtagIcon,
  VoiceIcon,
  InviteIcon,
  SettingsIcon,
  UserInfo,
  Avatar,
} from "./styles";

export interface ChannelButtonProps {
  name: string;
  type?: "text" | "voice";
  selected?: boolean;
  inChannel?: boolean;
}

const ChannelButton: React.FC<ChannelButtonProps> = ({
  name,
  type,
  selected,
  inChannel,
}) => {
  const icons = {
    text: <HashtagIcon />,
    voice: <VoiceIcon />,
    invite: <InviteIcon className="options-icon" />,
    settings: <SettingsIcon className="options-icon" />,
  };

  type = !type ? "text" : type;

  return (
    <Container>
      <Channel
        name={name}
        type={type}
        className={`${selected && "active"} ${inChannel && "in-channel"}`}
      >
        <div>
          {icons[type]}

          <span>{name}</span>
        </div>

        <div>
          {icons["invite"]}
          {icons["settings"]}
        </div>
      </Channel>

      {selected && type === "voice" && (
        <UserInfo>
          <Avatar>
            <img src={Logo} alt="Discord" />
          </Avatar>

          <span>Eduardo</span>
        </UserInfo>
      )}
    </Container>
  );
};

export default ChannelButton;
