import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './Card.js';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const App = () => {

  /*
  fetch('https://swapi.co/api/people/')
    .then(res => res.json())
      .then(data => console.log(data));
  */
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch('https://swapi.co/api/people/')
      .then(res => res.json())
        .then(data => setPeople(data.results));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CardContainer>
        {people.length ? people.map(person => <Card person={person} />) : null}
      </CardContainer>
    </div>
  );
}

export default App;
