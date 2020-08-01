import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserRowProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserRowProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 2</Role>

      <UserRow nickname="Eduardo" />
      <UserRow nickname="Vinícius" />

      <Role>Offline - 3</Role>

      <UserRow nickname="Guilherme" />
      <UserRow nickname="Gustavo" />
      <UserRow nickname="Henrique" />
      <UserRow nickname="Rythm" isBot />
    </Container>
  );
};

export default UserList;
