import styled from 'styled-components';

export const Message = styled.p`
    margin-top: ${({ theme }) => theme.spacing(3)};
    padding: ${({ theme }) => theme.spacing(5, 0)};
    font-weight: 700;
`;