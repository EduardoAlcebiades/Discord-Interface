import React, { useRef, useEffect } from "react";

import { Container, Messages, InputWraper, Input, InputIcon } from "./styles";

import ChannelMessage, { Mention } from "../ChannelMessage";

const ChannelInfo: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) div.scrollTop = div.scrollHeight;
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Guilherme"
          date="29/07/2020"
          content="Bom dia pessoa!"
        />

        <ChannelMessage author="Gustavo" date="29/07/2020" content="Bom dia" />

        <ChannelMessage author="Henrique" date="29/07/2020" content="Olá" />

        <ChannelMessage
          author="Vinícius"
          date="29/07/2020"
          content="Esse é o canal de grupo de estusos. Vamos utilizá-lo para agendar horários e materiais de revisão"
        />

        <ChannelMessage author="Eduardo" date="29/07/2020" content="Ok" />

        <ChannelMessage
          author="Henrique"
          date="29/07/2020"
          content="Combinado!"
        />

        <ChannelMessage author="Guilherme" date="29/07/2020" content="Certo" />

        <ChannelMessage
          author="Gustavo"
          date="29/07/2020"
          content="Sem problemas"
        />

        <ChannelMessage
          author="Rythm"
          date="29/07/2020"
          hasMention
          isBot
          content={
            <>
              <Mention>@Eduardo</Mention>, digite !help para ver a lista de
              comandos ou !disconnet para sair
            </>
          }
        />

        <ChannelMessage
          author="Eduardo"
          date="29/07/2020"
          content="!disconnect"
        />

        <ChannelMessage
          author="Eduardo"
          date="29/07/2020"
          content="Utilize o canal de voz para conversar"
        />

      </Messages>

      <InputWraper>
        <Input type="text" placeholder={`Conversar em #trabalho`} />
        <InputIcon />
      </InputWraper>
    </Container>
  );
};

export default ChannelInfo;
