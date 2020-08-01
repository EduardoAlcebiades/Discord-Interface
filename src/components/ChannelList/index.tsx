import React from "react";

import {
  Container,
  Channels,
  Channel,
  Category,
  AddCategoryIcon,
} from "./styles";

import ChannelButton from "../ChannelButton";
import ChannelVoiceInfo from "../ChannelVoiceInfo";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Channels>
        <Channel>
          <Category>
            <span>Canais de texto</span>

            <AddCategoryIcon />
          </Category>

          <ChannelButton name="geral" selected inChannel/>
          <ChannelButton name="estudos" />
          <ChannelButton name="trabalho" />
        </Channel>

        <Channel>
          <Category>
            <span>Canais de voz</span>

            <AddCategoryIcon />
          </Category>

          <ChannelButton name="Estudos" type="voice" selected />
          <ChannelButton name="Trabalho" type="voice" />
        </Channel>
      </Channels>

      <ChannelVoiceInfo server="Interface Discord" channel="Estudos" />
    </Container>
  );
};

export default ChannelList;
