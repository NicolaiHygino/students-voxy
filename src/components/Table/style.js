import styled from 'styled-components';

export const TableWrapper = styled.div`
  overflow-x: scroll;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  margin: 30px 0;
  width: 100%;

  & thead {
    background-color: var(--main-color);
    color: white;
  }

  & th {
    font-weight: 400;
    padding: .8em 1em;
    text-align: left;
  }

  & td {
    padding: .5em 1em;
    text-align: left;
    font-size: .9em;
    color: #333;
  }
  
  & tr th:last-child {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: right;
  }

  & tr td:last-child, th:last-child {
    text-align: right;
  }

  & tr:nth-child(even) {
    background-color: var(--highlight);
  }
`;
