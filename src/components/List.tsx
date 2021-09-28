import React from 'react'

interface MovieProps {
  movie: {
  name: string;
  year: string;
  url: string;
  genres: string[];
}[]
}
const List:React.FC<MovieProps> = () => {
    return (
        <div>
            I am a list 
        </div>
    )
}

export default List
