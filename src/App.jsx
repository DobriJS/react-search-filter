import React, { useState } from 'react';
import { Users } from './users';
import Table from './Table';
import './style.css';

export default function App() {
  const [query, setQuery] = useState('');
  const keys = ['first_name', 'last_name', 'email'];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search....."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(Users)} />
    </div>
  );
}
