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

  const filteredStudents = students.filter(({name}) => {
    const fullname = `${name.first} ${name.last}`.toLowerCase();
    return fullname.includes(searchTerm.toLowerCase());
  });

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
      <Table students={filteredStudents}/>
    </Content>
  );
}

export default App;
