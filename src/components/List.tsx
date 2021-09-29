import React from 'react'
import {MovieState as MovieProps} from "../App"

const List:React.FC<MovieProps> = ({movie}) => {

    // function to return the jsx 
    // const renderList = (): JSX.Element[] => {
    //     return movie.map(movie => {
    //         return (
    //             <li className="List">
    //                 <div className="List-header">
    //                     <img className="List-img" alt='movie-cover' src={movie.imgUrl}/>
    //                     <h2>{movie.name}</h2>
    //                 </div>
    //                 <p>Released in {movie.year}</p>
    //                 <p className="List-note">{movie.desc}</p>
    //             </li>
    //     )
    //     })
    // }
    
    return (
        <div>
           {movie.map((movie,idx) => {
               return (
                
                <li key={idx} className="List">
                    <div className="List-header">
                        <img className="List-img" alt='movie-cover' src={movie.imgUrl}/>
                        <h2>{movie.name}</h2>
                    </div>
                    <p>Released in {movie.year}</p>
                    <p className="List-note">{movie.desc}</p>
                </li>
                    )
                })
            }
        </div>
    )
}

export default List
