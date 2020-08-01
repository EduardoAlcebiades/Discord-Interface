import styled from 'styled-components';

import { Mic, Headset, Settings } from 'styled-icons/material'

export const Container = styled.div`
    grid-area: UI;

    display: flex;
    align-items: center;

    padding: 10px;
    background-color: var(--quaternary);
    box-shadow: rgba(0, 0, 0, .2) 0 1px 0 0;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    margin-right: 4px;
`;

export const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;

    width: 32px;
    height: 32px;
    border-radius: 50%;

    background-color: var(--status-ok);

    position: relative;

    cursor: pointer;

    > img {
        width: 24px;
        height: 24px
    }

    &::after {
        content: '';

        position: absolute;

        width: 10px;
        height: 10px;

        right: -3px;
        bottom: -3px;

        border-radius: 50%;
        border: 3px solid var(--quaternary);
        background-color: var(--status-ok);
    }

    &:hover {
        opacity: .8;
    }
`;

export const UserData = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    margin-left: 8px;

    cursor: pointer;

    > strong {
        color: var(--white);
        font-size: 13px;
        display: block;
    }

    > span {
        color: var(--gray);
        font-size: 13px;
    }
`;

export const Icons = styled.div`
    display: flex;
    align-items: center;
`;

export const MicIcon = styled(Mic)`
    width: 32px;
    height: 32px;

    border-radius: 4px;
    padding: 6px;

    color: var(--white);
    opacity: .7;
    cursor: pointer;

    transition: opacity .2s, background-color .2s;

    &:hover {
        opacity: 1;
        background-color: var(--primary)
    }
`;

export const HeadsetIcon = styled(Headset)`
    width: 32px;
    height: 32px;

    border-radius: 4px;
    padding: 6px;

    color: var(--white);
    opacity: .7;
    cursor: pointer;

    transition: opacity .2s, background-color .2s;

    &:hover {
        opacity: 1;
        background-color: var(--primary)
    }
`;

export const SettingsIcon = styled(Settings)`
    width: 32px;
    height: 32px;

    border-radius: 4px;
    padding: 6px;

    color: var(--white);
    opacity: .7;
    cursor: pointer;

    transition: opacity .2s, background-color .2s;

    &:hover {
        opacity: 1;
        background-color: var(--primary)
    }
`;
