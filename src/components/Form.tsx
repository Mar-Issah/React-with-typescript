import React, {useState} from 'react'
import { Form } from "react-bootstrap";

const AddForm = () => {

  const [input, setInput] = useState({
        name: "",
        year: "",
        img: "",
        desc: "",
    })

    // usually in react jsx onChange = (e) => setChange(e.target.value) same thing here but the e type has been defined as a react change evnet ehich is an html input or text area. targets the names and set it to the value

    //with just the e params typecript doesnt understand what it means and gives it the type any we need to tell it what it means which is a react change event coming from an input/text elemnent
  
    // when you hover the onchange/its param react give you the type which typescript understands but when it is in the diff fxn fxn you get the errors 
  
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(!input.name || !input.year) return

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
            year: "",
            img: "",
            desc: ""
        })
    }

    console.log(input)
    return (
      <div className='AddToList'>
        <Form>
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
          <button type="submit"  className="AddToList-btn">Submit</button>
        </Form>
    </div>
    )
}

export default AddForm
