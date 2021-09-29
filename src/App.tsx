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

function App() {

  const [movie, setMovie] = useState<MovieState['movie']>([
     {
      name: "Vacation Friends",
      year: 2021,
      imgUrl: "https://m.media-amazon.com/images/M/MV5BZmI0YTY4YTYtODk4MS00ZWE3LWJjYzUtODAwOWM5YWY4MWUwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg",
      desc: "A couple meets up with another couple while on vacation in Mexico",
    }
  ]);

  return (
    <Container className='d-flex justify-content-center mt-5'>
      <div>
        <h1 className="text-center">Movies I want to watch</h1>
        <List movie={movie} />
        <Form  movie={ movie} setMovie={ setMovie} />
      </div>
    </Container>
  );
}

export default App;
