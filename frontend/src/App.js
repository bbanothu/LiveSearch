import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import Records from './components/Records';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalEntries, setTotalEntries] = useState(0);

  useEffect(() => {
    fetchData();
  }, [searchTerm, currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/search?term=${searchTerm}&page=${currentPage}`);
      const { totalEntries, records } = response.data;
      setRecords(records);
      setTotalEntries(totalEntries);
      setTotalPages(Math.ceil(totalEntries / 30));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderRecords = (records) => {
    return records.map((record) => <Records key={record.id} record={record} />);
  };

  return (
    <div style={{ paddingLeft: '25%', paddingRight: '25%' }}>
      <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
      <Pagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
      <p><strong>Total Entries:</strong> {totalEntries}</p>
      <hr />
      <div>{records.length > 0 && renderRecords(records)}</div>
    </div>
  );
}

export default App;



