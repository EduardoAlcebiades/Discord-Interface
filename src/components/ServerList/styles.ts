import styled from 'styled-components';

import { Add } from "styled-icons/material";
import { Compass } from 'styled-icons/ionicons-sharp';
import { DownloadOutline } from 'styled-icons/evaicons-outline';

export const Container = styled.div`
    grid-area: SL;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--tertiary);
    padding: 11px 0;

    max-height: 100vh;
    overflow-y: scroll;
 
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Separator = styled.div`
    width: 32px;
    border-bottom: 2px solid var(--quaternary);

    margin-bottom: 8px;
`;

export const AddIcon = styled(Add)`
    width: 26px;
    height: 26px;

    color: var(--status-ok);
`;

export const CompassIcon = styled(Compass)`
    width: 26px;
    height: 26px;

    color: var(--status-ok);
`;

export const DownloadIcon = styled(DownloadOutline)`
    width: 26px;
    height: 26px;

    color: var(--status-ok);
`;