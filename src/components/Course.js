import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, Container } from 'reactstrap'

const Course = ({course}) => {
  return (
    <Card>
        <CardBody>
            <CardSubtitle className='font-weight-bold'>{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className='text-center'>
                <Button color='danger'>Delete</Button>
                <Button color='warning ml-5'>Update</Button>
            </Container>
        </CardBody>
    </Card>
  )
}

export default Course