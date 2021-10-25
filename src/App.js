import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import axios from 'axios';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('students.json').then(({data}) => {
      setStudents(data);
    });
  }, []);
  
  return (
    <>
      <Table students={students}/>
    </>
  );
}

export default App;
