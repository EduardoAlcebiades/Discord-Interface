import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    height: 100vh;

    grid-template-columns: 71px 240px auto 240px;
    grid-template-rows: 46px auto 52px;

    /* 
    SL - Server List
    SN - Server Name
    CI - Channel Info
    CL - Channel List
    CD - Cannel Data
    UL - User List
    UI - User Info
     */

    grid-template-areas:
        "SL SN CI CI"
        "SL CL CD UL"
        "SL UI CD UL";

    overflow: hidden;
`;
