import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import base_url from '../api/springbootapi'
import { toast } from 'react-toastify'

import { Button, Container, Form,FormGroup, Input, Label } from 'reactstrap'

const AddCourse = () => {

    const [course, setCourse] = useState({})

    const handleForm = (e) => {
        console.log(course);
        postData(course);
        e.preventDefault();
    }

    const postData = (data) => {
        axios.post(`${base_url}/courses`,data).then(
            (Response) => {
              console.log(Response);
              toast.success("courses has been loaded", {
                position: "bottom-center",
              });
              
            },
            (Error) => {
              console.log(Error);
              toast.error("Something went wrong");
            }
          );
    }

  return (
    <>
    <h2 className='text-center'>Enter Details </h2>
    <Form className='mx-5' onSubmit={handleForm}>
        <FormGroup>
            <label for="userId">Course Id</label>
            <Input type='text' placeholder='Enter Id of course' 
            name='userid' 
            id='userId'
            onChange={(e) => {
                setCourse({...course, id: e.target.value})
            } }
            />
        </FormGroup>

        <FormGroup>
            <Label for='title'>Course Title</Label>
            <Input type='text' 
            placeholder='Enter title here' 
            id='title' 
            onChange={(e) => {
                setCourse({...course, title: e.target.value})
            } }
            />
        </FormGroup>

        <FormGroup>
            <Label for='description'>Course Description</Label>
            <Input type='textarea' 
            placeholder='Enter description here' 
            id='description' 
            style={{height: 150}}
            onChange={(e) => {
                setCourse({...course, description: e.target.value})
            } }
            />
        </FormGroup>

        <Container className='text-center my-5'>
            <Button type="submit" color='success'>Add course</Button>
            <Button color='primary mx-5' outline>Clear</Button>
        </Container>

    </Form>
    </>
  )
}

export default AddCourse