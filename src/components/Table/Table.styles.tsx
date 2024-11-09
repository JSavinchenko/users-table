import styled from 'styled-components';

export const StyledTableContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  border-radius: 8px;
  padding-inline: 80px;
  padding-block: 0 50px;

  @media (max-width: 604px) {
    padding-inline: 40px;
  }
`;

export const StyledTable = styled.table`
  border-radius: 8px;
  border: 1px solid rgba(75, 82, 88, 1);

  td {
    text-align: left;
    padding-block: 21px;
    border-bottom: 1px solid rgba(75, 82, 88, 1);
  }

  th {
    padding-block: 8px;
  }
`;

export const StyledTableHeader = styled.thead`
  background-color: rgba(255, 255, 255, 0.04);

  th:nth-child(1) {
    width: 1%;
    min-width: 47px;
    max-width: 47px;
    text-align: center;

    @media (max-width: 604px) {
      min-width: 37px;
      max-width: 37px;
    }
  }

  th:nth-child(2) {
    width: 50%;
    text-align: left;
    white-space: nowrap;

    @media (max-width: 604px) {
      min-width: 199px;
      max-width: 199px;
    }
  }

  th:nth-child(3) {
    width: 1%;
    min-width: 168px;
    max-width: 168px;
    text-align: left;
    white-space: nowrap;

    @media (max-width: 604px) {
      min-width: 76px;
      max-width: 76px;
    }
  }
`;

export const StyledTableBody = styled.tbody`
  td:nth-child(1) {
    width: 1%;
    min-width: 47px;
    max-width: 47px;
    text-align: center;

    @media (max-width: 604px) {
      min-width: 37px;
      max-width: 37px;
    }
  }

  td:nth-child(2) {
    width: 50%;
    text-align: left;
    white-space: nowrap;

    @media (max-width: 604px) {
      min-width: 199px;
      max-width: 199px;
    }
  }

  td:nth-child(3) {
    width: 1%;
    min-width: 168px;
    max-width: 168px;
    text-align: left;

    @media (max-width: 604px) {
      min-width: 76px;
      max-width: 76px;
    }
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

export const StyledUserInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const StyledCircle = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid rgba(75, 82, 88, 1);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 604px) {
    width: 28px;
    height: 28px;
    border-radius: 14px;
    border: 0.7px solid rgba(75, 82, 88, 1);
  }
`;

export const StyledDivImage = styled.div`
  height: 20px;
  width: 20px;

  @media (max-width: 604px) {
    width: 14px;
    heigth: 14px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const StyledUserText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 604px) {
    gap: 4px;
  }
`;
