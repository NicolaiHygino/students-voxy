import React from 'react';
import { StyledTable } from './style';

const StudentRow = ({ student: {
  email,
  name,
  primaryGroup,
  phone,
  hoursStudied,
}}) => {
  return (
    <tr>
      <td>{email}</td>
      <td>{name.first}</td>
      <td>{name.last}</td>
      <td>{primaryGroup}</td>
      <td>{phone}</td>
      <td>{hoursStudied}</td>
    </tr>
  );
};

const Table = ({ students }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Primary Group</th>
          <th>Phone</th>
          <th>Hours Studied</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => <StudentRow key={student.id} student={student} />)}
      </tbody>
    </StyledTable>
  );
};

export default Table;
