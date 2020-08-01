import styled from 'styled-components';

import { Hashtag, VolumeUp } from 'styled-icons/heroicons-outline'
import { PersonAdd, Settings } from 'styled-icons/material'

import { ChannelButtonProps } from '.';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Channel = styled.div<ChannelButtonProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 2px;

    cursor: pointer;
    
    padding: 5px 3px;
    border-radius: 5px;

    background-color: transparent;

    > div {
        display: flex;
        align-items: center;
    }

    > div span {
        margin-left: 5px;
        color: var(--senary);
    }

    .options-icon {
        display: none;
    }

    &:hover, &.in-channel {
        background-color: var(--quinary);
    }

    &:hover, &.in-channel, &.active {
        div > span {
            color: var(--white);
        }

        div > .options-icon {
            display: block;
        }
    }
`;

export const HashtagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;

    color: var(--symbol);
`;

export const VoiceIcon = styled(VolumeUp)`
    width: 20px;
    height: 20px;

    color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
    width: 16px;
    height: 16px;

    color: var(--symbol);
    cursor: pointer;

    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;

export const SettingsIcon = styled(Settings)`
    width: 16px;
    height: 16px;

    margin-left: 5px;

    color: var(--symbol);
    cursor: pointer;

    transition: color .2s;

    &:hover {
        color: var(--white);
    }
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;

    margin: 0 0 6px 20px;
    padding: 4px 8px;
    border-radius: 4px;

    cursor: pointer;

    transition: background-color .2s;

    > span {
        margin-left: 8px;
        opacity: .7;

        font-size: 13px;
        color: var(--white);
    }

    &:hover {
        background-color: var(--quinary);

        > div span {
            color: var(--white);
        }
    }
`;

export const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    width: 24px;
    height: 24px;

    border-radius: 50%;

    background-color: var(--status-ok);

    > img {
        width: 20px;
        height: 20px;
    }
`;