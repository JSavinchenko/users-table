import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-inline: 80px;
  padding-block: 60px 50px;
  white-space: nowrap;

  @media (max-width: 604px) {
    padding-inline: 40px;
    padding-block: 60px 30px;
    gap: 0px;
  }
`;
