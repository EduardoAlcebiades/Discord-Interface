import React from "react";

import Discord from "../../assets/Discord.png";

import { Button } from "./styles";

export interface ServerButtonProps {
  initials: string;
  selected?: boolean;
  type?: "channel" | "option";
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<ServerButtonProps> = ({
  initials,
  selected,
  type,
  isHome,
  hasNotifications,
  mentions,
  children,
}) => {

  type = !type ? "channel" : type;

  console.log(type);

  return (
    <Button
      initials={initials}
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={`${selected ? "active" : ""} ${type === "option" ? "option" : ""}`}
    >
      {isHome && <img src={Discord} alt="Discord" />}

      {children ? <div>{children}</div> : <span>{initials}</span>}
    </Button>
  );
};

export default ServerButton;
