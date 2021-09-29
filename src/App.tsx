import React, {useState} from 'react';
import './App.css';
import { Container } from "react-bootstrap";
import List from './components/List'
import Form from './components/Form'

export interface MovieState {
  movie: {
  name: string;
  year: number;
  imgUrl: string;
  desc: string;
}[]
}

//so basically the state is an array of movies which you can create using a form
function App() {

  const [movie, setMovie] = useState<MovieState['movie']>([
     {
      name: "LeBron James",
      year: 35,
      imgUrl: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      desc: "Allegeric to staying on the same team",
    },
    
  ]);

  return (
    <Container className='d-flex justify-content-center mt-5'>
      <div>
        <h1>Movies I want to watch</h1>
        <List movie={movie} />
        <Form  movie={ movie} setMovie={ setMovie} />
      </div>
    </Container>
  );
}

export default App;
