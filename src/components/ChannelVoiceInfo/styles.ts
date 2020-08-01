import styled from 'styled-components';

import { SignalCellularAlt, ScreenShare } from 'styled-icons/material'
import { Video } from 'styled-icons/boxicons-solid';
import { PhoneMissed } from 'styled-icons/evaicons-solid';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    padding: 8px;
    background-color: var(--quaternary);
    border-bottom: 1px solid var(--primary);
`;

export const VoiceInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ChannelData = styled.div`
    display: flex;
    flex-direction: column;

    > span {
        opacity: .7;

        font-size: 11px;
        font-weight: lighter;
        color: var(--white);

        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }    
`;

export const ConnectionStatus = styled.div`
    display: flex;
    align-items: center;


    > span {
        margin-left: 4px;

        font-size: 13px;
        font-weight: bold; 
        color: var(--status-ok);

        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const ConnectionIcon = styled(SignalCellularAlt)`
    width: 20px;
    height: 20px;

    color: var(--status-ok);
`;

export const DisconnectIcon = styled(PhoneMissed)`
    width: 32px;
    height: 32px;

    color: var(--white);
    padding: 6px;
    border-radius: 4px;
    opacity: .7;

    transition: background-color .2s;

    cursor: pointer;

    &:hover {
        background-color: var(--primary)
    }
`;

export const VoiceButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 8px;
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 108px;
    height: 32px;

    border-radius: 3px;
    padding: 8px 16px;
    background-color: var(--primary);

    transition: background-color .2s;

    cursor: pointer;

    > span {
        margin-left: 8px;
        
        font-size: 14px;
        color: var(--white);
    }

    &:hover {
        background-color: var(--secondary);
    }
`;

export const VideoIcon = styled(Video)`
    width: 20px;
    height: 20px;

    color: var(--white);
`;

export const ScreenIcon = styled(ScreenShare)`
    width: 20px;
    height: 20px;

    color: var(--white);
`;
