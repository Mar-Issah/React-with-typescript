import React, {useState} from 'react'
import { Form } from "react-bootstrap";
import {MovieState as Props} from "../App"

//to know the types hover over the movie/setMovie property in the app component react define it when you hover
interface IProps {
    movie: Props["movie"]
    setMovie: React.Dispatch<React.SetStateAction<Props["movie"]>>
}

//let typescrtpt know that this is a react functional component with the props Iprops
const AddForm: React.FC<IProps>= ({movie, setMovie}) => {

  const [input, setInput] = useState({
        name: "",
        year: "",
        img: "",
        desc: "",
    })

    //onChange set the target value to the target names
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
 
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    // first some validation to mak sure user enters ther name and year add the new object to the exixting object array and clear the FOMR
    const handleSubmit = () :void=> {
        if(!input.name || !input.year) return

        setMovie([
            ...movie,
            {
                name: input.name,
                year: parseInt(input.year),
                imgUrl: input.img,
                desc: input.desc
            }
        ]);

        setInput({
            name: "",
            year: "",
            img: "",
            desc: ""
        })
    }
    return (
      <div className='AddToList'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Control type="text" placeholder="Enter movie name" 
                className="AddToList-input"
                name="name"
                value={input.name}
                onChange={handleChange}
               />
          </Form.Group>
           <Form.Group className="mb-2">
            <Form.Control type="text" placeholder="Enter movie year" 
                className="AddToList-input"
                name="year"
                value={input.year}
                onChange={handleChange}
               />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Control type="text" placeholder="Enter image url" 
                className="AddToList-input"
                name="url"
                value={input.img}
                onChange={handleChange}
               />
        </Form.Group>
        <Form.Group className="mb-2">
        <Form.Control type="text" placeholder="Enter movie description" 
                className="AddToList-input"
                name="desc"
                value={input.desc}
                onChange={handleChange}
               />
          </Form.Group>
                <button type="submit" className="AddToList-btn">Add To The List</button>
        </Form>
    </div>
    )
}

export default AddForm
