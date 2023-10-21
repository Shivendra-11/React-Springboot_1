import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from 'reactstrap'

const Course = ({course}) => {
  return (
    <Card className='my-5 mx-5'>
        <CardBody>
            <CardSubtitle className='font-weight-bold text-center'>{course.title}</CardSubtitle>
            <CardText className='text-center'>{course.description}</CardText>
            <Container className='text-center'>
                <Button color='danger mx-5'>Delete</Button>
                <Button color='warning'>Update</Button>
            </Container>
        </CardBody>
    </Card>
  )
}

export default Course