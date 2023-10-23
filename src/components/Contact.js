import React from 'react'
import { Button, Container, Form,FormGroup, Input, Label } from 'reactstrap'

const Contact = () => {
  return (
    <div>
        <h2 className='text-center'>Contact Us</h2>
        <Form className='mx-5'>
            <FormGroup>
                <label for="username">Name</label>
                <Input type='text' placeholder='Enter your name' name='username' id='username'/>
            </FormGroup>

            <FormGroup>
                <Label for='email'>Course Title</Label>
                <Input type='email' placeholder='Enter your email here' id='email' />
            </FormGroup>

            <FormGroup>
                <Label for='message'>Course Description</Label>
                <Input type='textarea' 
                placeholder='Leave your message here *.*' 
                id='message' 
                style={{height: 150}}
                
                />
            </FormGroup>

            <Container className='text-center my-5'>
                <Button color='success'>Submit</Button>
                <Button color='primary mx-5' outline>Clear</Button>
            </Container>

        </Form>
    </div>
  )
}

export default Contact