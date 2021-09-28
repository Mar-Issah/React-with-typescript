import React, {useState} from 'react';
import './App.css';
import { Container } from "react-bootstrap";
import List from './components/List'

interface MovieState {
  movie: {
  name: string;
  year: string;
  url: string;
  genres: string[];
}[]
}

//so basically the state is an array of movies which you can create using a form
function App() {

  const [movie, setMovie] = useState<MovieState['movie']>([]);

  return (
    <Container className='d-flex justify-content-center mt-5'>
      <div>
        <h1>Movies I want to watch</h1>
        <List movie={movie} />
      </div>
    </Container>
  );
}

export default App;
