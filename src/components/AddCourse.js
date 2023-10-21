import React from 'react'
import { Button, Container, Form,FormGroup, Input, Label } from 'reactstrap'

const AddCourse = () => {
  return (
    <>
    <h2 className='text-center'>Enter Details </h2>
    <Form className='mx-5'>
        <FormGroup>
            <label for="userId">Course Id</label>
            <Input type='text' placeholder='Enter Id of course' name='userid' id='userId'/>
        </FormGroup>

        <FormGroup>
            <Label for='title'>Course Title</Label>
            <Input type='text' placeholder='Enter title here' id='title' />
        </FormGroup>

        <FormGroup>
            <Label for='description'>Course Description</Label>
            <Input type='textarea' 
            placeholder='Enter description here' 
            id='description' 
            style={{height: 150}}
            
            />
        </FormGroup>

        <Container className='text-center my-5'>
            <Button color='success'>Add course</Button>
            <Button color='primary mx-5' outline>Clear</Button>
        </Container>

    </Form>
    </>
  )
}

export default AddCourse