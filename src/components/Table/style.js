import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  margin: 30px auto;

  & thead {
    background-color: var(--main-color);
    color: white;
  }

  & th {
    font-weight: 400;
    padding: .8em;
    text-align: left;
  }

  & td {
    padding: .5em .9em;
    text-align: left;
    font-size: .9em;
    color: #333;
  }

  & tr:nth-child(even) {
    background-color: var(--highlight);
  }
`;