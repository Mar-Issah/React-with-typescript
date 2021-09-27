import React, {useState} from 'react';
import './App.css';
import { Container, Button } from "react-bootstrap";

interface Movie{
  name: string;
  year: string;
  url: string;
  genres: string[];
}

//so basically the state is an array of movies which you can create using a form
function App() {

  const [movie, setMovie] = useState<Movie[]>([]);

  return (
    <Container >
      <h1>Movies I want to watch</h1>
      <Button>click me</Button>
    </Container>
  );
}

export default App;
