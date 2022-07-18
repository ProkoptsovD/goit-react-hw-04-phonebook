import styled from 'styled-components';

export const Btn = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    font: inherit;
    font-size: 8px;
    border: none;
    border-radius: 10px;
    background-color: #ff0000;
    color: #ffffff;

    cursor: pointer;

    &:active {
        box-shadow: inset 0px 0px 4px 0px #fafafa;
    }
`;