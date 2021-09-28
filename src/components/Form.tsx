import React from 'react'
import { Form, Button } from "react-bootstrap";

const AddForm = () => {
    return (
      <div className='AddToList'>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Enter movie name" 
                className="AddToList-input"
                name="name"
               />
          </Form.Group>
           <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Enter movie year" 
                className="AddToList-input"
                name="year"
               />
        </Form.Group>
           <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter image url" 
                className="AddToList-input"
                name="url"
               />
          </Form.Group>
           <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter movie description" 
                className="AddToList-input"
                name="desc"
               />
          </Form.Group>
          <Button variant="primary" type="submit"  className="AddToList-btn">Submit</Button>
        </Form>
    </div>
    )
}

export default AddForm