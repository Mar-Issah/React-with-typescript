import React, {useState} from 'react'
import { Form } from "react-bootstrap";

const AddForm = () => {

  const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    // usually in react jsx onChange = (e) => setChange(e.target.value) same thing here but the e type has been defined as a react change evnet ehich is an html input or text area. targets the names and set it to the value
  
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(!input.name || !input.age) return

        // setPeople([
        //     ...movie,
        //     {
        //         name: input.name,
        //         year: parseInt(input.age),
        //         imgUrl: input.img,
        //         desc: input.note
        //     }
        // ]);

        setInput({
            name: "",
            age: "",
            img: "",
            note: ""
        })
    }
    return (
      <div className='AddToList'>
        <Form>
          <Form.Group className="mb-2">
            <Form.Control type="text" placeholder="Enter movie name" 
                className="AddToList-input"
                name="name"
               />
          </Form.Group>
           <Form.Group className="mb-2">
            <Form.Control type="text" placeholder="Enter movie year" 
                className="AddToList-input"
                name="year"
               />
        </Form.Group>
           <Form.Group className="mb-2">
          <Form.Control type="text" placeholder="Enter image url" 
                className="AddToList-input"
                name="url"
               />
          </Form.Group>
           <Form.Group className="mb-2">
        <Form.Control type="text" placeholder="Enter movie description" 
                className="AddToList-input"
                name="desc"
               />
          </Form.Group>
          <button type="submit"  className="AddToList-btn">Submit</button>
        </Form>
    </div>
    )
}

export default AddForm
