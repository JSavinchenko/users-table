import styled from 'styled-components';

export const StyledTableContainer = styled.div`
  display: inline-block;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(75, 82, 88, 1);
  margin-inline: 80px;
  margin-block: 0 50px;
`;

export const StyledTable = styled.table`
  width: 100%;

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
    width: 2%;
    text-align: left;
    padding-inline: 20px 0px;
  }

  th:nth-child(2) {
    width: 50%;
    text-align: left;
    white-space: nowrap;
  }

  th:nth-child(3) {
    width: 1%;
    text-align: left;
    white-space: nowrap;
    padding-inline: 0 50px;
  }
`;

export const StyledTableBody = styled.tbody`
  td:nth-child(1) {
    width: 2%;
    text-align: left;
    padding-inline: 20px 0px;
  }

  td:nth-child(2) {
    width: 50%;
    text-align: left;
    white-space: nowrap;
  }

  td:nth-child(3) {
    width: 1%;
    text-align: left;
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
`;

export const StyledDivImage = styled.div`
  height: 20px;
  width: 20px;
`;

export const StyledUserText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
