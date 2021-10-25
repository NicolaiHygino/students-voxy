import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  margin: 30px auto;

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

const Thead = styled.thead`
  background-color: var(--main-color);
  color: white;
`;


function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('students.json').then(({data}) => {
      setStudents(data);
    });
  }, []);
  
  return (
    <Table>
      <Thead>
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Primary Group</th>
          <th>Phone</th>
          <th>Hours Studied</th>
        </tr>
      </Thead>
      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.email}</td>
            <td>{student.name.first}</td>
            <td>{student.name.last}</td>
            <td>{student.primaryGroup}</td>
            <td>{student.phone}</td>
            <td>{student.hoursStudied}</td>
          </tr>  
        ))}
      </tbody>
    </Table>
  );
}

export default App;
