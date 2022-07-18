import styled, { css } from 'styled-components';

const commonCss = css`
    display: block;
`;

export const Wrapper = styled.div``;
export const Form = styled.form`
    display: flex;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    padding: ${({ theme }) => theme.spacing(5, 0)};
    background-color: #fafad2;
`;

export const AddContact = styled.button`
    width: 100px;
    height: 51px;
    margin-top: ${({ theme }) => theme.spacing(7)};
    margin-left: ${({ theme }) => theme.spacing(2)};
    font: inherit;
    font-weight: 600;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    background-color: #8fbc8f;
    color: #ffffff;

    cursor: pointer;

    &:active {
        box-shadow: inset 0px 0px 4px 0px #fafafa;
    }
`;
export const Label = styled.label`
    ${commonCss}
    margin-bottom: ${({ theme }) => theme.spacing(2)};
`;
export const Input = styled.input`
    ${commonCss}
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    padding: ${({ theme }) => theme.spacing(2, 0, 2, 2)};
    border: 1px solid #cccccc;
    border-radius: 10px;

    &:focus-within {
        outline: 1px solid lightblue;
    }
`;