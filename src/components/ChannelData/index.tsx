import React, {useRef, useEffect} from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention } from "../ChanmelMessage";

const ChannelData: React.FC = () => {
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        const div = messageRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messageRef]);
    return (
        <Container>
            <Messages ref={messageRef}>
                <ChannelMessage author="Rafael Amaral" date="19/04/2020" content="Message test!" />
                <ChannelMessage author="Guilherme" date="19/04/2020" content="teste!" />
                <ChannelMessage author="Guilherme" date="19/04/2020" content="teste!" />
                <ChannelMessage author="Guilherme" date="19/04/2020" content="teste!" />
                <ChannelMessage author="Guilherme" date="19/04/2020" content="teste!" />
                <ChannelMessage author="Guilherme" date="19/04/2020" content="teste!" />
                <ChannelMessage author="Guilherme" date="19/04/2020" content="teste!" />
                <ChannelMessage author="Guilherme" date="19/04/2020" content="teste!" />
                <ChannelMessage author="Guilherme" date="19/04/2020" content="teste!" />
                <ChannelMessage author="Guilherme" date="19/04/2020" content="teste!" />
                <ChannelMessage author="Guilherme" date="19/04/2020" content="teste!" />

                <ChannelMessage author="Rafael Amaral" date="19/04/2020" content={
                    <>
                        <Mention>@rafael amaral</Mention>, Me carrega no LoL!
                    </>
                } />
            </Messages>
            <InputWrapper >
                <Input type="Text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export  default  ChannelData;