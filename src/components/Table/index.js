import React from 'react';
import { StyledTable } from './style';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

const StudentRow = ({
  email,
  name,
  primaryGroup,
  phone,
  hoursStudied,
}) => (
  <tr>
    <td>{email}</td>
    <td>{name.first}</td>
    <td>{name.last}</td>
    <td>{primaryGroup}</td>
    <td>{phone}</td>
    <td>{hoursStudied}</td>
  </tr>
);

const Table = ({ students, reverse, setReverse }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Primary Group</th>
          <th>Phone</th>
          <th onClick={() => setReverse(!reverse)}>
            Hours Studied
            {reverse ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
          </th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => 
          <StudentRow key={student.id} {...student} />
        )}
      </tbody>
    </StyledTable>
  );
};

export default Table;
