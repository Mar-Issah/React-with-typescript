import React from 'react'

interface MovieProps {
  movie: {
  name: string;
  year: string;
  imgUrl: string;
  desc: string;
}[]
}
const List:React.FC<MovieProps> = ({movie}) => {

    // this how to write a function tell typescript it isa fxn retuning an array of jsx element 
    const renderList = (): JSX.Element[] => {
        return movie.map(movie => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" alt='movie-cover' src={movie.imgUrl}/>
                        <h2>{movie.name}</h2>
                    </div>
                    <p>{movie.year} years old</p>
                    <p className="List-note">{movie.desc}</p>
                </li>
            )
        })
    }
    
    return (
        <div>
           {renderList}
        </div>
    )
}

export default List
