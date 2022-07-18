import styled from 'styled-components';

export const ListOfContacts = styled.ul`
    width: 300px;
    margin-top: ${({ theme }) => theme.spacing(3)};
    border-radius: 10px;
    background-color: #4682b4;
    color: #ffffff;
`;
export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing(3, 2)};

    &:not(:last-child) {
        border-bottom: 1px solid #ffffff;
    }
`;