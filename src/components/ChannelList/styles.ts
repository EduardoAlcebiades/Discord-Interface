import styled from 'styled-components';

import { Add } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: CL;

    display: flex;
    flex-direction: column;

    max-height: calc(100vh - 46px - 52px);
`;

export const Channels = styled.div`
    display: flex;
    flex-direction: column;

    padding: 16px;
    background-color: var(--secondary);

    height: 100%;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--tertiary);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background-color: var(--secondary);
    }
`;

export const Channel = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-bottom: 16px;
`;

export const Category = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 6px;

    > span {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        color: var(--gray);
    }
`;

export const AddCategoryIcon = styled(Add)`
    width: 21px;
    height: 21px;

    color: var(--symbol);
    cursor: pointer;
`;
