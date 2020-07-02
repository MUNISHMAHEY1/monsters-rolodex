import React, { useState, useEffect } from 'react';
import CardList from './Components/CardList/CardList';
import SearchBox from './Components/searchBox/SearchBox';
import './App.css';

function App() {

  const [searchField, setSearchField] = useState('');
  const monsters = [];
  const [ items, setItems ] = useState(monsters);
  const filteredMonsters = items.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setItems(users))
  })

  const handleChange = ((e) => setSearchField(e.target.value));

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox 
        placeholder="search monsters" 
        handleChange={handleChange}>
        </SearchBox>
      <CardList items = {filteredMonsters}/>
    </div>
  );
}

export default App;
