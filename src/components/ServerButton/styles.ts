import styled from 'styled-components';

import { ServerButtonProps } from '.';

export const Button = styled.button<ServerButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 48px;
    height: 48px;
    border-radius: 50%;

    margin-bottom: 8px;

    background-color: var(--primary);
    
    position: relative;
    cursor: pointer;

    transition: border-radius .2s, background-color .2s;

    > img {
        width: 32px;
        height: 32px;
    }

    > span {
        font-size: 15px;
        color: var(--white);
    }

    &::before {
        content: '';

        width: 9px;
        height: 8px;

        transform: scale(${props => props.hasNotifications ? 1 : 0});
        
        position: absolute;

        margin: auto 0;
        left: -17px;

        background-color: var(--white);
        border-radius: 4px;

        transition: height .2s, transform .2s;
    }

    &::after {
        content: '${props => props.mentions && props.mentions}';

        background-color: var(--notification);
        width: auto;
        height: 16px;

        padding: 0 4px;

        position: absolute;
        bottom: -4px;
        right: -4px;
        
        border-radius: 12px;
        border: 4px solid var(--quaternary);

        text-align: right;
        font-size: 13px;
        font-weight: bold;
        color: var(--white);

        display: ${props => props.mentions && props.mentions > 0 ? 'inline' : 'none'};
    }
    
    &:hover{
        &::before{
            height: 20px;
            transform: scale(1);
        }
    }

    &.active {
        &::before{
            height: 40px;
            transform: scale(1);
        }
    }
    
    &.active,
    &:hover {
        border-radius: 16px;
        background-color: var(--discord);
    }

    &.option { 
        div > svg {
            color: var(--status-ok);

            transition: color .2s;
        }

        &:hover {
            background-color: var(--status-ok);

            div > svg {
                color: var(--white);
            }
        }
    }
`;