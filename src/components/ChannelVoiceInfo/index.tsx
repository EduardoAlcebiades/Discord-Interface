import React from "react";

import {
  Container,
  VoiceInfo,
  ChannelData,
  ConnectionStatus,
  ConnectionIcon,
  DisconnectIcon,
  VoiceButtons,
  Button,
  VideoIcon,
  ScreenIcon,
} from "./styles";

interface ChannelVoiceInfoProps {
  server: string;
  channel: string;
}

const ChannelVoiceInfo: React.FC<ChannelVoiceInfoProps> = ({
  server,
  channel,
}) => {
  return (
    <Container>
      <VoiceInfo>
        <ChannelData>
          <ConnectionStatus>
            <ConnectionIcon />

            <span>Voz conectada</span>
          </ConnectionStatus>

          <span>
            {channel} / {server}
          </span>
        </ChannelData>

        <DisconnectIcon />
      </VoiceInfo>

      <VoiceButtons>
        <Button>
          <VideoIcon />

          <span>Vídeo</span>
        </Button>

        <Button>
          <ScreenIcon />

          <span>Tela</span>
        </Button>
      </VoiceButtons>
    </Container>
  );
};

export default ChannelVoiceInfo;
