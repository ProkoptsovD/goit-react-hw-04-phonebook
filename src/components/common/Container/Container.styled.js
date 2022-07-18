import styled from 'styled-components';

export const CenteredContainer = styled.div`
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(0, 5)};
`;