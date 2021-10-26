import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Search from './components/Search';
import axios from 'axios';
import styled from 'styled-components';

const Content = styled.section`
  max-width: 1000px;
  margin: 30px auto;
`;

function App() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [reverse, setReverse] = useState(false);

  const filteredStudents = students
    .filter(({name}) => {
      const fullname = `${name.first} ${name.last}`.toLowerCase();
      return fullname.includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => {
      if (a.hoursStudied > b.hoursStudied) return 1;
      if (b.hoursStudied > a.hoursStudied) return -1;

      return 0;
    });
  reverse && filteredStudents.reverse();
  
  useEffect(() => {
    axios.get('students.json').then(({data}) => {
      setStudents(data);
    });
  }, []);
  
  return (
    <Content>
      <Search 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} 
      />
      <Table
        students={filteredStudents}  
        reverse={reverse}
        setReverse={setReverse}
      />
    </Content>
  );
}

export default App;
